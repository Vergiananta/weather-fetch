
import { FIND_BY_CITY, FIND_BY_CITY_FAILURE, FIND_BY_CITY_SUCCESS } from '../constant/actions';


export const initialState = {
    data : null,
    loading : false,
    error : null,
};

export function getWeatherByCity(state = {...initialState}, action) {
    console.log("reducer weather: ", action.type);    
    
    switch (action.type) {
        case FIND_BY_CITY:
            console.log("find city");
            
            return {
                ...state,
                data : {},
                loading: true
            };
        case FIND_BY_CITY_SUCCESS:
            console.log("find city success"); 
            console.log(action.data);
            
            return {
                ...state,
                data : action.data,
                loading: false,
                error: null
            }
        case FIND_BY_CITY_FAILURE:
            return {
                ...state,
                data : {},
                loading : false,
                error: action.error
            }    
        default:
            console.log("reducer weather default");
                return {
                  ...state,
                  data: false
                };
    }
}

