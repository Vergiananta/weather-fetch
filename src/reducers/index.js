import { combineReducers } from "redux"
import { getWeatherByCity } from './weather';
import { getWeatherForecast } from "./Forecast";

const rootReducer = combineReducers({
    getWeatherByCity, getWeatherForecast
});

export default rootReducer;