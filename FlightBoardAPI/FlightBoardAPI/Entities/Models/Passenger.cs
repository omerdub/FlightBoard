namespace FlightBoardAPI.Entities.Models
{
    public class Passenger
    {
        public double FareBase { get; set; }
        public double TotalPrice { get; set; }
        public double TotalTax { get; set; }
        public int PaxType { get; set; }
        public int BaggageUpgrade { get; set; }
    }
}
