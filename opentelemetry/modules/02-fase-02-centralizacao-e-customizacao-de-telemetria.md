# Fase 2: Centralização e customização de telemetria

## Aula

- Centralização e customização de telemetria

## Objetivo

Entender por que telemetria precisa ser centralizada, normalizada e customizada conforme o contexto da aplicação.

Não basta gerar dado. Tem que gerar dado útil. Uma aplicação pode produzir milhares de spans, logs e métricas, mas se isso não estiver bem organizado, vira fumaça digital. Bonita, mas inútil.

## Conceitos principais

- Centralização de telemetria
- Customização
- Atributos
- Metadata
- Resource attributes
- Service name
- Environment
- Trace ID
- Span ID
- Correlation
- Context propagation
- Exporters
- Backends de observabilidade

## Exercícios práticos

- Listar quais dados de contexto uma aplicação deveria enviar.
- Criar exemplos de atributos úteis para uma API.
- Criar exemplos de atributos ruins ou sensíveis.
- Explicar por que `service.name` é importante.
- Desenhar um fluxo onde dados saem da aplicação, passam por um collector e chegam em um backend.

## Perguntas de reflexão

- Que informações ajudam a identificar uma requisição?
- Por que ambiente, versão e nome do serviço são importantes?
- Que tipo de dado eu não deveria mandar em telemetria?
- O que é correlação entre logs, métricas e traces?
- Por que centralizar telemetria ajuda no troubleshooting?

## Checkpoint

Criar uma lista de atributos mínimos que uma aplicação real deveria enviar junto da telemetria.
