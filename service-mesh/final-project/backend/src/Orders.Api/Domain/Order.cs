namespace Orders.Api.Domain;

public sealed class Order
{
    public Order(string customer, string item, decimal amount)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(customer);
        ArgumentException.ThrowIfNullOrWhiteSpace(item);
        ArgumentOutOfRangeException.ThrowIfNegativeOrZero(amount);

        Id = Guid.NewGuid();
        Customer = customer;
        Item = item;
        Amount = amount;
        Status = OrderStatus.PendingPayment;
        CreatedAt = DateTimeOffset.UtcNow;
    }

    public Guid Id { get; }

    public string Customer { get; }

    public string Item { get; }

    public decimal Amount { get; }

    public OrderStatus Status { get; private set; }

    public DateTimeOffset CreatedAt { get; }

    public void MarkAsPaid()
    {
        EnsurePaymentIsPending();
        Status = OrderStatus.Paid;
    }

    public void MarkPaymentAsFailed()
    {
        EnsurePaymentIsPending();
        Status = OrderStatus.PaymentFailed;
    }

    private void EnsurePaymentIsPending()
    {
        if (Status != OrderStatus.PendingPayment)
        {
            throw new InvalidOperationException(
                $"Cannot change payment status when order is {Status}."
            );
        }
    }
}
