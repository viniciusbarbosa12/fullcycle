# Fase 4 - Operadores basicos

## Objetivo

Aprender a transformar, filtrar e observar fluxos sem baguncar o codigo.

## Conceitos principais

- `pipe`.
- `map`.
- `filter`.
- `tap`.
- `take`.
- `first`.
- `skip`.
- `debounceTime`.
- `distinctUntilChanged`.

## Conceito guia

Operadores deixam voce montar uma linha de raciocinio sobre o fluxo: transformar, filtrar, observar, limitar e evitar repeticao.

## Exemplo real de projeto

Em uma busca:

1. `map` limpa o texto.
2. `filter` ignora textos pequenos.
3. `debounceTime` espera o usuario parar.
4. `distinctUntilChanged` evita busca repetida.
5. `tap` pode logar para debug sem alterar o valor.

## Exercicios praticos

Implemente em `../labs/fase-04-basic-operators/`:

1. Usar `map` para transformar valores.
2. Usar `filter` para deixar passar apenas alguns valores.
3. Usar `tap` para logar sem alterar o fluxo.
4. Usar `take` para limitar emissoes.
5. Usar `skip` para ignorar primeiras emissoes.
6. Criar um input com `debounceTime`.
7. Evitar chamadas repetidas com `distinctUntilChanged`.

## Perguntas de reflexao

1. Qual a diferenca entre `map` e `tap`?
2. Por que `tap` nao deveria alterar valor?
3. Quando faz sentido usar `take`?
4. Por que `debounceTime` e util em busca?
5. O que `distinctUntilChanged` evita?

## Checkpoint

Crie uma busca fake onde:

- o usuario digita em um input;
- o sistema espera ele parar de digitar;
- textos repetidos sao ignorados;
- o console mostra o termo final da busca.

## Criterio de sucesso

Voce pode avancar quando conseguir montar o fluxo sem `subscribe` aninhado e explicar o papel de cada operador.
