using TaskManagement.Application.Models;

namespace TaskManagement.Application.Services;

public interface ITaskService
{
    Task<IReadOnlyList<TaskResponse>> GetAllAsync(CancellationToken cancellationToken);

    Task<TaskResponse?> GetByIdAsync(Guid id, CancellationToken cancellationToken);

    Task<TaskResponse> CreateAsync(CreateTaskRequest request, CancellationToken cancellationToken);

    Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken);
}
