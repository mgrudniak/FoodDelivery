using System;

namespace FoodDelivery.Resources
{
	public class OrderItemResource
    {
        public Guid DishId { get; set; }
        public int Quantity { get; set; }
        public string Notes { get; set; }
    }
}
