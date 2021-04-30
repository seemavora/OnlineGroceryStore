import React, { Component } from 'react';
import Checkout from './Checkout';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default class Transaction extends Component {
  render() {
    return (
      <React.Fragment>
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
        </Grid>
      </React.Fragment>
    );
  }
}
