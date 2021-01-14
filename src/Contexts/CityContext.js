import { createContext, useState, useEffect } from 'react';
import initialState from './initialState';

const CityContext = createContext(null);

export const CityProvider = ({ children }) => {
	const [city, setCity] = useState([]);
	const [selectedCity, setSelectedCity] = useState({
		id: 34,
		name: 'İstanbul',
		latitude: '41.0053',
		longitude: '28.9770',
		population: 14657434,
		region: 'Marmara',
	});

	useEffect(() => {
		setCity(initialState.city);
	}, [city]);
	const values = {
		city,
		selectedCity,
		setSelectedCity,
	};

	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export default CityContext;
