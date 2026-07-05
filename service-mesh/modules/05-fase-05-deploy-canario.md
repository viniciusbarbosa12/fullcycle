# Phase 5: Canary deploy

## Lessons

- Creating Canary deployments manually
- Creating Canary deployments in seconds with istio and kiali
- Creating virtual service and destination rule

## Objective

Learn how to release a new version gradually, controlling traffic percentage and reducing deploy risk.

## Main concepts

- Canary deploy
- VirtualService
- DestinationRule
- Subsets
- Weighted Routing
- Stable version
- Canary version
- Gradual rollout
- Rollback
- Kiali

## Practical exercises

- Create v1 and v2 version of the application.
- Create DestinationRule with subsets `v1` and `v2`.
- Create VirtualService routing 90% to v1 and 10% to v2.
- Change to 70/30.
- Change to 50/50.
- Simulate rollback turning 100% to v1.
- Watch everything in Kiali.

## Reflection questions

- Why canary deployment reduces risk?
- What is the difference between manual canary and canary using Istio?
- What VirtualService controls?
- What DestinationRule defines?
- How I'd roll back fast?
- What metric would I observe before increasing traffic to v2?

## Checkpoint

To change traffic weight between v1 and v2 and prove behavior with requests and Kiali.
