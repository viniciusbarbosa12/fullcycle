# Phase 4: APIOps and GitOps

## Lessons

- APIOps
- GitOps
- Tools required
- Validating openapi lint
- Checking contracts
- Agenda
- Running pipeline

## Objective

Understand how to treat APIs as a versioned and governed product, using automation to validate contracts, apply standards and synchronize settings via GitOps.

Here the idea is to stop setting up gateway “in hand” and start working with a more professional approach: versioned contract, automatic validation, pipeline and declarative delivery.

## Main concepts

- APIOps
- GitOps
- OpenAPI
- API contract
- Contract Lint
- Contract testing
- Pipeline
- Pull Request
- API Governance
- Argo CD
- Desired state
- Sync
- Drift
- Automation
- Validation before deploy
- Declarative Settings

## Practical exercises

- Create or revise an OpenAPI file.
- Rotate lint in contract.
- Introduce a deliberate error in the contract.
- Make lint fail.
- Fix the contract.
- Create Contract Validation on Pipeline.
- Install Argo CD.
- Create an application in Argo.
- Rotate pipeline to apply changes.
- Validate if cluster status matches Git.

## Reflection questions

- What APIOps is?
- What is the difference between APIOps and DevOps?
- What is GitOps?
- Because Git becomes a source of truth?
- What is drift?
- Why validate OpenAPI before publishing an API?
- What an OpenAPI lint can prevent?
- What he can't guarantee?
- How Argo CD helps in declarative delivery?

## Checkpoint

Have a pipeline that validates OpenAPI contracts and a GitOps flow capable of synchronizing cluster configuration.

## Shared project implementation

MeshCommerce keeps the Orders and Payments contracts, the Spectral rules, and
the local validation instructions in
[`final-project/contracts`](../../final-project/contracts/README.md). The
Pull Request gates are defined in
[`api-contracts.yml`](../../.github/workflows/api-contracts.yml): lint protects
contract quality, while `oasdiff` protects consumers from semantic breaking
changes after the initial baseline reaches `main`.
