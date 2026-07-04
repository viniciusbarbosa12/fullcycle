# Fase 6 - SemVer

## Aula

- Semantical versioning.

## Objetivo

Entender versionamento semantico e saber quando uma mudanca deve aumentar major, minor ou patch.

## Conceitos principais

- Semantic Versioning.
- MAJOR.
- MINOR.
- PATCH.
- Breaking change.
- Compatibilidade.
- Release.
- Changelog.
- API publica.

## Conceito guia

SemVer comunica impacto. `PATCH` corrige sem quebrar contrato, `MINOR` adiciona capacidade mantendo compatibilidade e `MAJOR` indica quebra para quem depende do projeto.

## Exemplo real de projeto

Remover um campo usado por clientes em uma API publica e uma breaking change. Mesmo que o codigo interno tenha ficado melhor, quem consome a API pode quebrar.

## Exercicios praticos

Implemente em `../labs/fase-06-semver/`:

1. Criar exemplos de mudancas patch.
2. Criar exemplos de mudancas minor.
3. Criar exemplos de mudancas major.
4. Classificar mudancas ficticias.
5. Simular releases `1.0.0`, `1.1.0`, `1.1.1` e `2.0.0`.

## Perguntas de reflexao

1. O que e uma breaking change?
2. Quando aumentar PATCH?
3. Quando aumentar MINOR?
4. Quando aumentar MAJOR?
5. Por que SemVer e importante para bibliotecas e APIs?
6. O que pode acontecer se eu versionar errado?

## Checkpoint

Responda:

> Uma API removeu um campo usado por clientes. Isso e major, minor ou patch? Por que?

## Criterio de sucesso

Voce pode avancar quando conseguir classificar mudancas olhando para o impacto em quem consome o sistema, nao so para o tamanho do diff.
