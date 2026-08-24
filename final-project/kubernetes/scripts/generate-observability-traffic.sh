#!/usr/bin/env bash

set -euo pipefail

gateway_url="${MESHCOMMERCE_GATEWAY_URL:-http://localhost:14173}"
request_count="${MESHCOMMERCE_OBSERVABILITY_REQUESTS:-40}"
request_delay="${MESHCOMMERCE_OBSERVABILITY_DELAY:-0.2}"

if ! [[ "${request_count}" =~ ^[1-9][0-9]*$ ]]; then
  printf '%s\n' 'MESHCOMMERCE_OBSERVABILITY_REQUESTS must be a positive integer.' >&2
  exit 1
fi

if ! curl --fail --silent --show-error \
  --output /dev/null "${gateway_url}/api/health"; then
  printf 'MeshCommerce is not healthy through %s.\n' "${gateway_url}" >&2
  exit 1
fi

successful=0
client_errors=0
server_errors=0

printf 'Generating %s requests through %s\n' "${request_count}" "${gateway_url}"

for ((request_number = 1; request_number <= request_count; request_number += 1)); do
  if ((request_number % 4 == 0)); then
    path=/mesh-lab/payments
  else
    path=/api/orders
  fi

  response_code="$(
    curl --silent --show-error \
      --output /dev/null \
      --write-out '%{http_code}' \
      "${gateway_url}${path}"
  )"

  case "${response_code}" in
    2* | 3*)
      successful=$((successful + 1))
      ;;
    4*)
      client_errors=$((client_errors + 1))
      ;;
    5*)
      server_errors=$((server_errors + 1))
      ;;
  esac

  printf '%02d  HTTP %s  %s\n' \
    "${request_number}" "${response_code}" "${path}"
  sleep "${request_delay}"
done

printf '\nTraffic summary\n'
printf '  successful:    %s\n' "${successful}"
printf '  client errors: %s\n' "${client_errors}"
printf '  server errors: %s\n' "${server_errors}"
printf '%s\n' \
  'Prometheus evaluates every 5s; allow about 15s for the 5xx alert to enter FIRING.'
