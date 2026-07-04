# Fase 10 - Quando usar NgRx, Signals ou outra abordagem

## Objetivo

Entender quando RxJS simples basta e quando uma solucao de estado mais robusta faz sentido.

## Conceitos principais

- RxJS puro.
- BehaviorSubject state.
- Facade state.
- NgRx.
- Signal.
- Signal Store.
- Complexidade acidental.
- Estado local vs global.
- Estado derivado.

## Conceito guia

Ferramenta de estado nao e premio de senioridade. Ela deve pagar o custo que adiciona. Para feature local, RxJS + Facade pode ser suficiente. Para estado global complexo, NgRx ou Signal Store podem trazer previsibilidade.

## Exemplo real de projeto

Uma tela isolada de busca pode ficar com Facade. Autenticacao, permissoes, carrinho global ou estado compartilhado por muitas features pode justificar uma abordagem mais estruturada.

## Exercicios praticos

Implemente ou descreva em `../labs/fase-10-state-choices/`:

1. Comparar estado local no componente.
2. Comparar estado em Service com BehaviorSubject.
3. Comparar estado em Facade.
4. Discutir quando NgRx faria sentido.
5. Discutir quando Signals seriam mais simples.

## Perguntas de reflexao

1. Quando RxJS puro e suficiente?
2. Quando BehaviorSubject comeca a ficar limitado?
3. Quando NgRx vale o custo?
4. Quando Signals podem simplificar?
5. O que e estado global de verdade?

## Checkpoint

Responda:

> Em uma tela de listagem com busca, filtro e paginacao, eu usaria RxJS puro, Signals ou NgRx? Por que?

## Criterio de sucesso

Voce pode avancar quando conseguir justificar a escolha de estado pelo escopo, complexidade, compartilhamento e necessidade de previsibilidade.
