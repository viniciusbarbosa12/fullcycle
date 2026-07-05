# Phase 9 - Architecture with RxJS

## Objective

Organize RxJS in clean architecture, avoiding fat component and messy service.

## Main concepts

- Component.
- Service.
- Facade.
- Smart component.
- Dumb component.
- UI state.
- Server state.
- Stream composition.
- `shareReplay`.
- Cache.
- Centralised error handling.
- Cancellation of requests.
- Separation of responsibilities.

## Base architecture

```txt
Component
  consumes data and triggers actions

Facade
  organizes streams, state and screen rules

Service
  calls API and handles external data
```

## Real project example

In a product listing, the component does not need to know how to mount HTTP query. He calls `facade.setSearch`, `facade.setPage` and consumes `facade.productsState$`.

## Practical exercises

Implement on `../labs/fase-09-architecture/`:

1. Create Service to simulate API.
2. Create a Facade to organize filters, page and data.
3. Create a Component that only consumes Facade Observables.
4. Use `async pipe` no template.
5. Implement cache with `shareReplay`.
6. Separate UI state of server state.

## Reflection Questions

1. Why component shouldn't know everything?
2. What's the difference between Service and Facade??
3. What is UI state?
4. What's state server?
5. When `shareReplay` help?
6. When `shareReplay` can cause trouble?

## Checkpoint

Create a feature Angular using:

- Component;
- Facade;
- Service;
- Observable for List;
- Observable for loading;
- Observable for error;
- Observable for filters;
- simple cache.

## Success criteria

You can advance when the flow rule is in Facade, external access in Service and template/events in Component.
