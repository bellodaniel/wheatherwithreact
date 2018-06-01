import axios from 'axios';

const API_KEY = '5ae12506d7357c6ed2a4707c055ab7f2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
}