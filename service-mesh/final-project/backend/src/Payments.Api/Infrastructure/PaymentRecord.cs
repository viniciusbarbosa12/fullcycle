using Payments.Api.Domain;

namespace Payments.Api.Infrastructure;

internal sealed class PaymentRecord
{
    private PaymentRecord() { }

    public PaymentRecord(Guid idempotencyKey, Payment payment)
    {
        Id = payment.Id;
        IdempotencyKey = idempotencyKey;
        OrderId = payment.OrderId;
        Amount = payment.Amount;
        Status = payment.Status;
        ProcessedAt = payment.ProcessedAt;
    }

    public Guid Id { get; private set; }

    public Guid IdempotencyKey { get; private set; }

    public Guid OrderId { get; private set; }

    public decimal Amount { get; private set; }

    public PaymentStatus Status { get; private set; }

    public DateTimeOffset ProcessedAt { get; private set; }

    public Payment ToPayment() => Payment.Restore(Id, OrderId, Amount, Status, ProcessedAt);
}