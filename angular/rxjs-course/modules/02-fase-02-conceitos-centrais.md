# Fase 2 - Conceitos centrais do RxJS

## Objetivo

Entender o coracao do RxJS: Observable, Observer, subscribe, emissao, erro, complete e cancelamento.

## Conceitos principais

- Observable.
- Observer.
- Subscribe.
- Emissao de valores.
- `next`.
- `error`.
- `complete`.
- Subscription.
- Unsubscribe.
- Observable frio.
- Observable quente.
- Promise vs Observable.

## Conceito guia

Observable e uma fonte de valores ao longo do tempo. Observer e quem recebe esses valores. `subscribe` conecta os dois.

## Exemplo real de projeto

`HttpClient.get()` retorna um Observable frio: o request so acontece quando alguem assina. Um clique de botao e uma fonte quente: o evento existe independentemente de voce estar escutando.

## Exercicios praticos

Implemente em `../labs/fase-02-core/`:

1. Criar um Observable simples.
2. Fazer ele emitir um unico valor.
3. Fazer ele emitir varios valores.
4. Tratar `next`, `error` e `complete`.
5. Criar um Observable com `setInterval`.
6. Cancelar o Observable usando `unsubscribe`.

## Perguntas de reflexao

1. O que significa um Observable emitir um valor?
2. Quem produz os dados?
3. Quem consome os dados?
4. Qual a diferenca entre `next`, `error` e `complete`?
5. Por que Observable pode ser mais poderoso que Promise?
6. O que acontece se eu esquecer de dar unsubscribe em um fluxo infinito?

## Checkpoint

Responda com suas palavras:

> Qual a diferenca entre Promise e Observable?

## Criterio de sucesso

Voce pode avancar quando conseguir criar um Observable manual, assinar, ver emissoes e cancelar um fluxo infinito.
