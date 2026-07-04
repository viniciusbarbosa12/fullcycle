# Lab Fase 1 - Conceitos básicos de Kong no Kubernetes

## Missao

Pratique os conceitos da Fase 1 antes de pedir revisao.

## Exercicios praticos

- Criar ou preparar um cluster Kubernetes local.
- Verificar se `kubectl` está apontando para o cluster correto.
- Instalar ferramentas necessárias.
- Instalar Kong no cluster.
- Validar os pods do Kong.
- Validar services criados pelo Kong.
- Identificar qual porta recebe tráfego externo.
- Criar um README com a arquitetura inicial.

## Antes de pedir revisao

- Qual a diferença entre Kong rodando em Docker Compose e Kong rodando no Kubernetes?
- O que é um Ingress Controller?
- Por que o Kubernetes precisa de um controller para interpretar recursos de Ingress?
- O que o Kong adiciona além de simplesmente rotear tráfego?
- Quais modelos de deployment fazem sentido para Kong?
- Em produção, que cuidados eu teria antes de instalar um gateway no cluster?

## Criterio de sucesso

Ter um cluster com Kong instalado e conseguir explicar:

- Como o tráfego entra no cluster.
- Qual componente do Kong recebe a requisição.
- Como o Kong se conecta aos services internos.
- Qual a diferença entre Ingress e Ingress Controller.
