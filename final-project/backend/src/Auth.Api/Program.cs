using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using MeshCommerce.Http;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHealthChecks();

var personas = new Dictionary<string, LabPersona>(StringComparer.OrdinalIgnoreCase)
{
    ["viewer"] = LoadPersona("viewer", "orders-viewer", ["orders.read"], ["viewer"]),
    ["operator"] = LoadPersona(
        "operator",
        "orders-operator",
        ["orders.read", "orders.manage"],
        ["operator"]
    ),
};

var app = builder.Build();
app.UseCorrelationId();
app.MapHealthChecks("/health");
app.MapGet(
    "/",
    () =>
        Results.Ok(
            new
            {
                service = "auth-api",
                mode = "jwt-lab",
                personas = personas.Keys,
            }
        )
);
app.MapPost(
    "/login",
    (LoginRequest request) =>
    {
        if (!personas.TryGetValue(request.Persona?.Trim() ?? string.Empty, out var persona))
        {
            return Results.BadRequest(
                new { title = "Unknown lab persona", detail = "Use viewer or operator." }
            );
        }

        var currentTime = DateTimeOffset.UtcNow;
        var issuedAt = request.Expired ? currentTime.AddMinutes(-10) : currentTime;
        var expiresAt = request.Expired ? currentTime.AddMinutes(-5) : currentTime.AddMinutes(5);
        var token = CreateToken(persona, issuedAt, expiresAt);

        return Results.Ok(
            new
            {
                accessToken = token,
                tokenType = "Bearer",
                expiresAt,
                persona = persona.Name,
                scopes = persona.Scopes,
                roles = persona.Roles,
            }
        );
    }
);
app.Run();

LabPersona LoadPersona(string name, string requiredGroup, string[] scopes, string[] roles)
{
    var prefix = $"Jwt:{char.ToUpperInvariant(name[0])}{name[1..]}";
    var issuer = builder.Configuration[$"{prefix}:Issuer"];
    var secret = builder.Configuration[$"{prefix}:Secret"];

    if (string.IsNullOrWhiteSpace(issuer) || string.IsNullOrWhiteSpace(secret))
    {
        throw new InvalidOperationException($"JWT credentials for {name} are not configured.");
    }

    return new LabPersona(name, issuer, secret, requiredGroup, scopes, roles);
}

static string CreateToken(LabPersona persona, DateTimeOffset issuedAt, DateTimeOffset expiresAt)
{
    var header = EncodeJson(new { alg = "HS256", typ = "JWT" });
    var payload = EncodeJson(
        new
        {
            iss = persona.Issuer,
            sub = $"meshcommerce-{persona.Name}",
            name = $"MeshCommerce {persona.Name}",
            scope = string.Join(' ', persona.Scopes),
            roles = persona.Roles,
            group = persona.RequiredGroup,
            iat = issuedAt.ToUnixTimeSeconds(),
            nbf = issuedAt.ToUnixTimeSeconds(),
            exp = expiresAt.ToUnixTimeSeconds(),
        }
    );
    var unsignedToken = $"{header}.{payload}";

    using var hmac = new HMACSHA256(Encoding.UTF8.GetBytes(persona.Secret));
    var signature = Base64Url(hmac.ComputeHash(Encoding.ASCII.GetBytes(unsignedToken)));
    return $"{unsignedToken}.{signature}";
}

static string EncodeJson<T>(T value) => Base64Url(JsonSerializer.SerializeToUtf8Bytes(value));

static string Base64Url(byte[] value) =>
    Convert.ToBase64String(value).TrimEnd('=').Replace('+', '-').Replace('/', '_');

sealed record LoginRequest(string? Persona, bool Expired = false);

sealed record LabPersona(
    string Name,
    string Issuer,
    string Secret,
    string RequiredGroup,
    string[] Scopes,
    string[] Roles
);
