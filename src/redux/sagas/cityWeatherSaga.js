import {
  FETCH_WEATHER_REPORT_START,
} from '../constants.js'
import { put, call, takeLatest } from "redux-saga/effects";
import { getCityWeather } from '../api'
import { fetchWeatherReportSuccess, WeatherReportError } from '../action/WeatherAction.jsx';
function* onSearchCityWeatherAsync({ payload: query }) {
  try {
    const response = yield call(getCityWeather, query);
    if (response.status === 200) {

      yield put(fetchWeatherReportSuccess(response.data));
    }
  } catch (error) {
    yield put(WeatherReportError(error.response.data));
  }
}

export default function* onSearchCityWeather() {
  yield takeLatest(FETCH_WEATHER_REPORT_START, onSearchCityWeatherAsync);
}