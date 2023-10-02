import { FIND_FORECAST, FIND_FORECAST_FAILURE, FIND_FORECAST_SUCCESS } from '../constant/actions';

const initialState = {
    data: null,
    loading: false,
    error: null
}

export function getWeatherForecast(state = initialState, action) {
    switch (action.type) {
        case FIND_FORECAST:
            return {
                ...state,
                data: null,
                loading: true,
            };
        case FIND_FORECAST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                error: null
            };
        case FIND_FORECAST_FAILURE:
            return {
                ...state,
                data: null,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
