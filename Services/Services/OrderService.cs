using DataAccess.Models;
using DataAccess.Repositories;
using Services.Communication;
using System;
using System.Threading.Tasks;

namespace Services
{
	public class OrderService : IOrderService
	{
		private readonly IOrderRepository _orderRepository;
		private readonly IUnitOfWork _unitOfWork;

		public OrderService(IOrderRepository orderRepository, IUnitOfWork unitOfWork)
		{
			_orderRepository = orderRepository;
			_unitOfWork = unitOfWork;
		}

		public async Task<SaveOrderResponse> SaveAsync(Order order)
		{
			try
			{
				await _orderRepository.AddAsync(order);
				await _unitOfWork.CompleteAsync();

				return SaveOrderResponse.Successful(order);
			}
			catch (Exception ex)
			{
				return SaveOrderResponse.Error($"An error occured while saving the order: {ex.Message}");
			}

		}
	}
}
