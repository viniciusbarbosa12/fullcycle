# Phase 9: Gateways and external exposure

## Lessons

- Starting with gateways
- Configuring ingress gateway
- Reconfiguring virtual service
- Working with prefixes
- Setting up domains

## Objective

Learn how to expose services out of the cluster using Istio Gateway and VirtualService.

## Main concepts

- Istio Gateway
- Ingress Gateway
- Host
- Port
- Protocol
- VirtualService
- Prefix match
- URI routing
- Domains
- Local DNS
- External routing
- Mesh traffic entry

## Practical exercises

- Create Gateway.
- Configure host and port.
- Reconfiguring VirtualService to use gateway.
- Create route by prefix.
- Create more than one path for different services.
- Configure Local Domain.
- Access application from outside the cluster.
- Validate behavior in Kiali.

## Reflection questions

- What's the difference between Gateway and VirtualService?
- Why do I need Gateway for external traffic?
- What is prefix match?
- How I'd route `/api` for backend and `/app` for frontend?
- How domains help in real environments?
- What is the difference between Kubernetes Ingress and Istio Gateway?

## Checkpoint

Have an externally accessible application via Istio Gateway, with prefixed routes and configured domain.
