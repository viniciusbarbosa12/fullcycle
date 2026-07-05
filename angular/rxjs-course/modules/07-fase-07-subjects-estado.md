# Phase 7 - Subjects and status

## Objective

Understand how to use Subject without turning the project into a radioactive ball.

## Main concepts

- `Subject`.
- `BehaviorSubject`.
- `ReplaySubject`.
- `AsyncSubject`.
- Shared State.
- Initial State.
- Encapsulation.
- Expose Observable, hide Subject.
- Avoid Public Subject.

## Guide concept

Subject serves to push values into a stream. In Angular state, the safest pattern and private Subject and public Observable.

## Real project example

A logged-in user service can save the status in `BehaviorSubject`,expose `user$` with `asObservable()` and offer methods as `login` and `logout`.

## Practical exercises

Implement on `../labs/fase-07-subjects-state/`:

1. Create a counter with `Subject`.
2. Create user status logged in with `BehaviorSubject`.
3. Create history of last issues with `ReplaySubject`.
4. Test behaviour of `AsyncSubject`.
5. Create a Service Simple Angular with Private State.
6. Expose the status using `asObservable`.

## Reflection Questions

1. What is the difference between Subject and Behavior Subject?
2. Why BehaviorSubject Needs Initial Value?
3. Why not leave a public Subject?
4. When Subject turns gambiarra?
5. When to use a status lib instead of Subject?

## Checkpoint

Create a status service with:

- private state;
- method to update status;
- Observable public read only;
- a component consuming this state.

## Success criteria

You can step up when you can explain why `private readonly subject` + `readonly state$` better protects the code.
