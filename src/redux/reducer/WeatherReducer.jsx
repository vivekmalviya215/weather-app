import {
  FETCH_WEATHER_REPORT_START, FETCH_WEATHER_REPORT_SUCCESS,
  FETCH_WEATHER_REPORT_ERROR,
  FETCH_FORECAST_WEEKLY_DATA,
  FETCH_FORECAST_WEEKLY_DATA_SUCCESS,
  FETCH_FORECAST_WEEKLY_DATA_ERROR,
} from '../constants.js'
const initialState = {
  isLoading: false,
  error: '',
  weatherData: {},
  foreCastData: {}
}

const fetchCityWeather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REPORT_START:
    case FETCH_FORECAST_WEEKLY_DATA:
      return { ...state, isLoading: true };
    case FETCH_WEATHER_REPORT_SUCCESS:
      return { ...state, isLoading: false, weatherData: action.payload, error: '' };
    case FETCH_FORECAST_WEEKLY_DATA_SUCCESS:
      return { ...state, isLoading: false, foreCastData: action.payload, error: '' };
    case FETCH_WEATHER_REPORT_ERROR:
    case FETCH_FORECAST_WEEKLY_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload, };
    default:
      return state;
  }
}
export default fetchCityWeather