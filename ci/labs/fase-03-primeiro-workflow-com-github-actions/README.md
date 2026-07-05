# Lab Phase 3 - First workflow with GitHub Actions

## Mission

Practice Phase 3 concepts before requesting review.

## Practical exercises

- Synchronising folder `.github/workflows`.
- Create a first workflow file.
- Configure workflow to run on `push` and `pull_request`.
- Rotate dependencies installation.
- Run tests.
- Make the pipeline break on purpose.
- Fix Pipeline.
- Enable mandatory status check in the main branch.
- Create a matrix to run in more than one language/runtime version.

## Before asking for review

- What is the difference between workflow, job and step?
- When it makes sense to run pipeline on `push`?
- When it makes sense to run pipeline on `pull_request`?
- Why is it helpful to make the pipeline fail on purpose?
- What status check protects?
- What Strategy Matrix Solves?
- In what situation a matrix can make the pipeline too slow?

## Success criteria

Create a PR where:

- The pipeline runs automatically.
- Pipeline fails at first.
- Error is fixed.
- State check blocks merge when failure.
- The matrix runs in more than one version.
