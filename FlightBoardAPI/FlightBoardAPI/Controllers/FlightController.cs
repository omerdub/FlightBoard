using FlightBoardAPI.DAL.Repositories;
using FlightBoardAPI.Entities.Responses;
using Microsoft.AspNetCore.Mvc;

namespace FlightBoardAPI.Controllers
{
    public class FlightController : ControllerBase
    {
        private readonly ILogger<FlightController> _logger;
        private readonly IFlightsRepository _flightsRepository;

        public FlightController(ILogger<FlightController> logger, IFlightsRepository flightsRepository)
        {
            _logger = logger;
            _flightsRepository = flightsRepository;
        }

        [HttpGet]
        public async Task<IActionResult> search()
        {
            _logger.LogInformation("Getting flights...");
            var tripsList = await _flightsRepository.GetTrips();
            var getFlightsResponse = new GetFlightsResponse()
            {
                Trips = tripsList,
            };
            return Ok(getFlightsResponse);
        }
    }
}
