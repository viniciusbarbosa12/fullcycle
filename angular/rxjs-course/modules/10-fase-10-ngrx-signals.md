# Phase 10 - When to use NgRx, Signals or another approach

## Objective

Understand when simple RxJS is enough and when a more robust state solution makes sense.

## Main concepts

- Pure RxJS.
- BehaviorSubject state.
- Facade state.
- NgRx.
- Signal.
- Signal Store.
- Accidental complexity.
- Local vs global status.
- Derivative State.

## Guide concept

State tool is not seniority award. She must pay the cost she adds. For local feature, RxJS + Facade may be enough. For complex global state, NgRx or Signal Store can bring predictability.

## Real project example

An isolated search screen can stay with Facade. Authentication, permissions, global cart or state shared by many features may justify a more structured approach.

## Practical exercises

Implement or describe in `../labs/fase-10-state-choices/`:

1. Compare local status in the component.
2. Compare State in Service with BehaviorSubject.
3. Compare Facade State.
4. Discussing when NgRx would make sense.
5. Discuss when Signals would be simpler.

## Reflection Questions

1. When RxJS pure and sufficient?
2. When BehaviorSubject starts to be limited?
3. When NgRx is worth the cost?
4. When Signals can simplify?
5. What is a global state of truth?

## Checkpoint

Answer me.:

> On a list screen with search, filter and page, would I use pure RxJS, Signals or NgRx? Why??

## Success criteria

You can advance when you can justify the choice of state by scope, complexity, sharing and need for predictability.
