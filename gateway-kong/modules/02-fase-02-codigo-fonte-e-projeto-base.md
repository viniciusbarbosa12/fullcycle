# Fase 2: Código-fonte e projeto base

## Aula

- Código-fonte

## Objetivo

Entender a estrutura do projeto usado no curso antes de automatizar configurações e aplicar regras.

Antes de configurar ingress, plugins, autenticação ou pipelines, preciso entender quais APIs existem, quais manifests são usados, quais namespaces aparecem e como o repositório está organizado.

## Conceitos principais

- Repositório base
- Manifests Kubernetes
- Estrutura de pastas
- Deployments
- Services
- Ingress
- Plugins
- Arquivos OpenAPI
- Pipelines
- Scripts
- README técnico

## Exercícios práticos

- Clonar ou criar um repositório base.
- Identificar os manifests Kubernetes.
- Identificar os services e deployments.
- Identificar arquivos OpenAPI, se existirem.
- Identificar arquivos relacionados a pipeline.
- Rodar o projeto localmente no cluster.
- Criar um README explicando a estrutura.

## Perguntas de reflexão

- Antes de automatizar o gateway, o que preciso entender sobre o projeto?
- Como eu sei qual service uma rota deve expor?
- Como organizar manifests para não virar caos?
- Que informações um README precisa ter para outro dev rodar isso?

## Checkpoint

Criar um README com:

- Serviços existentes
- Namespaces
- Deployments
- Services
- Rotas esperadas
- Arquivos OpenAPI
- Como aplicar os manifests
- Como validar se tudo está funcionando
