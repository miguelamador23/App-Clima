import React from 'react';
import { Grid, Button, IconButton } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import './barra.css';

function Barra() {
  return (
    <Grid container>
      <Grid item xs={3} className="barra">
        <div className="custom-button-container">
          <Button variant="contained" className="custom-button">
            Search for places
          </Button>
          <IconButton className="custom-button">
            <MyLocationIcon />
          </IconButton>
        </div>
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
}

export default Barra;
