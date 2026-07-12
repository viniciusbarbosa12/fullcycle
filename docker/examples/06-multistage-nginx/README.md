# Docker Example 06 - Multistage Build and nginx

This example compares a single-stage image with a multistage image and then puts nginx in front of the application.

## Main idea

A build image needs compilers and tools.

A runtime image should contain only what the application needs to run.

Multistage build lets us use a large image to build the binary and a smaller image to run it.

## Compare images

Build the single-stage image:

```bash
docker build -f Dockerfile.single-stage -t docker-example-multistage:single .
```

Build the optimized image:

```bash
docker build -f Dockerfile.multistage -t docker-example-multistage:optimized .
```

Compare sizes:

```bash
docker image ls docker-example-multistage
```

## Run behind nginx

```bash
docker compose up -d --build
```

Test through nginx:

```bash
curl http://localhost:8086/health
```

## What to remember

- The first stage builds the application.
- The final stage runs the application.
- nginx can receive external HTTP traffic and proxy it to the internal app.
- This separates public entrypoint from application runtime.

## Cleanup

```bash
docker compose down
docker image rm docker-example-multistage:single docker-example-multistage:optimized
```
