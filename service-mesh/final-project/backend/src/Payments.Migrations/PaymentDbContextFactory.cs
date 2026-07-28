using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Payments.Api.Infrastructure;

namespace Payments.Migrations;

public sealed class PaymentDbContextFactory : IDesignTimeDbContextFactory<PaymentDbContext>
{
    private const string DesignTimeConnectionString =
        "Host=localhost;Port=5433;Database=payments;Username=payments;Password=payments-dev;GSS Encryption Mode=Disable";

    public PaymentDbContext CreateDbContext(string[] args)
    {
        var connectionString =
            Environment.GetEnvironmentVariable("ConnectionStrings__PaymentsDatabase")
            ?? DesignTimeConnectionString;

        return Create(connectionString);
    }

    public PaymentDbContext Create(string connectionString)
    {
        var options = new DbContextOptionsBuilder<PaymentDbContext>()
            .UseNpgsql(
                connectionString,
                postgres => postgres.MigrationsAssembly(typeof(PaymentDbContextFactory).Assembly)
            )
            .Options;

        return new PaymentDbContext(options);
    }
}
