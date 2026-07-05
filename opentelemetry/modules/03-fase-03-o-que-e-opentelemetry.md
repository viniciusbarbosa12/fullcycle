# Phase 3: What is OpenTelemetry

## Lessons

- OpenTelemetry Welcome
- OpenTelemetry website
- What is OpenTelemetry
- Main components of OTEL
- Sailing through opentelemetry. io

## Objective

Understanding the OpenTelemetry ecosystem and its main components.

Here the focus is to create the mental map. Before instrumenting code, I need to understand SDK, API, Collector, exporters, propagators and backends.

## Main concepts

- OpenTelemetry API
- OpenTelemetry SDK
- Collector
- Export
- Receive
- Processor
- Pipeline
- Advertising
- Context
- Trace
- Span
- Metric
- Log
- Backend
- Nutral vendor

## Practical exercises

- Browse the official documentation.
- List the main components of OTEL.
- Explain the difference between API and SDK.
- Explain the role of Collector.
- Explain what an exporter is.
- Create a drawing: application -> SDK -> Collector -> backend.
- Create your own glossary with the main terms.

## Reflection questions

- What does OpenTelemetry mean to be seller-neutral?
- What is the difference between API and SDK?
- What the Collector does?
- Why use Collector instead of sending straight to a tool?
- What is an exporter?
- What a receiver is?
- What a processor is?
- What happens if I trade Zipkin for another backend?

## Checkpoint

Answer with my words:

> How data comes out of the instrumented application and arrive in a tool like Zipkin, Jaeger, Prometheus or Elastic?
