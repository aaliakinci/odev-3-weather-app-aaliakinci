import { useContext, useState, useEffect } from 'react';
import './styles.css';
import CityContext from '../../../Contexts/CityContext';
function Weatherstatus({ weatherStatus, temp, first, tempMin, day }) {
	const { selectedCity } = useContext(CityContext);
	const [thisDay, setthisDay] = useState();
	const [dateNow, setdateNow] = useState();
	useEffect(() => {
		if (day > 6) {
			setthisDay(day - 7);
			 
				if (thisDay ===0) {
					setdateNow('Sunday');
				} else if (thisDay === 1) {
					setdateNow('Monday');
				} else if (thisDay === 2) {
					setdateNow('Tuesday');
				} else if (thisDay === 3) {
					setdateNow('Wednesday');
				} else if (thisDay === 4) {
					setdateNow('Thursday');
				} else if (thisDay === 5) {
					setdateNow('Friday');
				} else if (thisDay === 6) {
					setdateNow('Saturday');
				} else {
					setdateNow('Loading...');
				}
		 
		} else {
			setthisDay(day);
 
				if (thisDay ===0) {
					setdateNow('Sunday');
				} else if (thisDay === 1) {
					setdateNow('Monday');
				} else if (thisDay === 2) {
					setdateNow('Tuesday');
				} else if (thisDay === 3) {
					setdateNow('Wednesday');
				} else if (thisDay === 4) {
					setdateNow('Thursday');
				} else if (thisDay === 5) {
					setdateNow('Friday');
				} else if (thisDay === 6) {
					setdateNow('Saturday');
				} else {
					setdateNow('Loading...');
				}
 
		}
	}, [thisDay,day]);
	const weatherInfo = () => {
		switch (weatherStatus) {
			case 'Sunny' && 'Clear':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2 >{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12 d-flex justify-content-center p-0">
							<span className="lead" style={{fontWeight:'600'}}>{dateNow}</span>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="sunny" data-label="Sunny">
								<span className="sun"></span>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							{first === true ? (
								<h4 className="text-dark">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							) : (
								<h4 className="text-white">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							)}
						</div>
					</div>
				);
			case 'Rain':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2>{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12 d-flex justify-content-center p-0">
							<span className="lead" style={{fontWeight:'600'}}>{dateNow}</span>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="stormy" data-label="Soggy">
								<span className="cloud"></span>
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
							{first === true ? (
								<h4 className="text-dark">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							) : (
								<h4 className="text-white">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							)}
						</div>
					</div>
				);
			case 'Snow':
				return (
					<div className="row">
						{first === true ? (
							<div className="col-12 d-flex justify-content-start">
								<h2>{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12 d-flex justify-content-center p-0">
							<span className="lead" style={{fontWeight:'600'}}>{dateNow}</span>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="snowy" data-label="Chilly">
								<span className="snowman"></span>
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
							{first === true ? (
								<h4 className="text-dark">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							) : (
								<h4 className="text-white">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							)}
						</div>
					</div>
				);
			case 'Clouds':
				return (
					<div className="row w-100">
						{first === true ? (
							<div className="col-12 d-flex justify-content-end p-0">
								<h2>{selectedCity.name}</h2>
							</div>
						) : (
							''
						)}
						<div className="col-12 d-flex justify-content-center p-0">
							<span className="lead" style={{fontWeight:'600'}}>{dateNow}</span>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							<div icon="cloudy" data-label="Perfect">
								<span className="cloud"></span>
								<span className="cloud"></span>
							</div>
						</div>
						<div className="col-12  d-flex justify-content-center p-0">
							{first === true ? (
								<h4 className="text-dark">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							) : (
								<h4 className="text-white">
									{temp} °C
									<span className="ml-1" style={{ opacity: '0.7' }}>
										{tempMin} °C
									</span>
								</h4>
							)}
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
