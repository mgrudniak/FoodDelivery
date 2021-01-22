using DataAccess.Models;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly FoodDeliveryDbContext _context;

		public UnitOfWork(FoodDeliveryDbContext context)
		{
			_context = context;
		}

		public async Task CompleteAsync()
		{
			await _context.SaveChangesAsync();
		}
	}
}
