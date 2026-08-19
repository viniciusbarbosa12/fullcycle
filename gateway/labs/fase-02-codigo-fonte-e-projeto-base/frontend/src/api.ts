export type TrafficMode = "direct" | "gateway";
export type ServiceName = "orders" | "customers";

export interface Order {
  id: number;
  product: string;
  amount: number;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
}

export interface RequestResult<T> {
  data?: T;
  durationMs: number;
  endpoint: string;
  error?: string;
  ok: boolean;
  requestedAt: number;
  status: number | null;
}

const apiBases = {
  orders: import.meta.env.VITE_ORDERS_API_URL ?? "http://localhost:3001",
  customers: import.meta.env.VITE_CUSTOMERS_API_URL ?? "http://localhost:3002",
  gateway: import.meta.env.VITE_GATEWAY_URL ?? "http://localhost:8000",
};

function removeTrailingSlash(value: string) {
  return value.replace(/\/$/, "");
}

export function resolveEndpoint(service: ServiceName, mode: TrafficMode) {
  const base = mode === "gateway" ? apiBases.gateway : apiBases[service];
  return `${removeTrailingSlash(base)}/${service}`;
}

export async function requestResource<T>(
  service: ServiceName,
  mode: TrafficMode,
): Promise<RequestResult<T>> {
  const endpoint = resolveEndpoint(service, mode);
  const startedAt = performance.now();
  const requestedAt = Date.now();

  try {
    const response = await fetch(endpoint, {
      headers: { Accept: "application/json" },
    });
    const body: unknown = await response.json().catch(() => null);
    const durationMs = Math.round(performance.now() - startedAt);

    if (!response.ok) {
      return {
        durationMs,
        endpoint,
        error: `A origem respondeu com HTTP ${response.status}.`,
        ok: false,
        requestedAt,
        status: response.status,
      };
    }

    return {
      data: body as T,
      durationMs,
      endpoint,
      ok: true,
      requestedAt,
      status: response.status,
    };
  } catch {
    return {
      durationMs: Math.round(performance.now() - startedAt),
      endpoint,
      error: "Não foi possível alcançar este endpoint.",
      ok: false,
      requestedAt,
      status: null,
    };
  }
}
