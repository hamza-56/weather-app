import axios from 'axios';
import Header from 'components/Header';
import './styles.css';
import CityWeatherChart from 'components/CityWeatherChart';
import { useDispatch, useSelector } from 'react-redux';

import { addWeather } from 'redux/actions/actionCreators';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const Index = () => {
	const weather = useSelector((state) => state.weather);
	const dispatch = useDispatch();

	const transformWeatherData = (result) => {
		const weatherData = {};

		for (const data of result.data.list) {
			const [day, time] = data.dt_txt.split(' ');

			if (!weatherData[day]) {
				weatherData[day] = [];
			}

			weatherData[day].push({
				time,
				temp: data.main.temp,
				temp_max: data.main.temp_max,
				temp_min: data.main.temp_min,
				humidity: data.main.humidity,
				pressure: data.main.pressure,
			});
		}
		return weatherData;
	};

	const loadWeatherData = async (searchText) =>
		axios
			.get(API_URL, {
				params: {
					appid: API_KEY,
					q: searchText,
					units: 'metric',
					cnt: 48,
				},
			})
			.then((result) => {
				const cityName = result.data.city.name;
				const weatherData = transformWeatherData(result);
				dispatch(addWeather(cityName, weatherData));
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					alert(`city ${searchText} not found`);
				}
			});

	const handleSearch = (event) => {
		event.preventDefault();
		const searchText = event.target[0].value;
		loadWeatherData(searchText);
	};

	const citiesChart = Object.keys(weather).map((cityName) => (
		<CityWeatherChart
			key={cityName}
			cityName={cityName}
			weekData={weather[cityName]}
		/>
	));

	return (
		<>
			<Header handleSearch={handleSearch} />
			<div className="cities-weather-container">{citiesChart}</div>
		</>
	);
};

export default Index;
