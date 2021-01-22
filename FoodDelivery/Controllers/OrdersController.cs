using AutoMapper;
using FoodDelivery.Resources;
using DataAccess.Models;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FoodDelivery.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class OrdersController : ControllerBase
	{
		private readonly IOrderService _orderService;
		private readonly IMapper _mapper;

		public OrdersController(IOrderService orderService, IMapper mapper)
		{
			_orderService = orderService;
			_mapper = mapper;
		}

		// POST api/<OrdersController>
		[HttpPost]
		public async Task<IActionResult> PostAsync([FromBody] OrderResource orderResource)
		{
			if (ModelState.IsValid == false)
			{
				return BadRequest(
					ModelState.Values
					.SelectMany(value => value.Errors)
					.Select(error => error.ErrorMessage));
			}

			var order = _mapper.Map<OrderResource, Order>(orderResource);

			var result = await _orderService.SaveAsync(order);

			if (result.Success == false)
			{
				return BadRequest(result.Message);
			}

			return Ok(orderResource);
		}
	}
}
