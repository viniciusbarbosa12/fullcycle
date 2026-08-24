using Microsoft.EntityFrameworkCore;
using Payments.Migrations;

var connectionString =
    Environment.GetEnvironmentVariable("ConnectionStrings__PaymentsDatabase")
    ?? throw new InvalidOperationException(
        "ConnectionStrings__PaymentsDatabase is not configured."
    );

await using var dbContext = new PaymentDbContextFactory().Create(connectionString);
await dbContext.Database.MigrateAsync();

Console.WriteLine("Payments database migrations applied successfully.");
