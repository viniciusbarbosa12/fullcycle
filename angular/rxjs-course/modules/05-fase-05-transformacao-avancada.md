# Fase 5 - Operadores de transformacao avancada

## Objetivo

Entender os operadores que mais caem em entrevista e mais salvam ou destroem projeto Angular.

## Conceitos principais

- `switchMap`.
- `mergeMap`.
- `concatMap`.
- `exhaustMap`.

## Regras principais

- `switchMap` cancela o fluxo anterior e usa o mais recente.
- `mergeMap` executa varios fluxos em paralelo.
- `concatMap` executa em ordem, um depois do outro.
- `exhaustMap` ignora novas emissoes enquanto uma execucao esta em andamento.

## Exemplo real de projeto

- Autocomplete: `switchMap`.
- Processar varios itens em paralelo: `mergeMap`.
- Fila de salvamento: `concatMap`.
- Botao de login ou submit: `exhaustMap`.

## Exercicios praticos

Implemente em `../labs/fase-05-flattening/`:

1. Criar uma busca com `switchMap`.
2. Simular multiplas requisicoes em paralelo com `mergeMap`.
3. Simular uma fila de salvamento com `concatMap`.
4. Simular botao de login com `exhaustMap`.
5. Comparar o comportamento dos quatro operadores usando logs.

## Perguntas de reflexao

1. Por que `switchMap` e bom para autocomplete?
2. Por que `mergeMap` pode causar problemas se usado errado?
3. Quando a ordem das requisicoes importa?
4. Por que `exhaustMap` e util em botao de submit?
5. Qual operador voce usaria para evitar duplo clique em login?

## Checkpoint

Responda com exemplos reais:

> Quando eu usaria switchMap, mergeMap, concatMap e exhaustMap?

## Criterio de sucesso

Voce pode avancar quando conseguir escolher entre os quatro operadores sem decorar, olhando para cancelamento, paralelismo, ordem e ignorar repeticao.
