# Docker Example 02 - Ports With nginx

This example registers the class about exposing a service running inside a container to your local machine.

## Main idea

A container has its own isolated network environment.

If nginx is listening on port `80` inside the container, your browser cannot automatically access it from your machine. You need to publish a port.

The syntax is:

```bash
docker run -p HOST_PORT:CONTAINER_PORT image
```

Read it like this:

```text
When someone accesses HOST_PORT on my machine, Docker forwards the request to CONTAINER_PORT inside the container.
```

## Run nginx

From this folder, run:

```bash
docker run -d \
  --name docker-ports-demo \
  -p 8080:80 \
  -v "$PWD/site:/usr/share/nginx/html:ro" \
  nginx:alpine
```

Now open:

```text
http://localhost:8080
```

You should see the custom HTML page from `site/index.html`.

## Understand the port mapping

In this command:

```bash
-p 8080:80
```

- `8080` is the port on your machine.
- `80` is the port inside the container.

So the request flow is:

```text
browser -> localhost:8080 -> Docker -> container:80 -> nginx
```

## Useful inspection commands

Check running containers:

```bash
docker ps
```

Check the mapped port:

```bash
docker port docker-ports-demo
```

Check nginx logs:

```bash
docker logs docker-ports-demo
```

Enter the running container:

```bash
docker exec -it docker-ports-demo sh
```

Inside the container, nginx files are served from:

```bash
ls /usr/share/nginx/html
exit
```

## Common mistake

Do not invert the ports by accident.

This means host `8080` to container `80`:

```bash
-p 8080:80
```

This means host `80` to container `8080`, which will not work for nginx by default:

```bash
-p 80:8080
```

nginx listens on port `80` inside the container unless you configure it differently.

## Cleanup

Stop and remove the container:

```bash
docker rm -f docker-ports-demo
```
