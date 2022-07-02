import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const CityWeatherDetails = ({ showWeatherDetailChart, cityWeatherData }) => {
  return (
    <div className='container'>
      <div className='location-heading'>
        <Typography variant="h5" component="div">Current Location Data</Typography>
      </div>
      <Card sx={{ backgroundColor: ' #bbdefb', width: '60%', marginLeft: '20%', marginTop: '30px' }} >
        <div className="city-card-style">
          <CardContent>
            {cityWeatherData.weather && <Typography variant="h6" component="div" > Weather Condition -{cityWeatherData.weather[0].main} </Typography>}
            {cityWeatherData.weather && <img src={`http://openweathermap.org/img/w/${cityWeatherData.weather[0].icon}.png`} style={{ height: '120px', width: '120px' }} />}
            <Typography variant="h4" component="div" >{cityWeatherData?.main?.feels_like} °C</Typography>
            <Typography variant="h6" component="div"  ><LocationOnIcon /> {cityWeatherData?.name}</Typography>
          </CardContent>
        </div>
        <div className="city-temperature-style">
          <Typography variant="h6" >Minimum Temperature <span style={{ marginLeft: '250px' }}>{cityWeatherData?.main?.temp_min}° C</span></Typography>
          <Typography variant="h6">Maximum Temperature <span style={{ marginLeft: '245px' }}>{cityWeatherData?.main?.temp_max}° C</span></Typography>
          <Typography variant="h6" >Wind Speed <span style={{ marginLeft: '340px' }}>{cityWeatherData?.wind?.speed}</span></Typography>
        </div>

        <CardActions className="weather-report-button-style">
          <Button variant="contained" style={{ backgroundColor: '#2196f3' }} onClick={() => { showWeatherDetailChart() }}>View Historical Weather Report</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CityWeatherDetails