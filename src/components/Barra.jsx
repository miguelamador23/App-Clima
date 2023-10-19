import React from 'react';
import { Grid, Button } from '@mui/material';


function Barra() {
  return (
    <div>
      <Grid container>
        <Grid item xs={3} style={{ backgroundColor: '#1e2a78', minHeight: '100vh' }}>
          <Button variant="contained" className="custom-button" style={{ margin: '10px', }}>Contained</Button>
        </Grid>
        <Grid item xs={9}>
        </Grid>
      </Grid>
    </div>
  );
}

export default Barra;
