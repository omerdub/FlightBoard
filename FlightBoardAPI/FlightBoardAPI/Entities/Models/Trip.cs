using Newtonsoft.Json;

namespace FlightBoardAPI.Entities.Models
{
    public class Trip
    {
        public Guid ID { get; set; }
        public string Key { get; set; }
        public PassengersGroupedByType passengersGroupedByType { get; set; }
        public IEnumerable<Segment> Segments { get; set; }
        public double TotalPrice { get; set; }
        public double AveragePrice { get; set; }
        public char CurrencySymbol { get; set; }
        public int AvailableSeat { get; set; }
        public int RouteType { get; set; }
        public BaggageInfo BaggageInfo { get; set; }
        public string ProviderCode { get; set; }
        public string DeepLinkRef { get; set; }

        public DiscountInfo[] DiscountInfo { get; set; }
    }
}
