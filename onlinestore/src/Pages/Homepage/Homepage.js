import React, { Component } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        <Grid container>
          <Grid item xs={12} md={6}>Hello world</Grid>
          <Grid item xs={12} md={6}>Hello world</Grid>
        </Grid>
      </Container>
    );
  }
}

export default Homepage;
