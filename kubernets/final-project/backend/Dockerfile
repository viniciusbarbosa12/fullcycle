FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src
COPY ["TaskManagement.sln", "./"]
COPY ["src/TaskManagement.Api/TaskManagement.Api.csproj", "src/TaskManagement.Api/"]
COPY ["src/TaskManagement.Application/TaskManagement.Application.csproj", "src/TaskManagement.Application/"]
COPY ["src/TaskManagement.Domain/TaskManagement.Domain.csproj", "src/TaskManagement.Domain/"]
COPY ["src/TaskManagement.Infrastructure/TaskManagement.Infrastructure.csproj", "src/TaskManagement.Infrastructure/"]

RUN dotnet restore "TaskManagement.sln"

COPY . .

RUN dotnet publish "src/TaskManagement.Api/TaskManagement.Api.csproj" -c Release -o /app/publish --no-restore


FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final

WORKDIR /app

COPY --from=build /app/publish .


ENV ASPNETCORE_URLS=http://+:8080

EXPOSE 8080

ENTRYPOINT ["dotnet", "TaskManagement.Api.dll"]
