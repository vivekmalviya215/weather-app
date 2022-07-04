import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function Header() {
  return (
    <Box>
      <AppBar style={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Header;