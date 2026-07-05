# Phase 2 - RxJS central concepts

## Objective

Understand the heart of RxJS: Observable, Observer, subscribe, issue, error, complete and cancel.

## Main concepts

- Observable.
- Observe.
- Subscribe.
- Issue of values.
- `next`.
- `error`.
- `complete`.
- Subscription.
- Unsubscribe.
- Observable cold.
- Hot observable.
- Promise vs Observable.

## Guide concept

Observable and a source of values over time. Observer and those who receive these values. `subscribe` connect the two.

## Real project example

`HttpClient.get()` returns a cold Observable: the request only happens when someone signs. A button click is a hot font: the event exists regardless of whether you are listening.

## Practical exercises

Implement on `../labs/fase-02-core/`:

1. Create a simple Observer.
2. Make him issue a single value.
3. Make him issue several values.
4. Treat `next`, `error` and `complete`.
5. Create Observable with `setInterval`.
6. Cancel Observable using `unsubscribe`.

## Reflection Questions

1. Which means an Observable issue a value?
2. Who produces the data?
3. Who consumes the data?
4. What's the difference between `next`, `error` and `complete`?
5. Why Observable Can Be More Powerful Than Promise?
6. What happens if I forget to give unsubscribe in an infinite stream?

## Checkpoint

Answer with your words:

> What is the difference between Promise and Observable?

## Success criteria

You can advance when you can create a manual Observable, sign, view emissions and cancel an infinite stream.
