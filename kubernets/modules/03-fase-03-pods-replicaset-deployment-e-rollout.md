# Fase 3: Pods, ReplicaSet, Deployment e Rollout

## Aulas

- Criando aplicação exemplo e imagem
- Trabalhando com Pods
- Criando primeira ReplicaSet
- O problema do ReplicaSet
- Implementando Deployment
- Rollout e Revisões

## Objetivo

Entender como o Kubernetes roda aplicações e por que normalmente usamos Deployment em vez de criar Pod direto.

Pod é a menor unidade de execução. ReplicaSet mantém quantidade de réplicas. Deployment gerencia ReplicaSets, atualizações, rollbacks e revisões.

## Conceitos principais

- Pod
- Container
- Image
- ReplicaSet
- Deployment
- Desired state
- Rollout
- Revision
- Rollback
- Labels
- Selectors
- Declarative configuration
- Imperative vs declarative

## Exercícios práticos

- Criar imagem da aplicação.
- Criar um Pod manualmente.
- Ver logs do Pod.
- Executar comando dentro do Pod.
- Deletar Pod e observar comportamento.
- Criar ReplicaSet com múltiplas réplicas.
- Alterar imagem e entender limitação do ReplicaSet.
- Criar Deployment.
- Fazer rollout de nova versão.
- Fazer rollback para versão anterior.
- Listar histórico de revisões.

## Perguntas de reflexão

- Por que não é comum usar Pod direto em produção?
- O que ReplicaSet resolve?
- Qual o problema de usar ReplicaSet diretamente?
- O que Deployment adiciona?
- O que é desired state?
- O que acontece quando eu deleto um Pod gerenciado por Deployment?
- Como rollback ajuda em produção?

## Checkpoint

Ter uma aplicação rodando via Deployment, com múltiplas réplicas, rollout e rollback funcionando.
