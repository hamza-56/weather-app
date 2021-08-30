import { combineReducers } from 'redux';

import weatherReducer from './weather.js';

const rootReducer = combineReducers({
	weather: weatherReducer,
});

export default rootReducer;
