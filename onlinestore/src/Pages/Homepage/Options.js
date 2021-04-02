import React, { Component } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export default class Options extends Component {
  render() {
    return (
      <Grid container>
        <Grid
          item
          xs={3}
          style={{
            '&:hover': {
              transform: 'scale(1.2)',
            },
            transform: 'scale(1)',
          }}
        >
          <Box
            py={20}
            bgcolor="#ff000059"
            style={{
              backgroundImage:
                'url(https://img.hellofresh.com/f_auto,fl_lossy,h_710,q_auto,w_710/hellofresh_website/us/cms/homepage/Recipe%20Slider/Veggie_720x720.jpg)',
              backgroundPosition: 'center',
            }}
            color="#fff"
          >
            <Typography align="center" variant="h4">
              Vegan
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#00ffe759">
            <Typography align="center" variant="h4">
              Vegitarian
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#0043ff59">
            <Typography align="center" variant="h4">
              Fish & Poultry
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#1cff0059">
            <Typography align="center" variant="h4">
              Meat
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
