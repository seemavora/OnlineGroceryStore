import React, { Component } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

export default class Options extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#ff000059">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#00ffe759">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#0043ff59">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box py={20} bgcolor="#1cff0059">
            <Typography align="center" variant="h4">
              lorem ipsum
            </Typography>
          </Box>
        </Grid>
      </Grid>
    );
  }
}
