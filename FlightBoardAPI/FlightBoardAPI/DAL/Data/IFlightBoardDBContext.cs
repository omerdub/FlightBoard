using FlightBoardAPI.Entities.Models;

namespace FlightBoardAPI.DAL.Data
{
    public interface IFlightBoardDBContext
    {
         Task<IEnumerable<Trip>> GetData();
    }
}
