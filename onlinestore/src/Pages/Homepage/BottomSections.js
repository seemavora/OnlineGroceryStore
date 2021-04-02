import React, { Component } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';




export default class BottomSections extends Component {
  
  render() {
    return (

      <Grid container>

        <Grid item xs={12}>
            <Typography align="center" variant="h4">
              Bottom Section 
            </Typography>
        </Grid>

        <Grid item xs={3}>
          <Box py={20} bgcolor="#ff000059">
            <Typography align="center" variant="h4">
              Our Mission
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={3}>
          <Box py={20} bgcolor="#00ffe759">
            <Typography align="center" variant="h4">
              Check our Catalog
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box py={20} bgcolor="#0043ff59">
            <Typography align="center" variant="h4">
              Meet Our Team
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={3}>
          <Box py={20} bgcolor="#1cff0059">
            <Typography align="center" variant="h4">
              <Button variant="outlined" color="primary">
              Sign Up Now
            </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
