# Learning Plan Service Mesh with Istio

This plan was designed to study Service Mesh with Istio in a practical way, focusing on real learning.

The idea is not only to watch lessons, but to understand why Service Mesh exists, what problems it solves in distributed systems and how to use Istio to control traffic, observe services, apply Canary deployments, set up gateways, test faults and better protect communication between services.

By the end of this course, I should be able to explain and implement Istio's main resources in a local Kubernetes cluster, understanding when to use and when not to use Service Mesh in real projects.

## How We Will Study

Whenever I start a new lesson, mentoring should follow this format:

1. Explain concepts clearly and gradually.
2. Split big subjects into small parts.
3. Propose practical exercises for me to implement on my own.
4. Avoid delivering the complete solution upfront.
5. Ask questions that lead me to reason before answering.
6. If I ask for help, just give hints or small stretches of YAML/commands.
7. Only show the complete solution if I ask explicitly or after I really try to solve.

When I finish an exercise, the review should follow this format:

1. Do a professional review of what I did.
2. Point out errors, improvements and good practices.
3. Explain the reason for each suggestion.
4. Say what I did right.
5. Tell me what I still need to study.
6. Connect the content to real Kubernetes scenarios, microservices and production.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- [`../final-project/`](../final-project/SHOWCASE.md): shared consolidation
  project used by this and the following infrastructure courses.

## Course Outline

### Introduction

- Introduction - 06:47
- The distributed world - 12:11
- Service mesh vs Istio - 04:59
- Main resources - 09:08
- Istio architecture - 13:21
- Real-time monitoring - 04:27

### Source code

- Source code - no duration

### Installation

- About the installation process - 02:00
- Installing k3d - 05:20
- Creating cluster - 04:07
- Installing istio ctl - 08:29
- Installing istio in the cluster - 09:22
- Injecting sidecar proxy - 07:54
- Configuring addons - 07:16

### Traffic management

- Talking about traffic management - 02:03
- Basic concepts - 17:43
- Summarizing concepts - 05:05
- Creating versions of deployments - 08:18
- Creating Canary deployments Manually - 05:59
- Creating canary deployment in seconds with istio and kiali - 12:41
- Creating virtual service and destination rule - 11:56
- Types of load balancing - 11:26
- Sticky session and consistent hash - 02:10
- Consistent hash dynamics - 05:27
- Consistent hash in practice - 12:33
- Fault injection in practice - 15:23
- Circuit breaker - 10:26
- Preparing environment for circuit breaker - 09:08
- Circuit breaker in practice - 16:53
- Starting with gateways - 09:58
- Configuring ingress gateway - 17:09
- Reconfiguring virtual service - 07:04
- Working with prefixes - 07:30
- Setting up domains - 09:15

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Introduction and Mental Model of Service Mesh](modules/01-fase-01-introducao-e-base-mental-de-service-mesh.md)
2. [Source code and base project](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Installation of the environment](modules/03-fase-03-instalacao-do-ambiente.md)
4. [Traffic Management Fundamentals](modules/04-fase-04-fundamentos-de-gerenciamento-de-trafego.md)
5. [Canary deploy](modules/05-fase-05-deploy-canario.md)
6. [Load balancing, sticky session and consistent hash](modules/06-fase-06-load-balancing-sticky-session-e-consistent-hash.md)
7. [Fault injection](modules/07-fase-07-fault-injection.md)
8. [Circuit breaker](modules/08-fase-08-circuit-breaker.md)
9. [Gateways and external exposure](modules/09-fase-09-gateways-e-exposicao-externa.md)
10. [Consolidation and final project](modules/10-fase-10-consolidacao-e-projeto-final.md)
11. [Classic interview questions](modules/11-perguntas-entrevista.md)

## Recommended rhythm

The course has about 4h53 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 12 days

#### Day 1

- Introduction
- Distributed world
- Service Mesh vs Istio
- Istio Architecture

#### Day 2

- Source code
- k3d
- Cluster creation

#### Day 3

- istioctl
- Installation of Istio
- Sidecar injection

#### Day 4

- Addons
- Kiali
- Prometheus
- Grafana
- Jaeger

#### Day 5

- Traffic Management Concepts
- Deployments versions
- Labels and subsets

#### Day 6

- Canary deploy
- VirtualService
- DestinationRule

#### Day 7

- Load balancing
- Sticky session
- Consistent hash

#### Day 8

- Fault injection
- Delay
- Abort
- Resilience test

#### Day 9

- Circuit breaker
- Outlier detection
- Cascade fault protection

#### Day 10

- Gateways
- Ingress Gateway
- External VirtualService

#### Day 11

- Prefixes
- Domains
- External routes

#### Day 12

- Final project
- General review
- Final README

## First Mission

Watch the lessons:

> Introduction
> The distributed world
> Service mesh vs Istio

Then answer with my words:

> What real problem does Service Mesh solve that it is difficult to solve only with application code and pure Kubernetes?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
