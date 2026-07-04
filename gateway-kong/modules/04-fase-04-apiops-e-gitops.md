# Fase 4: APIOps e GitOps

## Aulas

- APIOps
- GitOps
- Ferramentas necessárias
- Validando openapi lint
- Checando contratos
- Instalando_argo
- Rodando pipeline

## Objetivo

Entender como tratar APIs como produto versionado e governado, usando automação para validar contratos, aplicar padrões e sincronizar configurações via GitOps.

Aqui a ideia é parar de configurar gateway “na mão” e começar a trabalhar com uma abordagem mais profissional: contrato versionado, validação automática, pipeline e entrega declarativa.

## Conceitos principais

- APIOps
- GitOps
- OpenAPI
- API contract
- Lint de contrato
- Contract testing
- Pipeline
- Pull Request
- Governança de APIs
- Argo CD
- Desired state
- Sync
- Drift
- Automação
- Validação antes do deploy
- Configuração declarativa

## Exercícios práticos

- Criar ou revisar um arquivo OpenAPI.
- Rodar lint no contrato.
- Introduzir um erro proposital no contrato.
- Fazer o lint falhar.
- Corrigir o contrato.
- Criar validação de contrato na pipeline.
- Instalar Argo CD.
- Criar uma aplicação no Argo.
- Rodar pipeline para aplicar mudanças.
- Validar se o estado do cluster bate com o Git.

## Perguntas de reflexão

- O que é APIOps?
- Qual a diferença entre APIOps e DevOps?
- O que é GitOps?
- Por que o Git vira fonte da verdade?
- O que é drift?
- Por que validar OpenAPI antes de publicar uma API?
- O que um lint de OpenAPI consegue evitar?
- O que ele não consegue garantir?
- Como Argo CD ajuda na entrega declarativa?

## Checkpoint

Ter uma pipeline que valida contrato OpenAPI e um fluxo GitOps capaz de sincronizar configuração no cluster.
