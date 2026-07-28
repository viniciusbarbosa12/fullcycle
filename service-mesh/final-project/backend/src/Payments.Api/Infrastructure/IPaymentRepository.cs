using Payments.Api.Domain;

namespace Payments.Api.Infrastructure;

public interface IPaymentRepository
{
    Task<PaymentCreationResult> CreateIdempotentlyAsync(
        Guid idempotencyKey,
        Guid orderId,
        decimal amount,
        CancellationToken cancellationToken = default
    );

    Task<Payment?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
}
