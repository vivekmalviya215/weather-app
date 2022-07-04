
import { put, call, takeLatest } from "redux-saga/effects";
import { fetchForecastWeeklyDataSuccess, ForecastWeeklyDataError } from "../action/WeatherAction";
import { getForecastDataWeekly } from '../api'
import { FETCH_FORECAST_WEEKLY_DATA } from "../constants";

function* onGetForecastDataWeeklyAsync({ payload: query }) {
  try {
    const response = yield call(getForecastDataWeekly, query);
    if (response.status === 200) {
      yield put(fetchForecastWeeklyDataSuccess(response.data));
    }
  } catch (error) {
    yield put(ForecastWeeklyDataError(error.response.data));
  }
}
export default function* onGetForecastDataWeekly() {
  yield takeLatest(FETCH_FORECAST_WEEKLY_DATA, onGetForecastDataWeeklyAsync);
}