# Phase 1: Basic concepts of Kong in Kubernetes

## Lessons

- Main concepts
- Kong Kubernetes Ingress
- Kong Kubernetes deployment models
- Installing kong
- Additional tools
- Changes in the repository

## Objective

Understand how Kong enters Kubernetes and what role he plays within the cluster.

Here the focus is to exit the “Kong as a gateway running in Docker Compose” and start seeing Kong as part of the Kubernetes infrastructure, functioning as Ingress Controller, reading cluster resources and applying routing rules, plugins and security.

## Main concepts

- Kubernetes
- Ingress
- Ingress Controller
- Kong Ingress Controller
- Kubernetes API Gateway
- Services
- Deployments
- Namespaces
- CRDs
- Control plan
- Plan Date
- Helm
- kubectl
- Installation values
- Deployment models
- Local and production environments

## Practical exercises

- Create or prepare a local Kubernetes cluster.
- Check if `kubectl` is pointing to the correct cluster.
- Install required tools.
- Install Kong in Cluster.
- Validate Kong pods.
- Validate services created by Kong.
- Identify which port receives external traffic.
- Create a README with the initial architecture.

## Reflection questions

- What's the difference between Kong running on Docker Compose and Kong running on Kubernetes?
- What is an Ingress Controller?
- Why Kubernetes needs a controller to interpret Ingress resources?
- What Kong adds besides simply routing traffic?
- Which deployment models make sense to Kong?
- In production, what care I would have before installing a gateway in the cluster?

## Checkpoint

Have a cluster with Kong installed and manage to explain:

- How traffic enters the cluster.
- Which component of Kong receives the request.
- How Kong connects to internal services.
- What's the difference between Ingress and Ingress Controller.
