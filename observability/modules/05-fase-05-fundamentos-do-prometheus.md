# Fase 5: Fundamentos do Prometheus

## Aulas

- Repositório do módulo
- Prometheus
- Conceitos iniciais
- Dinâmica de funcionamento
- Prometheus vs pull
- Dinâmica dos exporters
- Arquitetura do Prometheus
- Trabalhando com dados
- Tipos de métricas
- PromQL
- Tour no prometheus.io
- Executando prometheus pela primeira vez
- Visão geral do dashboard padrão

## Objetivo

Entender como o Prometheus coleta, armazena e consulta métricas.

Prometheus trabalha muito bem com métricas temporais. Ele coleta dados de targets via pull, armazena séries temporais e permite consultar usando PromQL.

## Conceitos principais

- Prometheus
- Métricas
- Time series
- Pull model
- Target
- Scrape
- Exporter
- Labels
- PromQL
- Gauge
- Counter
- Histogram
- Summary
- Service discovery
- Retenção de dados
- Dashboard padrão

## Exercícios práticos

- Subir Prometheus localmente.
- Acessar dashboard padrão.
- Identificar targets.
- Fazer uma query simples com PromQL.
- Entender uma métrica com labels.
- Comparar Gauge, Counter e Histogram.
- Criar um README com conceitos principais.
- Explicar o modelo pull com minhas palavras.

## Perguntas de reflexão

- O que é uma métrica?
- O que é uma time series?
- O que significa scrape?
- O que é target?
- Por que Prometheus usa modelo pull?
- O que são exporters?
- Qual a função das labels?
- Quando usar Gauge?
- Quando usar Counter?
- Quando usar Histogram?

## Checkpoint

Ter Prometheus rodando, coletando pelo menos um target e conseguir consultar métricas usando PromQL básico.
