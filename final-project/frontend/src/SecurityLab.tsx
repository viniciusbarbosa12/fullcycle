import { useEffect, useState } from "react";
import {
  CircleCheck,
  CircleX,
  Copy,
  KeyRound,
  LogIn,
  LogOut,
  Play,
  ShieldCheck,
} from "lucide-react";
import {
  login,
  probeSecureOrders,
  type LabSession,
  type Persona,
  type SecurityProbeResult,
} from "./api/securityLab";

type Scenario = {
  expired?: boolean;
  expectedStatus: number;
  key: string;
  label: string;
  persona: Persona | "anonymous";
};

const scenarios: Scenario[] = [
  {
    expectedStatus: 401,
    key: "anonymous",
    label: "No token",
    persona: "anonymous",
  },
  {
    expired: true,
    expectedStatus: 401,
    key: "expired",
    label: "Expired token",
    persona: "operator",
  },
  {
    expectedStatus: 403,
    key: "viewer",
    label: "Viewer token",
    persona: "viewer",
  },
  {
    expectedStatus: 200,
    key: "operator",
    label: "Operator token",
    persona: "operator",
  },
];

function remainingSeconds(session: LabSession | null, now: number) {
  if (!session) return 0;
  return Math.max(0, Math.ceil((Date.parse(session.expiresAt) - now) / 1000));
}

export function SecurityLab() {
  const [session, setSession] = useState<LabSession | null>(null);
  const [results, setResults] = useState<Record<string, SecurityProbeResult>>(
    {},
  );
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [now, setNow] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const expiresIn = remainingSeconds(session, now);
  const expired = Boolean(session && expiresIn === 0);

  async function signIn(persona: Persona) {
    setIsBusy(true);
    setError(null);
    try {
      const nextSession = await login(persona);
      setSession(nextSession);
      setNow(Date.parse(nextSession.expiresAt) - 300_000);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Login failed.");
    } finally {
      setIsBusy(false);
    }
  }

  async function runScenario(scenario: Scenario) {
    setIsBusy(true);
    setError(null);
    try {
      const scenarioSession =
        scenario.persona === "anonymous"
          ? null
          : await login(scenario.persona, scenario.expired);
      if (scenarioSession && !scenario.expired) {
        setSession(scenarioSession);
        setNow(Date.parse(scenarioSession.expiresAt) - 300_000);
      }
      const result = await probeSecureOrders(scenarioSession?.accessToken);
      setResults((current) => ({ ...current, [scenario.key]: result }));
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Request failed.");
    } finally {
      setIsBusy(false);
    }
  }

  async function copyCorrelationId(value: string) {
    await navigator.clipboard.writeText(value);
  }

  return (
    <div className="security-view">
      <header className="topbar security-topbar">
        <div>
          <span className="eyebrow">Kong · Identity at the edge</span>
          <h1>Gateway Security</h1>
        </div>
        {session ? (
          <button
            className="secondary-action"
            type="button"
            onClick={() => setSession(null)}
          >
            <LogOut size={17} /> Logout
          </button>
        ) : null}
      </header>

      <section className="security-flow" aria-label="JWT authorization flow">
        <div>
          <span>Browser</span>
          <strong>Bearer JWT</strong>
        </div>
        <i>→</i>
        <div>
          <span>Kong</span>
          <strong>JWT signature</strong>
        </div>
        <i>→</i>
        <div>
          <span>ACL</span>
          <strong>orders-operator</strong>
        </div>
        <i>→</i>
        <div>
          <span>Upstream</span>
          <strong>Orders API</strong>
        </div>
      </section>

      <section className="security-session">
        <div>
          <span className="eyebrow">Educational identity issuer</span>
          <h2>{session ? `${session.persona} session` : "Signed out"}</h2>
          <p>Short-lived HS256 tokens exist only for this local lab.</p>
        </div>
        <div className="session-actions">
          <button
            className="secondary-action"
            disabled={isBusy}
            type="button"
            onClick={() => void signIn("viewer")}
          >
            <LogIn size={17} /> Login viewer
          </button>
          <button
            className="primary-action"
            disabled={isBusy}
            type="button"
            onClick={() => void signIn("operator")}
          >
            <KeyRound size={17} /> Login operator
          </button>
        </div>
        <dl className="session-details">
          <div>
            <dt>Status</dt>
            <dd className={expired ? "text-failure" : "text-success"}>
              {session ? (expired ? "Expired" : "Authenticated") : "Anonymous"}
            </dd>
          </div>
          <div>
            <dt>Roles</dt>
            <dd>{session?.roles.join(", ") ?? "—"}</dd>
          </div>
          <div>
            <dt>Scopes</dt>
            <dd>{session?.scopes.join(", ") ?? "—"}</dd>
          </div>
          <div>
            <dt>Expires</dt>
            <dd>{session ? `${expiresIn}s` : "—"}</dd>
          </div>
        </dl>
      </section>

      {error ? (
        <div className="gateway-note" role="alert">
          {error}
        </div>
      ) : null}

      <section
        className="security-scenarios"
        aria-label="Authorization scenarios"
      >
        {scenarios.map((scenario) => {
          const result = results[scenario.key];
          const passed = result?.status === scenario.expectedStatus;
          return (
            <article className="security-scenario" key={scenario.key}>
              <div className="scenario-heading">
                <span
                  className={`scenario-icon ${passed ? "scenario-pass" : ""}`}
                >
                  {passed ? (
                    <CircleCheck size={20} />
                  ) : (
                    <ShieldCheck size={20} />
                  )}
                </span>
                <div>
                  <strong>{scenario.label}</strong>
                  <span>Expected HTTP {scenario.expectedStatus}</span>
                </div>
              </div>
              <button
                className="secondary-action"
                disabled={isBusy}
                type="button"
                onClick={() => void runScenario(scenario)}
              >
                <Play size={16} /> Test request
              </button>
              <div className="scenario-result">
                <strong>
                  {result ? `HTTP ${result.status}` : "Not executed"}
                </strong>
                <span>
                  {result
                    ? `${result.durationMs} ms · ${result.edgeBlocked ? "blocked at Kong" : "upstream reached"}`
                    : "Waiting for a request"}
                </span>
              </div>
              <div className="upstream-proof">
                {result?.upstreamReached ? (
                  <CircleCheck size={16} />
                ) : (
                  <CircleX size={16} />
                )}
                Orders capacity{" "}
                {result?.upstreamReached ? "consumed" : "not consumed"}
              </div>
              {result?.correlationId ? (
                <button
                  className="correlation-copy"
                  type="button"
                  onClick={() => void copyCorrelationId(result.correlationId!)}
                  title="Copy Correlation ID"
                >
                  <Copy size={14} />
                  <span>{result.correlationId}</span>
                </button>
              ) : null}
            </article>
          );
        })}
      </section>
    </div>
  );
}
