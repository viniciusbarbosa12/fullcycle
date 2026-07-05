# Phase 6 - Combining operators

## Objective

Learning to combine multiple data streams.

## Main concepts

- `combineLatest`.
- `forkJoin`.
- `zip`.
- `withLatestFrom`.
- `startWith`.
- `catchError`.
- `finalize`.

## Guide concept

Real screens rarely depend on a single flow. Search, filter, page, route, login and permissions may need to work together.

## Real project example

A list with search, filter and pagination usually uses `combineLatest`. A home screen that loads us and permissions by HTTP can use `forkJoin`. A save click that takes the last value of the formula can use `withLatestFrom`.

## Practical exercises

Implement on `../labs/fase-06-combination/`:

1. Combine search, filter and page with `combineLatest`.
2. Make multiple calls HTTP fake with `forkJoin`.
3. Use `withLatestFrom` to get the last value of another stream.
4. Use `startWith` to set initial value.
5. Treat Error with `catchError`.
6. Shut down loading with `finalize`.

## Reflection Questions

1. When to use `combineLatest`?
2. When to use `forkJoin`?
3. What's the difference between `combineLatest` and `forkJoin`?
4. Why flows without initial value can stop the `combineLatest`?
5. Where it comes in `catchError` on a real screen?
6. Why? `finalize` and good for loading?

## Checkpoint

Create a fake screen with:

- search field;
- status filter;
- pagination;
- loading;
- error handling;
- required make updated when search, filter or page change.

## Success criteria

You can step up when you can explain why `startWith` It is often necessary before `combineLatest`.
