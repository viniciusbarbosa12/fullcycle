# Classic interview questions

At the end of the plan, you must be able to answer:

1. What is RxJS??
2. What's Observable?
3. What is the difference between Promise and Observable?
4. What does an Observer mean to emit values?
5. What and subscribe?
6. What are `next`, `error` and `complete`?
7. What's the difference between cold and hot Observable?
8. What is it for? `pipe`?
9. What's the difference between `map` and `tap`?
10. What is it for? `debounceTime`?
11. What is it for? `distinctUntilChanged`?
12. What's the difference between `switchMap`, `mergeMap`, `concatMap` and `exhaustMap`?
13. When to use `combineLatest`?
14. When to use `forkJoin`?
15. What is Subject?
16. What is the difference between Subject and Behavior Subject?
17. How to avoid memory leaves in Angular?
18. When to use async pipe?
19. When to do manual subscribe?
20. How to organize RxJS in an architecture Clear Angular?

## How to Train

Answer aloud, with a real example. A good answer for interview usually has:

- short definition;
- practical example;
- risk or prank;
- when using or avoiding.

## Format example

Question:

> What's the difference between `switchMap` and `mergeMap`?

Expected response in interview style:

```txt
switchMap cancels the previous stream and gets the latest, so it's good for search/autocomplete.
mergeMap keeps several streams running in parallel, then and good when all operations matter,
how to process various items. The risk of mergeMap in search and an old response arrive later and mess the screen.
```
