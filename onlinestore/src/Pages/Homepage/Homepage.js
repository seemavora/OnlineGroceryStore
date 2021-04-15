import React, { Component } from 'react';
import { Box, Container, Grid, styled } from '@material-ui/core';
import Options from './Options';
import BottomSections from './BottomSections';

const BackgroundBox = styled(Box)({
  backgroundImage: 'url(/images/lettuce.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  height: 'px',
  width: '100%',
});

class Homepage extends Component {
  render() {
    return (
      <Container fluid>
        {/* Header section */}
        <Grid container justify="center">
          <BackgroundBox rounded>
            <Grid item xs={12} align="center">
              <br></br>
              <Img round src="/images/LemonLite_Bites.png"></Img>
            </Grid>
            <br></br>
          </BackgroundBox>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
        <br />
        <br />
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
