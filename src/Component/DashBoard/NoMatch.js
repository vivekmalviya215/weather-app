import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  PageNotFound: {
    marginTop: '10%',
    marginLeft: '30%',
  },
})


export const NoMatch = () => {
  const classes = useStyles()
  return (
    <Box className={classes.PageNotFound}>
      <Typography variant="h4">Nothing to see here!</Typography>
      <Typography variant="h4">
        <Link to="/">Go to the home page</Link>
      </Typography>
    </Box>
  );
}
