# Fase 6: Exporters, containers e Grafana

## Aulas

- Utilizando cAdvisor
- Apresentando o Grafana

## Objetivo

Aprender a coletar métricas de containers e visualizar dados de forma mais amigável com Grafana.

Prometheus coleta e armazena. Grafana transforma isso em painel útil para humanos cansados tentando entender por que a produção virou uma frigideira.

## Conceitos principais

- cAdvisor
- Métricas de containers
- Grafana
- Data source
- Dashboard
- Painel
- Query
- Visualização
- CPU por container
- Memória por container
- Uso de rede
- Uso de disco

## Exercícios práticos

- Subir cAdvisor.
- Configurar Prometheus para coletar métricas do cAdvisor.
- Verificar se o target está ativo.
- Subir Grafana.
- Configurar Prometheus como data source.
- Criar um dashboard simples.
- Criar painéis de CPU e memória.
- Documentar as queries usadas.

## Perguntas de reflexão

- O que o cAdvisor coleta?
- Por que métricas de container são importantes?
- Qual a diferença entre Prometheus e Grafana?
- Por que Grafana não substitui Prometheus?
- O que faz um dashboard ser útil?
- Que painel eu criaria para uma API em produção?

## Checkpoint

Ter um dashboard no Grafana exibindo métricas coletadas pelo Prometheus.
