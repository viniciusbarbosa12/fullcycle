# Fase 7 - Conventional Commits

## Aulas

- Conventional commits.
- Conventional no VSCode.
- Trabalhando com commitlint.
- Checando padroes de commit com Commitsar.
- Commitando com Commitizen.

## Objetivo

Aprender a escrever commits padronizados, faceis de entender e uteis para automacao de changelog, versionamento e pipelines.

## Conceitos principais

- Conventional Commits.
- `feat`.
- `fix`.
- `docs`.
- `style`.
- `refactor`.
- `test`.
- `chore`.
- Escopo.
- Breaking change.
- Commitlint.
- Commitsar.
- Commitizen.
- Automacao de changelog.

## Conceito guia

Mensagem de commit e uma interface para humanos e ferramentas. Um padrao consistente ajuda o time a entender historico e permite automatizar validacao, changelog e versionamento.

## Exemplo real de projeto

Um pipeline pode bloquear `arrumei bug` e aceitar `fix(payment): handle timeout on retry`, porque a segunda mensagem informa tipo, area e intencao.

## Exercicios praticos

Implemente em `../labs/fase-07-conventional-commits/`:

1. Escrever commits usando Conventional Commits.
2. Criar exemplos com `feat`.
3. Criar exemplos com `fix`.
4. Criar exemplos com `docs`.
5. Criar exemplos com `refactor`.
6. Criar commit com escopo.
7. Configurar commitlint.
8. Testar commit invalido.
9. Corrigir commit invalido.
10. Usar Commitizen para criar commits guiados.

## Perguntas de reflexao

1. Por que padronizar mensagem de commit?
2. Qual a diferenca entre `feat` e `fix`?
3. Quando usar `chore`?
4. Quando usar `refactor`?
5. O que e escopo no commit?
6. Como Conventional Commits ajudam no versionamento?
7. Como isso pode alimentar changelog automatico?

## Checkpoint

Criar commits validos como:

- `feat(auth): add login validation`
- `fix(api): handle null customer response`
- `docs(readme): update setup instructions`
- `refactor(order): simplify status validation`
- `test(payment): add retry scenario`

Depois explicar o motivo de cada tipo escolhido.

## Criterio de sucesso

Voce pode avancar quando conseguir escolher o tipo de commit pelo significado da mudanca, nao pelo arquivo alterado.
