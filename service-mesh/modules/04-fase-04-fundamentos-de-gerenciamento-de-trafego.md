# Fase 4: Fundamentos de gerenciamento de tráfego

## Aulas

- Falando sobre gerenciamento de tráfego
- Conceitos básicos
- Resumindo conceitos
- Criando versões de deployments

## Objetivo

Entender como o Istio controla tráfego entre versões de serviços.

Antes de fazer canary, fault injection ou circuit breaker, preciso entender como o tráfego é roteado e como o Istio identifica versões diferentes da mesma aplicação.

## Conceitos principais

- Traffic management
- Service
- Deployment
- Versionamento de deployment
- Labels de versão
- Subsets
- VirtualService
- DestinationRule
- Roteamento
- Peso de tráfego
- Match rules

## Exercícios práticos

- Criar duas versões de um deployment.
- Adicionar labels de versão.
- Validar que o Kubernetes Service enxerga as duas versões.
- Observar distribuição de tráfego sem regra do Istio.
- Criar um desenho explicando como o tráfego chega nas versões.

## Perguntas de reflexão

- Como o Istio sabe que existem versões diferentes?
- Qual a diferença entre Service Kubernetes e VirtualService do Istio?
- Por que labels corretas são essenciais?
- O que é um subset?
- O que acontece se eu criar versões, mas não configurar regras de tráfego?

## Checkpoint

Ter duas versões da aplicação rodando e conseguir explicar como o tráfego chega nelas.
