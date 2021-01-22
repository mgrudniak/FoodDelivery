using DataAccess.Models;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public interface IOrderRepository
	{
		Task AddAsync(Order order);
	}
}
