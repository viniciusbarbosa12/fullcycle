FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY src/Auth.Api/Auth.Api.csproj src/Auth.Api/
COPY src/Shared/CorrelationIdMiddleware.cs src/Shared/
RUN dotnet restore src/Auth.Api/Auth.Api.csproj

COPY . .
RUN dotnet publish src/Auth.Api/Auth.Api.csproj \
    --configuration Release \
    --no-restore \
    --output /app/publish \
    /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
ENV ASPNETCORE_HTTP_PORTS=8080
EXPOSE 8080
USER $APP_UID
ENTRYPOINT ["dotnet", "Auth.Api.dll"]