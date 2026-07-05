# Lab Phase 1 - Basic concepts of Kong in Kubernetes

## Mission

Practice Phase 1 concepts before requesting review.

## Practical exercises

- Create or prepare a local Kubernetes cluster.
- Check if `kubectl` is pointing to the correct cluster.
- Install required tools.
- Install Kong in Cluster.
- Validate Kong pods.
- Validate services created by Kong.
- Identify which port receives external traffic.
- Create a README with the initial architecture.

## Before asking for review

- What's the difference between Kong running on Docker Compose and Kong running on Kubernetes?
- What is an Ingress Controller?
- Why Kubernetes needs a controller to interpret Ingress resources?
- What Kong adds besides simply routing traffic?
- Which deployment models make sense to Kong?
- In production, what care I would have before installing a gateway in the cluster?

## Success criteria

Have a cluster with Kong installed and manage to explain:

- How traffic enters the cluster.
- Which component of Kong receives the request.
- How Kong connects to internal services.
- What's the difference between Ingress and Ingress Controller.
