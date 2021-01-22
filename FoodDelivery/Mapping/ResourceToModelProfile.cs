using AutoMapper;
using FoodDelivery.Resources;
using DataAccess.Models;

namespace FoodDelivery.Mapping
{
	public class ResourceToModelProfile : Profile
	{
		public ResourceToModelProfile()
		{
			CreateMap<ClientResource, Client>();
			CreateMap<OrderItemResource, OrderItem>();
			CreateMap<OrderResource, Order>();
		}
	}
}
