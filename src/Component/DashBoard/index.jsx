import React, { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDailyData, fetchWeatherReport } from '../../redux/action/WeatherAction'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useNavigate } from 'react-router-dom';
function DashBoard() {
  const dispathch = useDispatch();
  const [search, setSearch] = React.useState('indore');

  useEffect(() => {
    dispathch(fetchWeatherReport(search))
  }, [search])

  let navigate = useNavigate();
  const showWeatherDetail = () => {
    dispathch(fetchWeatherDailyData(search))
    navigate("/weekly-weather-report");
  }
  const weatherData = useSelector((state) => state.weatherReport.weatherData)
  const isLoading = useSelector((state) => state.weatherReport.isLoading)
  const error = useSelector((state) => state.weatherReport.error)

  return (
    <div className='dahsboard-header'>
      <FormControl sx={{
        width: '60%',
        top: 80
      }}>
        <InputLabel htmlFor="component-outlined" style={{ backgroundColor: 'white' }}>Search</InputLabel>
        <OutlinedInput
          id="component-outlined"
          onChange={(e) => { setSearch(e.target.value) }}
          placeholder={'Search by city'}
        />
      </FormControl>
      {
        isLoading ? (<Typography style={{ marginTop: '150px' }} variant="h5" gutterBottom component="div">Please Wait Loading ...</Typography>) :
          error ?
            <>
              <Typography style={{ marginTop: '150px' }} variant="h5" gutterBottom component="div"> {error.message}</Typography>
            </>
            : (
              <>
                <Typography style={{ marginTop: '150px' }} variant="h5" gutterBottom component="div">Current Location Data</Typography>
                <Card sx={{ width: '60%', marginLeft: '20%', marginTop: '20px', backgroundColor: ' #bbdefb' }}>
                  <CardContent>
                    {weatherData.weather && <Typography variant="h6" component="div" > Weather Condition -{weatherData.weather[0].main} </Typography>}
                    {weatherData.weather && <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} style={{ height: '120px', width: '120px' }} />}
                  </CardContent>
                  <Typography variant="h4" component="div" >{weatherData?.main?.feels_like} °C</Typography>
                  <Typography variant="h6" component="div" ><LocationOnIcon /> {weatherData?.name}</Typography>
                  <Typography variant="h6" >Minimum Temperature   {weatherData?.main?.temp_min}° C</Typography>
                  <Typography variant="h6">Maximum Temperature {weatherData?.main?.temp_max}° C</Typography>
                  <Typography variant="h6" >Wind Speed  {weatherData?.wind?.speed}</Typography>
                  <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="contained" style={{ backgroundColor: '#2196f3' }} onClick={() => { showWeatherDetail() }}>View Historical Weather Report</Button>
                  </CardActions>
                </Card>
              </>
            )
      }
    </div>
  );
}
export default DashBoard;