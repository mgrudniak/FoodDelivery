using System.Collections.Generic;

namespace FoodDelivery.Resources
{
	public class OrderResource
	{
		public string OrderTime { get; set; }
		public string DeliveryTime { get; set; }
		public float TotalPrice { get; set; }
		public ClientResource Client { get; set; }
		public IEnumerable<OrderItemResource> OrderItems { get; set; }
	}
}
