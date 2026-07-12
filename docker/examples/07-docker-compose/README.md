# Docker Example 07 - Docker Compose With MySQL

This example runs an API and a MySQL database together with Docker Compose.

## Main idea

Compose is useful when one project needs more than one container.

Instead of running separate long `docker run` commands, you describe the services in one file.

## Run

```bash
docker compose up -d --build
```

Check containers:

```bash
docker compose ps
```

Test the API:

```bash
curl http://localhost:8087/health
curl http://localhost:8087/visits
```

## Stop without deleting the database volume

```bash
docker compose down
```

## Stop and delete the database volume

```bash
docker compose down -v
```

## What to remember

- `depends_on` controls startup order.
- `condition: service_healthy` waits for MySQL healthcheck before starting the API.
- The API connects to `db`, not `localhost`, because `db` is the Compose service name.
- The named volume keeps MySQL data after containers are removed.
