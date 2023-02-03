using FlightBoardAPI.Entities.ViewModels;

namespace FlightBoardAPI.Entities.Responses
{
    public class GetFlightsResponse
    {
        public IEnumerable<TripViewModel> Trips { get; set; }
    }
}
