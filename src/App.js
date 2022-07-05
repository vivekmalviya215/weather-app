import React, { lazy, Suspense } from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Component/Header'
import Footer from './Component/Footer'
import { NoMatch } from './Component/DashBoard/NoMatch';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { makeStyles } from "@material-ui/core";


const ViewForecastWeeklyData = lazy(() => import("./Component/ViewForecastWeeklyData"));
const DashBoard = lazy(() => import('./Component/DashBoard'));

const useStyles = makeStyles({
  LoadingIconStyle: {
    marginTop: '10%',
    marginLeft: '30%',
  },
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Link to='/'><Header /></Link>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<Box className={classes.LoadingIconStyle} ><CircularProgress /></Box>}>
            <DashBoard />
          </Suspense>
        } />
        <Route path="/weekly-weather-report" element={
          <Suspense fallback={<Box className={classes.LoadingIconStyle} ><CircularProgress /></Box>}>
            <ViewForecastWeeklyData />
          </Suspense>
        } />
        <Route path="*" element={<NoMatch />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
