# Phase 2: Source code and base project

## Lesson

- Source code

## Objective

Understand the shared MeshCommerce project before setting up the gateway.

Before routing traffic, I need to understand which services exist, which ports they use, which endpoints they expose, and what problem the gateway will solve.

## Project used by this course

The active course project is now
[`final-project`](../../final-project/SHOWCASE.md).
It is the single evolving platform used by the remaining infrastructure
lessons.

The smaller project under
`gateway/labs/fase-02-codigo-fonte-e-projeto-base/` remains available as an
isolated reference, but it is not the main showcase.

At this phase, use only the current direct flow:

```text
React -> Orders API -> Payments API -> PostgreSQL
```

Kong must not be added before this baseline is understood and validated.

## Main concepts

- Base Repository
- Internal services
- Endpoints
- Ports
- Docker Compose
- Local Settings
- Dependencies
- Requisition flow
- Technical README

## Practical exercises

- Inspect the shared base project.
- Identify which services/APIs exist.
- Identify ports used for each service.
- Run the services locally.
- Test endpoints without gateway.
- Review the showcase README and initial architecture.
- Draw flow “before gateway”.

## Reflection questions

- Before setting up a gateway, what I need to know about APIs?
- Why it is important to test the services without gateway first?
- How would I know if a mistake is in the gateway or the service?
- How to organize README for another must raise the environment?

## Checkpoint

Create a README with:

- Existing services
- Ports
- Main endpoints
- How to run locally
- How to test without the Gateway
- What the Gateway will be responsible for

For the shared project, this information is maintained in
[`SHOWCASE.md`](../../final-project/SHOWCASE.md). The practical
checkpoint is complete only after the direct health, order-listing, and
order-creation flows have been executed successfully.
