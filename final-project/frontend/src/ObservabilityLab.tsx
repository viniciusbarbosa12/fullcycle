import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ChartNoAxesCombined,
  CircleCheck,
  CircleX,
  Clock3,
  ExternalLink,
  Gauge,
  Play,
  RotateCcw,
  Square,
  Timer,
  TriangleAlert,
} from "lucide-react";
import {
  probeObservability,
  type ObservabilityProbeResult,
  type ObservabilityScenario,
} from "./api/observabilityLab";

type ScenarioDefinition = {
  title: string;
  description: string;
  requestCount: number;
  concurrency: number;
};

const scenarios: Record<ObservabilityScenario, ScenarioDefinition> = {
  baseline: {
    title: "Healthy baseline",
    description: "Send regular Orders traffic and establish normal latency.",
    requestCount: 60,
    concurrency: 10,
  },
  latency: {
    title: "Latency spike",
    description: "Add one second of latency to roughly 20% of Payments calls.",
    requestCount: 100,
    concurrency: 20,
  },
  errors: {
    title: "HTTP 5xx burst",
    description: "Return deterministic HTTP 500 responses from the Istio proxy.",
    requestCount: 40,
    concurrency: 10,
  },
};

const grafanaUrl =
  import.meta.env.VITE_GRAFANA_URL ??
  "http://localhost:14300/d/meshcommerce-golden-signals?refresh=5s";
const prometheusUrl =
  import.meta.env.VITE_PROMETHEUS_URL ?? "http://localhost:19090";

function percentile(results: ObservabilityProbeResult[], value: number) {
  if (!results.length) {
    return 0;
  }

  const durations = results
    .map((result) => result.durationMs)
    .sort((left, right) => left - right);
  const index = Math.max(0, Math.ceil(value * durations.length) - 1);
  return durations[index];
}

function summarize(results: ObservabilityProbeResult[]) {
  const successes = results.filter((result) => result.ok).length;
  const failures = results.length - successes;
  const slowRequests = results.filter((result) => result.slow).length;
  const averageDuration = results.length
    ? Math.round(
        results.reduce((total, result) => total + result.durationMs, 0) /
          results.length,
      )
    : 0;

  return {
    successes,
    failures,
    slowRequests,
    averageDuration,
    p50: percentile(results, 0.5),
    p95: percentile(results, 0.95),
    p99: percentile(results, 0.99),
  };
}

function pulseClassName(result: ObservabilityProbeResult) {
  if (!result.ok) {
    return "request-pulse-failure";
  }

  return result.slow ? "request-pulse-slow" : "request-pulse-success";
}

