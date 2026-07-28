using System.ComponentModel.DataAnnotations;

namespace Payments.Api.Contracts;

public sealed record CreatePaymentRequest(
    [NotEmptyGuid] Guid OrderId,
    [Range(
        typeof(decimal),
        "0.01",
        "79228162514264337593543950335",
        ParseLimitsInInvariantCulture = true,
        ConvertValueInInvariantCulture = true,
        ErrorMessage = "Amount must be greater than zero."
    )]
        decimal Amount
);
