import * as types from '../actionTypes.js'

export const fetchWeatherReport = (query) => ({
  type: types.FETCH_WEATHER_REPORT_START,
  payload: query,
});

export const fetchWeatherReportSuccess = (city) => ({
  type: types.FETCH_WEATHER_REPORT_SUCCESS,
  payload: city,
});

export const WeatherReportError = (error) => ({
  type: types.FETCH_WEATHER_REPORT_ERROR,
  payload: error,
});

export const fetchWeatherDailyData = (query) =>
({
  type: types.FETCH_WEATHER_DAILY_DATA,
  payload: query,
});

export const fetchWeatherDailyDataSuccess = (data) => ({
  type: types.FETCH_WEATHER_DAILY_DATA_SUCCESS,
  payload: data,

});
export const WeatherDailyDataError = (error) => ({
  type: types.FETCH_WEATHER_DAILY_DATA_ERROR,
  payload: error,
});
