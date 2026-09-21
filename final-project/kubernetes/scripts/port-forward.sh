#!/usr/bin/env bash

set -euo pipefail

cluster_name="${MESHCOMMERCE_KIND_CLUSTER:-meshcommerce}"
gateway_port="${MESHCOMMERCE_GATEWAY_PORT:-${MESHCOMMERCE_FRONTEND_PORT:-14173}}"
istio_gateway_port="${MESHCOMMERCE_ISTIO_GATEWAY_PORT:-14174}"
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

if ! "${kubectl_bin}" \
  --context "${cluster_context}" \
  --namespace kong \
  get service kong-gateway-proxy >/dev/null 2>&1; then
  printf '%s\n' \
    'Kong proxy not found. Run ./kubernetes/scripts/deploy-local.sh first.' >&2
  exit 1
fi

printf 'MeshCommerce through Kong: http://localhost:%s\n' "${gateway_port}"
printf 'MeshCommerce through Istio: http://localhost:%s/app\n' "${istio_gateway_port}"

declare -a forward_pids=()
cleanup() {
  if ((${#forward_pids[@]} > 0)); then
    kill "${forward_pids[@]}" 2>/dev/null || true
  fi
}
trap cleanup EXIT INT TERM

"${kubectl_bin}" \
  --context "${cluster_context}" \
  --namespace kong \
  port-forward service/kong-gateway-proxy "${gateway_port}:80" &
forward_pids+=("$!")
"${kubectl_bin}" \
  --context "${cluster_context}" \
  --namespace istio-system \
  port-forward service/istio-ingressgateway "${istio_gateway_port}:80" &
forward_pids+=("$!")
wait
