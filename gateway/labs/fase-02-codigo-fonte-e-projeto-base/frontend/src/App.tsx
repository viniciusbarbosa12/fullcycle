import { useState, type ReactNode } from "react";
import {
  Cable,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Globe2,
  LoaderCircle,
  Network,
  Play,
  RefreshCw,
  Router,
  Server,
  ShoppingBag,
  Users,
} from "lucide-react";
import {
  requestResource,
  resolveEndpoint,
  type Customer,
  type Order,
  type RequestResult,
  type ServiceName,
  type TrafficMode,
} from "./api";

interface ActivityEntry {
  durationMs: number;
  endpoint: string;
  id: string;
  mode: TrafficMode;
  ok: boolean;
  requestedAt: number;
  service: ServiceName;
  status: number | null;
}

interface ServicePanelProps<T> {
  children: (data: T) => ReactNode;
  icon: ReactNode;
  isLoading: boolean;
  label: string;
  onRun: () => void;
  result: RequestResult<T> | null;
  service: ServiceName;
  mode: TrafficMode;
}

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const time = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

function Topology({ mode }: { mode: TrafficMode }) {
  const isDirect = mode === "direct";

  return (
    <section
      className={`topology topology-${mode}`}
      aria-label="Topologia ativa"
    >
      <div className="topology-heading">
        <div>
          <span className="section-kicker">Topologia ativa</span>
          <h2>{isDirect ? "Duas entradas públicas" : "Uma entrada pública"}</h2>
        </div>
        <span className="endpoint-count">
          <strong>{isDirect ? "2" : "1"}</strong> endpoint{isDirect ? "s" : ""}
        </span>
      </div>

      <div className="topology-flow">
        <div className="topology-node client-node">
          <Globe2 size={21} />
          <span>Cliente</span>
          <strong>Browser</strong>
        </div>

        <div className="flow-line" aria-hidden="true">
          <span>{isDirect ? "HTTP direto" : "HTTP"}</span>
          <i />
        </div>

        {!isDirect && (
          <>
            <div className="topology-node gateway-node">
              <Router size={22} />
              <span>Entrada</span>
              <strong>Kong :8000</strong>
            </div>
            <div className="flow-line flow-line-split" aria-hidden="true">
              <span>Roteamento</span>
              <i />
            </div>
          </>
        )}

        <div className="service-nodes">
          <div className="topology-node service-node orders-node">
            <ShoppingBag size={20} />
            <span>Orders API</span>
            <strong>{isDirect ? ":3001" : "orders-api:8080"}</strong>
          </div>
          <div className="topology-node service-node customers-node">
            <Users size={20} />
            <span>Customers API</span>
            <strong>{isDirect ? ":3002" : "customers-api:8080"}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePanel<T>({
  children,
  icon,
  isLoading,
  label,
  mode,
  onRun,
  result,
  service,
}: ServicePanelProps<T>) {
  const endpoint = resolveEndpoint(service, mode);

  return (
    <article className="service-panel">
      <header className="service-header">
        <div className={`service-icon service-icon-${service}`}>{icon}</div>
        <div>
          <span>
            {service === "orders"
              ? "Serviço comercial"
              : "Serviço de identidade"}
          </span>
          <h3>{label}</h3>
        </div>
        <button
          className="icon-action"
          type="button"
          onClick={onRun}
          disabled={isLoading}
          title={`Executar ${label}`}
          aria-label={`Executar ${label}`}
        >
          {isLoading ? (
            <LoaderCircle className="spinner" size={18} />
          ) : (
            <Play size={18} fill="currentColor" />
          )}
        </button>
      </header>

      <code className="endpoint-address">GET {endpoint}</code>

      <div className="response-area" aria-live="polite">
        {!result && !isLoading && (
          <div className="response-idle">
            <Server size={21} />
            <span>Aguardando requisição</span>
          </div>
        )}

        {isLoading && (
          <div className="response-idle">
            <LoaderCircle className="spinner" size={21} />
            <span>Conectando</span>
          </div>
        )}

        {result && !isLoading && result.ok && result.data !== undefined && (
          <>
            <div className="response-meta response-success">
              <span>
                <CheckCircle2 size={16} /> HTTP {result.status}
              </span>
              <span>
                <Clock3 size={15} /> {result.durationMs} ms
              </span>
            </div>
            <div className="resource-list">{children(result.data)}</div>
          </>
        )}

        {result && !isLoading && !result.ok && (
          <div className="response-error">
            <CircleAlert size={22} />
            <div>
              <strong>
                {result.status ? `HTTP ${result.status}` : "Sem conexão"}
              </strong>
              <span>{result.error}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

export default function App() {
  const [mode, setMode] = useState<TrafficMode>("direct");
  const [ordersResult, setOrdersResult] = useState<RequestResult<
    Order[]
  > | null>(null);
  const [customersResult, setCustomersResult] = useState<RequestResult<
    Customer[]
  > | null>(null);
  const [ordersLoading, setOrdersLoading] = useState(false);
  const [customersLoading, setCustomersLoading] = useState(false);
  const [history, setHistory] = useState<ActivityEntry[]>([]);

  const isRunning = ordersLoading || customersLoading;
  const successfulRequests = history.filter((entry) => entry.ok).length;
  const averageDuration = history.length
    ? Math.round(
        history.reduce((total, entry) => total + entry.durationMs, 0) /
          history.length,
      )
    : 0;

  function recordActivity(
    service: ServiceName,
    result: RequestResult<unknown>,
  ) {
    setHistory((current) =>
      [
        {
          durationMs: result.durationMs,
          endpoint: result.endpoint,
          id: crypto.randomUUID(),
          mode,
          ok: result.ok,
          requestedAt: result.requestedAt,
          service,
          status: result.status,
        },
        ...current,
      ].slice(0, 10),
    );
  }

  async function runOrders() {
    setOrdersLoading(true);
    const result = await requestResource<Order[]>("orders", mode);
    setOrdersResult(result);
    recordActivity("orders", result);
    setOrdersLoading(false);
  }

  async function runCustomers() {
    setCustomersLoading(true);
    const result = await requestResource<Customer[]>("customers", mode);
    setCustomersResult(result);
    recordActivity("customers", result);
    setCustomersLoading(false);
  }

  async function runAll() {
    await Promise.all([runOrders(), runCustomers()]);
  }

  function selectMode(nextMode: TrafficMode) {
    setMode(nextMode);
    setOrdersResult(null);
    setCustomersResult(null);
  }

  function resetConsole() {
    setOrdersResult(null);
    setCustomersResult(null);
    setHistory([]);
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-mark">
            <Network size={23} />
          </span>
          <div>
            <strong>Gateway Lab</strong>
            <span>Traffic Console</span>
          </div>
        </div>
        <div className="phase-badge">
          <i />
          Fase 02 · baseline
        </div>
      </header>

      <main>
        <section className="console-heading">
          <div>
            <span className="section-kicker">Laboratório de tráfego</span>
            <h1>Quem conhece os endereços?</h1>
          </div>
          <div className="mode-switch" role="group" aria-label="Modo de acesso">
            <button
              type="button"
              className={mode === "direct" ? "active" : ""}
              aria-pressed={mode === "direct"}
              onClick={() => selectMode("direct")}
            >
              <Cable size={17} />
              Direto
            </button>
            <button
              type="button"
              className={mode === "gateway" ? "active" : ""}
              aria-pressed={mode === "gateway"}
              onClick={() => selectMode("gateway")}
            >
              <Router size={17} />
              Via Kong
            </button>
          </div>
        </section>

        <Topology mode={mode} />

        <section className="metrics-strip" aria-label="Métricas da sessão">
          <div>
            <span>Modo</span>
            <strong>{mode === "direct" ? "Direto" : "Kong"}</strong>
          </div>
          <div>
            <span>Executadas</span>
            <strong>{history.length}</strong>
          </div>
          <div>
            <span>Sucessos</span>
            <strong>{successfulRequests}</strong>
          </div>
          <div>
            <span>Latência média</span>
            <strong>{averageDuration} ms</strong>
          </div>
          <div className="metrics-actions">
            <button
              className="secondary-action"
              type="button"
              onClick={resetConsole}
              disabled={isRunning || history.length === 0}
              title="Limpar console"
            >
              <RefreshCw size={17} />
              Limpar
            </button>
            <button
              className="primary-action"
              type="button"
              onClick={() => void runAll()}
              disabled={isRunning}
            >
              {isRunning ? (
                <LoaderCircle className="spinner" size={17} />
              ) : (
                <Play size={17} fill="currentColor" />
              )}
              Executar ambos
            </button>
          </div>
        </section>

        <section className="services-grid" aria-label="Respostas dos serviços">
          <ServicePanel
            icon={<ShoppingBag size={21} />}
            isLoading={ordersLoading}
            label="Orders API"
            mode={mode}
            onRun={() => void runOrders()}
            result={ordersResult}
            service="orders"
          >
            {(orders) =>
              orders.map((order) => (
                <div className="resource-row" key={order.id}>
                  <span className="resource-index">
                    #{String(order.id).padStart(2, "0")}
                  </span>
                  <strong>{order.product}</strong>
                  <span>{currency.format(order.amount)}</span>
                </div>
              ))
            }
          </ServicePanel>

          <ServicePanel
            icon={<Users size={21} />}
            isLoading={customersLoading}
            label="Customers API"
            mode={mode}
            onRun={() => void runCustomers()}
            result={customersResult}
            service="customers"
          >
            {(customers) =>
              customers.map((customer) => (
                <div className="resource-row" key={customer.id}>
                  <span className="resource-index">
                    #{String(customer.id).padStart(2, "0")}
                  </span>
                  <strong>{customer.name}</strong>
                  <span>{customer.email}</span>
                </div>
              ))
            }
          </ServicePanel>
        </section>

        <section className="activity-log" aria-labelledby="activity-title">
          <header>
            <div>
              <span className="section-kicker">Observabilidade local</span>
              <h2 id="activity-title">Últimas requisições</h2>
            </div>
            <span className="log-count">
              {history.length.toString().padStart(2, "0")}
            </span>
          </header>

          {history.length ? (
            <div className="activity-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Horário</th>
                    <th>Modo</th>
                    <th>Serviço</th>
                    <th>Destino</th>
                    <th>HTTP</th>
                    <th>Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((entry) => (
                    <tr key={entry.id}>
                      <td>{time.format(entry.requestedAt)}</td>
                      <td>
                        <span className={`mode-tag mode-tag-${entry.mode}`}>
                          {entry.mode === "direct" ? "Direto" : "Kong"}
                        </span>
                      </td>
                      <td>
                        {entry.service === "orders" ? "Orders" : "Customers"}
                      </td>
                      <td>
                        <code>{entry.endpoint}</code>
                      </td>
                      <td>
                        <span
                          className={`status-dot ${entry.ok ? "status-ok" : "status-error"}`}
                        />
                        {entry.status ?? "ERR"}
                      </td>
                      <td>{entry.durationMs} ms</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="log-empty">Nenhuma execução registrada.</div>
          )}
        </section>
      </main>

      <footer>
        <span>Gateway Lab · Full Cycle</span>
        <span>Browser → HTTP → Serviços</span>
      </footer>
    </div>
  );
}
