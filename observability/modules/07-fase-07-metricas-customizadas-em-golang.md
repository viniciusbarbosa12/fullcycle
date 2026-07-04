# Fase 7: Métricas customizadas em Golang

## Aulas

- Preparando ambiente Golang
- Criando métrica do tipo Gauge
- Trabalhando com Counter
- Criando histogram
- Ativando novo target no Prometheus

## Objetivo

Aprender a criar métricas customizadas dentro da aplicação.

Aqui o jogo muda. Em vez de olhar só CPU e memória, você começa a medir coisas do negócio e do comportamento da aplicação: quantidade de pedidos, tempo de resposta, usuários ativos, falhas por tipo, filas, retries e qualquer coisa que ajude a responder perguntas reais.

## Conceitos principais

- Instrumentação
- Métrica customizada
- Prometheus client
- Endpoint `/metrics`
- Gauge
- Counter
- Histogram
- Buckets
- Labels
- Target customizado
- Métricas técnicas
- Métricas de negócio

## Exercícios práticos

- Preparar uma aplicação Go simples.
- Criar endpoint `/metrics`.
- Criar uma métrica Gauge.
- Criar uma métrica Counter.
- Criar uma métrica Histogram.
- Adicionar labels com cuidado.
- Configurar Prometheus para coletar a aplicação.
- Fazer requisições e observar as métricas mudando.
- Documentar o que cada métrica mede.

## Perguntas de reflexão

- Por que criar métricas customizadas?
- Quando usar Gauge?
- Quando usar Counter?
- Quando usar Histogram?
- O que são buckets?
- Qual o risco de criar labels demais?
- Qual a diferença entre métrica técnica e métrica de negócio?
- Que métricas eu criaria em uma API .NET real?

## Checkpoint

Ter uma aplicação expondo métricas customizadas e Prometheus coletando esses dados.
