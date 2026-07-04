# Fase 7 - Subjects e estado

## Objetivo

Entender como usar Subject sem transformar o projeto num novelo radioativo.

## Conceitos principais

- `Subject`.
- `BehaviorSubject`.
- `ReplaySubject`.
- `AsyncSubject`.
- Estado compartilhado.
- Estado inicial.
- Encapsulamento.
- Expor Observable, esconder Subject.
- Evitar Subject publico.

## Conceito guia

Subject serve para empurrar valores para um fluxo. Em estado Angular, o padrao mais seguro e Subject privado e Observable publico.

## Exemplo real de projeto

Um service de usuario logado pode guardar o estado em `BehaviorSubject`, expor `user$` com `asObservable()` e oferecer metodos como `login` e `logout`.

## Exercicios praticos

Implemente em `../labs/fase-07-subjects-state/`:

1. Criar um contador com `Subject`.
2. Criar estado de usuario logado com `BehaviorSubject`.
3. Criar historico de ultimas emissoes com `ReplaySubject`.
4. Testar comportamento de `AsyncSubject`.
5. Criar um servico Angular simples com estado privado.
6. Expor o estado usando `asObservable`.

## Perguntas de reflexao

1. Qual a diferenca entre Subject e BehaviorSubject?
2. Por que BehaviorSubject precisa de valor inicial?
3. Por que nao deixar um Subject publico?
4. Quando Subject vira gambiarra?
5. Quando vale usar uma lib de estado em vez de Subject?

## Checkpoint

Crie um servico de estado com:

- estado privado;
- metodo para atualizar estado;
- Observable publico somente leitura;
- um componente consumindo esse estado.

## Criterio de sucesso

Voce pode avancar quando conseguir explicar por que `private readonly subject` + `readonly state$` protege melhor o codigo.
