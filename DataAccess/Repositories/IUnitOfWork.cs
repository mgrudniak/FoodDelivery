using System.Threading.Tasks;

namespace DataAccess.Repositories
{
	public interface IUnitOfWork
	{
		Task CompleteAsync();
	}
}
