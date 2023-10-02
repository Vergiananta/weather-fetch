import { FIND_BY_CITY, FIND_FORECAST } from "../constant/actions";


export function findByCity(query) {
    console.log("masuk");
    
    return {
        type: FIND_BY_CITY,
        query: query,
    }
}

export function findForecastWeather(coordinate) {
    return {
        type: FIND_FORECAST,
        coordinate: coordinate,
    }
}