# Phase 5: ConfigMap, Secrets and application configuration

## Lessons

- Understanding Configuration Objects
- Using environment variables
- ConfigMap Environment Variables
- Injecting ConfigMap into the application
- Secrets and environment variables

## Objective

Separate code and image configuration.

The application image should be the same between environments, but the settings change. ConfigMap stores nonsensitive settings. Secret keeps sensitive information with extra care.

## Main concepts

- ConfigMap
- Secret
- Environment variables
- Environment Settings
- Configuration injection
- Decoupling
- Twelve-Factor App
- Sensitive data
- Base64 in Secret
- Config security

## Practical exercises

- Create variables directly in Deployment.
- Create ConfigMap.
- Inject ConfigMap as environment variable.
- Inject ConfigMap as a file if it makes sense.
- Change ConfigMap and view impact.
- Create Secret.
- Inject Secret as environment variable.
- Document what should go on ConfigMap and what should go on Secret.

## Reflection questions

- Why not hardcode configuration in the application?
- What's the difference between ConfigMap and Secret?
- Kubernetes secret is automatically encrypted?
- Why base64 is not encryption?
- When to use environment variable?
- When to mount configuration as file?
- What happens if I change ConfigMap after Pod is already running?

## Checkpoint

Have the app read settings via ConfigMap and Secret without changing the Docker image.
