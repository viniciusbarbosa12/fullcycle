using System.Text.Json.Serialization;
using Elastic.Apm.NetCoreAll;
using MeshCommerce.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Payments.Api.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

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
    async (HttpContext context, IMemoryCache cache) =>
    {
        var scenario = context.Request.Headers["X-MeshCommerce-Resilience"].FirstOrDefault();
        var attempt = context.Request.Headers["X-Envoy-Attempt-Count"].FirstOrDefault() ?? "1";
        context.Response.Headers["X-MeshCommerce-Attempt"] = attempt;

        if (string.Equals(scenario, "timeout", StringComparison.OrdinalIgnoreCase))
        {
            await Task.Delay(TimeSpan.FromMilliseconds(1500), context.RequestAborted);
        }

        if (
            string.Equals(scenario, "retry", StringComparison.OrdinalIgnoreCase)
            && !cache.TryGetValue(context.TraceIdentifier, out _)
        )
        {
            cache.Set(context.TraceIdentifier, true, TimeSpan.FromMinutes(1));
            return Results.Problem(
                statusCode: StatusCodes.Status503ServiceUnavailable,
                title: "Transient lab failure",
                detail: "The first attempt fails so the Istio retry policy can recover."
            );
        }

        cache.Remove(context.TraceIdentifier);
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
