using Microsoft.AspNetCore.Mvc;
using Orders.Api.Contracts;
using Orders.Api.Domain;
using Orders.Api.Infrastructure;
using Orders.Api.Integrations.Payments;

namespace Orders.Api.Controllers;

[ApiController]
[Route("orders")]
public sealed class OrdersController(
    InMemoryOrderRepository repository,
    PaymentsClient paymentsClient,
    ILogger<OrdersController> logger
) : ControllerBase
{
    [HttpPost]
    [ProducesResponseType<Order>(StatusCodes.Status201Created)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status503ServiceUnavailable)]
    public async Task<ActionResult<Order>> CreateOrder(
        [FromBody] CreateOrderRequest request,
        CancellationToken cancellationToken
    )
    {
        logger.LogInformation("Received order creation request");
        var order = new Order(request.Customer, request.Item, request.Amount);
        logger.LogInformation("Processing validated order {OrderId}", order.Id);
        repository.Add(order);

        try
        {
            var payment = await paymentsClient.CreatePaymentAsync(
                order.Id,
                order.Amount,
                cancellationToken
            );

            logger.LogInformation(
                "Payment {PaymentId} completed for order {OrderId} with status {PaymentStatus}",
                payment.Id,
                order.Id,
                payment.Status
            );
            if (payment.Status == PaymentStatus.Approved)
            {
                order.MarkAsPaid();
            }
            else
            {
                logger.LogWarning("Payment was declined for order {OrderId}", order.Id);
                order.MarkPaymentAsFailed();
            }
        }
        catch (HttpRequestException exception)
        {
            logger.LogError(
                "Order {OrderId} remains pending because payments-api failed with {FailureType}",
                order.Id,
                exception.GetType().Name
            );
            return Problem(
                statusCode: StatusCodes.Status503ServiceUnavailable,
                title: "Payments service is unavailable",
                detail: $"Order {order.Id} remains pending because the payment result is unknown."
            );
        }

        logger.LogInformation(
            "Order {OrderId} created with status {OrderStatus}",
            order.Id,
            order.Status
        );
        return CreatedAtAction(nameof(GetOrder), new { id = order.Id }, order);
    }

    [HttpGet]
    [ProducesResponseType<IReadOnlyCollection<Order>>(StatusCodes.Status200OK)]
    public ActionResult<IReadOnlyCollection<Order>> GetOrders() => Ok(repository.GetAll());

    [HttpGet("{id:guid}")]
    [ProducesResponseType<Order>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult<Order> GetOrder(Guid id)
    {
        var order = repository.GetById(id);
        if (order is null)
            return NotFound();

        return Ok(order);
    }
}
