using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FoodDelivery.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class MenuController : ControllerBase
	{
		private readonly IMenuService _menuService;

		public MenuController(IMenuService menuService)
		{
			_menuService = menuService;
		}

		// GET: api/<MenuController>
		[HttpGet]
		public async Task<IEnumerable<MenuItem>> GetAsync()
		{
			return await _menuService.GetAsync();
		}
	}
}
