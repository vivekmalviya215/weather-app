import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)
const SolarWeeklyData = ({ foreCastDates }) => {
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
      <Line data={solarData} />
    </div>
  )
}

export default SolarWeeklyData