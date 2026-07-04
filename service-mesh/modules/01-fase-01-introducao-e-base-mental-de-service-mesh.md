# Fase 1: Introdução e base mental de Service Mesh

## Aulas

- Introdução
- O mundo distribuído
- Service mesh vs Istio
- Principais recursos
- Arquitetura do istio
- Monitoramento em tempo real

## Objetivo

Entender o problema antes da ferramenta.

Service Mesh não existe porque Kubernetes é “fraco”. Ele existe porque, quando um sistema tem vários serviços conversando entre si, começam a aparecer problemas de tráfego, segurança, observabilidade, retries, timeouts, circuit breaker, deploy canário e rastreabilidade.

## Conceitos principais

- Sistemas distribuídos
- Microservices
- Comunicação serviço para serviço
- Service Mesh
- Istio
- Data plane
- Control plane
- Sidecar proxy
- Envoy
- Observabilidade
- Telemetria
- Tracing
- Métricas
- Logs
- Kiali
- Prometheus
- Grafana
- Jaeger

## Exercícios práticos

- Explicar com minhas palavras o que é Service Mesh.
- Desenhar um fluxo simples com 3 serviços conversando.
- Identificar quais problemas aparecem nesse fluxo.
- Separar responsabilidades entre aplicação, Kubernetes e Istio.
- Listar quais recursos do Istio parecem mais úteis em produção.
- Criar um pequeno resumo sobre data plane e control plane.

## Perguntas de reflexão

- Qual problema Service Mesh tenta resolver?
- Por que comunicação entre serviços fica difícil em sistemas distribuídos?
- O que é sidecar proxy?
- Qual a diferença entre Service Mesh e Istio?
- O que o Istio faz que a aplicação não deveria precisar fazer manualmente?
- Quando Service Mesh pode ser exagero?
- Por que observabilidade é tão importante em microservices?

## Checkpoint

Responder com minhas palavras:

> Por que um time usaria Istio em um ambiente Kubernetes com vários microservices?
