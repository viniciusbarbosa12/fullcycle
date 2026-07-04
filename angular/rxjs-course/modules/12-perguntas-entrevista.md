# Perguntas classicas de entrevista

Ao final do plano, voce deve conseguir responder:

1. O que e RxJS?
2. O que e Observable?
3. Qual a diferenca entre Promise e Observable?
4. O que significa um Observable emitir valores?
5. O que e subscribe?
6. O que sao `next`, `error` e `complete`?
7. Qual a diferenca entre Observable frio e quente?
8. Para que serve `pipe`?
9. Qual a diferenca entre `map` e `tap`?
10. Para que serve `debounceTime`?
11. Para que serve `distinctUntilChanged`?
12. Qual a diferenca entre `switchMap`, `mergeMap`, `concatMap` e `exhaustMap`?
13. Quando usar `combineLatest`?
14. Quando usar `forkJoin`?
15. O que e Subject?
16. Qual a diferenca entre Subject e BehaviorSubject?
17. Como evitar memory leaks em Angular?
18. Quando usar async pipe?
19. Quando fazer subscribe manual?
20. Como organizar RxJS em uma arquitetura Angular limpa?

## Como treinar

Responda em voz alta, com exemplo real. Uma resposta boa para entrevista normalmente tem:

- definicao curta;
- exemplo pratico;
- risco ou pegadinha;
- quando usar ou evitar.

## Exemplo de formato

Pergunta:

> Qual a diferenca entre `switchMap` e `mergeMap`?

Resposta esperada em estilo entrevista:

```txt
switchMap cancela o fluxo anterior e fica com o mais recente, por isso e bom para busca/autocomplete.
mergeMap mantem varios fluxos rodando em paralelo, entao e bom quando todas as operacoes importam,
como processar varios itens. O risco de mergeMap em busca e uma resposta antiga chegar depois e baguncar a tela.
```
