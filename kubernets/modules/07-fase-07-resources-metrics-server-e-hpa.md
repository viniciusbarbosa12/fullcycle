# Phase 7: Resources, metrics-server and HPA

## Lessons

- Installing metrics-server
- Understanding Using Resources
- Applying Deployment with Resources
- Creating and configuring HPA
- Image version for stress test
- Stress test with fortio
- Fortio command update

## Objective

Understand how to control CPU/memory consumption and scale the application horizontally.

Without requests and limits, the scheduler works in the dark. Without metrics-server, HPA has no data. No load test, you don't see the scale happening.

## Main concepts

- metrics-server
- Requests
- Limits
- CPU
- Memory
- Scheduler
- QoS
- HPA
- Horizontal scaling
- Target CPU usage
- Stress test
- Fortio
- Autoscaling
- Saturation

## Practical exercises

- Install metrics-server.
- Validate metrics with kubectl top.
- Configure requests and limits in Deployment.
- Observe resource consumption.
- Create HPA.
- Configure minimum and maximum replicas.
- Generate cargo with Fortio.
- Observe increased replicas.
- Stop load and observe replica reduction.
- Document behavior.

## Reflection questions

- What are requests for??
- What are limits for??
- What is the difference between request and limit?
- What happens if I don't configure resources?
- What HPA is?
- What HPA needs to work?
- Why HPA does not solve miswritten application?
- When increasing replicas does not solve the problem?
- What is the risk of too low memory limit?

## Checkpoint

Having HPA running, scaling the application under load and reducing replicas after.
