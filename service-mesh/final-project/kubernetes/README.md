# MeshCommerce on Kubernetes, Istio, and Argo CD

This directory contains the local platform already covered in the Kubernetes
and Service Mesh tracks. It is the baseline that the upcoming Kong lessons
will extend.

## Current request flow

```text
Browser
  -> temporary port-forward
  -> frontend Service
  -> frontend pod + Envoy
  -> Orders API Service
  -> Orders API pod + Envoy
  -> Payments API Service
       -> healthy Payments pod + Envoy
       -> intentionally faulty Payments pod + Envoy
  -> PostgreSQL Service
  -> PostgreSQL StatefulSet and PVC
```

The `payments-api` Service selects both Payments implementations. Istio's
`DestinationRule` observes consecutive HTTP 5xx responses and temporarily
ejects the unhealthy endpoint. This gives the Operations screen a real failure
scenario instead of a simulated frontend-only demonstration.

PostgreSQL and the one-time migration Job do not receive sidecars because they
do not participate in the HTTP service-mesh experiment. Application workloads
do receive Envoy sidecars through the `istio-injection=enabled` namespace
label.

All application Services remain internal as `ClusterIP`. A temporary
port-forward exposes the frontend for local validation. Kong will become the
public API entry point in the next learning checkpoint.

## Prerequisites

- Docker Desktop
- Kind
- kubectl
- istioctl

Argo CD is optional for a new cluster. If its Application CRD is already
installed, the deployment script restores the existing `meshcommerce`
Application and its automated self-healing policy.

## Deploy

From `service-mesh/final-project`:

```bash
./kubernetes/scripts/deploy-local.sh
```

The script:

1. Creates the `meshcommerce` Kind cluster when necessary.
2. Installs Istio when `istiod` is absent.
3. Builds and loads the local application images.
4. Applies PostgreSQL and runs the migration Job.
5. Deploys the application with injected Envoy sidecars.
6. Adds the faulty Payments endpoint and circuit-breaker policy.
7. Restores the Argo CD Application when Argo CD is installed.

The Argo CD Application currently reconciles `kubernetes/base` from the `main`
branch. The circuit-breaker experiment remains an explicit lab overlay applied
by the deployment script. Only committed and pushed base-manifest changes can
be restored by Argo CD; a production workflow would also publish immutable
images to a registry instead of loading local tags into Kind.

## Access the system

In a separate terminal:

```bash
./kubernetes/scripts/port-forward.sh
```

Open `http://localhost:14173`:

- **Orders** exercises the complete frontend-to-database business flow.
- **Operations** sends traffic to healthy and faulty Payments endpoints so the
  Istio circuit breaker can be observed.

Because the browser uses `/api` and `/mesh-lab`, Nginx forwards both paths to
internal Kubernetes Services. The browser does not need direct access to the
APIs.

## Validate

```bash
curl --fail http://localhost:14173/api/health
curl --fail http://localhost:14173/api/orders

kubectl --context kind-meshcommerce get pods,services,pvc,jobs \
  --namespace meshcommerce
kubectl --context kind-meshcommerce get destinationrule \
  --namespace meshcommerce
```

The expected state is:

- frontend, Orders, healthy Payments, and faulty Payments pods are `2/2`;
- PostgreSQL is `1/1` and its PVC is `Bound`;
- the migration Job is `Complete`;
- `payments-api-circuit-breaker` exists.

When Argo CD is installed, also check its reconciliation state:

```bash
kubectl --context kind-meshcommerce get application meshcommerce \
  --namespace argocd
```

## Next platform checkpoint

The next capability is Kong: ingress routing first, followed by gateway
policies such as authentication and rate limiting when their concrete problems
are introduced.
