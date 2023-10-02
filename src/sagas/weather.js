import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

import { FIND_BY_CITY_SUCCESS, FIND_BY_CITY_FAILURE, FIND_FORECAST_SUCCESS, FIND_FORECAST_FAILURE, FIND_BY_CITY, FIND_FORECAST } from "../constant/actions";


function* getByCity(action) {
    console.log("terpanggil", action.query);
    
    let query = action.query.city;

    let result = yield axios.get(`${process.env.REACT_APP_API_BASE_URL}/weather?q=${query}&appid=e1b52c6e9dd549dcd244bcbeef7c740a&units=metric`).then(data => {
        return {
            type: FIND_BY_CITY_SUCCESS,
            data: data,
        };
    }).catch(err => {
        return {
            type: FIND_BY_CITY_FAILURE,
            error: err
        }
    });

    yield put(result);
}



export function* watchGetByCity(){
    yield takeLatest(FIND_BY_CITY, getByCity);
}

