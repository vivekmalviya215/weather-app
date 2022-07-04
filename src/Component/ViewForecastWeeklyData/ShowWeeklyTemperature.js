import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
const ShowWeeklyTemperature = ({ foreCastDates, minTempValue, maxTempValue }) => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ><Typography variant="h6" component="div">Temperature</Typography></TableCell>
            {
              foreCastDates?.map((date, index) => {
                return (
                  <TableCell key={index} ><Typography variant="h6" component="div">{date}</Typography> </TableCell>
                )
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell >Min</TableCell>
            {
              minTempValue?.map((minimumTemp, index) => {
                return (
                  <TableCell key={index} >{minimumTemp}°C</TableCell>
                )
              })
            }
          </TableRow>
          <TableRow>
            <TableCell >Max</TableCell>
            {
              maxTempValue?.map((maximumTemp, index) => {
                return (
                  <TableCell key={index}>{maximumTemp} °C</TableCell>
                )
              })
            }
          </TableRow>
        </TableBody>
      </Table>
    </div >
  )
}

export default ShowWeeklyTemperature