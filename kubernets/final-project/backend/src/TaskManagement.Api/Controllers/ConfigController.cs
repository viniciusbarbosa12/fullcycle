using Microsoft.AspNetCore.Mvc;

namespace TaskManagement.Api.Controllers;

[ApiController]
[Route("config")]
public sealed class ConfigController(IConfiguration configuration) : ControllerBase
{
    [HttpGet]
    public ActionResult<object> Get()
    {
        return Ok(new
        {
            codigoUnico = configuration["CodigoUnico"],
            environment = configuration["ASPNETCORE_ENVIRONMENT"],
            urls = configuration["ASPNETCORE_URLS"],
            hasDatabaseConnectionString = !string.IsNullOrWhiteSpace(
                configuration.GetConnectionString("DefaultConnection"))
        });
    }
}
