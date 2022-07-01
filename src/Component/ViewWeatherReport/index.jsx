
import React, { useState } from 'react';
import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { useSelector } from 'react-redux';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const ViewWeatherReport = () => {

  let dateRange = [];
  let tempMin = [];
  let tempMax = [];
  let windSpeed = [];
  const data = {
    labels: dateRange,
    datasets: [
      {
        label: 'Max Temperature',
        data: tempMax,
        borderColor: '#f44336',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#f44336',
        pointBackgroundColor: '#f44336',
        showLine: true
      },
      {
        label: "Min Temperature",
        data: tempMin,
        borderColor: '#b71c1c',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '##b71c1c',
        pointBackgroundColor: '##b71c1c',
        showLine: true
      }
    ],
  }

  const windSppedData = {
    labels: dateRange,
    datasets: [
      {
        label: "Wind Speed",
        data: windSpeed,
        borderColor: '#76ff03',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#76ff03',
        pointBackgroundColor: '#76ff03',
        showLine: true
      },
    ],
  }

  const solarData = {
    labels: dateRange,
    datasets: [
      {
        label: "Solar Radiation",
        data: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 32.99, 48, 77, 38],
        borderColor: '#2196f3',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#2196f3',
        pointBackgroundColor: '#2196f3',
        showLine: true
      },
      {
        label: "Clouds",
        data: [10, 20, 10, 20, 51, 92, 31, 42, 51, 24, 31, 19, 41, 34, 41, 48, 13, 48, 22, 42, 77, 51, 38, 25, 42],
        borderColor: '#3f51b5',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#3f51b5',
        pointBackgroundColor: '#3f51b5',
        showLine: true
      }
    ],
  }

  const foreCastDetailsSevenDays = useSelector((state) => state.weatherReport.foreCastData)
  foreCastDetailsSevenDays.list && foreCastDetailsSevenDays.list.forEach((item) => {
    tempMin.push(item.main.temp_min)
  })

  foreCastDetailsSevenDays.list && foreCastDetailsSevenDays.list.forEach((item) => {
    tempMax.push(item.main.temp_min)
  })
  foreCastDetailsSevenDays.list && foreCastDetailsSevenDays.list.forEach((item) => {
    windSpeed.push(item.wind.speed)
  })
  foreCastDetailsSevenDays.list && foreCastDetailsSevenDays.list.forEach((item) => {
    dateRange.push(new Date(item.dt_txt).toISOString().slice(0, 10))
  })
  let sortedDates = dateRange.filter(function (item, index) {
    return dateRange.indexOf(item) == index;
  });

  let startDate = foreCastDetailsSevenDays.list && new Date(foreCastDetailsSevenDays.list[0].dt_txt).toISOString().slice(0, 10)
  let endDate = foreCastDetailsSevenDays.list && new Date(foreCastDetailsSevenDays.list[39].dt_txt).toISOString().slice(0, 10)
  let minTemp = foreCastDetailsSevenDays?.list?.map((min) => min.main.temp_min)
  let minTempValue = minTemp?.splice(0, 6)
  let maxTemp = foreCastDetailsSevenDays?.list?.map((min) => min.main.temp_max)
  let maxTempValue = maxTemp?.splice(0, 6)
  let windSpeedDetails = foreCastDetailsSevenDays?.list?.map((windValue) => windValue.wind)
  let windSpeedValue = windSpeedDetails?.splice(0, 6)

  return (
    <div className='historial-wether-report'>
      <Typography variant="h4" component="div" > Historical Weather Report</Typography>
      <Card className='card-header'>
        <CardContent>
          <Typography variant="h5" component="div">{foreCastDetailsSevenDays?.city?.name} city weather report from {startDate} to {endDate}</Typography>
        </CardContent>
      </Card>
      <Box className='line-chart-style' >
        <Box className='chart-style'>
          <Line data={data} />
        </Box>
        <Box className='chart-style'>
          <Line data={windSppedData} />
        </Box>
        <Box className='chart-style'>
          <Line data={solarData} />
        </Box>
      </Box>
      <Typography variant="h6" component="div" > Summary</Typography>
      <Card >
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >Temperature</TableCell>
                {sortedDates?.map((key, i) => {
                  return (
                    <TableCell >{key}</TableCell>
                  )
                }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >Min</TableCell>
                {minTempValue?.map((key, i) => {
                  return (
                    <TableCell >{key}°C</TableCell>
                  )
                }
                )}
              </TableRow>
              <TableRow>
                <TableCell >Max</TableCell>
                {maxTempValue?.map((key, i) => {
                  return (
                    <TableCell >{key} °C</TableCell>
                  )
                }
                )}
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card >
        <CardContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell >Wind</TableCell>
                {sortedDates?.map((key, i) => {
                  return (
                    <TableCell >{key}</TableCell>
                  )
                }
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >Wind Speed</TableCell>
                {windSpeedValue?.map((key, i) => {
                  return (
                    <TableCell >{key.speed}°C</TableCell>
                  )
                }
                )}
              </TableRow>
              <TableRow>
                <TableCell >Gust Wind Speed	</TableCell>
                {windSpeedValue?.map((key, i) => {
                  return (
                    <TableCell >{key.gust} °C</TableCell>
                  )
                }
                )}
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div >
  )
}

export default ViewWeatherReport
