using DataAccess.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public interface IMenuRepository
	{
		Task<IEnumerable<MenuItem>> GetAsync();
	}
}
