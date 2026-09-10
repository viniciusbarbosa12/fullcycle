using System.Diagnostics;
using System.Text.Json.Serialization;
using Orders.Api.Infrastructure;
using Orders.Api.Integrations.Payments;

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddJsonConsole(options =>
{
    options.IncludeScopes = true;
    options.TimestampFormat = "yyyy-MM-dd'T'HH:mm:ss.fff'Z'";
    options.UseUtcTimestamp = true;
});

builder
    .Services.AddControllers()
    .AddJsonOptions(options =>
        options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter())
    );
builder.Services.AddOpenApi();
builder.Services.AddHealthChecks();
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

var requestLogger = app.Services.GetRequiredService<ILoggerFactory>().CreateLogger("MeshCommerce.Http");
app.Use(async (context, next) =>
{
    var stopwatch = Stopwatch.StartNew();
    Exception? exception = null;

    try
    {
        await next();
    }
    catch (Exception caught)
    {
        exception = caught;
        throw;
    }
    finally
    {
        if (!context.Request.Path.StartsWithSegments("/health"))
        {
            var statusCode = exception is null ? context.Response.StatusCode : StatusCodes.Status500InternalServerError;
            var durationMs = Math.Round(stopwatch.Elapsed.TotalMilliseconds, 2);

            if (exception is null)
            {
                requestLogger.LogInformation(
                    "HTTP request completed for {Service} {Method} {Path} with {StatusCode} in {DurationMs} ms and request {RequestId}",
                    "orders-api",
                    context.Request.Method,
                    context.Request.Path.Value ?? "/",
                    statusCode,
                    durationMs,
                    context.TraceIdentifier
                );
            }
            else
            {
                requestLogger.LogError(
                    exception,
                    "HTTP request failed for {Service} {Method} {Path} with {StatusCode} in {DurationMs} ms and request {RequestId}",
                    "orders-api",
                    context.Request.Method,
                    context.Request.Path.Value ?? "/",
                    statusCode,
                    durationMs,
                    context.TraceIdentifier
                );
            }
        }
    }
});

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
