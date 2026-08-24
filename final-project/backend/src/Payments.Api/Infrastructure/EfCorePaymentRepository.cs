using Microsoft.EntityFrameworkCore;
using Npgsql;
using Payments.Api.Domain;

namespace Payments.Api.Infrastructure;

public sealed class EfCorePaymentRepository(PaymentDbContext dbContext) : IPaymentRepository
{
    public async Task<PaymentCreationResult> CreateIdempotentlyAsync(
        Guid idempotencyKey,
        Guid orderId,
        decimal amount,
        CancellationToken cancellationToken = default
    )
    {
        var existing = await FindByIdempotencyKeyAsync(idempotencyKey, cancellationToken);
        if (existing is not null)
        {
            return ResolveExisting(existing, orderId, amount);
        }

        var payment = new Payment(orderId, amount);
        var record = new PaymentRecord(idempotencyKey, payment);
        dbContext.Payments.Add(record);

        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
            return new PaymentCreationResult(PaymentCreationStatus.Created, payment);
        }
        catch (DbUpdateException exception) when (IsIdempotencyKeyViolation(exception))
        {
            dbContext.Entry(record).State = EntityState.Detached;

            existing =
                await FindByIdempotencyKeyAsync(idempotencyKey, cancellationToken)
                ?? throw new InvalidOperationException(
                    $"No payment was found for duplicate idempotency key {idempotencyKey}.",
                    exception
                );

            return ResolveExisting(existing, orderId, amount);
        }
    }

    public async Task<Payment?> GetByIdAsync(
        Guid id,
        CancellationToken cancellationToken = default
    )
    {
        var record = await dbContext
            .Payments.AsNoTracking()
            .SingleOrDefaultAsync(payment => payment.Id == id, cancellationToken);

        return record?.ToPayment();
    }

    private async Task<PaymentRecord?> FindByIdempotencyKeyAsync(
        Guid idempotencyKey,
        CancellationToken cancellationToken
    ) =>
        await dbContext
            .Payments.AsNoTracking()
            .SingleOrDefaultAsync(
                payment => payment.IdempotencyKey == idempotencyKey,
                cancellationToken
            );

    private static PaymentCreationResult ResolveExisting(
        PaymentRecord existing,
        Guid orderId,
        decimal amount
    )
    {
        var status =
            existing.OrderId == orderId && existing.Amount == amount
                ? PaymentCreationStatus.Replayed
                : PaymentCreationStatus.Conflict;

        return new PaymentCreationResult(status, existing.ToPayment());
    }

    private static bool IsIdempotencyKeyViolation(DbUpdateException exception) =>
        exception.InnerException
            is PostgresException
            {
                SqlState: PostgresErrorCodes.UniqueViolation,
                ConstraintName: PaymentDbContext.IdempotencyKeyConstraintName,
            };
}