using System.Text.Json.Serialization;
using Elastic.Apm.NetCoreAll;
using Elastic.Apm.SerilogEnricher;
using Elastic.CommonSchema;
using Elastic.CommonSchema.Serilog;
using MeshCommerce.Http;
using Orders.Api.Infrastructure;
using Orders.Api.Integrations.Payments;
using Serilog;
using Serilog.Events;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Services.AddSerilog(
    (_, configuration) =>
        configuration
            .MinimumLevel.Information()
            .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
            .MinimumLevel.Override("System.Net.Http.HttpClient", LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .Enrich.WithElasticApmCorrelationInfo()
            .WriteTo.Console(
                new EcsTextFormatter(
                    new EcsTextFormatterConfiguration
                    {
                        IncludeUser = false,
                        IncludeActivityData = false,
                        MapCustom = (document, logEvent) =>
                        {
                            document.Service ??= new Service();
                            document.Service.Name =
                                builder.Configuration["ELASTIC_APM_SERVICE_NAME"] ?? "orders-api";
                            document.Service.Environment =
                                builder.Configuration["ELASTIC_APM_ENVIRONMENT"]
                                ?? builder.Environment.EnvironmentName;
                            document.Service.Version =
                                builder.Configuration["ELASTIC_APM_SERVICE_VERSION"]
                                ?? builder.Configuration["SERVICE_VERSION"]
                                ?? "development";
                            // Dependency exceptions may embed credentials or payloads in their text.
                            if (logEvent.Exception is not null)
                                document.Error = new Error
                                {
                                    Type = logEvent.Exception.GetType().FullName,
                                };
                            return document;
                        },
                    }
                )
            )
);

builder
    .Services.AddControllers()
    .AddJsonOptions(options =>
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter())
    );
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks();
builder.Services.AddAllElasticApm();
builder.Services.AddHttpContextAccessor();
builder.Services.AddSingleton<InMemoryOrderRepository>();
builder.Services.AddCors(options =>
    options.AddDefaultPolicy(policy =>
    {
        var allowedOrigins =
            builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? [];

        if (allowedOrigins.Length > 0)
        {
            policy.WithOrigins(allowedOrigins).AllowAnyHeader().AllowAnyMethod();
        }
    })
);
builder.Services.AddHttpClient<PaymentsClient>(client =>
{
    var baseUrl =
        builder.Configuration["Payments:BaseUrl"]
        ?? throw new InvalidOperationException("Payments:BaseUrl is not configured.");

    client.BaseAddress = new Uri(baseUrl, UriKind.Absolute);
});

var app = builder.Build();

app.UseCorrelationId();
app.UseSerilogRequestLogging(options =>
{
    options.GetLevel = (context, _, exception) =>
        exception is OperationCanceledException && context.RequestAborted.IsCancellationRequested
            ? LogEventLevel.Warning
        : exception is not null || context.Response.StatusCode >= 500 ? LogEventLevel.Error
        : context.Response.StatusCode >= 400 ? LogEventLevel.Warning
        : LogEventLevel.Information;
    options.EnrichDiagnosticContext = (diagnosticContext, context) =>
    {
        diagnosticContext.Set("CorrelationId", context.TraceIdentifier);
        diagnosticContext.Set("RequestId", context.TraceIdentifier);
    };
});
app.Use(
    async (context, next) =>
    {
        context.Response.Headers["X-MeshCommerce-Service"] = "orders-api";
        await next();
    }
);

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors();
app.MapControllers();
app.MapHealthChecks("/health");
app.MapGet(
    "/",
    () =>
        Results.Ok(
            new
            {
                service = "orders-api",
                version = Environment.GetEnvironmentVariable("SERVICE_VERSION") ?? "development",
                instance = Environment.GetEnvironmentVariable("HOSTNAME")
                    ?? Environment.MachineName,
            }
        )
);

app.Run();
