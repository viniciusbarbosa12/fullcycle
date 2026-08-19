using Microsoft.AspNetCore.Mvc;

namespace Customers.Api.Controllers;

[ApiController]
public sealed class CustomersController : ControllerBase
{
    private static readonly Customer[] Customers =
    [
        new(1, "Ada Lovelace", "ada@example.com"),
        new(2, "Alan Turing", "alan@example.com"),
    ];

    [HttpGet("/")]
    public IActionResult GetServiceInfo() => Ok(new
    {
        service = "customers-api",
        version = "1.0.0",
    });

    [HttpGet("/health")]
    public IActionResult GetHealth() => Ok(new
    {
        status = "healthy",
        service = "customers-api",
    });

    [HttpGet("/customers")]
    public IActionResult GetCustomers() => Ok(Customers);

    private sealed record Customer(int Id, string Name, string Email);
}