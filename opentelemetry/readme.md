# OpenTelemetry Learning Plan

This plan was designed to study OpenTelemetry in a practical way, focusing on real learning.

The idea is not just to watch lessons, but to understand how to standardize telemetry in modern applications: traces, metrics, logs, collectors, exporters, manual instrumentation, automatic instrumentation and integration with tools like Zipkin.

By the end of this course, I should be able to explain what OpenTelemetry is, why it exists, how it connects with observability and how to instrument an application to investigate real problems in production.

## How We Will Study

Whenever I start a new lesson, mentoring should follow this format:

1. Explain concepts clearly and gradually.
2. Split big subjects into small parts.
3. Propose practical exercises for me to implement on my own.
4. Avoid delivering the complete solution upfront.
5. Ask questions that lead me to reason before answering.
6. If I ask for help, just give hints or small bits of configuration/code.
7. Only show the complete solution if I ask explicitly or after I really try to solve.

When I finish an exercise, the review should follow this format:

1. Do a professional review of what I did.
2. Point out errors, improvements and good practices.
3. Explain the reason for each suggestion.
4. Say what I did right.
5. Tell me what I still need to study.
6. Connect the content with real production scenarios, microservices and troubleshooting.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### OpenTelemetry

- Introduction to OTEL - 02:24
- Source code - no duration
- Agenda - 02:02
- Revisiting observability - 06:52
- Centralization and customization of telemetry - 10:04
- OpenTelemetry Welcome - 3:59
- OpenTelemetry website - no duration
- What is OpenTelemetry - 04:35
- Main components of OTEL - 09:24
- Navigating opentelemetry.io - 08:25
- Types of Collector - 05:59
- Manual vs Automatic Instrumentation - 08:48
- Exploring our Go code - 10:51
- Tracing in practice with Zipkin - 13:48
- Meet the Zipkin Project - no duration
- Main repositories - 05:58
- Collector-Contrib - no duration

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Introduction to OpenTelemetry](modules/01-fase-01-introducao-ao-opentelemetry.md)
2. [Centralization and customization of telemetry](modules/02-fase-02-centralizacao-e-customizacao-de-telemetria.md)
3. [What is OpenTelemetry](modules/03-fase-03-o-que-e-opentelemetry.md)
4. [Collectors](modules/04-fase-04-collectors.md)
5. [Manual vs Automatic Instrumentation](modules/05-fase-05-instrumentacao-manual-vs-automatica.md)
6. [Go Code and Tracing with Zipkin](modules/06-fase-06-codigo-em-go-e-tracing-com-zipkin.md)
7. [Main Repositories and Collector Contrib](modules/07-fase-07-repositorios-principais-e-collector-contrib.md)
8. [Final project](modules/08-fase-08-projeto-final.md)
9. [Classic interview questions](modules/09-perguntas-entrevista.md)

## Recommended rhythm

The course has about 1:33 video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 5 days

#### Day 1

- Introduction to OTEL
- Agenda
- Revisiting observability
- Centralization and customization of telemetry

#### Day 2

- What is OpenTelemetry
- Main components of OTEL
- Documentation navigation

#### Day 3

- Collector Types
- Manual vs Automatic Instrumentation
- Architecture Design

#### Day 4

- Go Code
- Tracing with Zipkin
- Trace visualization

#### Day 5

- Main repositories
- Collector-Contrib
- Final project
- Final README

## First Mission

Watch the lessons:

> Introduction to OTEL
> Agenda
> Revisiting observability
> Centralization and customization of telemetry

Then answer with my words:

> Why OpenTelemetry is useful when a company has multiple applications, multiple languages and various observability tools?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
