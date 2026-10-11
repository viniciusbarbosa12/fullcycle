using Microsoft.EntityFrameworkCore;
using Npgsql;
using Payments.Api.Domain;

namespace Payments.Api.Infrastructure;

public sealed class EfCorePaymentRepository(
    PaymentDbContext dbContext,
    ILogger<EfCorePaymentRepository> logger
) : IPaymentRepository
{
    public async Task<PaymentCreationResult> CreateIdempotentlyAsync(
        Guid idempotencyKey,
        Guid orderId,
        decimal amount,
        CancellationToken cancellationToken = default
    )
    {
        logger.LogInformation("Checking existing payment state for order {OrderId}", orderId);
        var existing = await FindByIdempotencyKeyAsync(idempotencyKey, cancellationToken);
        if (existing is not null)
        {
            logger.LogInformation(
                "Resolving existing payment {PaymentId} for order {OrderId}",
                existing.Id,
                orderId
            );
            return ResolveExisting(existing, orderId, amount);
        }

        var payment = new Payment(orderId, amount);
        var record = new PaymentRecord(idempotencyKey, payment);
        dbContext.Payments.Add(record);

        logger.LogInformation(
            "Persisting payment {PaymentId} for order {OrderId}",
            payment.Id,
            orderId
        );
        try
        {
            await dbContext.SaveChangesAsync(cancellationToken);
            logger.LogInformation(
                "Payment {PaymentId} persisted for order {OrderId}",
                payment.Id,
                orderId
            );
            return new PaymentCreationResult(PaymentCreationStatus.Created, payment);
        }
        catch (DbUpdateException exception) when (IsIdempotencyKeyViolation(exception))
        {
            logger.LogWarning(
                "Concurrent payment creation for order {OrderId}; loading the existing payment",
                orderId
            );
            dbContext.Entry(record).State = EntityState.Detached;

            existing =
                await FindByIdempotencyKeyAsync(idempotencyKey, cancellationToken)
                ?? throw new InvalidOperationException(
                    $"No payment was found for duplicate idempotency key {idempotencyKey}.",
                    exception
                );

            return ResolveExisting(existing, orderId, amount);
        }
        catch (DbUpdateException exception)
        {
            logger.LogError(
                "Failed to persist payment {PaymentId} for order {OrderId} with {FailureType}",
                payment.Id,
                orderId,
                exception.GetType().Name
            );
            throw;
        }
    }

    public async Task<Payment?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
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
