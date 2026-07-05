# Phase 4 - Basic operators

## Objective

Learn how to transform, filter and observe flows without messing up the code.

## Main concepts

- `pipe`.
- `map`.
- `filter`.
- `tap`.
- `take`.
- `first`.
- `skip`.
- `debounceTime`.
- `distinctUntilChanged`.

## Guide concept

Operators let you assemble a line of reasoning about the flow: transform, filter, observe, limit and avoid repetition.

## Real project example

In a search:

1. `map` clears text.
2. `filter` ignores small texts.
3. `debounceTime` wait for the user to stop.
4. `distinctUntilChanged` avoids repeated search.
5. `tap` can log to debug without changing the value.

## Practical exercises

Implement on `../labs/fase-04-basic-operators/`:

1. Use `map` to transform values.
2. Use `filter` to let pass just a few values.
3. Use `tap` to log in without changing the flow.
4. Use `take` to limit emissions.
5. Use `skip` to ignore first issues.
6. Create input with `debounceTime`.
7. Avoid repeated calls with `distinctUntilChanged`.

## Reflection Questions

1. What's the difference between `map` and `tap`?
2. Why? `tap` should not change value?
3. When it makes sense to use `take`?
4. Why? `debounceTime` and useful in search?
5. What? `distinctUntilChanged` avoids?

## Checkpoint

Create a fake search where:

- the user type in an input;
- the system waits for him to stop typing;
- repeated texts are ignored;
- the console shows the final search term.

## Success criteria

You can advance when you can mount the flow without `subscribe` nestled and explain the role of each operator.
