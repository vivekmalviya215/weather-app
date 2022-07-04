
import { fork, all, } from "redux-saga/effects";
import onSearchCityWeather from "./cityWeatherSaga";
import onGetForecastDataWeekly from "./forecastSaga";


const weatherReportSagas = [
  fork(onSearchCityWeather),
  fork(onGetForecastDataWeekly),
];

function* rootSaga() {
  yield all([...weatherReportSagas]);
}

export default rootSaga;
