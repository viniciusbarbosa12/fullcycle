export type GatewayProbeResult = {
  id: number;
  status: number;
  allowed: boolean;
  blocked: boolean;
  gatewayConfigured: boolean;
  limit: number | null;
  remaining: number | null;
  resetSeconds: number | null;
  gatewayLatencyMs: number | null;
  durationMs: number;
};

function getNumberHeader(headers: Headers, names: string[]) {
  for (const name of names) {
    const rawValue = headers.get(name);
    if (rawValue !== null) {
      const value = Number(rawValue);
      return Number.isFinite(value) ? value : null;
    }
  }

  return null;
}

export async function probeGateway(
  id: number,
  signal: AbortSignal,
): Promise<GatewayProbeResult> {
  const startedAt = performance.now();

  try {
    const response = await fetch("/gateway/orders", {
      cache: "no-store",
      signal,
    });

    await response.text();

    const limit = getNumberHeader(response.headers, [
      "RateLimit-Limit",
      "X-RateLimit-Limit-Minute",
    ]);
    const requestId = response.headers.get("X-Kong-Request-Id");
    const gatewayConfigured = limit !== null || requestId !== null;

    return {
      id,
      status: response.status,
      allowed: response.ok && gatewayConfigured,
      blocked: response.status === 429,
      gatewayConfigured,
      limit,
      remaining: getNumberHeader(response.headers, [
        "RateLimit-Remaining",
        "X-RateLimit-Remaining-Minute",
      ]),
      resetSeconds: getNumberHeader(response.headers, [
        "RateLimit-Reset",
        "Retry-After",
      ]),
      gatewayLatencyMs: getNumberHeader(response.headers, [
        "X-Kong-Proxy-Latency",
      ]),
      durationMs: Math.round(performance.now() - startedAt),
    };
  } catch (error) {
    if (signal.aborted) {
      throw error;
    }

    return {
      id,
      status: 0,
      allowed: false,
      blocked: false,
      gatewayConfigured: false,
      limit: null,
      remaining: null,
      resetSeconds: null,
      gatewayLatencyMs: null,
      durationMs: Math.round(performance.now() - startedAt),
    };
  }
}
