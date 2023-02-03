namespace FlightBoardAPI.Services.JsonService
{
    public interface IJsonService
    {
            Task<T> Deserialize<T>(string path);
    }
}
