import { useEffect, useRef, useState } from "react";
import {
  CircleCheck,
  CircleX,
  Clock3,
  Gauge,
  Play,
  RotateCcw,
  ShieldAlert,
  Square,
} from "lucide-react";
import {
  probeGateway,
  type GatewayProbeResult,
} from "./api/gatewayLab";

function summarize(results: GatewayProbeResult[]) {
  return {
    allowed: results.filter((result) => result.allowed).length,
    blocked: results.filter((result) => result.blocked).length,
    bypassed: results.filter(
      (result) => result.status > 0 && !result.gatewayConfigured,
    ).length,
  };
}

function getOutcome(result: GatewayProbeResult) {
  if (result.blocked) {
    return "Blocked";
  }

  if (result.allowed) {
    return "Allowed";
  }

  if (!result.gatewayConfigured && result.status > 0) {
    return "Bypassed";
  }

  return "Unavailable";
}

export function GatewayLab() {
  const [requestCount, setRequestCount] = useState(8);
  const [intervalMs, setIntervalMs] = useState(150);
  const [results, setResults] = useState<GatewayProbeResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      controllerRef.current?.abort();
    },
    [],
  );

  const summary = summarize(results);
  const latestResult = results.at(-1);

  async function runExperiment() {
    const controller = new AbortController();
    controllerRef.current = controller;
    setResults([]);
    setIsRunning(true);

    try {
      for (let requestId = 1; requestId <= requestCount; requestId += 1) {
        const result = await probeGateway(requestId, controller.signal);
        setResults((currentResults) => [...currentResults, result]);

        if (requestId < requestCount && !controller.signal.aborted) {
          await new Promise((resolve) =>
            window.setTimeout(resolve, intervalMs),
          );
        }
      }
    } catch (error) {
      if (!controller.signal.aborted) {
        throw error;
      }
    } finally {
      setIsRunning(false);
      controllerRef.current = null;
    }
  }

  function stopExperiment() {
    controllerRef.current?.abort();
  }

  function resetExperiment() {
    controllerRef.current?.abort();
    setResults([]);
  }

  return (
    <div className="gateway-view">
      <header className="topbar gateway-topbar">
        <div>
          <span className="eyebrow">Kong · Traffic control</span>
          <h1>Rate limiting</h1>
        </div>
        <div className="operation-actions">
          <button
            className="secondary-action"
            type="button"
            onClick={resetExperiment}
            disabled={isRunning}
          >
            <RotateCcw size={17} />
            Clear
          </button>
          {isRunning ? (
            <button
              className="danger-action"
              type="button"
              onClick={stopExperiment}
            >
              <Square size={16} fill="currentColor" />
              Stop
            </button>
          ) : (
            <button
              className="primary-action"
              type="button"
              onClick={runExperiment}
            >
              <Play size={17} fill="currentColor" />
              Run burst
            </button>
          )}
        </div>
      </header>

      <section className="traffic-path" aria-label="Gateway traffic path">
        <div className="traffic-node">
          <span>Client</span>
          <strong>Browser</strong>
        </div>
        <div className="traffic-link">
          <span>Edge traffic</span>
          <i aria-hidden="true" />
        </div>
        <div className="traffic-node traffic-node-service">
          <span>API gateway</span>
          <strong>Kong proxy</strong>
        </div>
        <div className="traffic-link">
          <span>KongPlugin</span>
          <i aria-hidden="true" />
        </div>
        <div className="traffic-destinations">
          <span className="destination destination-healthy">
            within quota · Orders API
          </span>
          <span className="destination destination-faulty">
            over quota · HTTP 429
          </span>
        </div>
      </section>

      <section className="policy-explanation" aria-label="Rate limit use case">
        <div>
          <span className="eyebrow">Problem</span>
          <strong>One client can flood an expensive public endpoint.</strong>
          <p>
            Without an edge policy, every request consumes application and
            database capacity before the API can defend itself.
          </p>
        </div>
        <div>
          <span className="eyebrow">Gateway policy</span>
          <strong>Kong allows five requests per IP each minute.</strong>
          <p>
            Excess traffic is rejected with HTTP 429 before it reaches the
            Orders API, preserving capacity for other clients.
          </p>
        </div>
      </section>

      <section
        className="experiment-controls"
        aria-label="Rate limit experiment configuration"
      >
        <label className="range-control">
          <span>
            Burst size <strong>{requestCount}</strong>
          </span>
          <input
            type="range"
            min="6"
            max="12"
            step="1"
            value={requestCount}
            onChange={(event) => setRequestCount(Number(event.target.value))}
            disabled={isRunning}
          />
        </label>
        <label className="range-control">
          <span>
            Interval <strong>{intervalMs} ms</strong>
          </span>
          <input
            type="range"
            min="100"
            max="500"
            step="50"
            value={intervalMs}
            onChange={(event) => setIntervalMs(Number(event.target.value))}
            disabled={isRunning}
          />
        </label>
      </section>

      <section className="experiment-metrics" aria-label="Gateway results">
        <div className="experiment-metric">
          <Gauge size={19} />
          <span>Executed</span>
          <strong>{results.length}</strong>
        </div>
        <div className="experiment-metric metric-success">
          <CircleCheck size={19} />
          <span>Allowed</span>
          <strong>{summary.allowed}</strong>
        </div>
        <div className="experiment-metric metric-failure">
          <CircleX size={19} />
          <span>Blocked</span>
          <strong>{summary.blocked}</strong>
        </div>
        <div className="experiment-metric">
          <ShieldAlert size={19} />
          <span>Remaining</span>
          <strong>
            {latestResult?.remaining !== null &&
            latestResult?.remaining !== undefined
              ? `${latestResult.remaining} / ${latestResult.limit ?? 5}`
              : "—"}
          </strong>
        </div>
        <div className="experiment-metric">
          <Clock3 size={19} />
          <span>Reset</span>
          <strong>
            {latestResult?.resetSeconds !== null &&
            latestResult?.resetSeconds !== undefined
              ? `${latestResult.resetSeconds}s`
              : "—"}
          </strong>
        </div>
      </section>

      {summary.bypassed > 0 && (
        <div className="gateway-note" role="alert">
          Kong headers were not detected. Run the Kubernetes stack and open
          MeshCommerce through the Kong proxy to execute this experiment.
        </div>
      )}

      <section
        className="request-stream"
        aria-labelledby="gateway-request-stream-title"
      >
        <div className="request-stream-header">
          <div>
            <span className="eyebrow">Current burst</span>
            <h2 id="gateway-request-stream-title">Gateway decisions</h2>
          </div>
          <span className={`run-state ${isRunning ? "run-state-active" : ""}`}>
            {isRunning
              ? "Running"
              : results.length
                ? "Completed"
                : "Waiting"}
          </span>
        </div>

        <div className="request-timeline" aria-live="polite">
          {results.length ? (
            results.map((result) => (
              <div
                className={`request-pulse ${result.allowed ? "request-pulse-success" : "request-pulse-failure"}`}
                key={result.id}
                title={`#${result.id} · ${getOutcome(result)} · remaining ${result.remaining ?? "unknown"}`}
              >
                <span>{result.id}</span>
                <strong>{result.status || "ERR"}</strong>
              </div>
            ))
          ) : (
            <div className="stream-empty">
              Run a burst to observe the quota being consumed.
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="request-table-wrap">
            <table className="request-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>HTTP</th>
                  <th>Decision</th>
                  <th>Remaining</th>
                  <th>Kong latency</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {[...results].reverse().map((result) => (
                  <tr key={`gateway-detail-${result.id}`}>
                    <td>{String(result.id).padStart(2, "0")}</td>
                    <td>
                      <span
                        className={`http-status ${result.allowed ? "http-ok" : "http-error"}`}
                      >
                        {result.status || "ERR"}
                      </span>
                    </td>
                    <td>{getOutcome(result)}</td>
                    <td>{result.remaining ?? "—"}</td>
                    <td>
                      {result.gatewayLatencyMs !== null
                        ? `${result.gatewayLatencyMs} ms`
                        : "—"}
                    </td>
                    <td>{result.durationMs} ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="gateway-footnote">
        Clear resets only this dashboard. Kong owns the quota; if a new burst
        starts with HTTP 429, wait for the reset value shown above.
      </p>
    </div>
  );
}
