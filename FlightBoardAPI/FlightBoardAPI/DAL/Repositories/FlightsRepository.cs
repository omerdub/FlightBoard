using FlightBoardAPI.DAL.Data;
using FlightBoardAPI.Entities.ViewModels;

namespace FlightBoardAPI.DAL.Repositories
{
    public class FlightsRepository : IFlightsRepository
    {
        private readonly IFlightBoardDBContext _context;

        public FlightsRepository(IFlightBoardDBContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<TripViewModel>> GetTrips()
        {
            var list = await _context.GetData();
            var dataToReturn = new List<TripViewModel>();
            foreach (var trip in list)
            {
                dataToReturn.Add(new TripViewModel
                {
                    ID = trip.ID,
                    Segments = trip.Segments,
                    AveragePrice = trip.AveragePrice,
                    CurrencySymbol = trip.CurrencySymbol,
                });
            }

            return dataToReturn;
        }
    }
}
