# Como vamos estudar

Este curso e uma mentoria guiada. A prioridade e aprendizado real, nao velocidade.

## Regra principal

Voce tenta primeiro. Eu reviso, faço perguntas, dou pistas e so mostro a solucao completa quando voce pedir explicitamente ou depois de uma tentativa real.

## Quando iniciar um topico

Mande:

```txt
Comecei o topico: Nome do topico
```

Eu devo responder com:

1. Conceito principal.
2. Explicacao simples.
3. Exemplo real de projeto Angular.
4. Perguntas para voce responder.
5. Exercicio pratico.
6. Criterio de sucesso.

## Quando terminar um exercicio

Mande:

```txt
Terminei, olha meu codigo
```

Eu devo fazer um code review com:

1. O que esta certo.
2. O que pode melhorar.
3. Riscos.
4. Boas praticas.
5. O que estudar antes de avancar.
6. Se voce pode avancar ou precisa reforcar.

## Como usar os arquivos

- Leia a fase atual.
- Implemente o exercicio em `../labs/`.
- Consulte `../examples/` apenas depois de tentar.
- Use `../final-project/` como referencia final, nao como atalho no comeco.

## Ritmo recomendado em 14 dias

| Dia | Tema |
| --- | --- |
| 1 | Fundamentos de async, callback, Promise, async/await |
| 2 | Observable, subscribe, emissao, next, error e complete |
| 3 | Criando Observables: `of`, `from`, `fromEvent`, `interval`, `timer` |
| 4 | Operadores basicos: `map`, `filter`, `tap`, `take` |
| 5 | Busca com input, `debounceTime`, `distinctUntilChanged` |
| 6 | `switchMap`, cancelamento de requests, autocomplete |
| 7 | `mergeMap`, `concatMap`, `exhaustMap` |
| 8 | Combinacao: `combineLatest`, `forkJoin`, `withLatestFrom` |
| 9 | Error handling, `catchError`, `finalize`, loading state |
| 10 | Subjects, `BehaviorSubject`, estado compartilhado |
| 11 | Angular real: `HttpClient`, `async pipe`, Reactive Forms |
| 12 | Unsubscribe, memory leaks, `takeUntilDestroyed`, route params |
| 13 | Arquitetura, Facade, cache com `shareReplay` |
| 14 | Projeto final, revisao, refatoracao, README |

## Primeira missao

Comece pela Fase 1 e responda:

> Por que Promise nao resolve todos os problemas que RxJS resolve?
