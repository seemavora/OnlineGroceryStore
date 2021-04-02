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
            //bgcolor="#ff000059"
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
          <Box py={20} /*bgcolor="#00ffe759" */ 
          style={{
            backgroundImage:
              'url(https://img.taste.com.au/qOMGEt7Y/w720-h480-cfill-q80/taste/2017/02/spinach-and-ricotta-zucchini-cannelloni-120981-1.jpg)',
            backgroundPosition: 'center',
          }}
          color="#fff"
          >
            <Typography align="center" variant="h4">
              Vegitarian
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} /*bgcolor="#0043ff59"*/
          style={{
            backgroundImage:
              'url(https://gbc-cdn-public-media.azureedge.net/img74305.1426x713.jpg)',
            backgroundPosition: 'center',
          }}
          color="#fff"
          >
            <Typography align="center" variant="h4">
              Fish & Poultry
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} /*bgcolor="#1cff0059"*/
          style={{
            backgroundImage:
              'url(https://trainright.com/wp-content/uploads/2019/10/red-meat-steak-beef.jpg)',
            backgroundPosition: 'center',
          }}
          color="#fff"
          >
            <Typography align="center" variant="h4">
              Meat
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
