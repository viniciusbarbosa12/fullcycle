# Phase 3: First workflow with GitHub Actions

## Lessons

- Creating example software
- Creating first workflow
- Making github actions not pass
- Activating status check
- Working with Strategy Matrix

## Objective

Create the first GitHub Actions workflow, understand when it runs, how it fails, how to block merge with check status and how to test in multiple versions/environments using Strategy Matrix.

## Main concepts

- GitHub Actions
- Workflow
- Job
- Step
- Runner
- Trigger
- `push`
- `pull_request`
- State check
- Required check
- Strategy Matrix
- Pipeline Failing
- Pipeline Passing

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

## Reflection questions

- What is the difference between workflow, job and step?
- When it makes sense to run pipeline on `push`?
- When it makes sense to run pipeline on `pull_request`?
- Why is it helpful to make the pipeline fail on purpose?
- What status check protects?
- What Strategy Matrix Solves?
- In what situation a matrix can make the pipeline too slow?

## Checkpoint

Create a PR where:

- The pipeline runs automatically.
- Pipeline fails at first.
- Error is fixed.
- State check blocks merge when failure.
- The matrix runs in more than one version.
