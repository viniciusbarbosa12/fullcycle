using System.Text.Json.Serialization;
using Elastic.Apm.NetCoreAll;
using Elastic.Apm.SerilogEnricher;
using Elastic.CommonSchema;
using Elastic.CommonSchema.Serilog;
using MeshCommerce.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Payments.Api.Infrastructure;
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
                                builder.Configuration["ELASTIC_APM_SERVICE_NAME"] ?? "payments-api";
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
builder.Services.AddMemoryCache();

var postgresConnectionString =
    builder.Configuration.GetConnectionString("PaymentsDatabase")
    ?? throw new InvalidOperationException("ConnectionStrings:PaymentsDatabase is not configured.");

builder.Services.AddDbContext<PaymentDbContext>(options =>
    options.UseNpgsql(postgresConnectionString)
);
builder.Services.AddScoped<IPaymentRepository, EfCorePaymentRepository>();

var app = builder.Build();

app.UseCorrelationId();
app.UseSerilogRequestLogging(options =>
{
    options.GetLevel = (context, _, exception) =>
        exception is OperationCanceledException && context.RequestAborted.IsCancellationRequested
            ? LogEventLevel.Warning
        : exception is not null ? LogEventLevel.Error
        : context.Request.Path == "/lab/probe" && context.Response.StatusCode == 503
            ? LogEventLevel.Warning
        : context.Response.StatusCode >= 500 ? LogEventLevel.Error
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
        context.Response.Headers["X-MeshCommerce-Service"] = "payments-api";
        context.Response.Headers["X-MeshCommerce-Version"] =
            Environment.GetEnvironmentVariable("SERVICE_VERSION") ?? "development";
        await next();
    }
);

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapControllers();
app.MapHealthChecks("/health");
app.MapGet(
    "/lab/probe",
    async (HttpContext context, IMemoryCache cache, ILogger<Program> logger) =>
    {
        var scenario = context.Request.Headers["X-MeshCommerce-Resilience"].FirstOrDefault();
        var attempt = context.Request.Headers["X-Envoy-Attempt-Count"].FirstOrDefault() ?? "1";
        context.Response.Headers["X-MeshCommerce-Attempt"] = attempt;

        if (string.Equals(scenario, "timeout", StringComparison.OrdinalIgnoreCase))
        {
            logger.LogWarning(
                "Lab probe simulating timeout with delay {DelayMilliseconds} ms on attempt {Attempt}",
                1500,
                attempt
            );
            await Task.Delay(TimeSpan.FromMilliseconds(1500), context.RequestAborted);
        }

        if (
            string.Equals(scenario, "retry", StringComparison.OrdinalIgnoreCase)
            && !cache.TryGetValue(context.TraceIdentifier, out _)
        )
        {
            cache.Set(context.TraceIdentifier, true, TimeSpan.FromMinutes(1));
            logger.LogWarning(
                new EventId(503, "LabProbeRetry"),
                "Lab probe transient failure: {Method} {Path} returned {StatusCode} on attempt {Attempt}; retry is expected",
                context.Request.Method,
                "/lab/probe",
                StatusCodes.Status503ServiceUnavailable,
                attempt
            );
            return Results.Problem(
                statusCode: StatusCodes.Status503ServiceUnavailable,
                title: "Transient lab failure",
                detail: "The first attempt fails so the Istio retry policy can recover."
            );
        }

        cache.Remove(context.TraceIdentifier);
        logger.LogInformation("Lab probe succeeded on attempt {Attempt}", attempt);
        return Results.Ok(
            new
            {
                service = "payments-api",
                version = Environment.GetEnvironmentVariable("SERVICE_VERSION") ?? "development",
                instance = Environment.GetEnvironmentVariable("HOSTNAME")
                    ?? Environment.MachineName,
                attempt,
                correlationId = context.TraceIdentifier,
            }
        );
    }
);
app.MapGet(
    "/",
    () =>
        Results.Ok(
            new
            {
                service = "payments-api",
                version = Environment.GetEnvironmentVariable("SERVICE_VERSION") ?? "development",
                instance = Environment.GetEnvironmentVariable("HOSTNAME")
                    ?? Environment.MachineName,
            }
        )
);

app.Run();
