# Phase 4: Services

## Lessons

- Understanding the concept of services
- Using ClusterIP
- Differences between Port and targetPort
- Using proxy to access Kubernetes API
- Using NodePort
- Working with LoadBalancerr

## Objective

Understand how to expose and access applications inside and outside the cluster.

Pods are ephemeral. They're born, they die, they change their IP address. Service creates a fixed access point for a set of Pods.

## Main concepts

- Service
- ClusterIP
- NodePort
- LoadBalancer
- Port
- TargetPort
- Selector
- Endpoint
- Service discovery
- Internal DNS
- kubectl proxy
- Internal and external exposure

## Practical exercises

- Create ClusterIP Type Service.
- Access application within cluster.
- Understand port and targetPort.
- Test kubectl proxy.
- Create NodePort Service.
- Create LoadBalancerr Type Service.
- View Service-generated endpoints.
- Change labels and observe impact on endpoints.

## Reflection questions

- Why Service Exists?
- What problem does he solve with the Pods??
- What is the difference between ClusterIP, NodePort and LoadBalancerr?
- What is the difference between port and targetPort?
- What happens if the Service selector is wrong?
- When to use ClusterIP?
- When to use NodePort?
- When to use LoadBalancerr?

## Checkpoint

Getting to expose the application in 3 different ways and explain when each type of Service makes sense.
