import React, { useContext } from 'react';
import Weatherstatus from '../toolbox/weather/Weatherstatus';
import './styles.css';
import WeatherContext from '../../Contexts/WeatherContext';
function WeatherCard() {
	const { weather } = useContext(WeatherContext);
	console.log(weather);
	return (
		<div className="card bg-dark text-white w-100">
			<div className="card-body">
				<div className="row">
					<div className="col-lg-3 col-md-12 mainweather d-flex justfiy-content-center">
						<Weatherstatus
							weatherStatus={weather[0].weather[0].main}
							temp={weather[0].temp.day}
							textColor="text-dark"
							dew={weather[0].dew_point}
							humidity={weather[0].humidty}
							windSpeed={weather[0].wind_speed}
						/>
					</div>
					<div className="col-lg-8 col-md-12 d-flex align-items-center border border-white">
						<div className="row">
							<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[1].weather[0].main}
									temp={weather[1].temp.day}
									textColor="text-white"
									dew={weather[1].dew_point}
									humidity={weather[1].humidty}
									windSpeed={weather[1].wind_speed}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
