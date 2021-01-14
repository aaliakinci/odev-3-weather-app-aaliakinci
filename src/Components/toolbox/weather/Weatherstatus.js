import { useContext } from 'react';
import './styles.css';
import CityContext from '../../../Contexts/CityContext';
function Weatherstatus({ weatherStatus, temp, dew, humidty, windSpeed, first, tempMin }) {
	const { selectedCity } = useContext(CityContext);
	const weatherInfo = () => {
		switch (weatherStatus) {
			case 'Sunny' && 'Clear':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2 className="">{selectedCity.name}</h2>
							</div>	
						) : (
							''
						)}
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="sunny" data-label="Sunny">
								<span class="sun"></span>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							{first===true?<h4 className="text-dark">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>:<h4 className="text-white">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>}
						</div>
					</div>
				);
			case 'Rain':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2 className="">{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="stormy" data-label="Soggy">
								<span class="cloud"></span>
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
						{first===true?<h4 className="text-dark">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>:<h4 className="text-white">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>}
						</div>
					</div>
				);
			case 'Snow':
				return (
					<div className="row">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2 className="">{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="snowy" data-label="Chilly">
								<span class="snowman"></span>
								<ul>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
						{first===true?<h4 className="text-dark">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>:<h4 className="text-white">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>}
						</div>
					</div>
				);
			case 'Clouds':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-end p-0">
								<h2 className="">{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="cloudy" data-label="Perfect">
								<span class="cloud"></span>
								<span class="cloud"></span>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
						{first===true?<h4 className="text-dark">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>:<h4 className="text-white">
								{temp} °C
								<span className="ml-1" style={{ opacity: '0.7' }}>
									{tempMin} °C
								</span>
							</h4>}
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
