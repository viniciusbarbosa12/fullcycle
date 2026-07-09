using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TaskManagement.Domain.Entities;

namespace TaskManagement.Infrastructure.Persistence.Configurations;

public sealed class TaskItemConfiguration : IEntityTypeConfiguration<TaskItem>
{
    public void Configure(EntityTypeBuilder<TaskItem> builder)
    {
        builder.ToTable("tasks");

        builder.HasKey(task => task.Id);

        builder.Property(task => task.Id)
            .HasColumnName("id");

        builder.Property(task => task.Title)
            .HasColumnName("title")
            .HasMaxLength(200)
            .IsRequired();

        builder.Property(task => task.Description)
            .HasColumnName("description")
            .HasMaxLength(1000);

        builder.Property(task => task.IsCompleted)
            .HasColumnName("is_completed")
            .IsRequired();

        builder.Property(task => task.CreatedAt)
            .HasColumnName("created_at")
            .IsRequired();

        builder.Property(task => task.UpdatedAt)
            .HasColumnName("updated_at");
    }
}
