# Docker Example 04 - Networks

This example shows how two containers communicate through a custom bridge network.

## Main idea

Inside Docker, `localhost` usually means "this same container".

When one container needs to reach another container, the most common local setup is:

```text
container A -> Docker network DNS -> container B
```

On a custom bridge network, Docker provides DNS by container name.

## Run the example

Create a network:

```bash
docker network create docker-network-demo
```

Start nginx on that network:

```bash
docker run -d \
  --name docker-network-web \
  --network docker-network-demo \
  -v "$PWD/site:/usr/share/nginx/html:ro" \
  nginx:alpine
```

Call nginx from another container using the container name:

```bash
docker run --rm \
  --network docker-network-demo \
  curlimages/curl:latest \
  http://docker-network-web
```

Inspect the network:

```bash
docker network inspect docker-network-demo
```

## Important detail

This command works because both containers are on the same Docker network:

```text
curl container -> docker-network-demo -> docker-network-web:80
```

This does not require publishing a port to your machine.

Publishing with `-p` is only necessary when your host machine needs to access the container.

## Cleanup

```bash
docker rm -f docker-network-web
docker network rm docker-network-demo
```
