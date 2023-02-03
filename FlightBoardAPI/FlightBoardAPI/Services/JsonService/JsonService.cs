using Newtonsoft.Json;

namespace FlightBoardAPI.Services.JsonService
{
    public class JsonService : IJsonService
    {
        public async Task<T> Deserialize<T>(string path)
        {
            // First check if file exists, then returning deserialized json object
            if (!File.Exists(path))
                throw new FileNotFoundException("File not found", path);
            string rawJson = await File.ReadAllTextAsync(path);
            return JsonConvert.DeserializeObject<T>(rawJson);
        }
    }
}
