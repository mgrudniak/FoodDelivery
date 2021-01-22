using DataAccess.Models;
using DataAccess.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Services
{
	public class MenuService : IMenuService
	{
		public IMenuRepository _menuRepository;

		public MenuService(IMenuRepository menuRepository)
		{
			_menuRepository = menuRepository;
		}

		public async Task<IEnumerable<MenuItem>> GetAsync()
		{
			var menu = await _menuRepository.GetAsync();
			return menu.OrderBy(item => item.Order).ThenBy(item => item.Dish);
		}
	}
}
