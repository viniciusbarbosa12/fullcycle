# Lab Phase 4 - APIOps and GitOps

## Mission

Practice Phase 4 concepts before requesting review.

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

## Before asking for review

- What APIOps is?
- What is the difference between APIOps and DevOps?
- What is GitOps?
- Because Git becomes a source of truth?
- What is drift?
- Why validate OpenAPI before publishing an API?
- What an OpenAPI lint can prevent?
- What he can't guarantee?
- How Argo CD helps in declarative delivery?

## Success criteria

Have a pipeline that validates OpenAPI contracts and a GitOps flow capable of synchronizing cluster configuration.

The integrated implementation and its reproducible validation commands are in
[MeshCommerce API contracts](../../../final-project/contracts/README.md). The
small course lab remains useful for isolated experiments; the shared project is
the demonstrable APIOps baseline.
