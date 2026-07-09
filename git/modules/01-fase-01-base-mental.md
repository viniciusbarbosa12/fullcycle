# Phase 1 - Introduction and mental base

## Lessons

- Introduction

## Objective

Understand why Git is not just a tool to save code, but a way to organize collaboration, history, review and software delivery.

## Main concepts

- Version control.
- History of changes.
- Branch.
- Commitizen.
- Pull Request.
- Code Review.
- Branch protection.
- Commit patterns.
- Tracking of changes.

## Guide concept

A commit should represent a small change with own meaning. In real projects, history helps to understand decisions, investigate bugs, review impact and undo changes with less risk.

## Real project example

Imagine that a checkout screen broke in production. A well-written history allows us to find out which change entered, why it entered, who reviewed, which PR took that to the main branch and which tests were performed.

## Reference example

- [First commands](../examples/01-base-mental/comandos.md)

## Practical exercises

Implement on `../labs/fase-01-base-mental/`:

1. Create a simple local repository.
2. Create file `README.md`.
3. Do first commit.
4. Create branch.
5. Make a small change.
6. Compare the history using `git log`.

## Reflection Questions

1. Why Git is important on a team?
2. What a commit should represent?
3. What is the risk of making too large commits?
4. Why work directly at `main` or `master` can be dangerous?
5. What changes when more than one person works in the same repository?

## Checkpoint

Answer with your words:

> What Git Solves in the Life of a Development Team?

## Success criteria

You can advance when you can explain the difference between "save a change" and "record a small, revised and traceable decision".
