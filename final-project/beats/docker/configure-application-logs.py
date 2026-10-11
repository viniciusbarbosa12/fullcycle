"""Apply only the local observability policy's Docker log settings; dry-run by default."""

import argparse
import base64
import copy
import json
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OPENER = urllib.request.build_opener(urllib.request.ProxyHandler({}))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--apply", action="store_true", help="Update the Docker log stream in Fleet")
    args = parser.parse_args()
    values = {
        k: v.strip().strip("\"\x27")
        for line in (ROOT / ".env").read_text().splitlines()
        if "=" in line and not line.lstrip().startswith("#")
        for k, v in [line.split("=", 1)]
    }
    auth = base64.b64encode(("elastic:" + values["ELASTIC_PASSWORD"]).encode()).decode()
    headers = {"Authorization": "Basic " + auth, "kbn-xsrf": "true", "Content-Type": "application/json"}

    def call(path, body=None):
        req = urllib.request.Request(
            "http://127.0.0.1:5601" + path, headers=headers,
            data=None if body is None else json.dumps(body).encode(),
            method="GET" if body is None else "PUT",
        )
        try:
            with OPENER.open(req, timeout=60) as response:
                return json.load(response)
        except urllib.error.HTTPError as error:
            raise SystemExit(f"Fleet HTTP {error.code}") from None

    policies = [p for p in call("/api/fleet/agent_policies?perPage=100")["items"]
                if p["name"] == "meshcommerce-observability"]
    assert len(policies) == 1, "Expected one local observability policy"
    policy_id = policies[0]["id"]
    packages = [p for p in call("/api/fleet/package_policies?perPage=100")["items"]
                if p.get("package", {}).get("name") == "docker"
                and policy_id in p.get("policy_ids", [p.get("policy_id")])]
    assert len(packages) == 1, "Expected one Docker integration in observability policy"
    package = packages[0]
    unchanged_inputs = copy.deepcopy([i for i in package["inputs"] if i["type"] != "filestream"])
    log_inputs = [i for i in package["inputs"] if i["type"] == "filestream"]
    assert len(log_inputs) == 1
    streams = [s for s in log_inputs[0]["streams"]
               if s.get("data_stream", {}).get("dataset") == "docker.container_logs"]
    assert len(streams) == 1
    log_inputs[0]["enabled"] = True
    streams[0]["enabled"] = True
    settings = json.loads((ROOT / "beats/docker/payments-container-logs.json").read_text())
    streams[0]["vars"].update(settings)
    print("target=meshcommerce-observability/docker.container_logs")
    print("collection=meshcommerce orders-api and payments-api; JSON=expanded root ECS")
    if not args.apply:
        print("dry_run=true; use --apply to update Fleet")
        return
    body = {k: package[k] for k in (
        "name", "description", "namespace", "policy_ids", "enabled", "inputs", "package", "vars",
    ) if k in package}
    result = call("/api/fleet/package_policies/" + package["id"], body)["item"]
    assert unchanged_inputs == [i for i in result["inputs"] if i["type"] != "filestream"]
    print("docker_metric_configuration_preserved=true")
    print(f"package_policy_revision={result['revision']}")


if __name__ == "__main__":
    main()