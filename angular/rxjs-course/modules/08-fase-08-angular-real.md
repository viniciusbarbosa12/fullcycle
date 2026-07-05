# Phase 8 - RxJS in the actual Angular

## Objective

Apply RxJS to Angular the way it appears in real project.

## Main concepts

- `HttpClient`.
- Observable in calls HTTP.
- `async pipe`.
- Avoid unnecessary subscribe.
- Unsubscribe.
- Memory leak.
- `takeUntilDestroyed`.
- Reactive Forms.
- `valueChanges`.
- Route params.
- Loading, error and data state.

## Guide concept

Angular conversation naturally with RxJS: HTTP, formulario, route and template can be modeled as streams.

## Real project example

A search screen with Reactive Forms can hear `valueChanges`,apply debounce, cancel requests with `switchMap` and render with `async pipe`,without manual subscribing to the component.

## Practical exercises

Implement on `../labs/fase-08-angular-real/`:

1. Create Call HTTP fake returning Observable.
2. Consume Observable with `async pipe`.
3. Refactor a manual subscribe to `async pipe`.
4. Use `valueChanges` in reactive form.
5. Use route params as Observable.
6. Create screen status with loading, date and error.
7. Use `takeUntilDestroyed` when the manual subscribe is required.

## Reflection Questions

1. Why? `async pipe` helps to avoid memory leak?
2. When you subscribe manually and acceptable?
3. Why HttpClient Returns Observable and Not Promise?
4. How to handle loading and error without duplicate code?
5. What Can Cause Memory Leak in Angular?

## Checkpoint

Create a screen Angular with:

- list loaded by Observable;
- template using `async pipe`;
- loading;
- error;
- search with Reactive Forms;
- request cancellation with `switchMap`.

## Success criteria

You can advance when the component exposes Observables to the template and use manual subscribe only with clear reason.
