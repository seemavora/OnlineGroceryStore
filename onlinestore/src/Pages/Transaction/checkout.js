import React, { Component } from 'react';
import { Box, Grid, Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { styled, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const AddressContainer = styled(Box)({
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  color: 'Black',
  width: '50%',
  height: 'auto',
  padding: '0 30px',
  marginTop: '50px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

function AddressField() {
  return (
    <AddressContainer>
      <Typography variant="h6">Shipping Address</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="name"
            name="name"
            label="Full Name (First and Last name)"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            helperText="Street address or P.O. Box"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            helperText="Apt, suite, unit, building, floor, etc."
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField required id="city" name="city" label="City" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="readOnly"
            id="country"
            name="country"
            label="Country"
            defaultValue="United States"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </AddressContainer>
  );
}
export default class Checkout extends Component {
  render() {
    return <AddressField></AddressField>;
  }
}
