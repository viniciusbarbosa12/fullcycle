# Lab Fase 3 - Primeiro workflow com GitHub Actions

## Missao

Pratique os conceitos da Fase 3 antes de pedir revisao.

## Exercicios praticos

- Criar uma pasta `.github/workflows`.
- Criar um primeiro arquivo de workflow.
- Configurar o workflow para rodar em `push` e `pull_request`.
- Rodar instalação de dependências.
- Rodar testes.
- Fazer a pipeline quebrar de propósito.
- Corrigir a pipeline.
- Ativar status check obrigatório na branch principal.
- Criar uma matrix para rodar em mais de uma versão da linguagem/runtime.

## Antes de pedir revisao

- Qual a diferença entre workflow, job e step?
- Quando faz sentido rodar pipeline em `push`?
- Quando faz sentido rodar pipeline em `pull_request`?
- Por que é útil fazer a pipeline falhar de propósito?
- O que o status check protege?
- O que Strategy Matrix resolve?
- Em que situação uma matrix pode deixar a pipeline lenta demais?

## Criterio de sucesso

Criar uma PR onde:

- A pipeline roda automaticamente.
- A pipeline falha em um primeiro momento.
- O erro é corrigido.
- O status check bloqueia merge quando falha.
- A matrix roda em mais de uma versão.
