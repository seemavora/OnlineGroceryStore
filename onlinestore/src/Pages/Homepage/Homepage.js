<<<<<<< HEAD
import React, { Component } from "react";
import "./Homepage.css";

class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>Homepage</h1>
        {/* add code for Homepage design here */}
      </div>
=======
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
>>>>>>> added material UI
    );
  }
}

export default Homepage;
