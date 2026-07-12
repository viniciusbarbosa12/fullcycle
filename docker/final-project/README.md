# Docker Final Project - Node, MySQL and nginx

This project consolidates the Docker course topics in one runnable application.

## What this project uses

- Node API built with a `Dockerfile`
- MySQL database
- nginx as reverse proxy
- Docker Compose
- Named volume for database persistence
- Custom Docker network
- Environment variables
- Healthchecks and startup dependency

## Architecture

```text
browser/curl
  -> localhost:18088
  -> nginx container
  -> api container:3000
  -> db container:3306
```

The API does not connect to `localhost` for MySQL.

Inside Compose, it connects to the service name:

```text
DB_HOST=db
```

## Run

From this folder:

```bash
cp .env.example .env
docker compose up -d --build
```

Check the containers:

```bash
docker compose ps
```

## Manual tests

Healthcheck through nginx:

```bash
curl http://localhost:18088/health
```

List people:

```bash
curl http://localhost:18088/people
```

Insert a person:

```bash
curl -X POST http://localhost:18088/people \
  -H "Content-Type: application/json" \
  -d '{"name":"Vinicius"}'
```

Open the main page:

```text
http://localhost:18088
```

## Useful commands

Read logs:

```bash
docker compose logs -f api
docker compose logs -f nginx
docker compose logs -f db
```

Enter the database:

```bash
docker compose exec db mysql -u app_user -papp_password app_db
```

Inside MySQL:

```sql
SELECT * FROM people;
```

Stop containers but keep database data:

```bash
docker compose down
```

Stop containers and delete the database volume:

```bash
docker compose down -v
```

## Course checklist

- Image vs container: API image is built, containers are created from it.
- Dockerfile: API has its own image recipe.
- Layers: dependencies are installed before copying source code.
- Networks: services communicate through `app-network`.
- Volumes: MySQL data is stored in `mysql-data`.
- Environment variables: database connection comes from Compose variables.
- Ports: only nginx publishes a host port.
- Reverse proxy: nginx forwards traffic to the API.
- Compose: one command starts the whole stack.
- Healthcheck: Compose waits for MySQL before starting the API.
