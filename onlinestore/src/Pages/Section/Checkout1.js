import React, { Component } from 'react';
import { Box, Grid, Typography, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { styled, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';


const usStates = [
  {
    value: 'AL',
    label: 'Alabama',
  },
  {
    value: 'AK',
    label: 'Alaska',
  },
  {
    value: 'AS',
    label: 'American Samoa',
  },
  {
    value: 'AR',
    label: 'Arizona',
  },
  {
    value: 'CA',
    label: 'California',
  },
  {
    value: 'CO',
    label: 'Colorado',
  },
  {
    value: 'CT',
    label: 'Connecticut',
  },
  {
    value: 'DE',
    label: 'Delaware',
  },
  {
    value: 'DC',
    label: 'District of Columbia',
  },
  {
    value: 'FL',
    label: 'Florida',
  },
  {
    value: 'GA',
    label: 'Georgia',
  },
  {
    value: 'GU',
    label: 'Guam',
  },
  {
    value: 'HI',
    label: 'Hawaii',
  },
  {
    value: 'ID',
    label: 'Idaho',
  },
  {
    value: 'IL',
    label: 'Illinois',
  },
  {
    value: 'IN',
    label: 'Indiana',
  },
  {
    value: 'IA',
    label: 'Iowa',
  },
  {
    value: 'KS',
    label: 'Kansas',
  },
  {
    value: 'KY',
    label: 'Kentucky',
  },
  {
    value: 'LA',
    label: 'Louisiana',
  },
  {
    value: 'ME',
    label: 'Maine',
  },
  {
    value: 'MD',
    label: 'Maryland',
  },
  {
    value: 'MA',
    label: 'Massachusetts',
  },
  {
    value: 'MI',
    label: 'Michigan',
  },
  {
    value: 'MN',
    label: 'Minnesota',
  },
  {
    value: 'MS',
    label: 'Mississippi',
  },
  {
    value: 'MO',
    label: 'Missouri',
  },
  {
    value: 'MT',
    label: 'Montana',
  },
  {
    value: 'NE',
    label: 'Nebraska',
  },
  {
    value: 'NV',
    label: 'Nevada',
  },
  {
    value: 'NH',
    label: 'New Hampshire',
  },
  {
    value: 'NJ',
    label: 'New Jersey',
  },
  {
    value: 'NM',
    label: 'New Mexico',
  },
  {
    value: 'NY',
    label: 'New York',
  },
  {
    value: 'NC',
    label: 'North Carolina',
  },
  {
    value: 'ND',
    label: 'North Dakota',
  },
  {
    value: 'OH',
    label: 'Ohio',
  },
  {
    value: 'OK',
    label: 'Oklahoma',
  },
  {
    value: 'OR',
    label: 'Oregon',
  },
  {
    value: 'PA',
    label: 'Pennsylvania',
  },
  {
    value: 'PR',
    label: 'Puerto Rico',
  },
  {
    value: 'RI',
    label: 'Rhode Island',
  },
  {
    value: 'SC',
    label: 'South Carolina',
  },
  {
    value: 'SD',
    label: 'South Dakota',
  },
  {
    value: 'TN',
    label: 'Tennessee',
  },
  {
    value: 'TX',
    label: 'Texas',
  },
  {
    value: 'UT',
    label: 'Utah',
  },
  {
    value: 'VT',
    label: 'Vermont',
  },
  {
    value: 'VI',
    label: 'Virgin Islands',
  },
  {
    value: 'VA',
    label: 'Virginia',
  },
  {
    value: 'WA',
    label: 'Washington',
  },
  {
    value: 'WV',
    label: 'West Virginia',
  },
  {
    value: 'WI',
    label: 'Wisconsin',
  },
  {
    value: 'WY',
    label: 'Wyoming',
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

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
  const classes = useStyles();
  const [usState, setState] = React.useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };
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
          <TextField 
          required 
          id="city"
          name="city"
          label="City"
          fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
        <form className={classes.root} noValidate autoComplete="off">
      
        <TextField
          id="standard-select-currency"
          select
          required
          label="Select"
          value={usState}
          onChange={handleChange}
          helperText="Please Select your State"
        >
          {usStates.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </form>
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
