# MeshCommerce metrics preview

This directory provides a presentation-ready preview of the Observability
course. It is deliberately narrower than the complete course: Prometheus and
Grafana make the existing Istio HTTP telemetry useful, while centralized logs,
distributed traces, custom business metrics, and production-grade retention
remain future checkpoints.

## Problem demonstrated

Container health only answers whether a process is ready now. It does not tell
an operator which service is receiving traffic, whether errors are increasing,
or where latency is changing. The MeshCommerce sidecars already emit those HTTP
signals, but raw metric text is not an investigation workflow.

```text
Browser -> Kong -> frontend -> Orders API -> Payments API
                     |             |              |
                     +------ Istio sidecars ------+
                                    |
                                    v
                              Prometheus pull
                                    |
                                    v
                           Grafana Golden Signals
```

Prometheus discovers only annotated, running pods in the `meshcommerce`
namespace. Grafana receives a version-controlled data source and dashboard at
startup, so the demo does not depend on manual clicks or configuration stored
only in a browser.

## Components

| Component | Responsibility | Local trade-off |
| --- | --- | --- |
| Istio sidecars | Emit request counters and latency histograms | Infrastructure telemetry, not business metrics |
| Prometheus | Discover targets, pull metrics, evaluate PromQL and alerts | Six-hour `emptyDir` retention |
| Grafana | Display the Golden Signals dashboard | Anonymous read-only access through port-forward |
| Argo CD Application | Reconcile the observability manifests from `main` | Bootstrap Application is applied explicitly |

The Prometheus and Grafana images are versioned and pinned by multi-platform
digest. Both services are `ClusterIP`; neither dashboard is exposed outside the
cluster unless a developer starts the local port-forward.

## Deploy

With the MeshCommerce Kind cluster running, execute from `final-project`:

```bash
./kubernetes/scripts/deploy-observability.sh
```

The complete environment script also installs this stack:

```bash
./kubernetes/scripts/deploy-local.sh
```

After the observability directory exists on `main`, bootstrap its Argo CD
Application once:

```bash
kubectl --context kind-meshcommerce apply \
  --filename kubernetes/argocd/applications/meshcommerce-observability.yaml
```

Argo CD then owns self-healing and future synchronization of this directory.

## Access

Keep this command running in a separate terminal:

```bash
./kubernetes/scripts/observability-port-forward.sh
```

Open:

- Grafana: `http://localhost:14300/d/meshcommerce-golden-signals`
- Prometheus targets: `http://localhost:19090/targets`
- Prometheus alerts: `http://localhost:19090/alerts`

The Grafana home dashboard is provisioned as `MeshCommerce Golden Signals` and
refreshes every ten seconds. No login is required; anonymous access has the
Viewer role and the login form is disabled.

## Generate a visible incident

With the Kong and observability port-forwards running:

```bash
./kubernetes/scripts/generate-observability-traffic.sh
```

Most requests read Orders successfully. Every fourth request exercises the
existing circuit-breaker lab. Its deliberately faulty Payments workload returns
HTTP 500 until Istio temporarily ejects that endpoint, so the dashboard shows
the traffic, error, and latency changes without adding a new application bug.

Override the defaults when a longer graph is useful:

```bash
MESHCOMMERCE_OBSERVABILITY_REQUESTS=100 \
MESHCOMMERCE_OBSERVABILITY_DELAY=0.5 \
  ./kubernetes/scripts/generate-observability-traffic.sh
```

## Useful PromQL

Request rate across destination workloads:

```promql
sum by (destination_workload) (
  rate(istio_requests_total{
    reporter="destination",
    destination_workload_namespace="meshcommerce"
  }[1m])
)
```

HTTP 5xx rate:

```promql
sum by (destination_workload) (
  rate(istio_requests_total{
    reporter="destination",
    destination_workload_namespace="meshcommerce",
    response_code=~"5.."
  }[1m])
)
```

Overall p95 latency:

```promql
histogram_quantile(
  0.95,
  sum by (le) (
    rate(istio_request_duration_milliseconds_bucket{
      reporter="destination",
      destination_workload_namespace="meshcommerce"
    }[5m])
  )
)
```

## HTTP 5xx runbook

The `MeshCommerceHttp5xxDetected` warning enters `FIRING` after HTTP 5xx traffic
is observed for ten seconds.

1. Identify the destination workload in the `HTTP 5xx rate by workload` panel.
2. Correlate the start of the error with a deployment, configuration, or demo action.
3. Inspect the affected workload and recent events:

   ```bash
   kubectl --context kind-meshcommerce get pods \
     --namespace meshcommerce --output wide
   kubectl --context kind-meshcommerce get events \
     --namespace meshcommerce --sort-by=.lastTimestamp
   ```

4. Inspect logs for the affected workload. Do not assume that a restarted pod
   is the root cause merely because it is visible.
5. For the presentation incident, verify whether `payments-api-faulty` was the
   destination and explain the circuit-breaker ejection before taking action.
6. In a real incident, mitigate impact, preserve evidence, and roll back the
   responsible change through Git instead of editing the cluster invisibly.

The alert intentionally has no notification receiver in this local preview.
Notification routing, ownership, severity policy, and silence management need a
separate design instead of a fake production configuration.

## Validation

```bash
kubectl --context kind-meshcommerce get pods,services \
  --namespace observability

curl --fail http://localhost:19090/-/ready
curl --fail http://localhost:14300/api/health
curl --fail \
  'http://localhost:19090/api/v1/query?query=up%7Bjob%3D%22meshcommerce-istio-proxies%22%7D'
```

Expected state:

- Prometheus and Grafana are `1/1 Running`;
- all running, sidecar-injected MeshCommerce targets are `up`;
- Grafana has the Prometheus data source and dashboard without manual setup;
- generated requests appear in the dashboard within the scrape interval;
- deliberate HTTP 5xx traffic activates the warning.

## What this preview does not prove

- `emptyDir` is not durable storage or a high-availability Prometheus design;
- Istio HTTP metrics do not explain business outcomes such as revenue or payment amount;
- metrics do not replace centralized structured logs or distributed traces;
- an alert without ownership, notification routing, and a tested response process
  is not production incident management;
- resource usage and retention must be measured before sizing a real environment.
