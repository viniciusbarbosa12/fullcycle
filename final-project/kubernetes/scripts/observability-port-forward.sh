#!/usr/bin/env bash

set -euo pipefail

cluster_context="${KUBECONFIG_CONTEXT:-kind-meshcommerce}"
kubectl_command=(kubectl --context "${cluster_context}")

declare -a port_forward_pids=()

cleanup() {
  if ((${#port_forward_pids[@]} > 0)); then
    kill "${port_forward_pids[@]}" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

forward() {
  local namespace="$1"
  local service="$2"
  local local_port="$3"
  local service_port="$4"

  "${kubectl_command[@]}" --namespace "$namespace" port-forward \
    "service/$service" "$local_port:$service_port" &
  port_forward_pids+=("$!")
}

forward observability prometheus 19090 9090
forward observability grafana 14300 3000
forward observability loki 13100 3100
forward observability alertmanager 19093 9093
forward meshcommerce frontend 14177 80

printf '%s\n' \
  'Frontend:    http://localhost:14177' \
  'Grafana:     http://localhost:14300/d/meshcommerce-golden-signals' \
  'Prometheus:  http://localhost:19090' \
  'Loki:        http://localhost:13100/ready' \
  'Alertmanager: http://localhost:19093'

wait