FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY src/Payments.Api/Payments.Api.csproj src/Payments.Api/
RUN dotnet restore src/Payments.Api/Payments.Api.csproj

COPY . .
RUN dotnet publish src/Payments.Api/Payments.Api.csproj \
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
ENTRYPOINT ["dotnet", "Payments.Api.dll"]