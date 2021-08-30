import * as actions from '.';

export const addWeather = (city, weatherData) => {
	return {
		type: actions.ADD_WEATHER,
		payload: {
			city,
			weatherData,
		},
	};
};
