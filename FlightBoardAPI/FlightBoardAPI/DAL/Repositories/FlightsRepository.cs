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
                var segments = new List<SegmentViewModel>();

                foreach(var segment in trip.Segments)
                {
                    segments.Add(new SegmentViewModel()
                    {
                        Legs = segment.Legs,
                        SegmentDuration = segment.SegmentDuration,
                        ValidatingCarrier = segment.ValidatingCarrier,
                    });
                }
                dataToReturn.Add(new TripViewModel
                {
                    ID = trip.ID,
                    Segments = segments,
                    AveragePrice = trip.AveragePrice,
                    CurrencySymbol = trip.CurrencySymbol,
                }); ;
            }

            return dataToReturn;
        }
    }
}
