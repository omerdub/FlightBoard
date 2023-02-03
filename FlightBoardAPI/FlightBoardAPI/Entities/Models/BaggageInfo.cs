namespace FlightBoardAPI.Entities.Models
{
    public class BaggageInfo
    {
        public Baggage Handbag { get; set; }
        public Baggage Laggage { get; set; }
        public AirCarrierInfoLinks AirCarrierInfoLinks { get; set; }
        public string Notes { get; set; }
    }
}
