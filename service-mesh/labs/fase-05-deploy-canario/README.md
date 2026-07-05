# Lab Phase 5 - Canary deployments

## Mission

Practice Phase 5 concepts before requesting review.

## Practical exercises

- Create v1 and v2 version of the application.
- Create DestinationRule with subsets `v1` and `v2`.
- Create VirtualService routing 90% to v1 and 10% to v2.
- Change to 70/30.
- Change to 50/50.
- Simulate rollback turning 100% to v1.
- Watch everything in Kiali.

## Before asking for review

- Why canary deployment reduces risk?
- What is the difference between manual canary and canary using Istio?
- What VirtualService controls?
- What DestinationRule defines?
- How I'd roll back fast?
- What metric would I observe before increasing traffic to v2?

## Success criteria

To change traffic weight between v1 and v2 and prove behavior with requests and Kiali.
