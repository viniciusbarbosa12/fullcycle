"""Read-only local lab probe: verify JSON stdout, Fleet ingestion and APM correlation."""

import base64
import json
import subprocess
import time
import urllib.error
import urllib.request
import uuid
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}))


def request(url, headers=None, body=None):
    req = urllib.request.Request(
        url, headers=headers or {},
        data=None if body is None else json.dumps(body).encode(),
    )
    try:
        with OPENER.open(req, timeout=15) as response:
            return response.status, response.read()
    except urllib.error.HTTPError as error:
        # Never print response bodies/headers, which could contain sensitive data.
        return error.code, b""


def search(headers, index, filters, fields):
    status, body = request(
        f"http://127.0.0.1:9200/{index}/_search?ignore_unavailable=true",
        headers,
        {"size": 10, "query": {"bool": {"filter": filters}}, "_source": fields},
    )
    assert status == 200, f"Elasticsearch search HTTP {status}"
    return json.loads(body)["hits"]["hits"]


def field(source, path):
    if path in source:
        return source[path]
    value = source
    for part in path.split("."):
        if not isinstance(value, dict):
            return None
        value = value.get(part)
    return value


def main():
    values = {
        k: v.strip().strip("\"\x27")
        for line in (ROOT / ".env").read_text().splitlines()
        if "=" in line and not line.lstrip().startswith("#")
        for k, v in [line.split("=", 1)]
    }
    auth = base64.b64encode(("elastic:" + values["ELASTIC_PASSWORD"]).encode()).decode()
    es_headers = {"Authorization": "Basic " + auth, "Content-Type": "application/json"}
    correlation_id = "kibana-lab-" + str(uuid.uuid4())
    for port in (5101, 5102):
        status, _ = request(f"http://127.0.0.1:{port}/health")
        assert status == 200, f"Health on port {port}: HTTP {status}"
        print(f"health_{port}={status}")
    url = "http://127.0.0.1:5102/lab/probe"
    status, _ = request(url)
    assert status == 200, f"Baseline probe HTTP {status}"
    print(f"baseline_probe={status}")
    headers = {"X-Correlation-ID": correlation_id, "X-MeshCommerce-Resilience": "retry"}
    first, _ = request(url, headers)
    second, _ = request(url, headers)
    assert (first, second) == (503, 200), f"Retry responses: {first}, {second}"
    print(f"first_attempt={first} second_attempt={second}")
    print(f"correlation_id={correlation_id}")

    output = subprocess.run(
        ["docker", "compose", "logs", "--since=2m", "--no-color", "--no-log-prefix", "payments-api"],
        cwd=ROOT, capture_output=True, text=True, check=True,
    ).stdout
    stdout_events = []
    for line in output.splitlines():
        try:
            event = json.loads(line)
        except json.JSONDecodeError:
            continue
        if field(event, "labels.CorrelationId") == correlation_id:
            stdout_events.append(event)
    requests = {
        field(event, "http.response.status_code"): event
        for event in stdout_events
        if field(event, "http.response.status_code") in (200, 503)
    }
    assert set(requests) == {200, 503}, "Expected request logs for 503 and retry 200"
    assert len(stdout_events) >= 3, "Expected structured probe and request logs"
    failed_request = requests[503]
    assert field(failed_request, "log.level") == "Warning"
    trace_id = field(failed_request, "trace.id")
    assert trace_id and len(trace_id) == 32, "Missing trace ID in JSON log"
    print("structured_stdout_verified=true")

    log_filters = [{"term": {"labels.CorrelationId": correlation_id}}]
    apm_filters = [
        {"term": {"processor.event": "transaction"}},
        {"term": {"trace.id": trace_id}},
        {"term": {"http.response.status_code": 503}},
    ]
    fields = [
        "@timestamp", "event.dataset", "container.name", "service.name",
        "labels.CorrelationId", "http.response.status_code", "log.level", "trace.id",
    ]
    for _ in range(24):
        logs = search(es_headers, "logs-docker.container_logs-*", log_filters, fields)
        traces = search(es_headers, "traces-apm*", apm_filters, ["trace.id", "event.outcome"])
        if logs and traces:
            break
        time.sleep(5)
    assert len(logs) >= 3, "Expected correlated 503 and retry logs in Elasticsearch"
    failed_logs = [
        hit["_source"]
        for hit in logs
        if field(hit["_source"], "http.response.status_code") == 503
    ]
    assert len(failed_logs) == 1, "Expected one correlated HTTP 503 request log"
    source = failed_logs[0]
    assert field(source, "log.level") == "Warning"
    assert field(source, "service.name") == "payments-api"
    assert field(source, "event.dataset") == "docker.container_logs"
    assert field(source, "trace.id") == trace_id
    assert traces and traces[0]["_source"]["event"]["outcome"] == "failure"
    unrelated = search(es_headers, "logs-docker.container_logs-*", [
        {"range": {"@timestamp": {"gte": "now-5m"}}},
        {"bool": {"must_not": [
            {"wildcard": {"container.name": "*payments-api*"}},
            {"wildcard": {"container.name": "*orders-api*"}},
        ]}},
    ], ["container.name"])
    assert not unrelated, "Container log collection includes unrelated services"
    metrics = search(es_headers, "metrics-docker.container-*", [
        {"range": {"@timestamp": {"gte": "now-5m"}}},
    ], ["@timestamp"])
    assert metrics, "Docker container metrics stopped arriving"
    print("elasticsearch_log_verified=true")
    print("apm_trace_correlation_verified=true")
    print("collection_scope_verified=true")
    print("recent_docker_metrics_verified=true")
    print(f"data_stream={source['event']['dataset']}")
    print(f"timestamp={source['@timestamp']}")
    print(f"trace_id={trace_id}")
    print(f"message={field(source, 'message')}")


if __name__ == "__main__":
    main()