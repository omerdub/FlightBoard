using FlightBoardAPI.Entities.Models;

namespace FlightBoardAPI.Entities.ViewModels
{
    public class TripViewModel
    {
        public Guid ID { get; set; }
        public IEnumerable<Segment> Segments { get; set; }
        public double AveragePrice { get; set; }
        public char CurrencySymbol { get; set; }
    }
}
