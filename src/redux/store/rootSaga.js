import * as types from '../actionTypes.js'
import { put, call, take, delay, fork, all, takeLatest } from "redux-saga/effects";
import { getWeather, getWeatherDataDaily } from '../api'
import { fetchWeatherDailyDataSuccess, fetchWeatherReportSuccess, WeatherReportError, WeatherDailyDataError } from '../action/WeatherAction.jsx';

function* onSearchCityWeahterAsync({ payload: query }) {
  try {
    const response = yield call(getWeather, query);
    if (response.status === 200) {
      yield put(fetchWeatherReportSuccess(response.data));
    }
  } catch (error) {
    yield put(WeatherReportError(error.response.data));
  }
}
function* onGetWeatherDataDailyAsync({ payload: query }) {
  try {
    const response = yield call(getWeatherDataDaily, query);
    if (response.status === 200) {
      yield put(fetchWeatherDailyDataSuccess(response.data));
    }
  } catch (error) {
    yield put(WeatherDailyDataError(error.response.data));
  }
}

function* onSearchCityWeahter() {
  yield takeLatest(types.FETCH_WEATHER_REPORT_START, onSearchCityWeahterAsync);
}
function* onGetWeatherDataDaily() {
  yield takeLatest(types.FETCH_WEATHER_DAILY_DATA, onGetWeatherDataDailyAsync);
}
const weatherReportSagas = [
  fork(onSearchCityWeahter),
  fork(onGetWeatherDataDaily),
];

function* rootSaga() {
  yield all([...weatherReportSagas]);
}

export default rootSaga;
