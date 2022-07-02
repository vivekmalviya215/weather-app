
import React from 'react';
import { Button, Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const ViewWeatherReport = () => {
  const foreCastDetailsSevenDays = useSelector((state) => state.weatherReport.foreCastData)
  let minTemp = foreCastDetailsSevenDays?.list?.map((min) => min.main.temp_min)
  let minTempValue = minTemp?.splice(0, 6)
  let maxTemp = foreCastDetailsSevenDays?.list?.map((min) => min.main.temp_max)
  let maxTempValue = maxTemp?.splice(0, 6)
  let windSpeedDetails = foreCastDetailsSevenDays?.list?.map((windValue) => windValue.wind)
  let windSpeedValue = windSpeedDetails?.splice(0, 6)
  const groupedData = foreCastDetailsSevenDays?.list?.reduce?.((acc, curr) => {
    if (curr?.dt_txt?.split?.(' ')[0]) {
      acc[curr.dt_txt.split(' ')[0]] = [...(acc[curr.dt_txt.split(' ')[0]] || []), curr];
    }
    return acc;
  }, {})

  let foreCastDates = Object.keys(groupedData || []);
  let startDate = foreCastDates[0]
  let endDateIndex = foreCastDates.length - 1
  let endDate = foreCastDates[endDateIndex]

  const data = {
    labels: foreCastDates,
    datasets: [
      {
        label: 'Max Temperature',
        data: maxTempValue,
        borderColor: '#f44336',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#f44336',
        pointBackgroundColor: '#f44336',
        showLine: true
      },
      {
        label: "Min Temperature",
        data: minTempValue,
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
    labels: foreCastDates,
    datasets: [
      {
        label: "Wind Speed",
        data: [3, 2, 1, 8, 4, 5, 6],
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
    labels: foreCastDates,
    datasets: [
      {
        label: "Solar Radiation",
        data: [21, 22, 23, 24, 25, 26, 27, 28],
        borderColor: '#2196f3',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#2196f3',
        pointBackgroundColor: '#2196f3',
        showLine: true
      },
      {
        label: "Clouds",
        data: [10, 20, 10, 20, 51, 92, 31, 42],
        borderColor: '#3f51b5',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#3f51b5',
        pointBackgroundColor: '#3f51b5',
        showLine: true
      }
    ],
  }
  return (
    <div>
      <div className='back-button-section'>
        <Link to='/'> <Button variant="contained" size="large"><ArrowBackIcon /> Back</Button></Link>
      </div>
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
        <Typography variant="h5" component="div" > Summary</Typography>
        <Card >
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell >
                    <Typography variant="h6" component="div">Temperature</Typography></TableCell>
                  {foreCastDates?.map((key, i) => {
                    return (
                      <TableCell ><Typography variant="h6" component="div">{key}</Typography> </TableCell>
                    )
                  }
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell >Min</TableCell>
                  {
                    minTempValue?.map((key, i) => {
                      return (
                        <TableCell >{key}°C</TableCell>
                      )
                    }
                    )
                  }
                </TableRow>
                <TableRow>
                  <TableCell >Max</TableCell>
                  {maxTempValue?.map((key, i) => {
                    return (
                      <TableCell >{key} °C</TableCell>
                    )
                  }
                  )
                  }
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
                  <TableCell ><Typography variant="h6" component="div">Wind Speed</Typography></TableCell>
                  {foreCastDates?.map((key, i) => {
                    return (
                      <TableCell ><Typography variant="h6" component="div">{key}</Typography> </TableCell>
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
    </div>
  )
}
export default ViewWeatherReport
