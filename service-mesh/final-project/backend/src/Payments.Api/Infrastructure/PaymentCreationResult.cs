using Payments.Api.Domain;

namespace Payments.Api.Infrastructure;

public enum PaymentCreationStatus
{
    Created,
    Replayed,
    Conflict,
}

public sealed record PaymentCreationResult(PaymentCreationStatus Status, Payment Payment);
