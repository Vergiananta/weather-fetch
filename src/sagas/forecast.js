import { takeLatest, put } from 'redux-saga/effects';
import { FIND_FORECAST, FIND_FORECAST_FAILURE, FIND_FORECAST_SUCCESS } from "../constant/actions";
import axios from "axios";



export function* getWeatherForecast(action) {
    
    let lon = action.coordinate.lon
    let lat = action.coordinate.lat

    let result = yield axios.get(`/onecall?lat=${lat}&lon=${lon}&exclude=daily&appid=${process.env.TOKEN}`)
        .then(data => {
            return {
                type: FIND_FORECAST_SUCCESS,
                data: data,
            }
        }).catch(e => {
            return {
                type: FIND_FORECAST_FAILURE,
                error: e
            }
        });
    yield put(result)
}

export function* watchGetWeatherForecast() {
    yield takeLatest(FIND_FORECAST, getWeatherForecast);
}
