# Plano de Aprendizado Observabilidade, Elastic Stack, Prometheus e Grafana

Este plano foi criado para estudar Observabilidade de forma prática, com foco em aprendizado real.

A ideia não é apenas assistir às aulas, mas entender como investigar sistemas em produção usando logs, métricas e traces. O objetivo é aprender a montar uma stack de observabilidade com Elastic Stack, Prometheus e Grafana, além de entender quando usar cada ferramenta e como elas ajudam no diagnóstico de problemas reais.

O objetivo é sair desse curso conseguindo observar aplicações, identificar gargalos, analisar logs, criar métricas, montar dashboards, configurar alertas e explicar a diferença entre monitoramento e observabilidade em cenários reais de produção.

## Como vamos estudar

Sempre que eu iniciar uma nova aula, a mentoria deve seguir este formato:

1. Explicar os conceitos de forma clara e gradual.
2. Dividir assuntos grandes em partes pequenas.
3. Propor exercícios práticos para eu implementar sozinho.
4. Evitar entregar a solução completa de primeira.
5. Fazer perguntas que me levem a raciocinar antes de responder.
6. Se eu pedir ajuda, dar apenas dicas ou pequenos trechos de configuração/comandos.
7. Só mostrar a solução completa se eu pedir explicitamente ou depois que eu realmente tentar resolver.

Quando eu terminar um exercício, a revisão deve seguir este formato:

1. Fazer uma revisão profissional do que eu fiz.
2. Apontar erros, melhorias e boas práticas.
3. Explicar o motivo de cada sugestão.
4. Dizer o que eu fiz bem.
5. Dizer o que ainda preciso estudar.
6. Relacionar o conteúdo com cenários reais de produção, incidentes e troubleshooting.

O objetivo é priorizar aprendizado profundo, não velocidade.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: guia da consolidacao final do curso.

## Grade do curso

### Introdução

- Introdução - 04:56
- O que realmente e observabilidade - 04:49
- Observabilidade vs Monitoramento - 05:27
- Os 3 pilares - 11:32

### Elastic Stack

- Repositório do projeto - sem duração
- Introdução ao Elastic Stack - 10:06
- Mais sobre Logstash - 04:30
- Sobre o Kibana - 04:03
- Beats e Elastic Stack - 10:38
- Iniciando com Elasticsearch e Kibana - 08:12
- Para usuários Linux - sem duração
- Visão geral do Kibana - 06:36
- Metricbeat - 20:50
- Uptime e Heartbeat - 09:50
- Configurando APM - 05:35
- APM na prática - 21:18
- Logs no APM - 09:57
- Configurando nginx - 10:49
- Configurando Filebeat - 18:05
- Fazendo deploy na Elastic Cloud - 04:53
- Configurando Filebeat na Elastic Cloud - 06:50
- Integrando serviços na Elastic Cloud - 12:15

### Prometheus

- Repositório do módulo - sem duração
- Prometheus - 01:44
- Conceitos iniciais - 08:38
- Dinâmica de funcionamento - 03:44
- Prometheus vs pull - 05:44
- Dinâmica dos exporters - 05:19
- Arquitetura do Prometheus - 12:27
- Trabalhando com dados - 06:37
- Tipos de métricas - 07:58
- PromQL - 05:04
- Tour no prometheus.io - 08:06
- Executando prometheus pela primeira vez - 06:22
- Visão geral do dashboard padrão - 09:26
- Utilizando cAdvisor - 10:22
- Apresentando o Grafana - 13:13
- Preparando ambiente Golang - 05:09
- Criando métrica do tipo Gauge - 09:55
- Trabalhando com Counter - 08:01
- Criando histogram - 11:36
- Ativando novo target no Prometheus - 04:39
- Criando dashboard usando Gauge - 03:51
- Adicionando painel Counter - 03:26
- Painel com Histogram - 09:59
- Configurando alerta no Grafana - 04:39
- Disparando alarmes - 10:18

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Introdução e base mental de observabilidade](modules/01-fase-01-introducao-e-base-mental-de-observabilidade.md)
2. [Elastic Stack](modules/02-fase-02-elastic-stack.md)
3. [Métricas e disponibilidade com Elastic Stack](modules/03-fase-03-metricas-e-disponibilidade-com-elastic-stack.md)
4. [APM, logs e Elastic Cloud](modules/04-fase-04-apm-logs-e-elastic-cloud.md)
5. [Fundamentos do Prometheus](modules/05-fase-05-fundamentos-do-prometheus.md)
6. [Exporters, containers e Grafana](modules/06-fase-06-exporters-containers-e-grafana.md)
7. [Métricas customizadas em Golang](modules/07-fase-07-metricas-customizadas-em-golang.md)
8. [Dashboards e alertas no Grafana](modules/08-fase-08-dashboards-e-alertas-no-grafana.md)
9. [Projeto final](modules/09-fase-09-projeto-final.md)
10. [Perguntas classicas de entrevista](modules/10-perguntas-entrevista.md)

## Ritmo recomendado

O curso tem cerca de 6h07 de videoaulas, mas o foco é praticar bastante.

### Sugestão de ritmo em 14 dias

#### Dia 1

- Introdução
- O que é observabilidade
- Observabilidade vs monitoramento
- Os 3 pilares

#### Dia 2

- Elastic Stack
- Elasticsearch
- Logstash
- Kibana
- Beats

#### Dia 3

- Elasticsearch e Kibana local
- Visão geral do Kibana
- Primeiro dashboard simples

#### Dia 4

- Metricbeat
- Uptime
- Heartbeat

#### Dia 5

- APM
- APM na prática
- Logs no APM

#### Dia 6

- Nginx
- Filebeat
- Logs centralizados

#### Dia 7

- Elastic Cloud
- Filebeat na Elastic Cloud
- Integração de serviços

#### Dia 8

- Prometheus
- Modelo pull
- Exporters
- Arquitetura

#### Dia 9

- Tipos de métricas
- PromQL
- Prometheus local

#### Dia 10

- cAdvisor
- Grafana
- Primeiro dashboard

#### Dia 11

- Ambiente Golang
- Gauge
- Counter

#### Dia 12

- Histogram
- Novo target no Prometheus
- Métricas customizadas

#### Dia 13

- Dashboards no Grafana
- Alertas
- Disparo de alarmes

#### Dia 14

- Projeto final
- Simulação de incidente
- README
- Revisão geral

## Primeira missao

Assistir às aulas:

> Introdução
> O que realmente e observabilidade
> Observabilidade vs Monitoramento
> Os 3 pilares

Depois responder com minhas palavras:

> Qual a diferença prática entre monitorar um sistema e tornar um sistema observável?

Não precisa ser uma resposta perfeita. O importante é mostrar meu raciocínio inicial para depois corrigir, ajustar e aprofundar.
