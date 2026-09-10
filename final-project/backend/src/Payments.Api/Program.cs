using System.Diagnostics;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Payments.Api.Infrastructure;

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

var postgresConnectionString =
    builder.Configuration.GetConnectionString("PaymentsDatabase")
    ?? throw new InvalidOperationException("ConnectionStrings:PaymentsDatabase is not configured.");

builder.Services.AddDbContext<PaymentDbContext>(options =>
    options.UseNpgsql(postgresConnectionString)
);
builder.Services.AddScoped<IPaymentRepository, EfCorePaymentRepository>();

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
                    "payments-api",
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
                    "payments-api",
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

app.MapControllers();
app.MapHealthChecks("/health");
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
