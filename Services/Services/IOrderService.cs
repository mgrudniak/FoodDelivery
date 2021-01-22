using DataAccess.Models;
using Services.Communication;
using System.Threading.Tasks;

namespace Services
{
	public interface IOrderService
	{
		Task<SaveOrderResponse> SaveAsync(Order order);
	}
}
