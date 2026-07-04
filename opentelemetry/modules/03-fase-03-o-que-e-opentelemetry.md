# Fase 3: O que é OpenTelemetry

## Aulas

- OpenTelemetry Seja bem vindo
- Site do OpenTelemetry
- O que é OpenTelemetry
- Componentes principais do OTEL
- Navegando pelo opentelemetry.io

## Objetivo

Entender o ecossistema do OpenTelemetry e seus principais componentes.

Aqui o foco é criar o mapa mental. Antes de instrumentar código, preciso entender SDK, API, Collector, exporters, propagators e backends.

## Conceitos principais

- OpenTelemetry API
- OpenTelemetry SDK
- Collector
- Exporter
- Receiver
- Processor
- Pipeline
- Propagation
- Context
- Trace
- Span
- Metric
- Log
- Backend
- Vendor-neutral

## Exercícios práticos

- Navegar pela documentação oficial.
- Listar os principais componentes do OTEL.
- Explicar a diferença entre API e SDK.
- Explicar o papel do Collector.
- Explicar o que é um exporter.
- Criar um desenho: aplicação -> SDK -> Collector -> backend.
- Criar um glossário próprio com os termos principais.

## Perguntas de reflexão

- O que significa OpenTelemetry ser vendor-neutral?
- Qual a diferença entre API e SDK?
- O que o Collector faz?
- Por que usar Collector em vez de enviar direto para uma ferramenta?
- O que é um exporter?
- O que é um receiver?
- O que é um processor?
- O que acontece se eu trocar Zipkin por outro backend?

## Checkpoint

Responder com minhas palavras:

> Como os dados saem da aplicação instrumentada e chegam em uma ferramenta como Zipkin, Jaeger, Prometheus ou Elastic?
