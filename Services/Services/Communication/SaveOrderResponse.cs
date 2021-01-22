using DataAccess.Models;

namespace Services.Communication
{
	public class SaveOrderResponse : BaseResponse
	{
		public Order Order { get; private set; }

		private SaveOrderResponse(bool success, string message, Order order) : base(success, message)
		{
			Order = order;
		}

		public static SaveOrderResponse Successful(Order order)
		{
			return new SaveOrderResponse(true, string.Empty, order);
		}

		public static SaveOrderResponse Error(string message)
		{
			return new SaveOrderResponse(false, message, null);
		}
	}
}
