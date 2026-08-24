using System.ComponentModel.DataAnnotations;

namespace Payments.Api.Contracts;

[AttributeUsage(AttributeTargets.Property | AttributeTargets.Parameter)]
public sealed class NotEmptyGuidAttribute : ValidationAttribute
{
    public NotEmptyGuidAttribute()
        : base("The {0} field must not be empty.") { }

    public override bool IsValid(object? value) => value is Guid id && id != Guid.Empty;
}
