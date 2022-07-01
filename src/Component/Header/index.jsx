import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div>
      <AppBar style={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;