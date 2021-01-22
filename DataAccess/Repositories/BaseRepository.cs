using DataAccess.Models;

namespace DataAccess.Repositories
{
	public abstract class BaseRepository
	{
		protected readonly FoodDeliveryDbContext _context;

		public BaseRepository(FoodDeliveryDbContext context)
		{
			_context = context;
		}
	}
}
