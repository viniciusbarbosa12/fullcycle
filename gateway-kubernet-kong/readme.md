# Learning Plan: Kong on Kubernetes, APIOps, GitOps and Load Testing

This plan was designed to study Kong in Kubernetes in a practical way, focusing on real learning.

The idea is not just to watch lessons, but to understand how Kong works within a Kubernetes cluster, how to use Ingress Controller, CRDs, plugins, OpenID authentication, APIOps, GitOps, OpenAPI contract validation, Argo pipelines, K6/Testkube load testing and operation in production environments.

The goal is to leave this course able to implement and operate Kong in Kubernetes with a more professional view, understanding not only “how to configure”, but also why each decision exists.

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
6. Connect the content with real Kubernetes scenarios, API Gateway, platform and production.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### Basic Concepts

- Main concepts - 04:49
- Kong Kubernetes Ingress - 09:30
- Kong Kubernetes deployment models - 08:20
- Installing kong - 13:14
- Additional tools - 07:00
- Changes in repository - no duration

### Source code

- Source code - no duration

### Kong & Kubernetes

- CRD plugins - 07:49
- Kong ingress - 12:23
- Open id provider - 10:21
- Kong openid plugin - 14:51

### APIOps

- APIOps - 10:53
- GitOps - 07:38
- Tools required - 05:38
- Validating openapi lint - 09:55
- Checking contracts - 09:32
- Installing argo - 14:47
- Running pipeline - 14:25

### Starting with Load Testing

- K6 testkube - 12:52
- Preparing Cluster - 12:58
- Applying load - 21:38

### Kong in production environments

- Setting up apps logs - 07:25
- Setting up kong logs - 19:45
- Analyzing kong - 13:22

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Basic concepts of Kong in Kubernetes](modules/01-fase-01-conceitos-basicos-de-kong-no-kubernetes.md)
2. [Source code and base project](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Kong & Kubernetes in practice](modules/03-fase-03-kong-e-kubernetes-na-pratica.md)
4. [APIOps and GitOps](modules/04-fase-04-apiops-e-gitops.md)
5. [K6 and Testkube load tests](modules/05-fase-05-testes-de-carga-com-k6-e-testkube.md)
6. [Kong in production environments](modules/06-fase-06-kong-em-ambientes-produtivos.md)
7. [Final project](modules/07-fase-07-projeto-final.md)
8. [Classic interview questions](modules/08-perguntas-entrevista.md)

## Recommended rhythm

The course has about 4h09 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 10 days

#### Day 1

- Main concepts
- Kubernetes Ingress Kong
- Difference between Gateway, Ingress and Ingress Controller

#### Day 2

- Deployment models
- Kong installation
- Additional tools

#### Day 3

- Source code
- Project structure
- First demonstrations

#### Day 4

- CRD plugins
- Kong Ingress
- Declarative plugins

#### Day 5

- OpenID Provider
- Kong OpenID plugin
- Gateway Authentication

#### Day 6

- APIOps
- GitOps
- Tools required

#### Day 7

- OpenAPI lint
- Checking contracts
- Pipeline

#### Day 8

- Argo CD
- Running pipeline
- Git as a source of truth

#### Day 9

- K6
- Testkube
- Load tests

#### Day 10

- Logs in production
- Kong Log Collection
- Analysis and troubleshooting

## First Mission

Watch the lessons:

> Main concepts
> Kong Kubernetes Ingress
> Kong Kubernetes deployment models

Then answer with my words:

> What is the practical difference between using Kong as a standard API Gateway and using Kong as an Ingress Controller within Kubernetes?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
