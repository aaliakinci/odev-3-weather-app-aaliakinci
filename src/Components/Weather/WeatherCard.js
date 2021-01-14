import React, { useContext } from 'react';
import Weatherstatus from '../toolbox/weather/Weatherstatus';
import './styles.css';
import WeatherContext from '../../Contexts/WeatherContext';
function WeatherCard() {
	const { weather } = useContext(WeatherContext);
	console.log(weather);
	return (
		<div className="container-fluid bg-dark text-white w-100 p-0">
			<div className="row">
				<div className="col-lg-3 col-md-12 mainweather d-flex justfiy-content-center p-0 text-dark">
					<div className="container-fluid">
						<Weatherstatus
							weatherStatus={weather[0].weather[0].main}
							temp={weather[0].temp.max}
				 			tempMin={weather[0].temp.min}
							dew={weather[0].dew_point}
							humidity={weather[0].humidty}
							windSpeed={weather[0].wind_speed}
							first={true}
						/>
					</div>
				</div>
				<div className="col-lg-9 col-md-12 d-flex align-items-center border border-white">
					<div className="row w-100">
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[1].weather[0].main}
									temp={weather[1].temp.day}
									tempMin={weather[1].temp.min}
									dew={weather[1].dew_point}
									humidity={weather[1].humidty}
									windSpeed={weather[1].wind_speed}
									first={false}
								/>
								</div>
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[2].weather[0].main}
									temp={weather[2].temp.day}
									tempMin={weather[2].temp.min}
									first={false}
								/>
								</div>
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[3].weather[0].main}
									temp={weather[3].temp.day}
									tempMin={weather[3].temp.min}
									first={false}
								/>
								</div>
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[4].weather[0].main}
									temp={weather[4].temp.day}
									tempMin={weather[4].temp.min}
									first={false}
								/>
								</div>
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[5].weather[0].main}
									temp={weather[5].temp.day}
									tempMin={weather[5].temp.min}
									first={false}
								/>
								</div>
								<div className="col-lg-2 col-md-12 d-flex justify-content-center">
								<Weatherstatus
									weatherStatus={weather[6].weather[0].main}
									temp={weather[6].temp.day}
									tempMin={weather[6	].temp.min}
									first={false}
								/>
								</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
