# Phase 1 - JavaScript async fundamentals

## Objective

Understand why RxJS exists before leaving using `pipe` Just like the one who plays spice without knowing how to cook.

## Main concepts

- Synchronous code.
- Asynchronous code.
- Callback.
- Promise.
- async/await.
- Event loop basic.
- Operations I/O.
- Screen Events.
- Difference between single event and continuous flow.

## Guide concept

Promise well represents a unique future response. Real UI usually produces streams: clicks, typing, changing route, changing formula and requests that need to be cancelled.

## Real project example

A product search isn't a promise. She's a stream:

1. User type.
2. Text changes several times.
3. The system waits for him to stop.
4. Old requests stop importing.
5. The screen shows loading, error or result.

## Practical exercises

Implement on `../labs/fase-01-async/`:

1. Create a simple sync function.
2. Create a callback function.
3. Create Promise.
4. Rewrite Promise using async/await.
5. Simulate an asynchronous call with `setTimeout`.
6. Write a commentary explaining where Promise begins to be limited.

## Reflection Questions

1. Which means an asynchronous operation?
2. Why callback can become messy?
3. Promise solves how many times?
4. What async/await improves?
5. What kind of problem is Promise not enough?

## Checkpoint

Answer with your words:

> Why RxJS exists if JavaScript already has Promise and async/await?

## Success criteria

You can advance when you can explain the difference between single event and continuous flow using an example of Angular screen.
