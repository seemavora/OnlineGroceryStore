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
import { Box, Container, Grid, Typography } from '@material-ui/core';
import Options from './Options';
import BottomSections from './BottomSections';
import Navbar from '../../Components/Navbar/Navbar'
class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar/>
        {/* Header section */}
        <Grid container justify="center">
          <Grid item xs={12}>
            {/* <Typography align="center" variant="h2">
              Welcome to our Online Grocery Store
            </Typography> */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* <Typography align="center" variant="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography> */}
            <br />
            <br />
            <Img src="/images/LemonLite_Bites.png"/>
            <Img src="/images/lettuce.png"/>
          </Grid>
        </Grid>
        <br />
        <br />
        {/* <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box>
              <Img
                round
                src="https://img.hellofresh.com/f_auto,fl_lossy,h_710,q_auto,w_710/hellofresh_website/us/cms/homepage/static_slider/W23_R12_2019_R90128A_MediterraneanMezzePlatter360x360.jpg"
              ></Img>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Img
                round
                src="https://img.hellofresh.com/f_auto,fl_lossy,h_710,q_auto,w_710/hellofresh_website/us/cms/homepage/Recipe%20Slider/20min_720x720.jpg"
              ></Img>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box>
              <Img
                round
                src="https://img.hellofresh.com/f_auto,fl_lossy/hellofresh_website/us/cms/instagram/sixth_image.jpeg"
              ></Img>
            </Box>
          </Grid>
        </Grid>
        <br />
        <br /> */}
        {/* Option section */}
        <Options />
        <br />

        {/* Bottom sections */}
        <BottomSections />
      </Container>
>>>>>>> added material UI
    );
  }
}

export default Homepage;

/**
 * image tag
 *
 * @param {...string} src The image source
 * @param {...boolean} round Makes image circle (border-radius=50%)
 * @param {...boolean} rounded Makes image rounded (border-radius=5%)
 */
const Img = ({ src, round, rounded, ...rest }) => (
  <img
    style={{
      height: 'auto',
      width: '100%',
      borderRadius: rounded ? '5%' : round ? '50%' : '0%',
    }}
    {...rest}
    src={src}
  />
);
