# Fase 3: Primeiro workflow com GitHub Actions

## Aulas

- Criando software exemplo
- Criando primeiro workflow
- Fazendo github actions não passar
- Ativando status check
- Trabalhando com Strategy Matrix

## Objetivo

Criar o primeiro workflow de GitHub Actions, entender quando ele roda, como ele falha, como bloquear merge com status check e como testar em múltiplas versões/ambientes usando Strategy Matrix.

## Conceitos principais

- GitHub Actions
- Workflow
- Job
- Step
- Runner
- Trigger
- `push`
- `pull_request`
- Status check
- Required check
- Strategy Matrix
- Pipeline falhando
- Pipeline passando

## Exercícios práticos

- Criar uma pasta `.github/workflows`.
- Criar um primeiro arquivo de workflow.
- Configurar o workflow para rodar em `push` e `pull_request`.
- Rodar instalação de dependências.
- Rodar testes.
- Fazer a pipeline quebrar de propósito.
- Corrigir a pipeline.
- Ativar status check obrigatório na branch principal.
- Criar uma matrix para rodar em mais de uma versão da linguagem/runtime.

## Perguntas de reflexão

- Qual a diferença entre workflow, job e step?
- Quando faz sentido rodar pipeline em `push`?
- Quando faz sentido rodar pipeline em `pull_request`?
- Por que é útil fazer a pipeline falhar de propósito?
- O que o status check protege?
- O que Strategy Matrix resolve?
- Em que situação uma matrix pode deixar a pipeline lenta demais?

## Checkpoint

Criar uma PR onde:

- A pipeline roda automaticamente.
- A pipeline falha em um primeiro momento.
- O erro é corrigido.
- O status check bloqueia merge quando falha.
- A matrix roda em mais de uma versão.
