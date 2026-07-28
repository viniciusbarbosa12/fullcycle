using Microsoft.EntityFrameworkCore;

namespace Payments.Api.Infrastructure;

public sealed class PaymentDbContext(DbContextOptions<PaymentDbContext> options)
    : DbContext(options)
{
    internal const string IdempotencyKeyConstraintName = "ux_payments_idempotency_key";

    internal DbSet<PaymentRecord> Payments => Set<PaymentRecord>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var payment = modelBuilder.Entity<PaymentRecord>();

        payment.ToTable("payments");
        payment.HasKey(record => record.Id).HasName("payments_pkey");
        payment.Property(record => record.Id).HasColumnName("id");
        payment.Property(record => record.IdempotencyKey).HasColumnName("idempotency_key");
        payment.Property(record => record.OrderId).HasColumnName("order_id");
        payment.Property(record => record.Amount).HasColumnName("amount").HasColumnType("numeric");
        payment
            .Property(record => record.Status)
            .HasColumnName("status")
            .HasColumnType("text")
            .HasConversion<string>();
        payment
            .Property(record => record.ProcessedAt)
            .HasColumnName("processed_at")
            .HasColumnType("timestamp with time zone");
        payment
            .HasIndex(record => record.IdempotencyKey)
            .IsUnique()
            .HasDatabaseName(IdempotencyKeyConstraintName);
    }
}