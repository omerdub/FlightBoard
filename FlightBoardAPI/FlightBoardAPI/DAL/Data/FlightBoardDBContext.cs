using FlightBoardAPI.Entities.Models;
using FlightBoardAPI.Entities.Settings;
using FlightBoardAPI.Services.JsonService;
using Microsoft.Extensions.Options;

namespace FlightBoardAPI.DAL.Data
{
    public class FlightBoardDBContext : IFlightBoardDBContext
    {

        private readonly IJsonService _jsonService;
        private readonly JsonFileSettings _settings;

        public FlightBoardDBContext(IJsonService jsonService, IOptions<JsonFileSettings> settings)
        {
            _jsonService = jsonService;
            _settings = settings.Value;
        }

        public async Task<IEnumerable<Trip>> GetData()
        {
            if (string.IsNullOrEmpty(_settings.FilePath))
            {
                throw new Exception("File path is not specified in the settings.");
            }

            try
            {
                var data = await _jsonService.Deserialize<IEnumerable<Trip>>(_settings.FilePath);
                return data;
            }
            catch (Exception ex)
            {
                throw new Exception("Failed to deserialize the JSON data.", ex);
            }
        }
    }
}
