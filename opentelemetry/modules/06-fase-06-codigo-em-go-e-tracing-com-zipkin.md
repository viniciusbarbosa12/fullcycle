# Fase 6: Código em Go e tracing com Zipkin

## Aulas

- Visitando nosso código em Go
- Tracing na pratica com Zipkin
- Conheça o Projeto Zipkin

## Objetivo

Ver OpenTelemetry funcionando na prática com código e visualizar traces no Zipkin.

Mesmo que o curso use Go, a ideia é entender o conceito. Depois isso se transfere para .NET, Node, Java, Python ou qualquer stack moderna.

## Conceitos principais

- Código instrumentado
- Trace
- Span
- Parent span
- Child span
- Trace ID
- Span ID
- Propagação de contexto
- Zipkin
- Visualização de traces
- Latência por etapa
- Caminho da requisição

## Exercícios práticos

- Rodar o projeto de exemplo.
- Identificar onde a instrumentação acontece.
- Gerar requisições para a aplicação.
- Abrir o Zipkin.
- Visualizar traces.
- Identificar spans.
- Identificar duração de cada etapa.
- Simular uma operação lenta.
- Observar a mudança no trace.
- Criar um relatório simples explicando o que o trace mostrou.

## Perguntas de reflexão

- O que é um trace?
- O que é um span?
- Qual a diferença entre trace e span?
- Como o Zipkin ajuda a investigar lentidão?
- O que é trace ID?
- Por que propagação de contexto é essencial?
- O que acontece se um serviço não propaga contexto?
- Como eu identificaria qual serviço deixou a requisição lenta?

## Checkpoint

Conseguir gerar uma requisição, visualizar o trace no Zipkin e explicar o caminho completo da requisição.
