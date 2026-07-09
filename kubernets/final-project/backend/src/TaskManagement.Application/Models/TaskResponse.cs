namespace TaskManagement.Application.Models;

public sealed record TaskResponse(
    Guid Id,
    string Title,
    string? Description,
    bool IsCompleted,
    DateTimeOffset CreatedAt,
    DateTimeOffset? UpdatedAt);
