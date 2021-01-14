import React from 'react';
import './styles.css';
function Weatherstatus({ weatherStatus, temp,textColor,dew,humidty,windSpeed }) {
	const weatherInfo = () => {
		switch (weatherStatus) {
			case 'Sunny' && 'Clear':
				return (
					<div className="row">
						<div className="col-12 d-flex justify-content-end">
							<p>Dew Point : {dew} </p>
							<p>Humidty Point : {humidty} </p>
							<p>Wind Point :{windSpeed} </p>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<div className="icon sunny">
								<div className="sun">
									<div className="rays"></div>
								</div>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<h4 className={textColor}>
								{' '}
								{temp} <span>°C</span>
							</h4>
						</div>
					</div>
				);
			case 'Rain':
				return (
					<div className="row">
						<div className="col-12 d-flex justify-content-end">
							<p>Dew Point : {dew} </p>
							<p>Humidty Point : </p>
							<p>Wind Point : </p>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<div className="icon rainy">
								<div className="cloud"></div>
								<div className="rain"></div>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<h4 className={textColor}>
								{' '}
								{temp} <span>°C</span>
							</h4>
						</div>
					</div>
				);
			case 'Snow':
				return (
					<div className="row">
						<div className="col-12 d-flex justify-content-end">
							<p>Dew Point : {dew} </p>
							<p>Humidty Point : </p>
							<p>Wind Point : </p>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<div className="icon flurries">
								<div className="cloud"></div>
								<div className="snow">
									<div className="flake"></div>
									<div className="flake"></div>
								</div>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<h4 className={textColor}>
								{' '}
								{temp} <span>°C</span>
							</h4>
						</div>
					</div>
				);
			case 'Clouds':
				return (
					<div className="row">
						<div className="col-12 d-flex justify-content-end">
							<p>Dew Point : {dew} </p>
							<p>Humidty Point : </p>
							<p>Wind Point : </p>
						</div>
						<div className="col-12  d-flex justify-content-center">
							<div className="icon cloudy">
								<div className="cloud"></div>
								<div className="cloud"></div>
							</div>
						</div>
						<div classNameName="col-12  d-flex justify-content-center">
							<h4 className={textColor}>
								{' '}
								{temp} <span>°C</span>
							</h4>
						</div>
					</div>
				);
			default:
				break;
		}
	};
	return <>{weatherInfo(weatherStatus)}</>;
}

export default Weatherstatus;
