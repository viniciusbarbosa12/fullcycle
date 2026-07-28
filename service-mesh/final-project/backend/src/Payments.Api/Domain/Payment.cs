namespace Payments.Api.Domain;

public sealed class Payment
{
    public Payment(Guid orderId, decimal amount)
        : this(
            Guid.NewGuid(),
            orderId,
            amount,
            PaymentStatus.Approved,
            DateTimeOffset.FromUnixTimeMilliseconds(DateTimeOffset.UtcNow.ToUnixTimeMilliseconds())
        ) { }

    private Payment(
        Guid id,
        Guid orderId,
        decimal amount,
        PaymentStatus status,
        DateTimeOffset processedAt
    )
    {
        if (id == Guid.Empty)
        {
            throw new ArgumentException("Payment ID must not be empty.", nameof(id));
        }

        if (orderId == Guid.Empty)
        {
            throw new ArgumentException("Order ID must not be empty.", nameof(orderId));
        }

        ArgumentOutOfRangeException.ThrowIfNegativeOrZero(amount);

        Id = id;
        OrderId = orderId;
        Amount = amount;
        Status = status;
        ProcessedAt = processedAt;
    }

    internal static Payment Restore(
        Guid id,
        Guid orderId,
        decimal amount,
        PaymentStatus status,
        DateTimeOffset processedAt
    ) => new(id, orderId, amount, status, processedAt);

    public Guid Id { get; }

    public Guid OrderId { get; }

    public decimal Amount { get; }

    public PaymentStatus Status { get; }

    public DateTimeOffset ProcessedAt { get; }
}
