using System.Collections.Concurrent;
using Orders.Api.Domain;

namespace Orders.Api.Infrastructure;

public sealed class InMemoryOrderRepository
{
    private readonly ConcurrentDictionary<Guid, Order> _orders = new();

    public void Add(Order order)
    {
        if (!_orders.TryAdd(order.Id, order))
        {
            throw new InvalidOperationException($"Order {order.Id} already exists.");
        }
    }

    public Order? GetById(Guid id) => _orders.GetValueOrDefault(id);

    public IReadOnlyCollection<Order> GetAll() =>
        _orders.Values.OrderByDescending(order => order.CreatedAt).ToArray();
}
