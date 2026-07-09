# Task Management Workspace

Workspace for a task management application.

## Projects

- `backend`: .NET API with PostgreSQL.
- `frontend`: React app built with Vite.

## Backend Architecture

- `backend/src/TaskManagement.Domain`: core entities.
- `backend/src/TaskManagement.Application`: use cases, services, DTOs, and repository contracts.
- `backend/src/TaskManagement.Infrastructure`: PostgreSQL persistence with Entity Framework Core.
- `backend/src/TaskManagement.Api`: controllers and API configuration.

## Endpoints

- `GET /health`
- `GET /tasks`
- `GET /tasks/{id}`
- `POST /tasks`
- `DELETE /tasks/{id}`

## Run locally

Full stack with Docker:

```powershell
docker compose -f scripts/docker-compose.yml up --build
```

Backend in local development:

```powershell
cd backend
dotnet ef database update --project src/TaskManagement.Infrastructure --startup-project src/TaskManagement.Api
dotnet run --project src/TaskManagement.Api
```

Frontend in local development:

```powershell
cd frontend
npm install
npm run dev
```

Open `backend/src/TaskManagement.Api/TaskManagement.Api.http` to test the API from VS Code.

The API expects PostgreSQL at `localhost:5433` with:

- Database: `task_management`
- User: `task_user`
- Password: `task_password`
