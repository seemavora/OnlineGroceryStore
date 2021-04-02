import React, { Component } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import Options from './Options';
import BottomSections from './BottomSections'

class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        {/* Header section */}
        <Grid container justify="center">
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              lorem ipsum
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography align="center" variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>

        {/* Option section */}
        <Options/>
        <br/>
        <br/>

        {/* Bottom sections */}
        <BottomSections/>
      </Container>
    );
  }
}

export default Homepage;
