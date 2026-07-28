FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY src/Payments.Api/Payments.Api.csproj src/Payments.Api/
COPY src/Payments.Migrations/Payments.Migrations.csproj src/Payments.Migrations/
RUN dotnet restore src/Payments.Migrations/Payments.Migrations.csproj

COPY . .
RUN dotnet publish src/Payments.Migrations/Payments.Migrations.csproj \
    --configuration Release \
    --no-restore \
    --output /app/publish \
    /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app

COPY --from=build /app/publish .

USER $APP_UID
ENTRYPOINT ["dotnet", "Payments.Migrations.dll"]