using FlightBoardAPI.Entities.ViewModels;

namespace FlightBoardAPI.DAL.Repositories
{
    public interface IFlightsRepository
    {
        Task<IEnumerable<TripViewModel>> GetTrips();
    }
}
