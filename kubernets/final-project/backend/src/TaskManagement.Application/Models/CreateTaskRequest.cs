namespace TaskManagement.Application.Models;

public sealed record CreateTaskRequest(string Title, string? Description);
