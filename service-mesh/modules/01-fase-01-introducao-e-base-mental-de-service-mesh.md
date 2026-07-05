# Phase 1: Introduction and Mental Model of Service Mesh

## Lessons

- Introduction
- The distributed world
- Service mesh vs Istio
- Main resources
- istio architecture
- Real-time monitoring

## Objective

Understand the problem before tool.

Service Mesh does not exist because Kubernetes is “weak”. It exists because, when a system has several services talking to each other, problems of traffic, security, observability, relays, timeouts, circuit breaker, canary deployment and traceability begin to appear..

## Main concepts

- Distributed systems
- Microservices
- Communication service
- Service Mesh
- Istio
- Plan Date
- Control plan
- Proxy Sidecar
- Envoy
- Observability
- Telemetry
- Tracing
- Metrics
- Logs
- Kiali
- Prometheus
- Grafana
- Jaeger

## Practical exercises

- Explain with my words what Service Mesh is.
- Draw a simple flow with 3 talking services.
- Identify which problems appear in this stream.
- Separate responsibilities between application, Kubernetes and Istio.
- List which Istio resources seem most useful in production.
- Create a short summary of plan and control plane data.

## Reflection questions

- What problem Service Mesh tries to solve?
- Why communication between services becomes difficult in distributed systems?
- What is sidecar proxy?
- What is the difference between Service Mesh and Istio?
- What Istio does that the application should not need to do manually?
- When Service Mesh Can Be Exaggeration?
- Why observability is so important in microservices?

## Checkpoint

Answer with my words:

> Why would a team use Istio in a Kubernete environment with various microservices?
