using FlightBoardAPI.DAL.Data;
using FlightBoardAPI.DAL.Repositories;
using FlightBoardAPI.Entities.Settings;
using FlightBoardAPI.Filters;
using FlightBoardAPI.Services.JsonService;

namespace FlightBoardAPI
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader();
                });
            });

            services.Configure<JsonFileSettings>(_configuration.GetSection("JsonFile"));
            services.AddLogging(loggingBuilder => loggingBuilder.AddConsole());
            services.AddScoped<IFlightBoardDBContext, FlightBoardDBContext>();
            services.AddTransient<IFlightsRepository, FlightsRepository>();
            services.AddTransient<IJsonService, JsonService>();
            //services.AddControllers(options => { options.Filters.Add(new ExceptionHandler(new Logger<ExceptionHandler>(new LoggerFactory()))); });
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseRouting();
            app.UseCors("AllowAll");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "Default",
                    pattern: "api/{controller}/{action}");
            });
        }
    }
}
