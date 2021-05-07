import React, { Component } from 'react';
import Checkout from './Checkout';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Link, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

const StylishBox = styled(Box)({
  background: 'linear-gradient(0.25turn, #dcedc8, #c5e1a5, #aed581)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  color: 'grey',
  width: '50%',
  height: 'auto',
  padding: '0 30px',
  marginTop: '50px',
  marginLeft: 'auto',
  marginRight: 'auto'
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        OFS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function CardInfo() {
  const classes = useStyles();
  return (
    <StylishBox>
      <Typography variant="h6" gutterBottom>
        Payment Method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Card Number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on the right side of the signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry Date"
            fullWidth
            autoComplete="cc-exp"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cupon"
            label="Cupon Code"
            fullWidth
            autoComplete="cc-cupon"
          />
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            onClick
            className={classes.button}
          >
            next
          </Button>
        </Grid>
      </Grid>
    </StylishBox>
  );
}

export default class Transaction extends Component {
  render() {
    return (
      <Grid container>
        <CardInfo />
        <Grid item xs={12}>
          <Copyright />
        </Grid>
      </Grid>
    );
  }
}
