import { useEffect, useRef, useState } from "react";
import { Copy, GitBranch, Play, RotateCcw, Square } from "lucide-react";
import {
  probeRelease,
  type CanaryWeight,
  type TrafficProbeResult,
} from "./api/trafficLabs";

const stages: CanaryWeight[] = [0, 20, 50, 100];

function average(results: TrafficProbeResult[], version: string) {
  const matching = results.filter((result) => result.version === version);
  return matching.length
    ? Math.round(
        matching.reduce((sum, result) => sum + result.durationMs, 0) /
          matching.length,
      )
    : 0;
}

export function ReleaseLab() {
  const [weight, setWeight] = useState<CanaryWeight>(20);
  const [preview, setPreview] = useState(false);
  const [requestCount, setRequestCount] = useState(40);
  const [results, setResults] = useState<TrafficProbeResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => () => controllerRef.current?.abort(), []);
  const v1 = results.filter((result) => result.version === "v1").length;
  const v2 = results.filter((result) => result.version === "v2").length;
  const observedV2 = results.length
    ? Math.round((v2 / results.length) * 100)
    : 0;

  async function runBurst() {
    const controller = new AbortController();
    controllerRef.current = controller;
    setResults([]);
    setIsRunning(true);
    let nextId = 1;
    async function worker() {
      while (nextId <= requestCount && !controller.signal.aborted) {
        const id = nextId++;
        const result = await probeRelease(
          id,
          weight,
          preview,
          controller.signal,
        );
        setResults((current) => [...current, result]);
      }
    }
    try {
      await Promise.allSettled(Array.from({ length: 5 }, worker));
    } finally {
      setIsRunning(false);
      controllerRef.current = null;
    }
  }

  return (
    <div className="release-view">
      <header className="topbar release-topbar">
        <div>
          <span className="eyebrow">Istio · Progressive delivery</span>
          <h1>Release Lab</h1>
        </div>
        <div className="operation-actions">
          <button
            className="secondary-action"
            disabled={isRunning}
            type="button"
            onClick={() => setResults([])}
          >
            <RotateCcw size={17} /> Clear
          </button>
          {isRunning ? (
            <button
              className="danger-action"
              type="button"
              onClick={() => controllerRef.current?.abort()}
            >
              <Square size={16} /> Stop
            </button>
          ) : (
            <button
              className="primary-action"
              type="button"
              onClick={() => void runBurst()}
            >
              <Play size={17} /> Run burst
            </button>
          )}
        </div>
      </header>

      <section className="release-controls">
        <div>
          <span className="eyebrow">Canary progression</span>
          <div className="stage-selector">
            {stages.map((stage) => (
              <button
                className={weight === stage ? "stage-active" : ""}
                type="button"
                key={stage}
                disabled={isRunning}
                onClick={() => setWeight(stage)}
              >
                {stage}% v2
              </button>
            ))}
          </div>
        </div>
        <label className="preview-toggle">
          <input
            type="checkbox"
            checked={preview}
            disabled={isRunning}
            onChange={(event) => setPreview(event.target.checked)}
          />
          <span>
            <strong>Preview header</strong>Force every request to v2
          </span>
        </label>
        <label className="range-control">
          <span>
            Burst size <strong>{requestCount}</strong>
          </span>
          <input
            type="range"
            min="20"
            max="100"
            step="20"
            value={requestCount}
            disabled={isRunning}
            onChange={(event) => setRequestCount(Number(event.target.value))}
          />
        </label>
      </section>

      <section className="distribution-card">
        <div className="distribution-heading">
          <div>
            <span className="eyebrow">Observed distribution</span>
            <h2>
              {results.length
                ? `${observedV2}% reached v2`
                : "Waiting for traffic"}
            </h2>
          </div>
          <GitBranch size={24} />
        </div>
        <div
          className="distribution-bar"
          aria-label={`${v1} v1 and ${v2} v2 responses`}
        >
          <span
            className="distribution-v1"
            style={{
              width: `${results.length ? (v1 / results.length) * 100 : 100}%`,
            }}
          />
          <span
            className="distribution-v2"
            style={{
              width: `${results.length ? (v2 / results.length) * 100 : 0}%`,
            }}
          />
        </div>
        <div className="distribution-legend">
          <span>
            <i className="legend-v1" />
            v1 · {v1} · {average(results, "v1")} ms avg
          </span>
          <span>
            <i className="legend-v2" />
            v2 · {v2} · {average(results, "v2")} ms avg
          </span>
          <strong>Configured: {preview ? 100 : weight}% v2</strong>
        </div>
      </section>

      <section className="request-stream">
        <div className="request-stream-header">
          <div>
            <span className="eyebrow">Per request</span>
            <h2>Version decisions</h2>
          </div>
          <span className={`run-state ${isRunning ? "run-state-active" : ""}`}>
            {isRunning ? "Running" : `${results.length} completed`}
          </span>
        </div>
        <div className="request-timeline">
          {results.length ? (
            results.map((result) => (
              <div
                className={`request-pulse release-pulse-${result.version}`}
                key={result.id}
                title={result.correlationId}
              >
                <span>{result.id}</span>
                <strong>{result.version}</strong>
              </div>
            ))
          ) : (
            <div className="stream-empty">
              Run a burst to compare configured and observed traffic.
            </div>
          )}
        </div>
        {results.length ? (
          <div className="request-table-wrap">
            <table className="request-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Version</th>
                  <th>HTTP</th>
                  <th>Latency</th>
                  <th>Correlation ID</th>
                </tr>
              </thead>
              <tbody>
                {[...results]
                  .reverse()
                  .slice(0, 15)
                  .map((result) => (
                    <tr key={`release-${result.id}`}>
                      <td>{result.id}</td>
                      <td>{result.version}</td>
                      <td>{result.status || "ERR"}</td>
                      <td>{result.durationMs} ms</td>
                      <td>
                        <button
                          className="correlation-copy"
                          type="button"
                          onClick={() =>
                            void navigator.clipboard.writeText(
                              result.correlationId,
                            )
                          }
                        >
                          <Copy size={13} />
                          <span>{result.correlationId}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </section>
    </div>
  );
}
