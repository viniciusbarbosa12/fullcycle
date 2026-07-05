# Phase 6: Probes and health checks

## Lessons

- Understanding health check
- Creating endpoint Healthz
- Liveness in practice
- Understanding readinss
- Combining Liveness and Readiness
- Working with startupProbe

## Objective

Teach Kubernetes to understand whether the application is alive, ready to receive traffic or even booting.

Misconfigured probes can bring down healthy application or send traffic to application that is not yet ready. Here lives a lot ghost bug in production.

## Main concepts

- Health check
- Liveness probe
- Readiness probe
- Startup probe
- Endpoint healthz
- Automatic restore
- Traffic only for Pods ready
- Slow initialization
- Temporary failure
- CrashLoopBackOff

## Practical exercises

- Create endpoint `/healthz`.
- Configure LivenessProbe.
- Simulate locked application.
- Watch autorestart.
- Configure readinssProbe.
- Simulate application not ready yet.
- View Service Removing Endpoints not ready.
- Configure startupProbe.
- Simulate application with slow startup.
- Match 3 probes correctly.

## Reflection questions

- What's the difference between liveness and readinss?
- When to use startupProbe?
- What happens if livenessProbe is too aggressive?
- What happens if readinssProbe is wrong?
- Why is readinss important in employment?
- How probes help at zero downtime?
- What is CrashLoopBackOff?

## Checkpoint

Having probes configured and being able to demonstrate restore by liveness and traffic blocking by readiness.
