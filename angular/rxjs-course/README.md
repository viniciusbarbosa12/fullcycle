# RxJS Learning Plan with Angular

This course now follows the attached prompt mentoring model: practical, progressive study and without delivering the complete solution before your attempt.

The idea is not to memorize operators. The idea is to learn to think about asynchronous flows, events, streams, state and Angular architecture using RxJS cleanly.

## Final Objective

By the end, you should be able to implement real features like:

- search with debounce;
- cancellation of requests;
- loading state;
- error handling;
- communication between components;
- cache with `shareReplay`;
- architecture with Component + Facade + Service;
- good answers in senior interviews.

## How We Will Study

When you start a lesson, send something like:

```txt
Started the topic: switchMap
```

My answer must follow this format:

1. Main concept.
2. Simple explanation.
3. Real project example.
4. Questions for you to answer.
5. Practical exercise.
6. Success criteria.

When you finish an exercise, send:

```txt
I'm done, look at my code.
```

My review should follow this format:

1. What's right.
2. What can improve.
3. Risks.
4. Good practices.
5. What to study before advancing.
6. Whether you can move on or need more practice.

Important rule: I must give hints first. Complete solution only if you explicitly ask or after you really try.

## Structure

- `modules/`: phases of the mentoring plan.
- `labs/`: exercise files and challenges for you to implement.
- `examples/`: ready reference examples to consult after the attempt.
- `final-project/`: final project reference code.

## Phases

0. [How We Will Study](modules/00-como-vamos-estudar.md)
1. [JavaScript async fundamentals](modules/01-fase-01-fundamentos-async.md)
2. [RxJS central concepts](modules/02-fase-02-conceitos-centrais.md)
3. [Creating Observables](modules/03-fase-03-criando-observables.md)
4. [Basic operators](modules/04-fase-04-operadores-basicos.md)
5. [Advanced transformation operators](modules/05-fase-05-transformacao-avancada.md)
6. [Combining operators](modules/06-fase-06-combinacao.md)
7. [Subjects and State](modules/07-fase-07-subjects-estado.md)
8. [RxJS in real Angular](modules/08-fase-08-angular-real.md)
9. [Architecture with RxJS](modules/09-fase-09-arquitetura.md)
10. [When to use NgRx, Signals or other approach](modules/10-fase-10-ngrx-signals.md)
11. [Final project](modules/11-fase-11-projeto-final.md)
12. [Classic interview questions](modules/12-perguntas-entrevista.md)

## First Mission

Study Phase 1 and then answer with your words:

> Why Promises do not solve all the problems that RxJS solves?

It does not have to be perfect. The important thing is to show the initial reasoning so we can correct, adjust and deepen.
