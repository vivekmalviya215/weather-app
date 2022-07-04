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
    marginTop: '90px',
    textAlign: 'center',
  },
  errorMsgStyle: {
    marginTop: '90px',
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
    marginTop: '100px',
  },
  cardStyle: {
    backgroundColor: '#bbdefb',
    width: '60%',
    marginLeft: '20%',
    marginTop: '30px'
  },
  cityCardStyle: {
    textAlign: 'center'
  },
  weatherIcon: {
    height: '120px',
    width: '120px',
  },
  cityTemperatureStyle: {
    marginLeft: '160px',
  },
  minTempStyle: {
    marginLeft: '250px'
  },
  maxTempStyle: {
    marginLeft: '245px'
  },
  windSpeedStyle: {
    marginLeft: '340px'
  },
  Button: {
    backgroundColor: '#2196f3'
  },
  buttonStyle: {
    margin: 'auto'
  }
}); 