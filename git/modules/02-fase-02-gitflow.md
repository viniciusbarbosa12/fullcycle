# Phase 2 - Gitflow

## Lessons

- Gitflow Introduction.
- Gitflow Installation.
- Mao in the dough.

## Objective

Understanding Gitflow as a branch strategy to organize development, releases, hotfixes and maintenance of verses.

## Main concepts

- Gitflow.
- Branch `main`.
- Branch `develop`.
- Feature branch.
- Release branch.
- Hotfix branch.
- Merge.
- Version.
- Delivery flow.
- Development, approval and production environments.

## Guide concept

Gitflow separates work in progress, release candidates and urgent corrections. It helps when the team needs to maintain stable production while new features continue to develop.

## Real project example

A team is preparing the version `1.4.0` in a release branch, but find an urgent bug in production. The hotfix comes out of `main`,Returns to production quickly and then is integrated back to normal flow.

## Reference example

- [Manual Gitflow flow](../examples/02-gitflow/fluxo-gitflow.md)

## Practical exercises

Implement on `../labs/fase-02-gitflow/`:

1. Create a test repository.
2. Start Gitflow.
3. Create a feature branch.
4. Commit within feature.
5. Finish Feature.
6. Create a release branch.
7. Simulate correction in release.
8. Create hotfix.
9. Observe the final history of the repository.

## Reflection Questions

1. What is the branch function `main`?
2. What is the branch function `develop`?
3. When to use a feature branch?
4. When using a release branch?
5. When to use a hotfix?
6. Gitflow is always the best option?
7. What kind of Gitflow team can be too heavy on?

## Checkpoint

Answer with your words:

> How would I explain Gitflow to a dev who only uses branch directly from the main?

## Success criteria

You can advance when you can draw the path of a feature, a release and a hotfix without mixing the responsibilities of branches.
