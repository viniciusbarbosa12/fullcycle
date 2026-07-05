# Phase 8: Persistent Volumes and StatefulSets

## Lessons

- Understanding persistent volumes
- Creating persistent volume and riding
- Understanding Stateless vs Stateful
- Creating StatefulSet
- Creating headless service
- Creating dynamic volumes with StatefulSet
- Should I run my database in Kubernetes?

## Objective

Understand persistent storage and stateful worksloads in Kubernetes.

Not everything in Kubernetes is stateless. Some applications need stable identity, persistent storage and creation order. StatefulSet exists for these cases, but using bank in Kubernetes requires operational maturity.

## Main concepts

- Volume
- PersistentVolume
- PersistentVolumeClaim
- StorageLesson
- Dynamic provisioning
- StatefulSet
- Stateless
- Stateful
- Headless Service
- Stable identity
- DNS stable
- Volume per replica
- Database in Kubernetes
- Data operation

## Practical exercises

- Create PersistentVolume.
- Create PersistentVolumeClaim.
- Mount Volume in a Pod.
- Write file in volume.
- Recreate Pod and validate persistence.
- Create StatefulSet.
- Create Headless Service.
- Observing stable Pods DNS.
- Dynamically create volumes.
- Compare Deployment vs StatefulSet.
- Write a review: when I would or would not use bank in Kubernetes.

## Reflection questions

- What is the difference between volume and PersistentVolume?
- What is PVC?
- What StorageLesson is?
- What is Dynamic Provisioning?
- What's the difference between stateless and stateful?
- Why StatefulSet Gives Stable Identity?
- What is Headless Service for??
- When to use StatefulSet?
- It's a good idea to run a bank in Kubernetes.?
- When it is best to use managed bank?

## Checkpoint

Having a StatefulSet running with persistent volume and being able to explain when using bench inside or outside Kubernetes.
