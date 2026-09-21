using System.Net.Http.Json;
using MeshCommerce.Http;

namespace Orders.Api.Integrations.Payments;

public sealed class PaymentsClient(HttpClient httpClient, IHttpContextAccessor httpContextAccessor)
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

        using var response = await httpClient.SendAsync(message, cancellationToken);

        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<PaymentResponse>(cancellationToken)
            ?? throw new InvalidOperationException("Payments API returned an empty response.");
    }
}
