using System;
using System.Collections.Generic;

#nullable disable

namespace DataAccess.Models
{
    public partial class DishType
    {
        public DishType()
        {
            Dishes = new HashSet<Dish>();
        }

        public Guid DishTypeId { get; set; }
        public string Name { get; set; }
        public int Order { get; set; }

        public virtual ICollection<Dish> Dishes { get; set; }
    }
}
