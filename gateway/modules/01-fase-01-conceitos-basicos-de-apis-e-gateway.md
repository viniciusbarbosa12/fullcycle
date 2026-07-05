# Phase 1: Basic API and Gateway Concepts

## Lessons

- Introduction
- APIs
- What is Gateway
- API Gateway types
- API Gateway role
- Advantages and disadvantages of API Gateway
- How to Choose API Gateway

## Objective

Understand the problem before tool.

API Gateway is not just an “input port”. It exists to centralize concerns that appear when multiple APIs need to be exposed, protected, monitored and consumed by different clients.

## Main concepts

- API
- API Gateway
- Reverse proxy
- Single entry
- Route
- Authentication
- Authorisation
- Rate limiting
- Request/response transformation
- Observability
- Logging
- Tracing
- Security
- Internal vs external gateway
- BFF
- Edge gateway
- Gateway by domain
- Centralised Gateway
- Architectural Trade-offs

## Practical exercises

- Draw a simple architecture with frontend, API Gateway and 3 internal APIs.
- Explain in my words why the frontend should not directly know all internal services.
- Listing responsibilities that make sense to put in the gateway.
- List responsibilities that shouldn't go to the gateway.
- Compare API Gateway with Load Balancer.
- Create a small README explaining when I would use API Gateway on a real project.

## Reflection questions

- What is an API?
- What is an API Gateway?
- What problem does the API Gateway solve??
- What is the difference between API Gateway and Load Balancer?
- What happens when every customer calls all microservices directly?
- What advantages a gateway brings?
- What risks a gateway adds?
- When API Gateway can become bottleneck?
- How to Choose an API Gateway for a Business?

## Checkpoint

Answer with my words:

> Why a team would use API Gateway in a multi API architecture?
