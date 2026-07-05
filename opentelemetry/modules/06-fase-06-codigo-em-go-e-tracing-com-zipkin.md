# Phase 6: Go Code and Tracing with Zipkin

## Lessons

- Exploring our Go code
- Tracing in practice with Zipkin
- Meet the Zipkin Project

## Objective

See OpenTelemetry working in practice with code and view traces in Zipkin.

Even if the course uses Go, the idea is to understand the concept. Then it transfers to .NET, Node, Java, Python or any modern stack.

## Main concepts

- Instrument code
- Trace
- Span
- Parent span
- Child span
- Trace ID
- Span ID
- Context propagation
- Zipkin
- Trace visualization
- Latency per step
- Request path

## Practical exercises

- Run the example project.
- Identify where instrumentation happens.
- Generate application requests.
- Open Zipkin.
- View traces.
- Identify spans.
- Identify duration of each step.
- Simulate a slow operation.
- Observe change in trace.
- Create a simple report explaining what the trace showed.

## Reflection questions

- What is a trace?
- What is a span?
- What is the difference between trace and span?
- How does Zipkin help investigate slowness?
- What is Trace ID?
- Why is context propagation essential?
- What happens if a service does not propagate context?
- How would I identify which service made the request slow?

## Checkpoint

Generate a request, view the trace on Zipkin and explain the full path of the request.
