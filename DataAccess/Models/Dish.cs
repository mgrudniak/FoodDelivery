using System;
using System.Collections.Generic;

#nullable disable

namespace DataAccess.Models
{
    public partial class Dish
    {
        public Dish()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public Guid DishId { get; set; }
        public Guid DishTypeId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public string Amount { get; set; }
        public bool? Vegan { get; set; }
        public string Description { get; set; }

        public virtual DishType DishType { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
