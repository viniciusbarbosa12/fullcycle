export type OrderStatus = "PendingPayment" | "Paid" | "PaymentFailed";

export type Order = {
  id: string;
  customer: string;
  item: string;
  amount: number;
  status: OrderStatus;
  createdAt: string;
};

export type CreateOrderRequest = {
  customer: string;
  item: string;
  amount: number;
};

type ProblemDetails = {
  title?: string;
  detail?: string;
  errors?: Record<string, string[]>;
};

const ordersApiUrl = (import.meta.env.VITE_ORDERS_API_URL ?? "/api").replace(
  /\/$/,
  "",
);

export class OrdersApiError extends Error {
  readonly status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "OrdersApiError";
    this.status = status;
  }
}

async function createApiError(response: Response) {
  const problem = (await response
    .json()
    .catch(() => null)) as ProblemDetails | null;
  const validationMessage = problem?.errors
    ? Object.values(problem.errors).flat().join(" ")
    : undefined;

  return new OrdersApiError(
    response.status,
    problem?.detail ??
      validationMessage ??
      problem?.title ??
      `Orders API returned ${response.status}.`,
  );
}

export async function getOrders(signal?: AbortSignal): Promise<Order[]> {
  const response = await fetch(`${ordersApiUrl}/orders`, { signal });

  if (!response.ok) {
    throw await createApiError(response);
  }

  return response.json() as Promise<Order[]>;
}

export async function createOrder(request: CreateOrderRequest): Promise<Order> {
  const response = await fetch(`${ordersApiUrl}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw await createApiError(response);
  }

  return response.json() as Promise<Order>;
}
