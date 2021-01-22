using System;
using System.Collections.Generic;

#nullable disable

namespace DataAccess.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderItems = new HashSet<OrderItem>();
        }

        public Guid OrderId { get; set; }
        public Guid ClientId { get; set; }
        public DateTime OrderTime { get; set; }
        public DateTime? DeliveryTime { get; set; }
        public double TotalPrice { get; set; }

        public virtual Client Client { get; set; }
        public virtual ICollection<OrderItem> OrderItems { get; set; }
    }
}
