import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer'
import DashBoard from './Component/DashBoard';
import ViewWeatherReport from './Component/ViewWeatherReport'
function App() {
  return (
    <div className="App">
      <Link to='/'><Header /></Link>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/weekly-weather-report" element={<ViewWeatherReport />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
