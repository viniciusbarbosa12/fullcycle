# Final project - Kubernetes

This directory serves as a guide to the final consolidation of the course.

## Objective

Gather all concepts in a near production scenario.

## Suggested final project

Create a Kubernetes environment with a full application containing:

- Cluster Kind or cluster cloud
- Containerized application
- Deployment
- ReplicaSet managed by Deployment
- Rollout and rollback tested
- Service ClusterIP
- Service NodePort or LoadBalancerr for testing
- ConfigMap
- Secret
- Liveness probe
- Readiness probe
- Startup probe, if it makes sense
- Requests and limits
- HPA working
- Fortio stress test
- PersistentVolume and PVC
- StatefulSet with Headless Service
- Ingress Controller
- Ingress resource with host/path
- DNS or local host configured
- TLS with cert-manager
- OwnNamespace
- Service Account
- Roll/RoleBinding
- README explaining all architecture

## Success criteria

The final project needs to demonstrate:

- Application running in Kubernetes
- Deployments working
- Rollout and rollback working
- Services properly configured
- Separate configuration via ConfigMap and Secret
- Probes well configured
- Defined Resources
- HPA climbing under load
- Persistent volume functioning
- StatefulSet understood
- Ingress exposing application
- TLS configured
- OrganizedNamespace
- RBAC with minimum permissions
- Clear README
- Ability to explain decisions and trade-offs
