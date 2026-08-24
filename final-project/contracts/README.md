# MeshCommerce API contracts

This directory contains the reviewable contracts for the Orders and Payments
APIs. The first versions were derived from the current controllers, DTOs,
validation attributes, JSON enum configuration, and idempotency behavior.

## Ownership model

The committed OpenAPI files are the compatibility baseline reviewed by API
consumers. New endpoint work should start by changing the appropriate contract,
running the local gates, and reviewing the impact before changing the runtime.

| Contract | Scope |
| --- | --- |
| `orders.openapi.yaml` | Public Orders operations and operational endpoints |
| `payments.openapi.yaml` | Internal idempotent Payments operations and operational endpoints |

The APIs also generate OpenAPI documents in the `Development` environment.
Those runtime documents help inspect the implementation, but they are not yet
automatically compared with these committed contracts. Until runtime
conformance is added, every controller or DTO change must update and review the
matching contract in the same Pull Request.

The Payments contract describes the healthy `Payments.Api` implementation. The
Kubernetes circuit-breaker lab deliberately places a faulty test workload behind
the same Service; its synthetic failure responses are an environment overlay,
not an alternative Payments API contract.

## Local validation

Node.js 24 is the only prerequisite. Install the pinned tooling without running
dependency lifecycle scripts, then execute the same lint command used in CI:

```bash
npm ci --ignore-scripts
npm run lint
```

The shared `.spectral.yaml` extends the standard OpenAPI rules and requires API
metadata, server definitions, operation descriptions, tags, unique operation
identifiers, and successful responses. Warnings fail the command instead of
being silently accepted.

## Pull Request gates

The repository workflow `.github/workflows/api-contracts.yml` runs when a
contract or either API implementation changes:

1. install the exact Spectral dependency from `package-lock.json`;
2. lint both contracts;
3. locate each contract baseline on the Pull Request base branch;
4. run `oasdiff` with `fail-on: WARN` for every existing baseline.

The initial Pull Request cannot compare a contract that does not exist on
`main`, so it establishes the baseline after lint succeeds. Every subsequent
Pull Request compares its revision against that baseline. The oasdiff review
upload is disabled, the workflow token has read-only repository access, and no
contract leaves the CI runner.

Examples of changes that must receive compatibility attention include:

- removing or renaming an endpoint;
- removing a response property;
- adding a required request property;
- changing a field type or format;
- removing an enum value or narrowing an accepted value range.

Adding a new endpoint or an optional request property is normally additive, but
it still passes through lint and review. A deliberately accepted breaking
change requires an explicit versioning and migration decision; it must not be
hidden by weakening the pipeline.

## What the current gates do not prove

Spectral verifies contract structure and governance. Oasdiff compares the old
and new contracts from a consumer's perspective. Neither tool calls the running
APIs, validates database behavior, or proves that runtime responses conform to
the committed schemas. Runtime contract testing is a separate future
checkpoint, not an implied guarantee of this baseline.
