import React, { Component } from "react";
import { Box, Grid, Typography, Divider, Paper} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {styled, makeStyles} from '@material-ui/core/styles';
import './Contact.css';

const BackgroundBox = styled(Box)({
  backgroundImage: 'url(/images/aisle.PNG)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  height: '800px',
  padding: '0 30px',
  width: '100%',
  margin: '0 auto',
});

const StyledBox = styled(Box)({
  background: 'white',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  wrap: 'nowrap',
  color: '#2F503D',
  height: 'auto',
  padding: '0 30px',
  margin: '0 auto',
  
});

class Contact extends Component {
  render() {
    return (
      <BackgroundBox>
        <Grid container justify="center" spacing={3}>
        
           <Grid className="titleGrid" item xs="12">
              <Box m="auto">
                <h1 align="Center" className="textOutline">Need Help?</h1>
              </Box>
            </Grid>
            <Grid item m="0" xs="8">
              <StyledBox>
                <Divider></Divider>
                <h2 align="center">Any comments, complaints, suggetsions?</h2>
                <h2 align="center"> Feel free to call us or email us</h2>
                <Divider></Divider>
              </StyledBox>
            </Grid>
            <Grid item xs="6">
              <StyledBox>
                <h2 align="center">Email Us</h2>
                <p className="largeP"align="center">Email customer service at OFS_CS@ofs.com</p>
              </StyledBox>
            </Grid>

            <Grid item xs="6">
              <StyledBox>
                <h2 align="center">Call Us</h2>
                <p className="largeP" align="center">Call customer service at 1-800-OFS-FOOD (1-800-637-3663)</p>
              </StyledBox>
            </Grid>
         </Grid>
      </BackgroundBox>
        
    );
  }
}
 
export default Contact;