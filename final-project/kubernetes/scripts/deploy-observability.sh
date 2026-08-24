#!/usr/bin/env bash

set -euo pipefail

script_directory="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
project_directory="$(cd "${script_directory}/../.." && pwd)"
cluster_name="${MESHCOMMERCE_KIND_CLUSTER:-meshcommerce}"
cluster_context="kind-${cluster_name}"
observability_directory="${project_directory}/kubernetes/observability"

if command -v kubectl >/dev/null 2>&1; then
  kubectl_bin="$(command -v kubectl)"
elif [[ -x /usr/local/bin/kubectl ]]; then
  kubectl_bin=/usr/local/bin/kubectl
elif [[ -x /opt/homebrew/bin/kubectl ]]; then
  kubectl_bin=/opt/homebrew/bin/kubectl
else
  printf '%s\n' 'Required tool not found: kubectl' >&2
  exit 1
fi

kubectl_command=("${kubectl_bin}" --context "${cluster_context}")

if ! "${kubectl_command[@]}" get namespace meshcommerce >/dev/null 2>&1; then
  printf '%s\n' \
    'MeshCommerce namespace not found. Run ./kubernetes/scripts/deploy-local.sh first.' >&2
  exit 1
fi

"${kubectl_command[@]}" apply \
  --filename "${observability_directory}/namespace.yaml"

"${kubectl_command[@]}" apply \
  --filename "${observability_directory}/prometheus/rbac.yaml" \
  --filename "${observability_directory}/prometheus/configmap.yaml" \
  --filename "${observability_directory}/prometheus/deployment.yaml" \
  --filename "${observability_directory}/prometheus/service.yaml" \
  --filename "${observability_directory}/grafana/configmap.yaml" \
  --filename "${observability_directory}/grafana/dashboard.yaml" \
  --filename "${observability_directory}/grafana/deployment.yaml" \
  --filename "${observability_directory}/grafana/service.yaml"

for deployment in prometheus grafana; do
  "${kubectl_command[@]}" rollout status \
    "deployment/${deployment}" \
    --namespace observability \
    --timeout 300s
done

"${kubectl_command[@]}" get pods,services --namespace observability
