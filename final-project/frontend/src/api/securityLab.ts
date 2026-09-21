export type Persona = "viewer" | "operator";

export type LabSession = {
  accessToken: string;
  expiresAt: string;
  persona: Persona;
  roles: string[];
  scopes: string[];
  tokenType: string;
};

export type SecurityProbeResult = {
  correlationId: string | null;
  durationMs: number;
  edgeBlocked: boolean;
  status: number;
  upstreamReached: boolean;
};

export async function login(
  persona: Persona,
  expired = false,
): Promise<LabSession> {
  const response = await fetch("/gateway/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ expired, persona }),
  });

  if (!response.ok) {
    throw new Error(`Auth API returned HTTP ${response.status}.`);
  }

  return response.json() as Promise<LabSession>;
}

export async function probeSecureOrders(
  accessToken?: string,
): Promise<SecurityProbeResult> {
  const startedAt = performance.now();
  const response = await fetch("/gateway/secure/orders", {
    cache: "no-store",
    headers: accessToken
      ? { Authorization: `Bearer ${accessToken}` }
      : undefined,
  });
  await response.text();

  const upstreamReached =
    response.headers.get("X-MeshCommerce-Service") === "orders-api";

  return {
    correlationId: response.headers.get("X-Correlation-ID"),
    durationMs: Math.round(performance.now() - startedAt),
    edgeBlocked: !upstreamReached && [401, 403].includes(response.status),
    status: response.status,
    upstreamReached,
  };
}
