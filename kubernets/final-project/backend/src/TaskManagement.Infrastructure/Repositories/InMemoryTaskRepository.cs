using System.Collections.Concurrent;
using TaskManagement.Application.Repositories;
using TaskManagement.Domain.Entities;

namespace TaskManagement.Infrastructure.Repositories;

public sealed class InMemoryTaskRepository : ITaskRepository
{
    private static readonly ConcurrentDictionary<Guid, TaskItem> Tasks = new();

    static InMemoryTaskRepository()
    {
        var firstTask = new TaskItem
        {
            Id = Guid.NewGuid(),
            Title = "Study Kubernetes probes",
            Description = "Mock data running without PostgreSQL.",
            IsCompleted = false,
            CreatedAt = DateTimeOffset.UtcNow.AddMinutes(-30)
        };

        var secondTask = new TaskItem
        {
            Id = Guid.NewGuid(),
            Title = "Apply the HPA manifest",
            Description = "Watch replicas and metrics with kubectl.",
            IsCompleted = false,
            CreatedAt = DateTimeOffset.UtcNow.AddMinutes(-10)
        };

        Tasks.TryAdd(firstTask.Id, firstTask);
        Tasks.TryAdd(secondTask.Id, secondTask);
    }

    public Task<IReadOnlyList<TaskItem>> GetAllAsync(CancellationToken cancellationToken)
    {
        var tasks = Tasks.Values
            .OrderByDescending(task => task.CreatedAt)
            .ToList();

        return Task.FromResult<IReadOnlyList<TaskItem>>(tasks);
    }

    public Task<TaskItem?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        Tasks.TryGetValue(id, out var task);

        return Task.FromResult(task);
    }

    public Task<TaskItem> AddAsync(TaskItem task, CancellationToken cancellationToken)
    {
        Tasks[task.Id] = task;

        return Task.FromResult(task);
    }

    public Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken)
    {
        return Task.FromResult(Tasks.TryRemove(id, out _));
    }
}
