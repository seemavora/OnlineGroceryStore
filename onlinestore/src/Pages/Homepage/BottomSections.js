import React, { Component } from 'react';
import { Box, Grid, Typography, Divider, Paper, Table } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import {styled} from '@material-ui/core/styles';
import './Homepage.css'
 
const StylishBox = styled(Box)({
  background: 'linear-gradient(45deg, #2f503d 10%,#2f503d 90%, #abb94f 95%)',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  color: 'white',
  height: 'auto',
  padding: '0 30px',
  margin: '0 auto',
  
});

const StylishButton = styled(Button)({
  background: 'linear-gradient(45deg, #2f503d 50%, #2f503d 50%)',
  border: 0,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  color: 'white',
  height: 'auto',
  padding: '0 30px',
  margin: '16px auto',
  borderRadius: 15,
});


function AboutUs() {
  return (
  <StylishBox> 
    <Box align="left" m="0 auto">
    <Divider/>
    <h3 className="title" align="center">Here at OFS we value 3 things above all else</h3>
    
      <ul>
        <li>Fresh, Quality Foods</li>
        <li>Fast Shipping</li>
        <li>Friendly Customer Service</li>
      </ul>
    <p> We work our hardest to make sure that all our food is GMO free and comes from sustainable sources so that you can be confident that you're getting only the best ingredients.</p>

    <h3 className="title">Our Story</h3>
    <p>Starting as a small, local grocery store in San Jose we realized that our customers didn't have a lot of time to spend
    the aisles of a grocery store, especially in the high speed world of the Silicon Valley. </p>
    <p>Our solution was an online storefront so our customers can browse our selection from the comfort of home and have their food delievered right to their doorsteps.</p>
    <Divider/>
    </Box>
  </StylishBox>
  );
}
export default class BottomSections extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
       
        <Box
            color="#2f503d"
            backgroundColor
           
          >
            <Typography align="center" variant="h3">
              About Us
            </Typography>
          </Box>
        </Grid>
        <Grid item xs = {12}>
        
            <AboutUs/>

        </Grid>
        <Grid item xs = {12}>
        <Typography align="center">
          <StylishButton href="https://www.google.com/webhp?authuser=2">
                    Sign Up Now
          </StylishButton>
        </Typography>
        </Grid>
      </Grid>
    );
  }
}
