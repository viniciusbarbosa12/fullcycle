# Kubernetes Learning Plan

This plan was designed to study Kubernetes in a practical way, focusing on real learning.

The idea is not only to watch lessons, but to understand how to put applications in a cluster, expose services, configure variables, deal with health checks, scale with HPA, work with persistent volumes, expose applications with Ingress, configure TLS with cert-manager and understand RBAC with Service Accounts, Roles and ClusterRoles.

By the end of this course, I should be able to implement a real application in Kubernetes, explaining the main objects, debugging common problems and better understanding what really happens when an application runs within a cluster.

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
6. Connect the content to real Kubernetes, cloud, DevOps and production scenarios.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### Source code

- Course source code - no duration

### Starting with Kubernetes

- Introduction to Kubernetes - 16:36
- Installing Kind - 09:44
- Tip start Kind - no duration
- Creating first cluster with Kind - 06:29
- Creating multi node cluster - 09:11
- Changing context and using the VSCode extension - 06:05

### First steps in practice

- Creating an example app and image - 06:33
- Working with Pods - 13:04
- Creating First ReplicaSet - 12:02
- The ReplicaSet problem - 06:05
- Implementing Deployment - 09:01
- Rollout and revisions - 08:19

### Services

- Understanding the concept of services - 03:27
- Using ClusterIP - 10:34
- Differences between Port and targetPort - 05:34
- Using proxy to access Kubernetes API - 06:07
- Using NodePort - 06:52
- Working with LoadBalancerr - 05:28

### Configuration objects

- Understanding Configuration Objects - 02:17
- Using environment variables - 05:56
- Environment variables with ConfigMap - 06:30
- Injecting ConfigMap into the application - 19:38
- Secrets and environment variables - 09:14

### Probes

- Understanding health check - 04:45
- Creating the Healthz endpoint - 08:53
- Liveness in practice - 12:19
- Understanding Readiness - 10:58
- Combining Liveness and Readiness - 13:58
- Working with startupProbe - 06:55

### Resources and HPA

- Installing metrics-server - 09:49
- Understanding the Use of Resources - 13:37
- Applying Deployment with Resources - 03:31
- Creating and configuring HPA - 09:09
- Image version for stress test - no duration
- Stress test with fortio - 17:40
- Fortio command update - no duration

### StatefulSets and persistent volumes

- Understanding Persistent Volumes - 17:01
- Creating and mounting a persistent volume - 12:56
- Understanding Stateless vs Stateful - 11:04
- Creating StatefulSet - 14:21
- Creating headless service - 14:56
- Creating dynamic volumes with StatefulSet - 10:29
- Should I run my database in Kubernetes? - 05:52

### Ingress

- Overview - 05:14
- Configuring application in GKE - 06:02
- Installing ingress nginx controller - 06:25
- Configuring Ingress and DNS - 12:11

### Cert-manager

- Installing cert manager - 08:32
- Configuring and issuing certificate - 10:53

### Namespaces and Service Accounts

- Namespaces - 06:52
- Contexts by namespace - 11:51
- Understanding Service Accounts - 06:10
- Creating Service Account and Roles - 13:50
- ClusterRole - 03:43

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Source code and course overview](modules/01-fase-01-codigo-fonte-e-visao-geral-do-curso.md)
2. [Starting with Kubernetes and Kind](modules/02-fase-02-iniciando-com-kubernetes-e-kind.md)
3. [Pods, ReplicaSet, Deployment and Rollout](modules/03-fase-03-pods-replicaset-deployment-e-rollout.md)
4. [Services](modules/04-fase-04-services.md)
5. [ConfigMap, Secrets and application configuration](modules/05-fase-05-configmap-secrets-e-configuracao-da-aplicacao.md)
6. [Probes and health checks](modules/06-fase-06-probes-e-health-checks.md)
7. [Resources, metrics-server and HPA](modules/07-fase-07-resources-metrics-server-e-hpa.md)
8. [Persistent Volumes and StatefulSets](modules/08-fase-08-volumes-persistentes-e-statefulsets.md)
9. [Ingress and DNS](modules/09-fase-09-ingress-e-dns.md)
10. [Cert-manager and TLS](modules/10-fase-10-cert-manager-e-tls.md)
11. [Namespaces, Service Accounts and RBAC](modules/11-fase-11-namespaces-service-accounts-e-rbac.md)
12. [Final project](modules/12-fase-12-projeto-final.md)
13. [Classic interview questions](modules/13-perguntas-entrevista.md)

## Recommended rhythm

The course has about 7:54 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 16 days

#### Day 1

- Source code
- Introduction to Kubernetes
- Concepts of cluster, node, control plane and worker

#### Day 2

- Installation of Kind
- First cluster
- Multi node cluster
- Contexts

#### Day 3

- Example application
- Docker Image
- First Pod

#### Day 4

- ReplicaSet
- ReplicaSet Problem
- Deployment

#### Day 5

- Rollout
- Revisions
- Rollback

#### Day 6

- Services
- ClusterIP
- Port and targetPort

#### Day 7

- NodePort
- LoadBalancer
- Kubernetes API Access

#### Day 8

- Environment variables
- ConfigMap
- Secret

#### Day 9

- Health check
- Liveness
- Readiness
- StartupProbe

#### Day 10

- Metrics-server
- Requests and limits
- Deployment with resources

#### Day 11

- HPA
- Fortio stress test
- Scaling analysis

#### Day 12

- Persistent volumes
- PV
- PVC

#### Day 13

- Stateless vs Stateful
- StatefulSet
- Headless Service
- Dynamic volumes

#### Day 14

- Ingress
- Ingress NGINX Controller
- DNS

#### Day 15

- Cert-manager
- TLS
- HTTPS

#### Day 16

- Namespaces
- Service Accounts
- RBAC
- Final project and README

## First Mission

Watch the lessons:

> Course source code
> Introduction to Kubernetes
> Installing Kind
> Creating first cluster with Kind

Then answer with my words:

> What problem does Kubernetes solve when I have a containerized application that needs to run reliably, scale and be updated without dropping everything?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
