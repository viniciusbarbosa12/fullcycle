namespace Orders.Api.Integrations.Payments;

public sealed record CreatePaymentRequest(Guid OrderId, decimal Amount);
