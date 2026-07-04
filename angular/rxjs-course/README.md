# Plano de Aprendizado RxJS com Angular

Este curso agora segue o modelo de mentoria do prompt anexado: estudo pratico, progressivo e sem entregar a solucao completa antes da sua tentativa.

A ideia nao e decorar operadores. A ideia e aprender a pensar em fluxos assincronos, eventos, streams, estado e arquitetura Angular usando RxJS de forma limpa.

## Objetivo final

Ao terminar, voce deve conseguir implementar sozinho recursos reais como:

- busca com debounce;
- cancelamento de requests;
- loading state;
- tratamento de erro;
- comunicacao entre componentes;
- cache com `shareReplay`;
- arquitetura com Component + Facade + Service;
- respostas boas para entrevistas senior.

## Como vamos estudar

Quando voce iniciar uma aula, mande algo como:

```txt
Comecei o topico: switchMap
```

Minha resposta deve seguir este formato:

1. Conceito principal.
2. Explicacao simples.
3. Exemplo real de projeto.
4. Perguntas para voce responder.
5. Exercicio pratico.
6. Criterio de sucesso.

Quando voce terminar um exercicio, mande:

```txt
Terminei, olha meu codigo
```

Minha revisao deve seguir este formato:

1. O que esta certo.
2. O que pode melhorar.
3. Riscos.
4. Boas praticas.
5. O que estudar antes de avancar.
6. Se pode avancar ou se precisa reforcar.

Regra importante: eu devo dar pistas primeiro. Solucao completa so se voce pedir explicitamente ou depois que voce realmente tentar.

## Estrutura

- `modules/`: fases do plano de mentoria.
- `labs/`: arquivos de exercicios e desafios para voce implementar.
- `examples/`: exemplos prontos de referencia, para consultar depois da tentativa.
- `final-project/`: codigo de referencia do projeto final.

## Fases

0. [Como vamos estudar](modules/00-como-vamos-estudar.md)
1. [Fundamentos de assincronismo no JavaScript](modules/01-fase-01-fundamentos-async.md)
2. [Conceitos centrais do RxJS](modules/02-fase-02-conceitos-centrais.md)
3. [Criando Observables](modules/03-fase-03-criando-observables.md)
4. [Operadores basicos](modules/04-fase-04-operadores-basicos.md)
5. [Operadores de transformacao avancada](modules/05-fase-05-transformacao-avancada.md)
6. [Operadores de combinacao](modules/06-fase-06-combinacao.md)
7. [Subjects e estado](modules/07-fase-07-subjects-estado.md)
8. [RxJS no Angular real](modules/08-fase-08-angular-real.md)
9. [Arquitetura com RxJS](modules/09-fase-09-arquitetura.md)
10. [Quando usar NgRx, Signals ou outra abordagem](modules/10-fase-10-ngrx-signals.md)
11. [Projeto final](modules/11-fase-11-projeto-final.md)
12. [Perguntas classicas de entrevista](modules/12-perguntas-entrevista.md)

## Primeira missao

Estude a Fase 1 e depois responda com suas palavras:

> Por que Promise nao resolve todos os problemas que RxJS resolve?

Nao precisa ser perfeito. O importante e mostrar o raciocinio inicial para a gente corrigir, ajustar e aprofundar.
