import { useState } from "react";
import { Clock3, Copy, Network, Play, Route } from "lucide-react";
import { compareIngresses, type IngressResult } from "./api/ingressLab";

export function IngressLab() {
  const [results, setResults] = useState<IngressResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function compare() {
    setIsRunning(true);
    setError(null);
    try {
      setResults(await compareIngresses());
    } catch {
      setError(
        "The Istio gateway is unavailable. Start both port-forwards on ports 14173 and 14174.",
      );
    } finally {
      setIsRunning(false);
    }
  }

  return (
    <div className="ingress-view">
      <header className="topbar ingress-topbar">
        <div>
          <span className="eyebrow">North-south architecture</span>
          <h1>Gateway comparison</h1>
        </div>
        <button
          className="primary-action"
          disabled={isRunning}
          type="button"
          onClick={() => void compare()}
        >
          <Play size={17} /> {isRunning ? "Comparing…" : "Compare paths"}
        </button>
      </header>
      <section className="policy-explanation">
        <div>
          <span className="eyebrow">Primary edge</span>
          <strong>Kong owns public API policies.</strong>
          <p>
            JWT, ACL, rate limiting, consumer identity, and correlation are
            enforced before application capacity.
          </p>
        </div>
        <div>
          <span className="eyebrow">Comparative entry</span>
          <strong>Istio Gateway exposes the mesh directly.</strong>
          <p>
            It reuses mesh routing and telemetry, but is isolated here as a
            teaching path rather than replacing Kong.
          </p>
        </div>
      </section>
      {error ? (
        <div className="gateway-note" role="alert">
          {error}
        </div>
      ) : null}
      <section className="ingress-comparison">
        {(["Kong", "Istio"] as const).map((ingress) => {
          const result = results.find((item) => item.ingress === ingress);
          return (
            <article
              className={`ingress-card ingress-${ingress.toLowerCase()}`}
              key={ingress}
            >
              <div className="distribution-heading">
                <div>
                  <span className="eyebrow">
                    {ingress === "Kong" ? "Edge gateway" : "Mesh gateway"}
                  </span>
                  <h2>{ingress}</h2>
                </div>
                <Network size={24} />
              </div>
              <div className="ingress-route">
                <Route size={15} />
                <span>
                  {result?.route ??
                    (ingress === "Kong"
                      ? "/gateway/orders"
                      : "127.0.0.1.nip.io:14174/api/orders")}
                </span>
              </div>
              <dl>
                <div>
                  <dt>HTTP</dt>
                  <dd>{result?.status ?? "—"}</dd>
                </div>
                <div>
                  <dt>Total latency</dt>
                  <dd>{result ? `${result.durationMs} ms` : "—"}</dd>
                </div>
                <div>
                  <dt>Proxy latency</dt>
                  <dd>
                    {result?.gatewayLatencyMs
                      ? `${result.gatewayLatencyMs} ms`
                      : "—"}
                  </dd>
                </div>
                <div>
                  <dt>Proxy evidence</dt>
                  <dd>{result?.proxyHeader ?? "—"}</dd>
                </div>
              </dl>
              {result ? (
                <button
                  className="correlation-copy"
                  type="button"
                  onClick={() =>
                    void navigator.clipboard.writeText(result.correlationId)
                  }
                >
                  <Copy size={14} />
                  <span>{result.correlationId}</span>
                </button>
              ) : null}
              <div className="ingress-observability">
                <Clock3 size={15} />
                Both paths remain visible in Istio telemetry; only Kong adds
                edge policy metrics.
              </div>
            </article>
          );
        })}
      </section>
      <p className="gateway-footnote">
        The Istio route is also available as
        `http://istio.meshcommerce.local:14174` when that hostname resolves to
        127.0.0.1.
      </p>
    </div>
  );
}
