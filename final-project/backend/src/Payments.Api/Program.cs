using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using Payments.Api.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

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
