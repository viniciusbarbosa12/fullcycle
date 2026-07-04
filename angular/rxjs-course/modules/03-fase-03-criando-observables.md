# Fase 3 - Criando Observables

## Objetivo

Aprender de onde os fluxos podem nascer.

## Conceitos principais

- `of`.
- `from`.
- `fromEvent`.
- `interval`.
- `timer`.
- `new Observable`.
- Streams de eventos.
- Streams de arrays.
- Streams de Promise.
- Streams de tempo.

## Conceito guia

Nem todo Observable precisa ser criado manualmente. Na maioria das vezes, RxJS ja tem uma funcao pronta para transformar valores, eventos, arrays, Promises ou tempo em stream.

## Exemplo real de projeto

Um input de busca pode nascer de `fromEvent` ou de `formControl.valueChanges`. Um polling pode nascer de `timer`. Uma lista mockada pode nascer de `of`.

## Exercicios praticos

Implemente em `../labs/fase-03-creating/`:

1. Usar `of` para emitir valores fixos.
2. Usar `from` com array.
3. Usar `from` com Promise.
4. Usar `fromEvent` para capturar clique de botao.
5. Usar `interval` para emitir valores a cada segundo.
6. Usar `timer` para iniciar emissao depois de um tempo.
7. Criar um Observable manual com `new Observable`.

## Perguntas de reflexao

1. Quando usar `of`?
2. Quando usar `from`?
3. Qual a diferenca entre `interval` e `timer`?
4. Por que evento de clique combina tao bem com Observable?
5. Por que nem sempre eu deveria criar Observable manualmente?

## Checkpoint

Crie uma mini pagina com:

- um botao;
- um contador de cliques;
- um timer;
- um log mostrando as emissoes.

## Criterio de sucesso

Voce pode avancar quando souber escolher a origem certa para um fluxo simples sem usar `new Observable` por impulso.
