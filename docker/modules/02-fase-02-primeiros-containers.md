# Phase 2: First containers

## Lessons

- Hello World
- Running Ubuntu
- Publishing ports with nginx
- Removing containers
- Accessing and Changing Files from a Container
- Starting with bind mounts
- Working with volumes

## Objective

Learn how to create, rotate, stop, remove, access and persist data in containers.

## Main concepts

- `docker run`
- `docker ps`
- `docker stop`
- `docker rm`
- `docker exec`
- Port mapping
- Bind mount
- Volume
- Ephemeral container
- Data persistence

## Practical exercises

- Rotate an Ubuntu container.
- Enter the container.
- Rotate a nginx and access via browser.
- Change a file inside the container.
- Remove container and observe what happens to data.
- Repeat test using bid mount.
- Repeat the test using volume.

## Reflection questions

- Why changes inside the container disappear?
- What is the difference between bind mount and volume?
- Why shouldn't I save important data just inside the container?
- When to use volume in a real project?
