using System.Net.Http.Json;
using MeshCommerce.Http;

namespace Orders.Api.Integrations.Payments;

public sealed class PaymentsClient(
    HttpClient httpClient,
    IHttpContextAccessor httpContextAccessor,
    ILogger<PaymentsClient> logger
)
{
    public async Task<PaymentResponse> CreatePaymentAsync(
        Guid orderId,
        decimal amount,
        CancellationToken cancellationToken = default
    )
    {
        var request = new CreatePaymentRequest(orderId, amount);

        using var message = new HttpRequestMessage(HttpMethod.Post, "/payments")
        {
            Content = JsonContent.Create(request),
        };

        message.Headers.Add("Idempotency-Key", orderId.ToString());
        var correlationId = httpContextAccessor.HttpContext?.TraceIdentifier;
        if (!string.IsNullOrWhiteSpace(correlationId))
        {
            message.Headers.TryAddWithoutValidation(
                CorrelationIdMiddleware.HeaderName,
                correlationId
            );
        }

        logger.LogInformation("Calling payments-api for order {OrderId}", orderId);
        using var response = await httpClient.SendAsync(message, cancellationToken);

        response.EnsureSuccessStatusCode();

        logger.LogInformation(
            "payments-api accepted payment for order {OrderId} with HTTP {StatusCode}",
            orderId,
            (int)response.StatusCode
        );
        return await response.Content.ReadFromJsonAsync<PaymentResponse>(cancellationToken)
            ?? throw new InvalidOperationException("Payments API returned an empty response.");
    }
}
