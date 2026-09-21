import { useState } from "react";
import { CircleCheck, CircleX, Clock3, Copy, HeartPulse, RotateCcw } from "lucide-react";
import {
  probeResilience,
  type ResilienceScenario,
  type TrafficProbeResult,
} from "./api/trafficLabs";

const scenarios: { key: ResilienceScenario; title: string; detail: string }[] = [
  { key: "baseline", title: "Healthy", detail: "Normal canary route" },
  { key: "retry", title: "Transient 503", detail: "Envoy retries and recovers" },
  { key: "timeout", title: "Slow upstream", detail: "1s route timeout" },
  { key: "delay", title: "Injected delay", detail: "Istio adds fixed 2s" },
  { key: "abort", title: "Injected abort", detail: "Istio returns HTTP 503" },
];

export function ResilienceLab() {
  const [results, setResults] = useState<TrafficProbeResult[]>([]);
  const [running, setRunning] = useState<ResilienceScenario | null>(null);

  async function run(scenario: ResilienceScenario) {
    setRunning(scenario);
    const result = await probeResilience(scenario, results.length + 1);
    setResults((current) => [...current, result]);
    setRunning(null);
  }

  return (
    <div className="resilience-view">
      <header className="topbar resilience-topbar"><div><span className="eyebrow">Istio · Failure control</span><h1>Resilience Lab</h1></div><button className="secondary-action" type="button" onClick={() => setResults([])} disabled={running !== null}><RotateCcw size={17} /> Clear</button></header>
      <section className="policy-explanation"><div><span className="eyebrow">Retry policy</span><strong>Up to three attempts, 1s per try.</strong><p>Only transient 5xx and connection failures are retried. Payment writes remain protected by Idempotency-Key.</p></div><div><span className="eyebrow">Fault policy</span><strong>Failures are opt-in by dedicated headers.</strong><p>Injected faults do not affect regular traffic and intentionally bypass upstream capacity.</p></div></section>
      <section className="resilience-scenarios">
        {scenarios.map((scenario) => <button className={`resilience-card resilience-${scenario.key}`} disabled={running !== null} type="button" key={scenario.key} onClick={() => void run(scenario.key)}><HeartPulse size={20} /><strong>{scenario.title}</strong><span>{scenario.detail}</span><small>{running === scenario.key ? "Running…" : "Run scenario"}</small></button>)}
      </section>
      <section className="request-stream">
        <div className="request-stream-header"><div><span className="eyebrow">Recovery timeline</span><h2>Browser-observed outcomes</h2></div><span className={`run-state ${running ? "run-state-active" : ""}`}>{running ? "Running" : "Ready"}</span></div>
        <div className="resilience-timeline">{results.length ? results.map((result) => <article className={`resilience-result ${result.ok ? "result-ok" : "result-error"}`} key={result.id}>{result.ok ? <CircleCheck size={18} /> : <CircleX size={18} />}<div><strong>{result.scenario} · HTTP {result.status || "ERR"}</strong><span><Clock3 size={13} /> {result.durationMs} ms · attempt {result.attempt} · {result.version}</span></div><button type="button" title="Copy Correlation ID" onClick={() => void navigator.clipboard.writeText(result.correlationId)}><Copy size={14} /></button></article>) : <div className="stream-empty">Choose a scenario to see delay, retry, timeout, and fault outcomes.</div>}</div>
      </section>
      <p className="gateway-footnote">A fault injected by Envoy is not an application 5xx and is shown separately from the recoverable transient failure.</p>
    </div>
  );
}