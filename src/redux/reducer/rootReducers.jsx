import { combineReducers } from 'redux'

import fetchCityWeather from './WeatherReducer'

const rootReducer = combineReducers({
  weatherReport: fetchCityWeather,
})
export default rootReducer