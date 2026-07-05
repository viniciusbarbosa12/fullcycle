# Phase 4: Collectors

## Lesson

- Collector Types

## Objective

Understand Collector types and when to use each template.

The Collector is like a telemetry triage station. It receives data, can process, filter, enrich and send to one or more destinations.

## Main concepts

- OpenTelemetry Collector
- Agent
- Gateway
- Receive
- Processor
- Export
- Pipeline
- OTLP
- Batch processer
- Filtering
- Enrichment
- Fan-out
- Observability backend

## Practical exercises

- Explain the difference between Collector as agent and as gateway.
- Create an architecture example with Collector per host/pod.
- Create an example of architecture with centralized Collector.
- List the advantages and disadvantages of each approach.
- Draw pipeline with receiver, processer and exporter.

## Reflection questions

- When it makes sense to use Collector as an agent?
- When it makes sense to use Collector as a gateway?
- What is the risk of sending direct telemetry from application to backend?
- Why use batch processor?
- How Collector Helps Change Observability Tool?
- How Collector helps avoid coupling with supplier?

## Checkpoint

Can explain when to use Local collector, central collector or both together.
