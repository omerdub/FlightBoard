namespace FlightBoardAPI.Entities.Models
{
    public class Leg
    {
        public Point DeparturePoint { get; set; }
        public Point ArrivalPoint { get; set; }
        public int FlightNumber { get; set; }
        public double Duration { get; set; }
        public string OperatingCarrier { get; set; }
        public char Class { get; set; }
        public string AirlineName { get; set; }
        public string AircraftType { get; set; }
        public bool MealIncluded { get; set; }
        public string AirlineCode { get; set; }
    }
}
