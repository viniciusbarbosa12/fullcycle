# Phase 6 - NoView

## Lesson

- Semantical versioning.

## Objective

Understand semantic versioning and know when a change should increase major, minor or patch.

## Main concepts

- Semantic Versioning.
- MAJOR.
- MINOR.
- PATCH.
- Breaking change.
- Compatibility.
- Release.
- Changelog.
- API publishes.

## Guide concept

WithoutView communicates impact. `PATCH` corrects without breaking contract, `MINOR` adds capacity while maintaining compatibility and `MAJOR` indicates break for who depends on the project.

## Real project example

Remove a field used by customers in a public API and a breaking change. Even if the internal code is better, those who consume the API can break.

## Practical exercises

Implement on `../labs/fase-06-semver/`:

1. Create examples of patch changes.
2. Create examples of minor changes.
3. Create major changes examples.
4. Sort fictitious changes.
5. Simulate releases `1.0.0`, `1.1.0`, `1.1.1` and `2.0.0`.

## Reflection Questions

1. What's a breaking change?
2. When to increase PATCH?
3. When to increase MINOR?
4. When to increase MAJOR?
5. Why UnView and Important for Libraries and APIs?
6. What can happen if I misread?

## Checkpoint

Answer me.:

> An API removed a field used by customers. Is that major, minor or patch? Why??

## Success criteria

You can advance when you can sort changes by looking at the impact on who consumes the system, not just the diff size.
