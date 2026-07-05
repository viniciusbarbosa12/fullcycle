# Phase 3 - Creating Observables

## Objective

Learning from where flows can be born.

## Main concepts

- `of`.
- `from`.
- `fromEvent`.
- `interval`.
- `timer`.
- `new Observable`.
- Events Streams.
- Streams of arrays.
- Promise Streams.
- Time Streams.

## Guide concept

Not every Observable needs to be created manually. Most of the time, RxJS already has a function ready to transform values, events, arrays, Promises or stream time.

## Real project example

A search input may be born from `fromEvent` or `formControl.valueChanges`. A polling may be born of `timer`. A mock list may be born of `of`.

## Practical exercises

Implement on `../labs/fase-03-creating/`:

1. Use `of` to issue fixed values.
2. Use `from` with array.
3. Use `from` with Promise.
4. Use `fromEvent` to capture click boot.
5. Use `interval` to emit values every second.
6. Use `timer` to start emissao after a while.
7. Create a manual Observable with `new Observable`.

## Reflection Questions

1. When to use `of`?
2. When to use `from`?
3. What's the difference between `interval` and `timer`?
4. Why click event combines so well with Observable?
5. Why shouldn't I always create Observable manually?

## Checkpoint

Create a mini page with:

- a boot;
- a click counter;
- a timer;
- a log showing the issues.

## Success criteria

You can advance when you can choose the right source for a simple flow without using `new Observable` by impulse.
