# Kong API Gateway Learning Plan

This plan was designed to study API Gateway with Kong in a practical way, focusing on real learning.

The idea is not only to watch lessons, but to understand why API Gateway exists, what problems it solves in modern architectures and how to use Kong to expose APIs, control routes, apply plugins, authentication, rate limiting, correlation id and observability.

By the end of this course, I should be able to explain and implementing an API Gateway in a real scenario, understanding when to use, when to avoid, what risks it adds and how it connects with microservices, security, teams, monitoring, logging and tracing.

## How We Will Study

Whenever I start a new lesson, mentoring should follow this format:

1. Explain concepts clearly and gradually.
2. Split big subjects into small parts.
3. Propose practical exercises for me to implement on my own.
4. Avoid delivering the complete solution upfront.
5. Ask questions that lead me to reason before answering.
6. If I ask for help, just give hints or small bits of configuration/commands.
7. Only show the complete solution if I ask explicitly or after I really try to solve.

When I finish an exercise, the review should follow this format:

1. Do a professional review of what I did.
2. Point out errors, improvements and good practices.
3. Explain the reason for each suggestion.
4. Say what I did right.
5. Tell me what I still need to study.
6. Connect the content to real API, microservices and production scenarios.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### Basic Concepts

- Introduction - 01:25
- APIs - 09:29
- What is Gateway - 14:18
- API Gateway types - 16:09
- API Gateway role - 07:10
- Advantages and disadvantages of API Gateway - 08:19
- How to Choose API Gateway - 13:36

### Source code

- Source code - no duration

### Kong API Gateway

- kong API Gateway - 09:10
- Subscriptions - 05:20
- Deployment models - 07:53
- Docker Compose - 08:37
- Konga - 10:27
- Services - 06:01
- Routes - 11:18
- Plugins - 07:11
- Correlation id - 08:10
- Rate limiting ip - 12:42
- Response transformer - 07:59
- Consumers - 06:39
- Basic auth - 06:16
- Key authentication - 06:27

### Decisions when choosing the API Gateway

- Non-functional characteristics - 14:03
- Team design - 07:35

### Observability

- Monitoring - 11:43
- Logging - 09:56
- Tracing - 10:36
- Day two - 06:24

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Basic API and Gateway Concepts](modules/01-fase-01-conceitos-basicos-de-apis-e-gateway.md)
2. [Source code and base project](modules/02-fase-02-codigo-fonte-e-projeto-base.md)
3. [Kong API Gateway and local environment](modules/03-fase-03-kong-api-gateway-e-ambiente-local.md)
4. [Services and routes in Kong](modules/04-fase-04-servicos-e-rotas-no-kong.md)
5. [Cross-cutting plugins and policies](modules/05-fase-05-plugins-e-politicas-transversais.md)
6. [Consumers and authentication](modules/06-fase-06-consumers-e-autenticacao.md)
7. [Decisions on choosing API Gateway](modules/07-fase-07-decisoes-na-escolha-de-api-gateway.md)
8. [Observability](modules/08-fase-08-observabilidade.md)
9. [Final project](modules/09-fase-09-projeto-final.md)
10. [Classic interview questions](modules/10-perguntas-entrevista.md)

## Recommended rhythm

The course has about 4:04 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 10 days

#### Day 1

- Introduction
- APIs
- What is Gateway
- API Gateway role

#### Day 2

- API Gateway Types
- Advantages and disadvantages
- How to Choose API Gateway

#### Day 3

- Source code
- Local environment
- Kong with Docker Compose

#### Day 4

- Konga
- Services
- Routes

#### Day 5

- Plugins
- Correlation id
- Response Transformer

#### Day 6

- Rate limiting by IP
- Limit tests
- Configuration risks

#### Day 7

- Consumers
- Basic Auth
- Key Authentication

#### Day 8

- Decisions of choice
- Non-functional characteristics
- Team design

#### Day 9

- Monitoring
- Logging
- Tracing
- Day two

#### Day 10

- Final project
- General review
- Final README

## First Mission

Watch the lessons:

> Introduction
> APIs
> What is Gateway

Then answer with my words:

> What real problem does an API Gateway solve when an application starts having multiple APIs and multiple different clients?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
