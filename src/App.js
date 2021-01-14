import './App.css';

import { CityProvider } from './Contexts/CityContext';

import './App.css';
import { WeatherProvider } from './Contexts/WeatherContext';
import Home from './Components/Dashboard/Home';
function App() {
	return (
		<CityProvider>
			<WeatherProvider>
				<div
					className="container-fluid d-flex align-items-center App justify-content-center"
					style={{ minHeight: '65rem' }}
				>
					<Home />
				</div>
			</WeatherProvider>
		</CityProvider>
	);
}

export default App;
