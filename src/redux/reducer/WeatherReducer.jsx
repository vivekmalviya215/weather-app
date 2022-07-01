import * as types from '../actionTypes.js'

const initialState = {
  isLoading: false,
  error: '',
  weatherData: {},
  foreCastData: {}
}

const fetchCityWeather = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_REPORT_START:
    case types.FETCH_WEATHER_DAILY_DATA:
      return { ...state, isLoading: true };
    case types.FETCH_WEATHER_REPORT_SUCCESS:
      return { ...state, isLoading: false, weatherData: action.payload, error: '' };
    case types.FETCH_WEATHER_DAILY_DATA_SUCCESS:
      return { ...state, isLoading: false, foreCastData: action.payload, error: '' };
    case types.FETCH_WEATHER_REPORT_ERROR:
    case types.FETCH_WEATHER_DAILY_DATA_ERROR:
      return { ...state, isLoading: false, error: action.payload, };
    default:
      return state;
  }
}
export default fetchCityWeather