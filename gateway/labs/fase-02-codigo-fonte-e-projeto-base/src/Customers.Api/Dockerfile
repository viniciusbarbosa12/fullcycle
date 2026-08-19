FROM mcr.microsoft.com/dotnet/sdk:10.0-alpine AS build
WORKDIR /src

COPY src/Customers.Api/Customers.Api.csproj src/Customers.Api/
RUN dotnet restore src/Customers.Api/Customers.Api.csproj

COPY src/Customers.Api/ src/Customers.Api/
RUN dotnet publish src/Customers.Api/Customers.Api.csproj \
    --configuration Release \
    --output /app/publish \
    --no-restore \
    /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0-alpine AS final
WORKDIR /app

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

COPY --from=build /app/publish .
USER $APP_UID

ENTRYPOINT ["dotnet", "Customers.Api.dll"]