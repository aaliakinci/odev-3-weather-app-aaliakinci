import { useContext } from 'react';
import SelectBox from '../toolbox/SelectBox';
import WeatherCard from '../Weather/WeatherCard';
import Loading from '../Loading';
import WeatherContext from '../../Contexts/WeatherContext';
function Home() {
	const { loading } = useContext(WeatherContext);
 
	const loadingPage = () => {
		return (
			<div className="row w-75 align-items-center">
				<Loading />
			</div>
		);
	};
	const homePage = () => {
		return (
			<div className="row align-items-center">
				<h1 className=" text-white lead" style={{fontSize:'10rem',fontWeight:'800'}}>Weather Forecast</h1>
				<div className="card w-100 p-4 bg-dark" style={{ borderRadius: '2rem' }}>
					<div className="col-md-3 d-flex justify-content-start">
						<SelectBox />
					</div>
					<div className="col-md-12 d-flex justify-content-center">
						<WeatherCard />
					</div>
				</div>
			</div>
		);
	};

	return <>{loading === false ? loadingPage() : homePage()}</>;
}

export default Home;
