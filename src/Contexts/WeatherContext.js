import { createContext, useContext, useState, useEffect } from 'react';
import CityContext from './CityContext';
import axios from 'axios';

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
	const { selectedCity } = useContext(CityContext);
	let url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+selectedCity.latitude+'&lon='+selectedCity.longitude+'&units=metric&exclude=current,hourly,minutely&appid=1502b46fba03754fdea82b52f46b3fe7';
	const [weather, setWeather] = useState([]);
	const [loading,setLoading] = useState(false);
	useEffect(() => {
		axios.get(url).then((response)=>{
			console.log(response.data)
			setWeather(response.data.daily)
			setLoading(true);
		}).catch((err)=>{
			console.log(err);
		});
	}, [selectedCity,url]);
	console.log(weather)
	const values = {
		weather,
		loading
	};
	return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>;
};

export default WeatherContext;