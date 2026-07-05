# Phase 2: Centralization and customization of telemetry

## Lesson

- Centralization and customization of telemetry

## Objective

Understanding why telemetry needs to be centralized, standardised and customized according to the context of the application.

It's not enough to generate data. You have to generate useful data. An application can produce thousands of spans, logs and metrics, but if this isn't well organized, it becomes digital smoke. Beautiful but useless.

## Main concepts

- Telemetry centralization
- Customization
- Attributes
- Metadata
- Resource attributes
- Service name
- Environment
- Trace ID
- Span ID
- Correlation
- Context propagation
- Exporters
- Observation Backends

## Practical exercises

- List which context data an application should send.
- Create examples of useful attributes for an API.
- Create examples of bad or sensitive attributes.
- Explain why `service.name` It's important.
- Draw a stream where data comes out of the application, pass through a collector and arrive in a backend.

## Reflection questions

- What information helps identify a request?
- Why environment, version and service name are important?
- What kind of data should I not command in telemetry??
- What is correlation between logs, metrics and dashes?
- Why Centering Telemetry Helps in Troubleshooting?

## Checkpoint

Create a list of minimum attributes that a real application should send along with telemetry.
