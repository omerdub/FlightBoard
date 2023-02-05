using FlightBoardAPI.Entities.Models;

namespace FlightBoardAPI.Entities.ViewModels
{
    public class SegmentViewModel
    {
        public IEnumerable<Leg> Legs { get; set; }
        public double SegmentDuration { get; set; }
        public string ValidatingCarrier { get; set; }
    }
}
