using DataAccess.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
	public interface IMenuService
	{
		Task<IEnumerable<MenuItem>> GetAsync();
	}
}
