import React, { Component } from 'react';
import { Box, Container, Grid, Typography, styled } from '@material-ui/core';
import Options from './Options';
import BottomSections from './BottomSections';
import Navbar from '../../Components/Navbar/Navbar'
const BackgroundBox = styled(Box)({
  backgroundImage: "url(/images/lettuce.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize:"cover",
  backgroundAttachment:"fixed",
  height:"px",
  width:"100%",
});

class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        <Navbar/>
        {/* Header section */}
       
        <Grid container justify="center">
          <BackgroundBox>
          <Grid item xs={12} align="center">
            <br></br>
          <Img
                round
                src="/images/LemonLite_Bites.png"
              ></Img>
          </Grid>
          <br></br>
          </BackgroundBox>
          <Grid item xs={12} md={6}>
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
      width: '40%',
      borderRadius: rounded ? '5%' : round ? '50%' : '0%',
      
    }}
    {...rest}
    src={src}
  />
);
