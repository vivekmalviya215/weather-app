import {
  FETCH_WEATHER_REPORT_START, FETCH_WEATHER_REPORT_SUCCESS,
  FETCH_WEATHER_REPORT_ERROR,
  FETCH_FORECAST_WEEKLY_DATA,
  FETCH_FORECAST_WEEKLY_DATA_SUCCESS,
  FETCH_FORECAST_WEEKLY_DATA_ERROR,
} from '../constants.js'

export const fetchWeatherReport = (query) => ({
  type: FETCH_WEATHER_REPORT_START,
  payload: query,
});

export const fetchWeatherReportSuccess = (city) => ({
  type: FETCH_WEATHER_REPORT_SUCCESS,
  payload: city,
});

export const WeatherReportError = (error) => ({
  type: FETCH_WEATHER_REPORT_ERROR,
  payload: error,
});

export const fetchForecastWeeklyData = (query) =>
({
  type: FETCH_FORECAST_WEEKLY_DATA,
  payload: query,
});

export const fetchForecastWeeklyDataSuccess = (data) => ({
  type: FETCH_FORECAST_WEEKLY_DATA_SUCCESS,
  payload: data,

});
export const ForecastWeeklyDataError = (error) => ({
  type: FETCH_FORECAST_WEEKLY_DATA_ERROR,
  payload: error,
});
