namespace FlightBoardAPI.Entities.Models
{
    public class Segment
    {
        public IEnumerable<Leg> Legs { get; set; }
        public double SegmentDuration { get; set; }
        public int Direction { get; set; }
        public string ValidatingCarrier { get; set; }
        public BaggageInfo BaggageInfo { get; set; }
        public string Key { get; set; }
        public int Index { get; set; }
    }
}
