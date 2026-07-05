# Phase 11 - Final project

## Objective

Bring everything together in a complete Angular feature.

## Suggested final project

Create a listing screen for products, users or orders with:

- search with debounce;
- status filter;
- pagination;
- loading;
- error handling;
- request cancellation;
- cache with `shareReplay`;
- item detail;
- state shared between components;
- architecture with Component + Facade + Service;
- template using `async pipe`;
- little or no manual subscribe.

## Challenge rules

1. You try to implement first.
2. Then send what you did.
3. I review.
4. I ask questions.
5. I point errors and improvements.
6. I give hints, not complete solution.
7. You only get the complete solution if you ask explicitly or after trying hard.

## Success criteria

The feature must have:

- organized code;
- separated responsibilities;
- understandable RxJS flows;
- operators chosen with intent;
- loading and handled error states;
- clear error message;
- no obvious memory leak;
- README explaining the decisions.

## Suggested implementation guide

1. Start with the models: item, query, page and screen status.
2. Create a fake service that returns Observables with delay.
3. Create Facade with filters as a private state.
4. Combine search, filter and page.
5. Use `switchMap` to fetch data.
6. Model loading and error.
7. Create the list component consuming Observables.
8. Create detail component by consuming shared state.
9. Add cache with `shareReplay`.
10. Write the architectural decision README.

## Reference after attempt

After trying, you can compare with:

- [product.models.ts](../final-project/src/app/features/products/models/product.models.ts)
- [product-api.service.ts](../final-project/src/app/features/products/services/product-api.service.ts)
- [product-facade.service.ts](../final-project/src/app/features/products/state/product-facade.service.ts)
- [product-list.component.ts](../final-project/src/app/features/products/components/product-list/product-list.component.ts)
- [product-detail.component.ts](../final-project/src/app/features/products/components/product-detail/product-detail.component.ts)

## Checkpoint

When you're done, send your code and answer.:

> Where is the request cancellation, where is the cache and why the component does not call API directly?
