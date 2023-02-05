using FlightBoardAPI.Entities.Models;

namespace FlightBoardAPI.Entities.ViewModels
{
    public class TripViewModel
    {
        public Guid ID { get; set; }
        public IEnumerable<SegmentViewModel> Segments { get; set; }
        public double AveragePrice { get; set; }
        public char CurrencySymbol { get; set; }
    }
}
