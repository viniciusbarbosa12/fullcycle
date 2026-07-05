# Phase 5 - Advanced Transformers

## Objective

Understanding operators who fall most in interview and save or destroy Angular project.

## Main concepts

- `switchMap`.
- `mergeMap`.
- `concatMap`.
- `exhaustMap`.

## Main rules

- `switchMap` cancels the previous stream and uses the latest.
- `mergeMap` executes several flows in parallel.
- `concatMap` executes in order, one after the other.
- `exhaustMap` ignores new issues while an execution is underway.

## Real project example

- Autocomplete: `switchMap`.
- Process several items in parallel: `mergeMap`.
- Save queue: `concatMap`.
- login boot or submit: `exhaustMap`.

## Practical exercises

Implement on `../labs/fase-05-flattening/`:

1. Create a search with `switchMap`.
2. Simulate multiple requirements in parallel with `mergeMap`.
3. Simulate a rescue queue with `concatMap`.
4. Simulate login button with `exhaustMap`.
5. Compare the behavior of the four operators using logs.

## Reflection Questions

1. Why? `switchMap` and good for self-complete?
2. Why? `mergeMap` can cause problems if used wrong?
3. When the Order of Requisics Matters?
4. Why? `exhaustMap` and useful in submit boot?
5. Which operator would you use to avoid double click login?

## Checkpoint

Answer with real examples:

> When I would use switchMap, mergeMap, concatMap and exhaustMap?

## Success criteria

You can advance when you can choose from the four operators without memorizing, looking for cancellation, parallelism, order and skip repeat.
