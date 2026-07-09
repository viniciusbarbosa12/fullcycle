# Docker Example 01 - First Containers

This example registers the first Docker class: running containers, listing them, and understanding why some containers stop immediately.

## Main idea

A container is not a virtual machine that stays alive by itself.

A container runs one main process. When that process finishes, the container stops.

## Commands

Run Docker's official test image:

```bash
docker run hello-world
```

List running containers:

```bash
docker ps
```

List all containers, including stopped ones:

```bash
docker ps -a
```

Run Ubuntu without an interactive process:

```bash
docker run ubuntu
```

This container stops because there is no long-running process keeping it alive.

Run Ubuntu with an interactive terminal:

```bash
docker run -it ubuntu bash
```

Inside the container, try:

```bash
cat /etc/os-release
ls
exit
```

## What to remember

- `docker run` creates and starts a container from an image.
- `docker ps` shows running containers.
- `docker ps -a` shows running and stopped containers.
- A container stops when its main process finishes.
- `-it` means interactive terminal, useful when you want to enter a shell.

## Cleanup

Remove stopped containers:

```bash
docker container prune
```

- Image is the template.
- Container is the running instance.
- docker ps shows running containers.
- docker ps -a shows all containers.
- hello-world stops because its process finishes.
- ubuntu with -it bash lets me interact with the shell.
- when I exit bash, the container stops.
