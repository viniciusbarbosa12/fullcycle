# MeshCommerce on Kubernetes, Kong, Istio, and Argo CD

This directory contains the local platform used by the integrated learning
showcase. Kong is the edge gateway, Istio protects service-to-service traffic,
and Argo CD reconciles the base workloads when it is installed.

## Current request flow

```text
Browser
  -> temporary port-forward
  -> Kong proxy
       -> / and application assets
            -> frontend Service
            -> frontend pod + Envoy
       -> /gateway/orders
            -> rate-limiting KongPlugin
            -> Orders API Service
            -> Orders API pod + Envoy
  -> Payments API Service
       -> healthy Payments pod + Envoy
       -> intentionally faulty Payments pod + Envoy
  -> PostgreSQL Service
  -> PostgreSQL StatefulSet and PVC
```

The normal Orders and Operations screens enter through Kong but are not
rate-limited. Only the `/gateway` Ingress is annotated with
`orders-rate-limit`, so the policy is scoped to the experiment route.

The plugin permits five requests per source IP each minute. Requests inside
the quota reach `GET /orders`; excess requests receive HTTP 429 from Kong and
never consume Orders API capacity. Kong returns `RateLimit-Limit`,
`RateLimit-Remaining`, and `RateLimit-Reset` headers so the UI can explain each
decision.

The `payments-api` Service selects both Payments implementations. Istio's
`DestinationRule` observes consecutive HTTP 5xx responses and temporarily
ejects the unhealthy endpoint. PostgreSQL and the one-time migration Job do
not receive sidecars; HTTP application workloads receive Envoy sidecars
through the `istio-injection=enabled` namespace label.

Prometheus discovers those sidecars from their Kubernetes annotations and
pulls request counters and latency histograms. Grafana queries Prometheus and
loads the version-controlled MeshCommerce Golden Signals dashboard. The
observability namespace is not injected into the mesh and its services remain
`ClusterIP`.

## Prerequisites

- Docker Desktop
- Kind
- kubectl
- Helm
- istioctl

Argo CD is optional for a new cluster. If its Application CRD is installed,
the deployment script restores the existing `meshcommerce` Application and
its automated self-healing policy.

## Deploy

From the root-level `final-project` directory:

```bash
./kubernetes/scripts/deploy-local.sh
```

The script:

1. Creates the `meshcommerce` Kind cluster when necessary.
2. Installs Istio when `istiod` is absent.
3. Installs or upgrades the official `kong/ingress` chart pinned to `0.24.0`.
4. Builds and loads the local application images.
5. Applies PostgreSQL and runs the migration Job.
6. Deploys the application with injected Envoy sidecars.
7. Creates the Kong edge routes and route-specific rate limit.
8. Adds the faulty Payments endpoint and Istio circuit-breaker policy.
9. Restores the Argo CD Application when Argo CD is installed.

Override the pinned chart only when intentionally testing another release:

```bash
MESHCOMMERCE_KONG_CHART_VERSION=0.24.0 \
  ./kubernetes/scripts/deploy-local.sh
```

The Argo CD Application currently reconciles `kubernetes/base` from the `main`
branch. The Kong and circuit-breaker resources remain explicit lab overlays
applied by the deployment script. Only committed and pushed base-manifest
changes can be restored by Argo CD; a production workflow would also publish
immutable images to a registry instead of loading local tags into Kind.

A second Argo CD Application reconciles `kubernetes/observability`. The local
deployment script bootstraps both applications when Argo CD is installed.

## Access the system

In a separate terminal:

```bash
./kubernetes/scripts/port-forward.sh
```

Open `http://localhost:14173`. The port-forward now targets the Kong proxy,
not the frontend Service directly:

- **Orders** exercises the complete frontend-to-database business flow.
- **Operations** demonstrates Istio circuit breaking with healthy and faulty
  Payments endpoints.
- **Gateway** sends a configurable burst through the Kong rate-limit policy
  and displays allowed requests, HTTP 429 responses, quota, and reset time.

The Docker Compose baseline remains available at `http://localhost:4173`, but
it does not run Kong. The Gateway screen detects that Kong's headers are absent
and reports that the gateway path was bypassed instead of presenting a false
positive.

### Access metrics and dashboards

In another terminal:

```bash
./kubernetes/scripts/observability-port-forward.sh
```

- Grafana: `http://localhost:14300/d/meshcommerce-golden-signals`
- Prometheus: `http://localhost:19090`

Generate traffic for the dashboard and existing failure lab:

```bash
./kubernetes/scripts/generate-observability-traffic.sh
```

See [observability/README.md](observability/README.md) for PromQL examples, the
HTTP 5xx runbook, and the limits of this metrics-only preview.

## Validate

```bash
curl --fail http://localhost:14173/api/health
curl --fail http://localhost:14173/api/orders

kubectl --context kind-meshcommerce get pods,services,pvc,jobs \
  --namespace meshcommerce
kubectl --context kind-meshcommerce get pods,services \
  --namespace kong
kubectl --context kind-meshcommerce get ingress,kongplugin \
  --namespace meshcommerce
kubectl --context kind-meshcommerce get destinationrule \
  --namespace meshcommerce
```

To see the gateway decision headers directly, wait for the current minute
window to reset and run:

```bash
for request_number in 1 2 3 4 5 6; do
  curl --silent --include http://localhost:14173/gateway/orders \
    | grep -E 'HTTP/|RateLimit-(Limit|Remaining|Reset)'
done
```

The expected sequence is five HTTP 200 responses followed by HTTP 429. The
expected platform state is:

- the Kong controller and gateway are `1/1`;
- frontend, Orders, healthy Payments, and faulty Payments pods are `2/2`;
- PostgreSQL is `1/1` and its PVC is `Bound`;
- the migration Job is `Complete`;
- `orders-rate-limit` and `payments-api-circuit-breaker` exist.

When Argo CD is installed, also check its reconciliation state:

```bash
kubectl --context kind-meshcommerce get application meshcommerce \
  --namespace argocd
kubectl --context kind-meshcommerce get application meshcommerce-observability \
  --namespace argocd
```

## Why `policy: local` is only a learning baseline

The local policy stores counters in one Kong pod's memory. It has minimal
overhead and is sufficient for this single-replica experiment, but separate
Kong replicas would maintain separate quotas. A production deployment that
needs a consistent limit across replicas should use shared counters such as
Redis and must configure trusted proxy headers carefully when limiting by IP.

## Next gateway checkpoint

The next policy should solve a new visible problem, such as identifying and
authenticating clients before applying consumer-specific authorization or
quotas.
