# Learning Plan Observability, Elastic Stack, Prometheus, and Grafana

This plan was designed to study observability in a practical way, focusing on real learning.

The idea is not just to watch lessons, but to understand how to investigate production systems using logs, metrics and traces. The goal is to learn how to assemble an observability stack with Elastic Stack, Prometheus and Grafana, and to understand when to use each tool and how they help in diagnosing real problems.

By the end of this course, I should be able to observe applications, identify bottlenecks, analyze logs, create metrics, build dashboards, configure alerts and explain the difference between monitoring and observability in real production scenarios.

## How We Will Study

Whenever I start a new lesson, mentoring should follow this format:

1. Explain concepts clearly and gradually.
2. Split big subjects into small parts.
3. Propose practical exercises for me to implement on my own.
4. Avoid delivering the complete solution upfront.
5. Ask questions that lead me to reason before answering.
6. If I ask for help, just give hints or small bits of configuration/commands.
7. Only show the complete solution if I ask explicitly or after I really try to solve.

When I finish an exercise, the review should follow this format:

1. Do a professional review of what I did.
2. Point out errors, improvements and good practices.
3. Explain the reason for each suggestion.
4. Say what I did right.
5. Tell me what I still need to study.
6. Connect the content to real production scenarios, incidents and troubleshooting.

The goal is to prioritize deep learning, not speed.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercises and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: course final consolidation guide.

## Course Outline

### Introduction

- Introduction - 04:56
- What Really Is Observability - 04:49
- Observability vs Monitoring - 05:27
- The 3 pillars - 11:32

### Elastic Stack

- Project Repository - no duration
- Introduction to Elastic Stack - 10:06
- More about Logstash - 04:30
- About Kibana - 04:03
- Beats and Elastic Stack - 10:38
- Starting with Elasticsearch and Kibana - 08:12
- For Linux users - no duration
- Overview of Kibana - 06:36
- Metricbeat - 20:50
- Uptime and Heartbeat - 09:50
- Setting up APM - 05:35
- APM in practice - 21:18
- Logs on APM - 09:57
- Configuring nginx - 10:49
- Configuring Filebeat - 18:05
- Deploying to Elastic Cloud - 04:53
- Configuring Filebeat in Elastic Cloud - 06:50
- Integrating Services in Elastic Cloud - 12:15

### Prometheus

- Module Repository - no duration
- Prometheus 01:44
- Initial concepts - 08:38
- Operating dynamics - 03:44
- Prometheus pull model - 05:44
- Exporter dynamics - 05:19
- Prometheus architecture - 12:27
- Working with data - 06:37
- Types of metrics - 07:58
- PromQL - 05:04
- Tour on prometheus.io - 08:06
- Executing Prometheus for the first time - 06:22
- Overview of the standard dashboard - 09:26
- Using cAdvisor - 10:22
- Introducing Grafana - 13:13
- Preparing Golang environment - 05:09
- Creating Gauge-type metric - 09:55
- Working with Counter - 08:01
- Creating Histogram - 11:36
- Activating new target on Prometheus - 04:39
- Creating dashboard using Gauge - 3:51
- Adding Counter panel - 03:26
- Panel with Histogram - 09:59
- Configuring alert on Grafana - 04:39
- Triggering alerts - 10:18

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [Introduction and mental model of observability](modules/01-fase-01-introducao-e-base-mental-de-observabilidade.md)
2. [Elastic Stack](modules/02-fase-02-elastic-stack.md)
3. [Metrics and availability with Elastic Stack](modules/03-fase-03-metricas-e-disponibilidade-com-elastic-stack.md)
4. [APM, logs and Elastic Cloud](modules/04-fase-04-apm-logs-e-elastic-cloud.md)
5. [Prometheus fundamentals](modules/05-fase-05-fundamentos-do-prometheus.md)
6. [Exporters, Containers and Grafana](modules/06-fase-06-exporters-containers-e-grafana.md)
7. [Custom metrics in Golang](modules/07-fase-07-metricas-customizadas-em-golang.md)
8. [Dashboards and alerts in Grafana](modules/08-fase-08-dashboards-e-alertas-no-grafana.md)
9. [Final project](modules/09-fase-09-projeto-final.md)
10. [Classic interview questions](modules/10-perguntas-entrevista.md)

## Recommended rhythm

The course has about 6h07 of video lessons, but the focus is to practice a lot.

### Suggestion of rhythm in 14 days

#### Day 1

- Introduction
- What Observability Is
- Observability vs Monitoring
- The 3 pillars

#### Day 2

- Elastic Stack
- Elasticsearch
- Logstash
- Kibana
- Beats

#### Day 3

- Elasticsearch and local Kibana
- Kibana Overview
- First simple dashboard

#### Day 4

- Metricbeat
- Uptime
- Heartbeat

#### Day 5

- APM
- APM in practice
- APM Logs

#### Day 6

- Nginx
- Filebeat
- Centralised logs

#### Day 7

- Elastic Cloud
- Filebeat in Elastic Cloud
- Integration of services

#### Day 8

- Prometheus
- Model Pull
- Exporters
- Architecture

#### Day 9

- Type of metrics
- PromQL
- Local Prometheus

#### Day 10

- cAdvisor
- Grafana
- First Dashboard

#### Day 11

- Golang Environment
- Gauge
- Counter

#### Day 12

- Histogram
- New Target on Prometheus
- Custom metrics

#### Day 13

- Dashboards in Grafana
- Alerts
- Firing alerts

#### Day 14

- Final project
- Incident simulation
- README
- General review

## First Mission

Watch the lessons:

> Introduction
> What Really Is Observability
> Observability vs Monitoring
> The 3 pillars

Then answer with my words:

> What is the practical difference between monitoring a system and making a system observable?

It does not have to be a perfect answer. The important thing is to show my initial reasoning so we can correct, adjust and deepen.
