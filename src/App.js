import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer'
import DashBoard from './Component/DashBoard';
import ViewForecastWeeklyData from './Component/ViewForecastWeeklyData';
function App() {
  return (
    <div className="App">
      <Link to='/'><Header /></Link>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/weekly-weather-report" element={<ViewForecastWeeklyData />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
