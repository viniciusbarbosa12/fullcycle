# Phase 4: CI with Docker

## Lessons

- Creating Dockerfile
- Errata - Creating Dockerfile
- Generating image build via CI
- Pushing image automatically

## Objective

Understand how to integrate Docker on the pipeline: create an image, validate its build inside CI and automatically publish it to a registry.

## Main concepts

- Dockerfile
- Docker Image
- Image Build
- Image tag
- Docker register
- Docker Hub or GitHub Container Registry
- Log-in
- Secrets
- Automatic Push
- Versified image
- Security of credentials

## Practical exercises

- Create a Dockerfile for the application.
- Build image locally.
- Rotate image locally.
- Create a job in CI to build the image.
- Configure image tag.
- Configure Registry Authentication Secrets.
- Automatically post image.
- Validate if the posted image can be downloaded and executed.

## Reflection questions

- Why build Docker images in CI?
- Why shouldn't I leave password/token hardcoded on workflow?
- What Secrets Are?
- How to choose a good image tag?
- What is the difference between building and publishing image?
- Why publishing a broken image is dangerous?
- When it makes sense to publish image: all push, all PR or just merge in main?

## Checkpoint

Create a pipeline that:

- Wheel tests.
- Only build image if the tests pass.
- Automatically post image in a registry.
- Uses authentication secrets.
- Uses understandable tags.
