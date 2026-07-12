# Docker Example 05 - Node Development Container

This example uses Docker as a development/runtime environment for a Node application.

## Main idea

You do not need Node installed on your host machine to run a Node app.

Docker can provide the runtime, and your source code can stay in your project folder.

## Run with a ready image

From this folder:

```bash
docker run --rm \
  -v "$PWD:/app" \
  -w /app \
  -p 8085:3000 \
  node:22-alpine \
  node src/server.js
```

Test it:

```bash
curl http://localhost:8085/health
```

## Build your own application image

```bash
docker build -t docker-example-node-dev:local .
```

```bash
docker run -d \
  --name docker-example-node-dev \
  -p 8085:3000 \
  docker-example-node-dev:local
```

```bash
curl http://localhost:8085
```

## What to remember

- `-v "$PWD:/app"` mounts your local folder into the container.
- `-w /app` sets the working directory inside the container.
- The image `node:22-alpine` gives you Node without installing it on your machine.
- A project image is better when you want repeatable execution.

## Cleanup

```bash
docker rm -f docker-example-node-dev
docker image rm docker-example-node-dev:local
```
