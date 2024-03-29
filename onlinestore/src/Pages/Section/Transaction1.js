import React, { Component, useState } from 'react';
import axios from 'axios';
import Checkout from './Checkout1';
import { makeStyles, styled } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  Grid,
  Box,
  Link,
  Button,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import AddressField from './Checkout1';

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
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const BackgroundBox = styled(Box)({
  //backgroundImage: 'url(/images/lettuce.png)',
  //background: 'linear-gradient(0.25turn, #dcedc8, #c5e1a5, #aed581)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  height: 'auto',
  width: '100%',
});

const StylishBox = styled(Box)({
  //background: 'linear-gradient(0.25turn, #dcedc8, #c5e1a5, #aed581)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(165, 188, 163, .3)',
  color: 'grey',
  width: '50%',
  height: 'auto',
  padding: '0 30px',
  marginTop: '50px',
  marginLeft: 'auto',
  marginRight: 'auto',
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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

// function CardInfo() {
//   const classes = useStyles();
//   return (
//     <StylishBox>
//       <Typography variant="h6">
//         Payment Method
//       </Typography>
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardName"
//             label="Name on card"
//             fullWidth
//             autoComplete="name"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cardNumber"
//             label="Card number"
//             fullWidth
//             autoComplete="number"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cvv"
//             label="CVV"
//             helperText="Last three digits on the right side of the signature strip"
//             fullWidth
//             autoComplete="cc-csc"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="expDate"
//             label="Expiry date"
//             fullWidth
//             autoComplete="cc-exp"
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <TextField
//             required
//             id="cupon"
//             label="Cupon Code"
//             fullWidth
//             autoComplete="number"
//           />
//         </Grid>
//         <Grid item xs={6}>
//           <Button
//             href="/Confirmation"
//             variant="contained"
//             color="primary"
//             // onChange={{saveTransaction}}
//             onClick={{saveTransaction}}
//             className={classes.button}
//           >
//             Submit
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <FormControlLabel
//             control={<Checkbox color="secondary" name="saveCard" value="yes" />}
//             label="Remember credit card details for next time"
//           />
//         </Grid>
//       </Grid>
//     </StylishBox>
//   );
// }

export default function Transaction() {
  let history = useHistory();
  const [userEmail, setUserEmail] = useState(localStorage.getItem('email'));
  const [purchaseTotal, setPurchaseTotal] = useState(
    localStorage.getItem('dataTotal')
  );
  const classes = useStyles();

  async function saveTransaction(e) {
    e.preventDefault();

    try {
      const transactionData = {
        userEmail,
        purchaseTotal,
      };
      // userEmail = localStorage.getItem('email');
      // purchaseTotal = localStorage.getItem('dataTota');
      await axios.post('http://localhost:5000/transaction/', transactionData); //posts on server
      // localStorage.getItem("email", email);

      // await axios.post("http://localhost:5000/auth/isAdmin", registerData);
      // await getIsAdmin();

      // redirect
      history.push('/Confirmation');
    } catch (err) {
      console.error(err);
    }
  }

  // render() {
  return (
    <BackgroundBox>
      <Grid container>
        <AddressField />
        {/* <CardInfo /> */}
        <StylishBox>
          <Typography variant="h6">Payment Method</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="number"
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
                label="Expiry date"
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
                autoComplete="number"
              />
            </Grid>
            <Grid item xs={6}>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  // onChange={{saveTransaction}}
                  onClick={saveTransaction}
                  className={classes.button}
                >
                  Place Order
                </Button>
              </div>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
        </StylishBox>
        <Grid item xs={12}>
          <br />
          <Copyright />
        </Grid>
      </Grid>
    </BackgroundBox>
  );
  // }
}
