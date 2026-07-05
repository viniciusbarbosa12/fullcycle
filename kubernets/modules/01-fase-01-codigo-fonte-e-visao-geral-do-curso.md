# Phase 1: Source code and course overview

## Lesson

- Course source code

## Objective

Understand project structure before starting to create objects in the cluster.

Before going out applying YAML, I need to know which application will be used, which image will be created, which ports it exposes and how the project is organized.

## Main concepts

- Base Repository
- Example application
- Dockerfile
- Docker Image
- Kubernetes Manifests
- Agenda of folders
- Technical README

## Practical exercises

- Clone or create the base project.
- Identify Dockerfile.
- Identify application.
- Identify the port used by the application.
- Create a README explaining the structure.
- Rotate the application locally before placing on Kubernetes.

## Reflection questions

- Before I climb an app on Kubernetes, what I need to know about it?
- Why it is important to test the application outside the cluster first?
- How would I identify if a problem is in the application, Docker image or Kubernetes?

## Checkpoint

Create a README with:

- How to run the application locally
- How to generate the Docker image
- Which port does the application use
- What will be the goal of running this application in Kubernetes
