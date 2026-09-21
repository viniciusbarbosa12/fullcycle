export type CanaryWeight = 0 | 20 | 50 | 100;
export type ResilienceScenario = "baseline" | "retry" | "timeout" | "delay" | "abort";

export type TrafficProbeResult = {
  attempt: number;
  correlationId: string;
  durationMs: number;
  id: number;
  ok: boolean;
  scenario?: ResilienceScenario;
  status: number;
  version: string;
};

async function probe(headers: HeadersInit, id: number, signal?: AbortSignal) {
  const correlationId = crypto.randomUUID();
  const startedAt = performance.now();

  try {
    const response = await fetch("/mesh-lab/payments", {
      cache: "no-store",
      headers: { "X-Correlation-ID": correlationId, ...headers },
      signal,
    });
    await response.text();
    return {
      attempt: Number(response.headers.get("X-MeshCommerce-Attempt") ?? "1"),
      correlationId: response.headers.get("X-Correlation-ID") ?? correlationId,
      durationMs: Math.round(performance.now() - startedAt),
      id,
      ok: response.ok,
      status: response.status,
      version: response.headers.get("X-MeshCommerce-Version") ?? "proxy",
    } satisfies TrafficProbeResult;
  } catch (error) {
    if (signal?.aborted) throw error;
    return {
      attempt: 1,
      correlationId,
      durationMs: Math.round(performance.now() - startedAt),
      id,
      ok: false,
      status: 0,
      version: "unavailable",
    } satisfies TrafficProbeResult;
  }
}

export function probeRelease(
  id: number,
  weight: CanaryWeight,
  preview: boolean,
  signal: AbortSignal,
) {
  const headers: Record<string, string> = {};
  if (weight !== 20) headers["X-MeshCommerce-Canary-Stage"] = String(weight);
  if (preview) headers["X-MeshCommerce-Preview"] = "v2";
  return probe(headers, id, signal);
}

export async function probeResilience(
  scenario: ResilienceScenario,
  id: number,
): Promise<TrafficProbeResult> {
  const headers: Record<string, string> = {};
  if (scenario === "delay" || scenario === "abort") {
    headers["X-MeshCommerce-Fault"] = scenario;
  } else if (scenario === "retry" || scenario === "timeout") {
    headers["X-MeshCommerce-Resilience"] = scenario;
  }
  return { ...(await probe(headers, id)), scenario };
}