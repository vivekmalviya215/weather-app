import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'

const ShowWeeklyWindSpped = ({ foreCastDates, windSpeedValue }) => {
  return (
    <div> <Table>
      <TableHead>
        <TableRow>
          <TableCell ><Typography variant="h6" component="div">Wind Speed</Typography></TableCell>
          {
            foreCastDates?.map((date, index) => {
              return (
                <TableCell key={index}><Typography variant="h6" component="div">{date}</Typography> </TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell >Wind Speed</TableCell>
          {
            windSpeedValue?.map((wind, index) => {
              return (
                <TableCell key={index} >{wind.speed}°C</TableCell>
              )
            })
          }
        </TableRow>
        <TableRow>
          <TableCell >Gust Wind Speed	</TableCell>
          {
            windSpeedValue?.map((gustData, index) => {
              return (
                <TableCell key={index}>{gustData.gust} °C</TableCell>
              )
            })
          }
        </TableRow>
      </TableBody>
    </Table></div>
  )
}

export default ShowWeeklyWindSpped