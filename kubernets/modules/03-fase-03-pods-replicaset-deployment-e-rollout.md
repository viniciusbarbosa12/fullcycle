# Phase 3: Pods, ReplicaSet, Deployment and Rollout

## Lessons

- Creating an example app and image
- Working with Pods
- Creating First ReplicaSet
- The problem of ReplicaSet
- Deployment Implementation
- Rollout and revisions

## Objective

Understand how Kubernetes runs applications and why we usually use Deployment instead of creating Direct Pod.

Pod is the smallest execution unit. ReplicaSet maintains amount of replicas. Deployment manages ReplicaSets, updates, rollbacks and revisions.

## Main concepts

- Pod
- Container
- Image
- ReplicaSet
- Deployment
- Desired state
- Rollout
- Revision
- Rollback
- Labels
- Selectors
- Declarative configuration
- Imperative vs. declarative

## Practical exercises

- Create Application Image.
- Create Pod manually.
- View Pod logs.
- Run command within Pod.
- Delete Pod and observe behavior.
- Create ReplicaSet with multiple replicas.
- Change image and understand ReplicaSet limitation.
- Create Deployment.
- Rollout new version.
- Rollback to previous version.
- List revision history.

## Reflection questions

- Why it is not common to use Direct pod in production?
- What ReplicaSet Solves?
- What's wrong with using ReplicaSet directly?
- What Deployment Adds?
- What is desired state?
- What happens when I delete a Pod managed by Deployment?
- How rollback aid in production?

## Checkpoint

Have an application running via Deployment, with multiple replicas, rollout and rollback working.
