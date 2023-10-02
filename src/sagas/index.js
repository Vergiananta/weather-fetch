import { all } from "redux-saga/effects";
import { watchGetByCity } from "./weather";
import { watchGetWeatherForecast } from "./forecast";

export default function* rootSaga() {
    yield all([
        watchGetWeatherForecast(), watchGetByCity()
    ])
}