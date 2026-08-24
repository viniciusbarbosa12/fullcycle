namespace Orders.Api.Domain;

public enum OrderStatus
{
    PendingPayment,
    Paid,
    PaymentFailed,
}
