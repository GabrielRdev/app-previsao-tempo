/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import "./Weatherinformations5Days.css";

function WeatherInformations5Days({ weather5Days }) {
	console.log(weather5Days);

	let dailyForecast = {};

	for (let forecast of weather5Days.list) {
		const date = new Date(forecast.dt * 1000).toLocaleDateString();

		console.log(date);

		if (!dailyForecast[date]) {
			dailyForecast[date] = forecast;
		}
	}

	const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

	function convertDate(date) {
		const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
			weekday: "long",
			day: "2-digit",
		});

		return newDate;
	}

	return (
		<div className=".weather-container">
			<p> Previsão dos próximos 5 dias </p>
			{next5DaysForecast.map((forecast) => (
				<div key={forecast.dt}>
					<p>{convertDate(forecast)}</p>
					<img
						src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
					/>
					<p>{forecast.weather[0].description}</p>
					<p>
						{Math.round(forecast.main.temp_min)} min /{" "}
						{Math.round(forecast.main.temp_max)} max{" "}
					</p>
				</div>
			))}
		</div>
	);
}

export default WeatherInformations5Days;
