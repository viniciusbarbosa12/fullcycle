import { useEffect, useRef, useState } from "react";
import {
  Activity,
  CircleCheck,
  CircleX,
  Clock3,
  Play,
  RotateCcw,
  ShieldCheck,
  Square,
} from "lucide-react";
import { probePayments, type PaymentProbeResult } from "./api/meshLab";

function summarize(results: PaymentProbeResult[]) {
  const successes = results.filter((result) => result.ok).length;
  const failures = results.length - successes;
  const averageDuration = results.length
    ? Math.round(
        results.reduce((total, result) => total + result.durationMs, 0) /
          results.length,
      )
    : 0;

  return {
    successes,
    failures,
    averageDuration,
    successRate: results.length
      ? Math.round((successes / results.length) * 100)
      : 0,
  };
}

export function OperationLab() {
  const [requestCount, setRequestCount] = useState(30);
  const [intervalMs, setIntervalMs] = useState(150);
  const [results, setResults] = useState<PaymentProbeResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      controllerRef.current?.abort();
    },
    [],
  );

  const summary = summarize(results);

  async function runExperiment() {
    const controller = new AbortController();
    controllerRef.current = controller;
    setResults([]);
    setIsRunning(true);

    try {
      for (let requestId = 1; requestId <= requestCount; requestId += 1) {
        const result = await probePayments(requestId, controller.signal);
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

  function resetExperiments() {
    controllerRef.current?.abort();
    setResults([]);
  }

  return (
    <div className="operation-view">
      <header className="topbar operation-topbar">
        <div>
          <span className="eyebrow">Istio · Resilience</span>
          <h1>Circuit breaker</h1>
        </div>
        <div className="operation-actions">
          <button
            className="secondary-action"
            type="button"
            onClick={resetExperiments}
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
              Run
            </button>
          )}
        </div>
      </header>

      <section className="traffic-path" aria-label="Traffic path">
        <div className="traffic-node">
          <span>Source</span>
          <strong>Frontend</strong>
        </div>
        <div className="traffic-link">
          <span>Envoy</span>
          <i aria-hidden="true" />
        </div>
        <div className="traffic-node traffic-node-service">
          <span>Service</span>
          <strong>payments-api:8080</strong>
        </div>
        <div className="traffic-link">
          <span>Load balancing</span>
          <i aria-hidden="true" />
        </div>
        <div className="traffic-destinations">
          <span className="destination destination-healthy">v1 · healthy</span>
          <span className="destination destination-faulty">
            faulty · HTTP 500
          </span>
        </div>
      </section>

      <section
        className="experiment-controls"
        aria-label="Experiment configuration"
      >
        <label className="range-control">
          <span>
            Requests <strong>{requestCount}</strong>
          </span>
          <input
            type="range"
            min="10"
            max="60"
            step="10"
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
            max="1000"
            step="50"
            value={intervalMs}
            onChange={(event) => setIntervalMs(Number(event.target.value))}
            disabled={isRunning}
          />
        </label>
      </section>

      <section className="experiment-metrics" aria-label="Current results">
        <div className="experiment-metric">
          <Activity size={19} />
          <span>Executed</span>
          <strong>{results.length}</strong>
        </div>
        <div className="experiment-metric metric-success">
          <CircleCheck size={19} />
          <span>Successes</span>
          <strong>{summary.successes}</strong>
        </div>
        <div className="experiment-metric metric-failure">
          <CircleX size={19} />
          <span>Failures</span>
          <strong>{summary.failures}</strong>
        </div>
        <div className="experiment-metric">
          <ShieldCheck size={19} />
          <span>Success rate</span>
          <strong>{summary.successRate}%</strong>
        </div>
        <div className="experiment-metric">
          <Clock3 size={19} />
          <span>Average latency</span>
          <strong>{summary.averageDuration} ms</strong>
        </div>
      </section>

      <section
        className="request-stream"
        aria-labelledby="request-stream-title"
      >
        <div className="request-stream-header">
          <div>
            <span className="eyebrow">Current run</span>
            <h2 id="request-stream-title">Request stream</h2>
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
                className={`request-pulse ${result.ok ? "request-pulse-success" : "request-pulse-failure"}`}
                key={result.id}
                title={`#${result.id} · HTTP ${result.status || "network error"} · ${result.instance}`}
              >
                <span>{result.id}</span>
                <strong>{result.status || "ERR"}</strong>
              </div>
            ))
          ) : (
            <div className="stream-empty">
              No requests were recorded in this run.
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
                  <th>Instance</th>
                  <th>Duration</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {[...results]
                  .reverse()
                  .slice(0, 12)
                  .map((result) => (
                    <tr key={`detail-${result.id}`}>
                      <td>{String(result.id).padStart(2, "0")}</td>
                      <td>
                        <span
                          className={`http-status ${result.ok ? "http-ok" : "http-error"}`}
                        >
                          {result.status || "ERR"}
                        </span>
                      </td>
                      <td>{result.instance}</td>
                      <td>{result.durationMs} ms</td>
                      <td>
                        {new Intl.DateTimeFormat("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                        }).format(new Date(result.timestamp))}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
