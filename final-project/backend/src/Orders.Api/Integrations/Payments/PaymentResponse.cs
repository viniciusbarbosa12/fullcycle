using System.Text.Json.Serialization;

namespace Orders.Api.Integrations.Payments;

[JsonConverter(typeof(JsonStringEnumConverter<PaymentStatus>))]
public enum PaymentStatus
{
    Approved,
    Declined,
}

public sealed record PaymentResponse(
    Guid Id,
    Guid OrderId,
    decimal Amount,
    PaymentStatus Status,
    DateTimeOffset ProcessedAt
);
