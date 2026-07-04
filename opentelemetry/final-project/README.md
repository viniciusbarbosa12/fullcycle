# Projeto final - OpenTelemetry

Este diretorio serve como guia para a consolidacao final do curso.

## Objetivo

Juntar todos os conceitos em um cenário próximo de produção.

## Projeto final sugerido

Criar um ambiente local com OpenTelemetry contendo:

- Uma aplicação instrumentada
- OpenTelemetry SDK configurado
- Instrumentação automática, se disponível
- Instrumentação manual em pelo menos uma operação importante
- Trace ID visível
- Spans com atributos úteis
- OpenTelemetry Collector configurado
- Receiver OTLP
- Processor batch
- Exporter para Zipkin
- Zipkin rodando localmente
- Requisições gerando traces
- Simulação de latência
- README explicando a arquitetura
- Guia de troubleshooting usando traces

## Criterios de sucesso

O projeto final precisa demonstrar:

- Entendimento do papel do OpenTelemetry
- Diferença entre logs, métricas e traces
- Diferença entre instrumentação manual e automática
- Collector funcionando
- Pipeline de telemetria configurada
- Traces chegando no Zipkin
- Spans com nomes claros
- Atributos úteis e seguros
- Capacidade de investigar uma requisição lenta
- README claro
- Capacidade de explicar como trocaria Zipkin por outro backend
