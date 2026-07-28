using Microsoft.AspNetCore.Mvc;
using Payments.Api.Contracts;
using Payments.Api.Domain;
using Payments.Api.Infrastructure;

namespace Payments.Api.Controllers;

[ApiController]
[Route("payments")]
public sealed class PaymentsController(IPaymentRepository repository) : ControllerBase
{
    [HttpPost]
    [ProducesResponseType<Payment>(StatusCodes.Status201Created)]
    [ProducesResponseType<Payment>(StatusCodes.Status200OK)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status409Conflict)]
    public async Task<ActionResult<Payment>> CreatePayment(
        [FromBody] CreatePaymentRequest request,
        [FromHeader(Name = "Idempotency-Key"), NotEmptyGuid] Guid idempotencyKey,
        CancellationToken cancellationToken
    )
    {
        var result = await repository.CreateIdempotentlyAsync(
            idempotencyKey,
            request.OrderId,
            request.Amount,
            cancellationToken
        );

        return result.Status switch
        {
            PaymentCreationStatus.Created => CreatedAtAction(
                nameof(GetPayment),
                new { id = result.Payment.Id },
                result.Payment
            ),
            PaymentCreationStatus.Replayed => Ok(result.Payment),
            PaymentCreationStatus.Conflict => Conflict(
                new ProblemDetails
                {
                    Status = StatusCodes.Status409Conflict,
                    Title = "Idempotency key conflict",
                    Detail = "The idempotency key was already used with different payment data.",
                }
            ),
            _ => throw new InvalidOperationException(
                $"Unsupported payment creation status {result.Status}."
            ),
        };
    }

    [HttpGet("{id:guid}")]
    [ProducesResponseType<Payment>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<Payment>> GetPayment(
        Guid id,
        CancellationToken cancellationToken
    )
    {
        var payment = await repository.GetByIdAsync(id, cancellationToken);
        if (payment is null)
        {
            return NotFound();
        }

        return Ok(payment);
    }
}
