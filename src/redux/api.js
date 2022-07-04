
import axios from "axios";
export const getCityWeather = async (city) =>
  await axios.get(`${process.env.REACT_APP_WEATHER_API}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);


export const getForecastDataWeekly = async (city) =>
  await axios.get(`${process.env.REACT_APP_FORECAST_API_WEEKLY}?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
