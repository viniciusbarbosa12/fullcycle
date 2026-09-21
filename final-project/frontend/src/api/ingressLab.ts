export type IngressResult = {
  correlationId: string;
  durationMs: number;
  gatewayLatencyMs: number | null;
  ingress: "Kong" | "Istio";
  ok: boolean;
  proxyHeader: string;
  route: string;
  status: number;
};

const istioGatewayUrl = (
  import.meta.env.VITE_ISTIO_GATEWAY_URL ?? "http://127.0.0.1.nip.io:14174"
).replace(/\/$/, "");

async function request(ingress: "Kong" | "Istio"): Promise<IngressResult> {
  const correlationId = crypto.randomUUID();
  const route =
    ingress === "Kong" ? "/gateway/orders" : `${istioGatewayUrl}/api/orders`;
  const startedAt = performance.now();
  const response = await fetch(route, {
    cache: "no-store",
    headers: { "X-Correlation-ID": correlationId },
  });
  await response.text();

  return {
    correlationId: response.headers.get("X-Correlation-ID") ?? correlationId,
    durationMs: Math.round(performance.now() - startedAt),
    gatewayLatencyMs:
      Number(
        response.headers.get(
          ingress === "Kong"
            ? "X-Kong-Proxy-Latency"
            : "X-Envoy-Upstream-Service-Time",
        ),
      ) || null,
    ingress,
    ok: response.ok,
    proxyHeader:
      response.headers.get(
        ingress === "Kong" ? "X-Kong-Request-Id" : "X-MeshCommerce-Ingress",
      ) ?? "not exposed",
    route,
    status: response.status,
  };
}

export async function compareIngresses() {
  return Promise.all([request("Kong"), request("Istio")]);
}
