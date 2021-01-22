using DataAccess.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public class MenuRepository : BaseRepository, IMenuRepository
	{
		public MenuRepository(FoodDeliveryDbContext context) : base(context) { }

		public async Task<IEnumerable<MenuItem>> GetAsync()
		{
			return await _context.MenuItems.ToListAsync();
		}
	}
}
