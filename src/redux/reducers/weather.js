import * as actions from '../actions';

const initialState = {};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.ADD_WEATHER: {
			return {
				...state,
				[action.payload.city]: action.payload.weatherData,
			};
		}
		default:
			return state;
	}
};

export default weatherReducer;