export function ObservabilityLab() {
  const [activeScenario, setActiveScenario] =
    useState<ObservabilityScenario>("baseline");
  const [results, setResults] = useState<ObservabilityProbeResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [runError, setRunError] = useState<string | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(
    () => () => {
      controllerRef.current?.abort();
    },
    [],
  );

  const summary = summarize(results);
  const activeDefinition = scenarios[activeScenario];

  async function runExperiment(scenario: ObservabilityScenario) {
    const definition = scenarios[scenario];
    const controller = new AbortController();
    let nextRequestId = 1;

    controllerRef.current = controller;
    setActiveScenario(scenario);
    setResults([]);
    setRunError(null);
    setIsRunning(true);

    async function worker() {
      while (!controller.signal.aborted) {
        const requestId = nextRequestId;
        nextRequestId += 1;

        if (requestId > definition.requestCount) {
          return;
        }

        const result = await probeObservability(
          scenario,
          requestId,
          controller.signal,
        );
        setResults((currentResults) => [...currentResults, result]);
      }
    }

    try {
      await Promise.all(
        Array.from({ length: definition.concurrency }, () => worker()),
      );
    } catch (error) {
      if (!controller.signal.aborted) {
        setRunError(
          error instanceof Error
            ? error.message
            : "The observability experiment failed.",
        );
      }
    } finally {
      if (controllerRef.current === controller) {
        controllerRef.current = null;
        setIsRunning(false);
      }
    }
  }

  function stopExperiment() {
    controllerRef.current?.abort();
  }

  function resetExperiment() {
    controllerRef.current?.abort();
    setResults([]);
    setRunError(null);
  }

  return (
    <div className="observability-view">
      <header className="topbar observability-topbar">
        <div>
          <span className="eyebrow">Prometheus · Grafana · Istio</span>
          <h1>Observability lab</h1>
        </div>
        <div className="operation-actions observability-actions">
          <button
            className="secondary-action"
            type="button"
            onClick={resetExperiment}
            disabled={isRunning}
          >
            <RotateCcw size={17} />
            Clear
          </button>
          {isRunning && (
            <button
              className="danger-action"
              type="button"
              onClick={stopExperiment}
            >
              <Square size={16} fill="currentColor" />
              Stop
            </button>
          )}
        </div>
      </header>

      <section className="observability-path" aria-label="Telemetry flow">
        <div>
          <span>1 · Generate</span>
          <strong>Browser traffic</strong>
        </div>
        <i aria-hidden="true" />
        <div>
          <span>2 · Measure</span>
          <strong>Istio sidecars</strong>
        </div>
        <i aria-hidden="true" />
        <div>
          <span>3 · Store</span>
          <strong>Prometheus</strong>
        </div>
        <i aria-hidden="true" />
        <div>
          <span>4 · Investigate</span>
          <strong>Grafana</strong>
        </div>
      </section>

      <section className="observability-links" aria-label="Observability tools">
        <div>
          <ChartNoAxesCombined size={20} />
          <span>
            Open the live tools in another tab and keep the five-second refresh
            enabled while running a scenario.
          </span>
        </div>
        <nav aria-label="External observability links">
          <a href={grafanaUrl} target="_blank" rel="noreferrer">
            Grafana dashboard <ExternalLink size={15} />
          </a>
          <a
            href={`${prometheusUrl}/targets`}
            target="_blank"
            rel="noreferrer"
          >
            Prometheus targets <ExternalLink size={15} />
          </a>
          <a
            href={`${prometheusUrl}/alerts`}
            target="_blank"
            rel="noreferrer"
          >
            Prometheus alerts <ExternalLink size={15} />
          </a>
        </nav>
      </section>

      <section className="observability-scenarios" aria-label="Traffic scenarios">
        {(Object.entries(scenarios) as [
          ObservabilityScenario,
          ScenarioDefinition,
        ][]).map(([scenario, definition]) => (
          <button
            className={`scenario-card scenario-card-${scenario} ${
              activeScenario === scenario ? "scenario-card-active" : ""
            }`}
            type="button"
            key={scenario}
            onClick={() => void runExperiment(scenario)}
            disabled={isRunning}
          >
            <span className="scenario-icon" aria-hidden="true">
              {scenario === "baseline" ? (
                <CircleCheck size={20} />
              ) : scenario === "latency" ? (
                <Timer size={20} />
              ) : (
                <TriangleAlert size={20} />
              )}
            </span>
            <span>
              <strong>{definition.title}</strong>
              <small>{definition.description}</small>
            </span>
            <span className="scenario-run">
              <Play size={14} fill="currentColor" />
              {definition.requestCount} requests
            </span>
          </button>
        ))}
      </section>

      {runError && (
        <div className="page-alert" role="alert">
          <CircleX size={19} />
          <span>{runError}</span>
        </div>
      )}

      <section
        className="experiment-metrics observability-metrics"
        aria-label="Browser-observed results"
      >
        <div className="experiment-metric">
          <Activity size={19} />
          <span>Executed</span>
          <strong>
            {results.length}/{activeDefinition.requestCount}
          </strong>
        </div>
        <div className="experiment-metric metric-failure">
          <CircleX size={19} />
          <span>HTTP errors</span>
          <strong>{summary.failures}</strong>
        </div>
        <div className="experiment-metric metric-latency">
          <Clock3 size={19} />
          <span>Average</span>
          <strong>{summary.averageDuration} ms</strong>
        </div>
        <div className="experiment-metric">
          <Gauge size={19} />
          <span>p50</span>
          <strong>{summary.p50} ms</strong>
        </div>
        <div className="experiment-metric metric-latency">
          <Timer size={19} />
          <span>p95</span>
          <strong>{summary.p95} ms</strong>
        </div>
        <div className="experiment-metric metric-latency">
          <TriangleAlert size={19} />
          <span>p99 · slow</span>
          <strong>
            {summary.p99} ms · {summary.slowRequests}
          </strong>
        </div>
      </section>

      <section className="request-stream" aria-labelledby="observation-stream-title">
        <div className="request-stream-header">
          <div>
            <span className="eyebrow">Browser perspective</span>
            <h2 id="observation-stream-title">{activeDefinition.title}</h2>
          </div>
          <span className={`run-state ${isRunning ? "run-state-active" : ""}`}>
            {isRunning ? "Running" : results.length ? "Completed" : "Waiting"}
          </span>
        </div>

        <div className="request-timeline" aria-live="polite">
          {results.length ? (
            results.map((result) => (
              <div
                className={`request-pulse ${pulseClassName(result)}`}
                key={result.id}
                title={`#${result.id} · HTTP ${result.status || "network error"} · ${result.durationMs} ms`}
              >
                <span>{result.id}</span>
                <strong>{result.status || "ERR"}</strong>
              </div>
            ))
          ) : (
            <div className="stream-empty">
              Choose a scenario to produce observable traffic.
            </div>
          )}
        </div>

        {results.length > 0 && (
          <div className="request-table-wrap">
            <table className="request-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Scenario</th>
                  <th>HTTP</th>
                  <th>Duration</th>
                  <th>Observed at</th>
                </tr>
              </thead>
              <tbody>
                {[...results]
                  .sort((left, right) => right.id - left.id)
                  .slice(0, 12)
                  .map((result) => (
                    <tr key={`observation-${result.id}`}>
                      <td>{String(result.id).padStart(3, "0")}</td>
                      <td>{scenarios[result.scenario].title}</td>
                      <td>
                        <span
                          className={`http-status ${
                            result.ok ? "http-ok" : "http-error"
                          }`}
                        >
                          {result.status || "ERR"}
                        </span>
                      </td>
                      <td>
                        <span className={result.slow ? "duration-slow" : ""}>
                          {result.durationMs} ms
                        </span>
                      </td>
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

      <p className="observability-footnote">
        Browser percentiles measure the complete user path. Grafana uses Istio
        histogram buckets, so values can differ while describing the same event.
      </p>
    </div>
  );
}
