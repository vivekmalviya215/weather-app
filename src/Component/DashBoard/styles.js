import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  header: {
    width: '80%',
    margin: 'auto',
  },
  searchFieldStyle: {
    width: '60%',
    top: 80,
    left: '20%',
  },
  searchLabelStyle: {
    backgroundColor: 'white'
  },
  responseStatusStyle: {
    marginTop: '5.62rem',
    textAlign: 'center',
  },
  errorMsgStyle: {
    marginTop: '5.62rem',
    textAlign: 'center',
  },
});

export const footerStyles = makeStyles({
  footer: {
    marginLeft: '45%',
    marginTop: '10%'
  }
})
export const cityPageStyles = makeStyles({
  container: {
    width: '80%',
    margin: 'auto',
  },
  locationHeading: {
    textAlign: 'center',
    marginTop: '6.25rem',
  },
  cardStyle: {
    width: '50%',
    marginLeft: '25%',
    marginTop: '1.9rem'
  },
  cityCardStyle: {
    textAlign: 'center'
  },
  weatherIcon: {
    height: '7.5rem',
    width: '7.5rem',
  },
  cityTemperatureStyle: {
    marginLeft: '10rem',
  },
  minTempStyle: {
    marginLeft: '15.6rem'
  }, maxTempStyle: {
    marginLeft: '15.3rem'
  },
  windSpeedStyle: {
    marginLeft: '21.2rem'
  },
  Button: {
    backgroundColor: '#2196f3'
  },
  buttonStyle: {
    margin: 'auto'
  }
}); 