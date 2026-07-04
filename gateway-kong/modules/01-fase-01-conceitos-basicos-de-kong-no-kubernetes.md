# Fase 1: Conceitos básicos de Kong no Kubernetes

## Aulas

- Principais conceitos
- Kubernetes ingress kong
- Modelos deployment kong kubernetes
- Instalando kong
- Ferramentas adicionais
- Modificações no repositório

## Objetivo

Entender como o Kong entra no Kubernetes e qual papel ele assume dentro do cluster.

Aqui o foco é sair do “Kong como gateway rodando em Docker Compose” e começar a enxergar o Kong como parte da infraestrutura Kubernetes, funcionando como Ingress Controller, lendo recursos do cluster e aplicando regras de roteamento, plugins e segurança.

## Conceitos principais

- Kubernetes
- Ingress
- Ingress Controller
- Kong Ingress Controller
- API Gateway no Kubernetes
- Services
- Deployments
- Namespaces
- CRDs
- Control plane
- Data plane
- Helm
- kubectl
- Valores de instalação
- Modelos de deployment
- Ambientes locais e produtivos

## Exercícios práticos

- Criar ou preparar um cluster Kubernetes local.
- Verificar se `kubectl` está apontando para o cluster correto.
- Instalar ferramentas necessárias.
- Instalar Kong no cluster.
- Validar os pods do Kong.
- Validar services criados pelo Kong.
- Identificar qual porta recebe tráfego externo.
- Criar um README com a arquitetura inicial.

## Perguntas de reflexão

- Qual a diferença entre Kong rodando em Docker Compose e Kong rodando no Kubernetes?
- O que é um Ingress Controller?
- Por que o Kubernetes precisa de um controller para interpretar recursos de Ingress?
- O que o Kong adiciona além de simplesmente rotear tráfego?
- Quais modelos de deployment fazem sentido para Kong?
- Em produção, que cuidados eu teria antes de instalar um gateway no cluster?

## Checkpoint

Ter um cluster com Kong instalado e conseguir explicar:

- Como o tráfego entra no cluster.
- Qual componente do Kong recebe a requisição.
- Como o Kong se conecta aos services internos.
- Qual a diferença entre Ingress e Ingress Controller.
