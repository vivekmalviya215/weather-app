
import axios from "axios";
export const getWeather = async (city) =>
  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);

export const getWeatherDataDaily = async (city) =>
  await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
