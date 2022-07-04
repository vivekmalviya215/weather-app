import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)

const TemperatureWeeklyData = ({ maxTempValue, foreCastDates, minTempValue }) => {
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



  return (
    <div>
      <Line data={data} />
    </div>
  )
}

export default TemperatureWeeklyData