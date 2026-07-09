using TaskManagement.Application.Models;
using TaskManagement.Application.Repositories;
using TaskManagement.Domain.Entities;

namespace TaskManagement.Application.Services;

public sealed class TaskService(ITaskRepository taskRepository) : ITaskService
{
    public async Task<IReadOnlyList<TaskResponse>> GetAllAsync(CancellationToken cancellationToken)
    {
        var tasks = await taskRepository.GetAllAsync(cancellationToken);

        return tasks.Select(MapToResponse).ToList();
    }

    public async Task<TaskResponse?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        var task = await taskRepository.GetByIdAsync(id, cancellationToken);

        return task is null ? null : MapToResponse(task);
    }

    public async Task<TaskResponse> CreateAsync(CreateTaskRequest request, CancellationToken cancellationToken)
    {
        if (string.IsNullOrWhiteSpace(request.Title))
        {
            throw new ArgumentException("Task title is required.", nameof(request));
        }

        var task = new TaskItem
        {
            Id = Guid.NewGuid(),
            Title = request.Title.Trim(),
            Description = string.IsNullOrWhiteSpace(request.Description) ? null : request.Description.Trim(),
            IsCompleted = false,
            CreatedAt = DateTimeOffset.UtcNow
        };

        var createdTask = await taskRepository.AddAsync(task, cancellationToken);

        return MapToResponse(createdTask);
    }

    public Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken)
    {
        return taskRepository.DeleteAsync(id, cancellationToken);
    }

    private static TaskResponse MapToResponse(TaskItem task)
    {
        return new TaskResponse(
            task.Id,
            task.Title,
            task.Description,
            task.IsCompleted,
            task.CreatedAt,
            task.UpdatedAt);
    }
}
