# Phase 4: Traffic Management Fundamentals

## Lessons

- Talking about traffic management
- Basic concepts
- Summarizing concepts
- Creating Deployments Versions

## Objective

Understanding how Istio controls traffic between service versions.

Before doing canary, fault injection or circuit breaker, I need to understand how traffic is routed and how Istio identifies different versions of the same application.

## Main concepts

- Traffic management
- Service
- Deployment
- Deployment version
- Version Labels
- Subsets
- VirtualService
- DestinationRule
- Route
- Traffic weight
- Match rules

## Practical exercises

- Create two versions of a deployment.
- Add Version Labels.
- Validate that Kubernetes Service sees both versions.
- Watch traffic distribution without Istio rule.
- Create a drawing explaining how traffic arrives in versions.

## Reflection questions

- How Istio knows there are different versions?
- What is the difference between Service Kubernetes and Istio VirtualService?
- Why Correct Labels Are Essential?
- What is a subset?
- What happens if I create versions but do not configure traffic rules?

## Checkpoint

Having two versions of the application running and being able to explain how the traffic gets to them.
