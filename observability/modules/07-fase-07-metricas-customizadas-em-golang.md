# Phase 7: Custom metrics in Golang

## Lessons

- Preparing Golang Environment
- Creating Gauge-type metric
- Working with Counter
- Creating histogram
- Activating new target on Prometheus

## Objective

Learn how to create custom metrics within the application.

Here the game changes. Instead of just looking at CPU and memory, you start measuring business stuff and application behavior: amount of orders, response time, active users, type failures, queues, relays and anything that helps answer real questions.

## Main concepts

- Instrumentation
- Custom Metric
- Prometheus client
- Endpoint `/metrics`
- Gauge
- Counter
- Histogram
- Buckets
- Labels
- Custom Target
- Technical metrics
- Business metrics

## Practical exercises

- Prepare an application Simple Go.
- Create endpoint `/metrics`.
- Create Gauge metric.
- Create Counter metric.
- Create a Histogram metric.
- Add labels carefully.
- Configure Prometheus to collect the application.
- Make requests and observe metrics changing.
- Document what each metric measures.

## Reflection questions

- Why Create Custom Metrics?
- When to use Gauge?
- When to use Counter?
- When to use Histogram?
- What are buckets?
- What is the risk of creating too many labels?
- What is the difference between technical metric and business metric?
- Which metrics I would create in a real .NET API?

## Checkpoint

Have an application exposing custom metrics and Prometheus collecting these data.
