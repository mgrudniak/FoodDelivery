using System;
using System.Collections.Generic;

#nullable disable

namespace DataAccess.Models
{
    public partial class MenuItem
    {
        public Guid DishId { get; set; }
        public string Dish { get; set; }
        public double Price { get; set; }
        public string Amount { get; set; }
        public bool? Vegan { get; set; }
        public string Description { get; set; }
        public string DishType { get; set; }
        public int Order { get; set; }
    }
}
