import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const WindSpeedWeeklyData = ({ foreCastDates, windSpeedValue }) => {

  let windSpeedWeeklyData = []
  for (let i = 0; i < windSpeedValue?.length; i++) {
    windSpeedWeeklyData.push(windSpeedValue[i].speed)
  }

  const windSpeedData = {
    labels: foreCastDates,
    datasets: [
      {
        label: "Wind Speed",
        data: windSpeedWeeklyData,
        borderColor: '#76ff03',
        tension: 0.4,
        pointStyle: 'rect',
        pointBorderColor: '#76ff03',
        pointBackgroundColor: '#76ff03',
        showLine: true
      },
    ],
  }

  return (
    <div>
      <Line data={windSpeedData} />
    </div>
  )
}

export default WindSpeedWeeklyData
