import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchForecastWeeklyData, fetchWeatherReport } from '../../redux/action/WeatherAction'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CityWeatherDetails from './CityWeatherDetails';
import { useStyles } from './styles';
import { Box } from '@mui/system';

function DashBoard() {
  const classes = useStyles()

  const dispathch = useDispatch();
  const [search, setSearch] = useState('indore');

  useEffect(() => {
    dispathch(fetchWeatherReport(search || 'indore'))
  }, [search])

  let navigate = useNavigate();
  const showWeatherDetailChart = () => {
    dispathch(fetchForecastWeeklyData(search))
    navigate("/weekly-weather-report");
  }
  const cityWeatherData = useSelector((state) => state.weatherReport.weatherData)
  const isLoading = useSelector((state) => state.weatherReport.isLoading)
  const error = useSelector((state) => state.weatherReport.error)
  return (
    <Box>
      <FormControl className={classes.searchFieldStyle}>
        <InputLabel htmlFor="component-outlined" className={classes.searchLabelStyle}>Search</InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={(e) => { setSearch(e.target.value) }}
          placeholder={'Search by city'}
        />
      </FormControl>
      {
        isLoading ? (
          <Box className={classes.responseStatusStyle}>
            <Typography variant="h5" component="div" >
              Please Wait Loading ...</Typography>
          </Box>
        )
          :
          error ?
            <Box className={classes.errorMsgStyle}>
              <Typography variant="h5" component="div" > {error.message}</Typography>
            </Box>

            : (
              <CityWeatherDetails showWeatherDetailChart={showWeatherDetailChart} cityWeatherData={cityWeatherData} />
            )
      }
    </Box>
  );
}
export default DashBoard;