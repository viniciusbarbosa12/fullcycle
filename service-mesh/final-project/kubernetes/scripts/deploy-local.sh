#!/usr/bin/env bash

set -euo pipefail

script_directory="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_directory="$(cd "${script_directory}/../.." && pwd)"
cluster_name="${MESHCOMMERCE_KIND_CLUSTER:-meshcommerce}"
cluster_context="kind-${cluster_name}"
namespace="meshcommerce"

resolve_tool() {
  local tool_name="$1"
  shift

  if command -v "${tool_name}" >/dev/null 2>&1; then
    command -v "${tool_name}"
    return
  fi

  local candidate
  for candidate in "$@"; do
    if [[ -x "${candidate}" ]]; then
      printf '%s\n' "${candidate}"
      return
    fi
  done

  printf 'Required tool not found: %s\n' "${tool_name}" >&2
  exit 1
}

docker_bin="$(resolve_tool docker /usr/local/bin/docker /Applications/Docker.app/Contents/Resources/bin/docker)"
istioctl_bin="$(resolve_tool istioctl /opt/homebrew/bin/istioctl /usr/local/bin/istioctl)"
kind_bin="$(resolve_tool kind /opt/homebrew/bin/kind /usr/local/bin/kind)"
kubectl_bin="$(resolve_tool kubectl /usr/local/bin/kubectl /opt/homebrew/bin/kubectl)"

if ! "${kind_bin}" get clusters | grep -Fxq "${cluster_name}"; then
  "${kind_bin}" create cluster \
    --name "${cluster_name}" \
    --config "${project_directory}/kubernetes/kind-config.yaml"
fi

if ! "${kubectl_bin}" \
  --context "${cluster_context}" \
  get deployment istiod \
  --namespace istio-system >/dev/null 2>&1; then
  "${istioctl_bin}" install \
    --context "${cluster_context}" \
    --set profile=default \
    --skip-confirmation
fi

"${docker_bin}" build \
  --file "${project_directory}/backend/src/Orders.Api/Dockerfile" \
  --tag meshcommerce/orders-api:v1 \
  "${project_directory}/backend"
"${docker_bin}" build \
  --file "${project_directory}/backend/src/Payments.Api/Dockerfile" \
  --tag meshcommerce/payments-api:v1 \
  "${project_directory}/backend"
"${docker_bin}" build \
  --file "${project_directory}/backend/src/Payments.Migrations/Dockerfile" \
  --tag meshcommerce/payments-migrations:v1 \
  "${project_directory}/backend"
"${docker_bin}" build \
  --file "${project_directory}/frontend/Dockerfile" \
  --tag meshcommerce/frontend:v1 \
  --tag meshcommerce/frontend:v5 \
  "${project_directory}/frontend"

"${kind_bin}" load docker-image \
  --name "${cluster_name}" \
  meshcommerce/orders-api:v1 \
  meshcommerce/payments-api:v1 \
  meshcommerce/payments-migrations:v1 \
  meshcommerce/frontend:v1 \
  meshcommerce/frontend:v5

kubectl_command=("${kubectl_bin}" --context "${cluster_context}")
base_directory="${project_directory}/kubernetes/base"

"${kubectl_command[@]}" apply --filename "${base_directory}/namespace.yaml"

"${kubectl_command[@]}" apply \
  --filename "${base_directory}/postgres/configmap.yaml" \
  --filename "${base_directory}/postgres/secret.yaml" \
  --filename "${base_directory}/postgres/pvc.yaml" \
  --filename "${base_directory}/postgres/headless-service.yaml" \
  --filename "${base_directory}/postgres/service.yaml" \
  --filename "${base_directory}/postgres/statefulset.yaml"
"${kubectl_command[@]}" rollout status statefulset/postgres \
  --namespace "${namespace}" \
  --timeout 180s

"${kubectl_command[@]}" delete job payments-migrations \
  --namespace "${namespace}" \
  --ignore-not-found
"${kubectl_command[@]}" apply --filename "${base_directory}/migrations/job.yaml"
"${kubectl_command[@]}" wait \
  --namespace "${namespace}" \
  --for condition=complete \
  job/payments-migrations \
  --timeout 180s

"${kubectl_command[@]}" apply \
  --filename "${base_directory}/payments/service.yaml" \
  --filename "${base_directory}/payments/deployment.yaml" \
  --filename "${base_directory}/orders/service.yaml" \
  --filename "${base_directory}/orders/deployment.yaml" \
  --filename "${base_directory}/frontend/service.yaml" \
  --filename "${base_directory}/frontend/deployment.yaml"

for deployment in payments-api-v1 orders-api-v1 frontend-v1; do
  "${kubectl_command[@]}" rollout restart \
    "deployment/${deployment}" \
    --namespace "${namespace}"
  "${kubectl_command[@]}" rollout status \
    "deployment/${deployment}" \
    --namespace "${namespace}" \
    --timeout 180s
done

"${kubectl_command[@]}" apply \
  --filename "${project_directory}/kubernetes/istio/circuit-breaker/faulty-payments.yaml" \
  --filename "${project_directory}/kubernetes/istio/circuit-breaker/destination-rule.yaml"
"${kubectl_command[@]}" rollout status \
  deployment/payments-api-faulty \
  --namespace "${namespace}" \
  --timeout 180s

if "${kubectl_command[@]}" get crd \
  applications.argoproj.io >/dev/null 2>&1; then
  "${kubectl_command[@]}" apply \
    --filename "${project_directory}/kubernetes/argocd/applications/meshcommerce.yaml"
else
  printf '%s\n' \
    'Argo CD is not installed; the application workloads are running without GitOps reconciliation.' >&2
fi

"${kubectl_command[@]}" get pods,services,pvc,jobs --namespace "${namespace}"
