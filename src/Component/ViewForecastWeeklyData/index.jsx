
import React, { useEffect } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import ShowWeeklyTemperature from './ShowWeeklyTemperature';
import ShowWeeklyWindSpped from './ShowWeeklyWindSpped';

import { useStyles } from './Styles';
import TemperatureWeeklyData from './LineChart/TemperatureWeeklyData';
import WindSpeedWeeklyData from './LineChart/WindSpeedWeeklyData';
import SolarWeeklyData from './LineChart/SolarWeeklyData';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const ViewForecastWeeklyData = () => {

  const classes = useStyles()
  const foreCastDetailsSevenDays = useSelector((state) => state.weatherReport.foreCastData)

  let windSpeedDetails = foreCastDetailsSevenDays?.list?.map((windValue) => windValue.wind)
  let windSpeedValue = windSpeedDetails?.splice(0, 6)
  const groupedData = foreCastDetailsSevenDays?.list?.reduce?.((acc, curr) => {
    if (curr?.dt_txt?.split?.(' ')[0]) {
      acc[curr.dt_txt.split(' ')[0]] = [...(acc[curr.dt_txt.split(' ')[0]] || []), curr];
    }
    return acc;
  }, {})
  let temperatureData = foreCastDetailsSevenDays?.list?.splice(0, 6)


  let minTempValue = []
  let maxTempValue = []
  for (let i = 0; i < temperatureData?.length; i++) {
    minTempValue.push(temperatureData[i].main.temp_min)
    maxTempValue.push(temperatureData[i].main.temp_max)
  }




  let foreCastDates = Object.keys(groupedData || []);
  let startDate = foreCastDates[0]
  let endDateIndex = foreCastDates.length - 1
  let endDate = foreCastDates[endDateIndex]

  return (
    <Box>
      <Box className={classes.backButton}>
        <Link to='/'> <Button variant="contained" size="large"><ArrowBackIcon /> Back</Button></Link>
      </Box>
      <Box className={classes.historialWetherReport}>
        <Typography variant="h4" component="div" > Historical Weather Report</Typography>
        <Card className={classes.cardHeader}>
          <CardContent>
            <Typography variant="h5" component="div">{foreCastDetailsSevenDays?.city?.name} city weather report from {startDate} to {endDate}</Typography>
          </CardContent>
        </Card>
        <Box className={classes.lineChartStyle} >
          <Box >
            <TemperatureWeeklyData foreCastDates={foreCastDates} minTempValue={minTempValue} maxTempValue={maxTempValue} />
          </Box>
          <Box >
            <WindSpeedWeeklyData foreCastDates={foreCastDates} windSpeedValue={windSpeedValue} />
          </Box>
          <Box >
            <SolarWeeklyData foreCastDates={foreCastDates} />
          </Box>
        </Box>
        <Typography variant="h5" component="div" > Summary</Typography>
        <Card >
          <CardContent>
            <ShowWeeklyTemperature foreCastDates={foreCastDates} minTempValue={minTempValue} maxTempValue={maxTempValue} />
          </CardContent>
        </Card>
        <Card >
          <CardContent>
            <ShowWeeklyWindSpped foreCastDates={foreCastDates} windSpeedValue={windSpeedValue} />
          </CardContent>
        </Card>
      </Box >
    </Box>
  )
}
export default ViewForecastWeeklyData
