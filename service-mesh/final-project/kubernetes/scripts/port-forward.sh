#!/usr/bin/env bash

set -euo pipefail

cluster_name="${MESHCOMMERCE_KIND_CLUSTER:-meshcommerce}"
frontend_port="${MESHCOMMERCE_FRONTEND_PORT:-14173}"
cluster_context="kind-${cluster_name}"

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

printf 'MeshCommerce Kubernetes frontend: http://localhost:%s\n' "${frontend_port}"
exec "${kubectl_bin}" \
  --context "${cluster_context}" \
  --namespace meshcommerce \
  port-forward service/frontend "${frontend_port}:80"
