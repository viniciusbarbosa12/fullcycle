# Docker Example 03 - Images and Dockerfile

This example shows how to stop only consuming ready images and start building your own image.

## Main idea

An image is a packaged template.

A `Dockerfile` is the recipe used to create that image. Each instruction creates a layer or metadata that Docker can reuse during future builds.

## Static nginx image

Build the image:

```bash
docker build -t docker-example-static:local .
```

Run it:

```bash
docker run -d \
  --name docker-example-static \
  -p 8083:80 \
  docker-example-static:local
```

Test it:

```bash
curl http://localhost:8083
```

Inspect the image:

```bash
docker image ls docker-example-static
docker history docker-example-static:local
```

## CMD and ENTRYPOINT demo

Build the second image:

```bash
docker build -t docker-example-entrypoint:local ./cmd-entrypoint
```

Run with the default `CMD`:

```bash
docker run --rm docker-example-entrypoint:local
```

Override only the `CMD`:

```bash
docker run --rm docker-example-entrypoint:local Vinicius
```

Override the `ENTRYPOINT`:

```bash
docker run --rm --entrypoint sh docker-example-entrypoint:local
```

## What to remember

- `FROM` defines the base image.
- `COPY` sends files from the build context into the image.
- `CMD` is the default command and is easy to override.
- `ENTRYPOINT` defines the executable that should always run.
- A tag like `docker-example-static:local` is a name for one built image version.

## Cleanup

```bash
docker rm -f docker-example-static
docker image rm docker-example-static:local docker-example-entrypoint:local
```
