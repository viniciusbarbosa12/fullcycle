export type PaymentProbeResult = {
  id: number;
  status: number;
  ok: boolean;
  instance: string;
  durationMs: number;
  timestamp: string;
};

type PaymentProbeBody = {
  instance?: string;
};

export async function probePayments(
  id: number,
  signal: AbortSignal,
): Promise<PaymentProbeResult> {
  const startedAt = performance.now();

  try {
    const response = await fetch("/mesh-lab/payments", {
      cache: "no-store",
      signal,
    });
    const body = (await response
      .json()
      .catch(() => null)) as PaymentProbeBody | null;

    return {
      id,
      status: response.status,
      ok: response.ok,
      instance:
        body?.instance ??
        response.headers.get("X-MeshCommerce-Instance") ??
        "unknown",
      durationMs: Math.round(performance.now() - startedAt),
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    if (signal.aborted) {
      throw error;
    }

    return {
      id,
      status: 0,
      ok: false,
      instance: "unavailable",
      durationMs: Math.round(performance.now() - startedAt),
      timestamp: new Date().toISOString(),
    };
  }
}
