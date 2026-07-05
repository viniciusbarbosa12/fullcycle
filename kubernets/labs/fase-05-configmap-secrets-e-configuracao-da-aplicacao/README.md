# Lab Phase 5 - ConfigMap, Secrets and Application Configuration

## Mission

Practice Phase 5 concepts before requesting review.

## Practical exercises

- Create variables directly in Deployment.
- Create ConfigMap.
- Inject ConfigMap as environment variable.
- Inject ConfigMap as a file if it makes sense.
- Change ConfigMap and view impact.
- Create Secret.
- Inject Secret as environment variable.
- Document what should go on ConfigMap and what should go on Secret.

## Before asking for review

- Why not hardcode configuration in the application?
- What's the difference between ConfigMap and Secret?
- Kubernetes secret is automatically encrypted?
- Why base64 is not encryption?
- When to use environment variable?
- When to mount configuration as file?
- What happens if I change ConfigMap after Pod is already running?

## Success criteria

Have the app read settings via ConfigMap and Secret without changing the Docker image.
