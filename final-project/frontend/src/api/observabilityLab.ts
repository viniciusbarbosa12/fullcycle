export type ObservabilityScenario = "baseline" | "latency" | "errors";

export type ObservabilityProbeResult = {
  id: number;
  scenario: ObservabilityScenario;
  status: number;
  ok: boolean;
  durationMs: number;
  slow: boolean;
  timestamp: string;
};

const scenarioRequests: Record<
  ObservabilityScenario,
  { path: string; headers?: HeadersInit }
> = {
  baseline: {
    path: "/api/orders",
  },
  latency: {
    path: "/mesh-lab/payments",
    headers: {
      "X-MeshCommerce-Latency-Lab": "true",
    },
  },
  errors: {
    path: "/mesh-lab/payments",
    headers: {
      "X-MeshCommerce-Error-Lab": "true",
    },
  },
};

export async function probeObservability(
  scenario: ObservabilityScenario,
  id: number,
  signal: AbortSignal,
): Promise<ObservabilityProbeResult> {
  const request = scenarioRequests[scenario];
  const startedAt = performance.now();

  try {
    const response = await fetch(request.path, {
      cache: "no-store",
      headers: request.headers,
      signal,
    });

    // Consume the response so the duration represents the complete browser call.
    await response.text();
    const durationMs = Math.round(performance.now() - startedAt);

    return {
      id,
      scenario,
      status: response.status,
      ok: response.ok,
      durationMs,
      slow: durationMs >= 900,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    if (signal.aborted) {
      throw error;
    }

    const durationMs = Math.round(performance.now() - startedAt);

    return {
      id,
      scenario,
      status: 0,
      ok: false,
      durationMs,
      slow: durationMs >= 900,
      timestamp: new Date().toISOString(),
    };
  }
}
