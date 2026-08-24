FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY src/Orders.Api/Orders.Api.csproj src/Orders.Api/
RUN dotnet restore src/Orders.Api/Orders.Api.csproj

COPY . .
RUN dotnet publish src/Orders.Api/Orders.Api.csproj \
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
ENTRYPOINT ["dotnet", "Orders.Api.dll"]