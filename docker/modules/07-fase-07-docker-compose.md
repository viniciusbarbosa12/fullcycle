# Phase 7: Docker Compose

## Lessons

- Starting with Docker-compose
- Building images with Docker-compose
- Creating database MySQL
- Setting up node app with docker-compose
- Node vs MySQL
- Container Dependency

## Objective

Up an application with multiple services in an organized manner.

## Main concepts

- `docker-compose.yml`
- Services
- Build
- Image
- Ports
- Volumes
- Environment variables
- `depends_on`
- Networks
- App + database
- Startup order
- Healthcheck

## Practical exercises

- Create Compose with a Node application.
- Add MySQL.
- Configure Environment Variables.
- Connect Node to MySQL.
- Commit MySQL data with volume.
- Test stop, remove and climb all over again.
- Understand when the bank is not ready even with `depends_on`.

## Reflection questions

- Why Compose is better than several `docker run` loose?
- What the `depends_on` solves?
- What the `depends_on` does not solve?
- Why bank needs volume?
- Why the app should not use `localhost` to connect to MySQL within Compose?
