import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDailyData, fetchWeatherReport } from '../../redux/action/WeatherAction'
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import CityWeatherDetails from './CityWeatherDetails';
function DashBoard() {
  const dispathch = useDispatch();
  const [search, setSearch] = useState('indore');

  useEffect(() => {
    dispathch(fetchWeatherReport(search || 'indore'))
  }, [search])

  let navigate = useNavigate();
  const showWeatherDetailChart = () => {
    dispathch(fetchWeatherDailyData(search))
    navigate("/weekly-weather-report");
  }
  const cityWeatherData = useSelector((state) => state.weatherReport.weatherData)
  const isLoading = useSelector((state) => state.weatherReport.isLoading)
  const error = useSelector((state) => state.weatherReport.error)

  return (
    <div className='dahsboard-header'>
      <FormControl sx={{
        width: '60%',
        top: 80,
        left: '20%',
      }}>
        <InputLabel htmlFor="component-outlined" style={{ backgroundColor: 'white' }}>Search</InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={(e) => { setSearch(e.target.value) }}
          placeholder={'Search by city'}
        />
      </FormControl>
      {
        isLoading ? (<Typography style={{ marginTop: '9.3rem', textAlign: 'center' }} variant="h5" gutterBottom component="div">Please Wait Loading ...</Typography>) :
          error ?
            <>
              <Typography style={{ marginTop: '9.3rem', textAlign: 'center ' }} variant="h5" gutterBottom component="div"> {error.message}</Typography>
            </>
            : (
              <CityWeatherDetails showWeatherDetailChart={showWeatherDetailChart} cityWeatherData={cityWeatherData} />
            )
      }
    </div>
  );
}
export default DashBoard;