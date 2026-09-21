#!/usr/bin/env bash

set -euo pipefail

kong_url="${MESHCOMMERCE_KONG_URL:-http://localhost:14173}"
istio_url="${MESHCOMMERCE_ISTIO_URL:-http://127.0.0.1.nip.io:14174}"
temp_directory="$(mktemp -d)"
trap 'rm -rf -- "${temp_directory}"' EXIT

extract_token() {
  python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["accessToken"])' "$1"
}

assert_status() {
  local expected="$1"
  local actual="$2"
  local scenario="$3"
  if [[ "${actual}" != "${expected}" ]]; then
    printf 'FAIL %-24s expected=%s actual=%s\n' "${scenario}" "${expected}" "${actual}" >&2
    exit 1
  fi
  printf 'PASS %-24s HTTP %s\n' "${scenario}" "${actual}"
}

login() {
  local persona="$1"
  curl --silent --show-error --fail-with-body \
    --request POST \
    --header 'Content-Type: application/json' \
    --data "{\"persona\":\"${persona}\"}" \
    --output "${temp_directory}/${persona}.json" \
    "${kong_url}/gateway/auth/login"
}

login viewer
login operator
curl --silent --show-error --fail-with-body \
  --request POST \
  --header 'Content-Type: application/json' \
  --data '{"persona":"operator","expired":true}' \
  --output "${temp_directory}/expired.json" \
  "${kong_url}/gateway/auth/login"
viewer_token="$(extract_token "${temp_directory}/viewer.json")"
operator_token="$(extract_token "${temp_directory}/operator.json")"
expired_token="$(extract_token "${temp_directory}/expired.json")"

anonymous_status="$(curl --silent --dump-header "${temp_directory}/anonymous.headers" \
  --output /dev/null --write-out '%{http_code}' "${kong_url}/gateway/secure/orders")"
assert_status 401 "${anonymous_status}" 'anonymous JWT'
if grep --ignore-case --quiet '^X-MeshCommerce-Service:' "${temp_directory}/anonymous.headers"; then
  printf '%s\n' 'FAIL anonymous request reached Orders API' >&2
  exit 1
fi

printf 'header = "Authorization: Bearer %s"\n' "${expired_token}" \
  | curl --silent --dump-header "${temp_directory}/expired.headers" \
      --output /dev/null --write-out '%{http_code}' --config - \
      "${kong_url}/gateway/secure/orders" >"${temp_directory}/expired.status"
assert_status 401 "$(cat "${temp_directory}/expired.status")" 'expired JWT'
if grep --ignore-case --quiet '^X-MeshCommerce-Service:' "${temp_directory}/expired.headers"; then
  printf '%s\n' 'FAIL expired token reached Orders API' >&2
  exit 1
fi

printf 'header = "Authorization: Bearer %s"\n' "${viewer_token}" \
  | curl --silent --dump-header "${temp_directory}/viewer.headers" \
      --output /dev/null --write-out '%{http_code}' --config - \
      "${kong_url}/gateway/secure/orders" >"${temp_directory}/viewer.status"
assert_status 403 "$(cat "${temp_directory}/viewer.status")" 'viewer ACL'
if grep --ignore-case --quiet '^X-MeshCommerce-Service:' "${temp_directory}/viewer.headers"; then
  printf '%s\n' 'FAIL viewer request reached Orders API' >&2
  exit 1
fi

printf 'header = "Authorization: Bearer %s"\n' "${operator_token}" \
  | curl --silent --dump-header "${temp_directory}/operator.headers" \
      --output /dev/null --write-out '%{http_code}' --config - \
      "${kong_url}/gateway/secure/orders" >"${temp_directory}/operator.status"
assert_status 200 "$(cat "${temp_directory}/operator.status")" 'operator ACL'
grep --ignore-case --quiet '^X-MeshCommerce-Service: orders-api' "${temp_directory}/operator.headers"
grep --ignore-case --quiet '^X-Correlation-ID:' "${temp_directory}/operator.headers"

preview_status="$(curl --silent --dump-header "${temp_directory}/preview.headers" \
  --output /dev/null --write-out '%{http_code}' \
  --header 'X-MeshCommerce-Preview: v2' "${kong_url}/mesh-lab/payments")"
assert_status 200 "${preview_status}" 'canary preview'
grep --ignore-case --quiet '^X-MeshCommerce-Version: v2' "${temp_directory}/preview.headers"

retry_status="$(curl --silent --dump-header "${temp_directory}/retry.headers" \
  --output /dev/null --write-out '%{http_code}' \
  --header 'X-MeshCommerce-Resilience: retry' "${kong_url}/mesh-lab/payments")"
assert_status 200 "${retry_status}" 'Istio retry'
grep --ignore-case --extended-regexp --quiet '^X-MeshCommerce-Attempt: [2-9]' "${temp_directory}/retry.headers"

abort_status="$(curl --silent --output /dev/null --write-out '%{http_code}' \
  --header 'X-MeshCommerce-Fault: abort' "${kong_url}/mesh-lab/payments")"
assert_status 503 "${abort_status}" 'Istio abort fault'

istio_status="$(curl --silent --output /dev/null --write-out '%{http_code}' "${istio_url}/api/orders")"
assert_status 200 "${istio_status}" 'Istio Gateway'

printf '%s\n' 'All advanced lab smoke checks passed.'