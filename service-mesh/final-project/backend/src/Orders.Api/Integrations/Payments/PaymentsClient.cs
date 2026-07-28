using System.Net.Http.Json;

namespace Orders.Api.Integrations.Payments;

public sealed class PaymentsClient(HttpClient httpClient)
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

        using var response = await httpClient.SendAsync(message, cancellationToken);

        response.EnsureSuccessStatusCode();

        return await response.Content.ReadFromJsonAsync<PaymentResponse>(cancellationToken)
            ?? throw new InvalidOperationException("Payments API returned an empty response.");
    }
}
