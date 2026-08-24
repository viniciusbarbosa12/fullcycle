#!/usr/bin/env bash

set -euo pipefail

cluster_name="${MESHCOMMERCE_KIND_CLUSTER:-meshcommerce}"
cluster_context="kind-${cluster_name}"
grafana_port="${MESHCOMMERCE_GRAFANA_PORT:-14300}"
prometheus_port="${MESHCOMMERCE_PROMETHEUS_PORT:-19090}"

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

kubectl_command=(
  "${kubectl_bin}"
  --context "${cluster_context}"
  --namespace observability
)

for service in grafana prometheus; do
  if ! "${kubectl_command[@]}" get "service/${service}" >/dev/null 2>&1; then
    printf 'Observability service not found: %s\n' "${service}" >&2
    printf '%s\n' 'Run ./kubernetes/scripts/deploy-observability.sh first.' >&2
    exit 1
  fi
done

prometheus_pid=""
grafana_pid=""

cleanup() {
  if [[ -n "${prometheus_pid}" ]]; then
    kill "${prometheus_pid}" >/dev/null 2>&1 || true
  fi
  if [[ -n "${grafana_pid}" ]]; then
    kill "${grafana_pid}" >/dev/null 2>&1 || true
  fi
  wait >/dev/null 2>&1 || true
}

trap cleanup EXIT
trap 'exit 0' INT TERM

"${kubectl_command[@]}" port-forward \
  service/prometheus "${prometheus_port}:9090" &
prometheus_pid="$!"

"${kubectl_command[@]}" port-forward \
  service/grafana "${grafana_port}:3000" &
grafana_pid="$!"

sleep 1

if ! kill -0 "${prometheus_pid}" >/dev/null 2>&1 \
  || ! kill -0 "${grafana_pid}" >/dev/null 2>&1; then
  printf '%s\n' 'Unable to start one or more observability port-forwards.' >&2
  exit 1
fi

printf 'Grafana dashboard: http://localhost:%s/d/meshcommerce-golden-signals\n' \
  "${grafana_port}"
printf 'Prometheus targets: http://localhost:%s/targets\n' "${prometheus_port}"
printf 'Prometheus alerts: http://localhost:%s/alerts\n' "${prometheus_port}"
printf '%s\n' 'Press Ctrl+C to stop both port-forwards.'

while kill -0 "${prometheus_pid}" >/dev/null 2>&1 \
  && kill -0 "${grafana_pid}" >/dev/null 2>&1; do
  sleep 1
done

printf '%s\n' \
  'An observability port-forward stopped. Restart this script to reconnect.' >&2
exit 1
