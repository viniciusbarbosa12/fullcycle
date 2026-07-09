# Phase 7 - Conventional Commits

## Lessons

- Conventional commits.
- Conventional in VSCode.
- Working with commitlint.
- Checking commit standards with Commitsar.
- Committing with Commitizen.

## Objective

Learn how to write standardized commits, understanding formats and tools for changelog automation, versioning and pipelines.

## Main concepts

- Conventional Commits.
- `feat`.
- `fix`.
- `docs`.
- `style`.
- `refactor`.
- `test`.
- `chore`.
- Scope.
- Breaking change.
- Commitlint.
- Commitizen.
- Changelog Automation.

## Guide concept

A commit message is an interface for humans and tools. A consistent standard helps the team to understand history and allows to automate validation, changelog and versioning.

## Real project example

A pipeline can block `fixed bug` and accept `fix(payment): handle timeout on retry`, because the second message informs type, area and purpose.

## Reference example

- [Commitlint](../examples/07-conventional-commits/commitlint-example.md)

## Practical exercises

Implement on `../labs/fase-07-conventional-commits/`:

1. Write commits using Conventional Commits.
2. Create examples with `feat`.
3. Create examples with `fix`.
4. Create examples with `docs`.
5. Create examples with `refactor`.
6. Create commit with scope.
7. Configure commitlint.
8. Test invalid commit.
9. Fix invalid commit.
10. Use Commitizen to create guided commits.

## Reflection Questions

1. Why standardize commit messages?
2. What's the difference between `feat` and `fix`?
3. When to use `chore`?
4. When to use `refactor`?
5. What is scope in commit?
6. How do Conventional Commits help with versioning?
7. How can this feed an automatic changelog?

## Checkpoint

Create valid commits as:

- `feat(auth): add login validation`
- `fix(api): handle null customer response`
- `docs(readme): update setup instructions`
- `refactor(order): simplify status validation`
- `test(payment): add retry scenario`

Then explain why each type was chosen.

## Success criteria

You can advance when you can choose the commit type by the meaning of the change, not by the changed file.
