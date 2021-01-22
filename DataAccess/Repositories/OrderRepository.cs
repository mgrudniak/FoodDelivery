using DataAccess.Models;
using System;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public class OrderRepository : BaseRepository, IOrderRepository
	{
		public OrderRepository(FoodDeliveryDbContext context) : base(context) { }

		public async Task AddAsync(Order order)
		{
			var clientId = Guid.NewGuid();

			order.Client.ClientId = clientId;

			order.ClientId = clientId;
			order.OrderId = Guid.NewGuid();

			foreach (var item in order.OrderItems)
			{
				item.OrderItemId = Guid.NewGuid();
				item.OrderId = order.OrderId;
			}

			await _context.Clients.AddAsync(order.Client);
			await _context.Orders.AddAsync(order);
			await _context.OrderItems.AddRangeAsync(order.OrderItems);
		}
	}
}
