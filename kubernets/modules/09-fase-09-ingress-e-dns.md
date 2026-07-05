# Phase 9: Ingress and DNS

## Lessons

- Overview
- Setting up application in GKE
- Installing ingress nginx controller
- Configuring Ingress and DNS

## Objective

Expose applications HTTP/HTTPS more professionally.

Service exposes application, but Ingress allows host routing, path and integration with input controller. In production, Ingress is usually the HTTP port of the application.

## Main concepts

- Ingress
- Ingress Controller
- NGINX Ingress Controller
- Host
- Path
- DNS
- GKE
- Load Balancer
- HTTP rules
- External exposure
- Domain routing

## Practical exercises

- Install Ingress NGINX Controller.
- Create Resource Ingress.
- Configure Host Route.
- Configure path route.
- Point local domain or DNS.
- Test external access.
- Watch controller logs.
- Compare Ingress with Service LoadBalancerr.

## Reflection questions

- What's the difference between Ingress and Ingress Controller?
- Why creating Ingress without controller does not solve?
- When to use Ingress instead of LoadBalancerr direct?
- How Host Routing Works?
- How path routing works?
- What the DNS needs to do?
- What is the role of NGINX controller?

## Checkpoint

Have a domain or host app configured using Ingress.
