import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box } from '@mui/system';

import { cityPageStyles } from './styles';

const CityWeatherDetails = ({ showWeatherDetailChart, cityWeatherData }) => {
  const classes = cityPageStyles()

  return (
    <Box className='container'>
      <Box className={classes.locationHeading}>
        <Typography variant="h5" >Current Location Data</Typography>
      </Box>
      <Card >
        <Box className={classes.cardStyle}>
          <Box className={classes.cityCardStyle}>
            <CardContent>
              <Box className={classes.weather}>
                {cityWeatherData.weather && <Typography variant="h6"  >
                  Weather Condition -{cityWeatherData.weather[0].main} </Typography>}
              </Box>
              {cityWeatherData.weather &&
                <Box
                  component="img"
                  className={classes.weatherIcon}
                  alt="The house from the offer."
                  src={`http://openweathermap.org/img/w/${cityWeatherData.weather[0].icon}.png`} />
              }
              <Typography variant="h4"  >{cityWeatherData?.main?.feels_like} °C</Typography>
              <Typography variant="h6"   ><LocationOnIcon /> {cityWeatherData?.name}</Typography>
            </CardContent>
          </Box>
          <Box className={classes.cityTemperatureStyle}>
            <Typography variant="h6" >Minimum Temperature <span className={classes.minTempStyle} >
              {cityWeatherData?.main?.temp_min}° C</span></Typography>
            <Typography variant="h6">Maximum Temperature <span className={classes.maxTempStyle}>
              {cityWeatherData?.main?.temp_max}° C</span></Typography>
            <Typography variant="h6" >Wind Speed <span className={classes.windSpeedStyle} >
              {cityWeatherData?.wind?.speed}</span></Typography>
          </Box>
          <CardActions >
            <Box className={classes.buttonStyle}>
              <Button variant="contained" className={classes.Button}
                onClick={() => { showWeatherDetailChart() }}>View Historical Weather Report</Button>
            </Box>
          </CardActions>
        </Box>
      </Card>

    </Box>
  )
}

export default CityWeatherDetails