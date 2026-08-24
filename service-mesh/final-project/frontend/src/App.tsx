import { useEffect, useState, type FormEvent } from "react";
import {
  Activity,
  CircleAlert,
  CircleDollarSign,
  Clock3,
  LayoutDashboard,
  PackageCheck,
  Plus,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import {
  createOrder,
  getOrders,
  OrdersApiError,
  type Order,
  type OrderStatus,
} from "./api/orders";
import { OperationLab } from "./OperationLab";
import "./commerce.css";

type AppView = "orders" | "operation";

const paymentStatusPresentation: Record<
  OrderStatus,
  { label: string; className: string }
> = {
  PendingPayment: {
    label: "Awaiting payment",
    className: "aguardando",
  },
  Paid: { label: "Paid", className: "pago" },
  PaymentFailed: { label: "Failed", className: "falhou" },
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "BRL",
});

const dateTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short",
  timeStyle: "short",
});

function getErrorMessage(error: unknown) {
  if (error instanceof OrdersApiError && error.status === 503) {
    return "The order was saved, but the payment result is unknown. It remains pending.";
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "The Orders API could not be reached.";
}

function App() {
  const [activeView, setActiveView] = useState<AppView>("orders");
  const [orders, setOrders] = useState<Order[]>([]);
  const [query, setQuery] = useState("");
  const [isComposerOpen, setIsComposerOpen] = useState(true);
  const [isLoadingOrders, setIsLoadingOrders] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    document.title =
      activeView === "operation"
        ? "MeshCommerce | Circuit breaker"
        : "MeshCommerce | Orders";
  }, [activeView]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadOrders() {
      try {
        setOrders(await getOrders(controller.signal));
      } catch (error) {
        if (!controller.signal.aborted) {
          setErrorMessage(getErrorMessage(error));
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoadingOrders(false);
        }
      }
    }

    void loadOrders();
    return () => controller.abort();
  }, []);

  const normalizedQuery = query.trim().toLocaleLowerCase("en-US");
  const visibleOrders = normalizedQuery
    ? orders.filter((order) =>
        [order.id, order.customer, order.item].some((value) =>
          value.toLocaleLowerCase("en-US").includes(normalizedQuery),
        ),
      )
    : orders;

  const paidOrders = orders.filter((order) => order.status === "Paid").length;
  const pendingOrders = orders.filter(
    (order) => order.status === "PendingPayment",
  ).length;

  async function handleCreateOrder(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const order = await createOrder({
        customer: String(data.get("customer")),
        item: String(data.get("item")),
        amount: Number(data.get("amount")),
      });

      setOrders((currentOrders) => [
        order,
        ...currentOrders.filter((currentOrder) => currentOrder.id !== order.id),
      ]);
      form.reset();
    } catch (error) {
      setErrorMessage(getErrorMessage(error));

      if (error instanceof OrdersApiError && error.status === 503) {
        try {
          setOrders(await getOrders());
        } catch {
          // Keep the original payment error visible.
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">
            <CircleDollarSign size={22} strokeWidth={2.2} />
          </span>
          <span>MeshCommerce</span>
        </div>

        <nav aria-label="Main navigation">
          <button
            className={`nav-item ${activeView === "orders" ? "nav-item-active" : ""}`}
            type="button"
            onClick={() => setActiveView("orders")}
          >
            <ShoppingBag size={18} />
            Orders
          </button>
          <button
            className={`nav-item ${activeView === "operation" ? "nav-item-active" : ""}`}
            type="button"
            onClick={() => setActiveView("operation")}
          >
            <Activity size={18} />
            Operations
          </button>
          <button className="nav-item" type="button" disabled>
            <LayoutDashboard size={18} />
            Overview
          </button>
        </nav>

        <div className="environment">
          <span className="environment-dot" />
          Local environment
        </div>
      </aside>

      <main className={`app-main app-main-${activeView}`}>
        <OperationLab />
        <header className="topbar">
          <div>
            <span className="eyebrow">Commerce operations</span>
            <h1>Orders</h1>
          </div>
          <button
            className="primary-action"
            type="button"
            onClick={() => setIsComposerOpen(true)}
          >
            <Plus size={18} />
            New order
          </button>
        </header>

        <section className="metrics" aria-label="Order summary">
          <div className="metric">
            <ShoppingBag size={20} />
            <div>
              <span>Total today</span>
              <strong>{orders.length}</strong>
            </div>
          </div>
          <div className="metric">
            <PackageCheck size={20} />
            <div>
              <span>Paid</span>
              <strong>{paidOrders}</strong>
            </div>
          </div>
          <div className="metric">
            <Clock3 size={20} />
            <div>
              <span>Pending</span>
              <strong>{pendingOrders}</strong>
            </div>
          </div>
        </section>

        {errorMessage && (
          <div className="page-alert" role="alert">
            <CircleAlert size={19} aria-hidden="true" />
            <span>{errorMessage}</span>
            <button
              type="button"
              aria-label="Dismiss notification"
              title="Dismiss notification"
              onClick={() => setErrorMessage(null)}
            >
              <X size={17} />
            </button>
          </div>
        )}

        <div
          className={`workspace ${isComposerOpen ? "workspace-with-composer" : ""}`}
        >
          <section
            className="orders-panel"
            aria-labelledby="recent-orders-title"
          >
            <div className="panel-toolbar">
              <div>
                <h2 id="recent-orders-title">Recent orders</h2>
                <span>{visibleOrders.length} records</span>
              </div>
              <label className="search-field">
                <Search size={17} aria-hidden="true" />
                <span className="sr-only">Search orders</span>
                <input
                  type="search"
                  placeholder="Search by customer or order"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
              </label>
            </div>

            <div className="table-scroll">
              <table>
                <thead>
                  <tr>
                    <th>Order</th>
                    <th>Customer</th>
                    <th>Item</th>
                    <th>Payment</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleOrders.length > 0 ? (
                    visibleOrders.map((order) => {
                      const paymentStatus =
                        paymentStatusPresentation[order.status];

                      return (
                        <tr key={order.id}>
                          <td>
                            <strong title={order.id}>
                              {order.id.slice(0, 8).toUpperCase()}
                            </strong>
                            <span className="table-meta">
                              {dateTime.format(new Date(order.createdAt))}
                            </span>
                          </td>
                          <td>{order.customer}</td>
                          <td>{order.item}</td>
                          <td>
                            <span
                              className={`status status-${paymentStatus.className}`}
                            >
                              {paymentStatus.label}
                            </span>
                          </td>
                          <td className="amount">
                            {currency.format(order.amount)}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td className="empty-state" colSpan={5}>
                        {isLoadingOrders
                          ? "Loading orders..."
                          : "No orders found."}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {isComposerOpen && (
            <aside className="composer" aria-labelledby="new-order-title">
              <div className="composer-header">
                <div>
                  <span className="eyebrow">Manual entry</span>
                  <h2 id="new-order-title">New order</h2>
                </div>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Close form"
                  title="Close form"
                  onClick={() => setIsComposerOpen(false)}
                >
                  <X size={19} />
                </button>
              </div>

              <form onSubmit={handleCreateOrder} aria-busy={isSubmitting}>
                <label>
                  Customer
                  <input
                    name="customer"
                    type="text"
                    placeholder="Full name"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label>
                  Item
                  <input
                    name="item"
                    type="text"
                    placeholder="Purchased product"
                    required
                    disabled={isSubmitting}
                  />
                </label>
                <label>
                  Amount
                  <span className="money-input">
                    <span>R$</span>
                    <input
                      name="amount"
                      type="number"
                      min="0.01"
                      step="0.01"
                      placeholder="0.00"
                      required
                      disabled={isSubmitting}
                    />
                  </span>
                </label>
                <button
                  className="submit-action"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <Plus size={18} />
                  {isSubmitting ? "Creating..." : "Create order"}
                </button>
              </form>
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
