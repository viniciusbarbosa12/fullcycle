using Microsoft.AspNetCore.Mvc;

namespace Orders.Api.Controllers;

[ApiController]
public sealed class OrdersController : ControllerBase
{
    private static readonly Order[] Orders =
    [
        new(1, "Keyboard", 249.90m),
        new(2, "Monitor", 1299.00m),
    ];

    [HttpGet("/")]
    public IActionResult GetServiceInfo() => Ok(new
    {
        service = "orders-api",
        version = "1.0.0",
    });

    [HttpGet("/health")]
    public IActionResult GetHealth() => Ok(new
    {
        status = "healthy",
        service = "orders-api",
    });

    [HttpGet("/orders")]
    public IActionResult GetOrders() => Ok(Orders);

    private sealed record Order(int Id, string Product, decimal Amount);
}