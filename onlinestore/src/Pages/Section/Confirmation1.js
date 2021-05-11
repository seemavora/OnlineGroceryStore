import { React, Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Paper,
  Link,
  Box,
  Grid,
  Typography,
  styled,
  Container,
} from '@material-ui/core';

const BackgroundBox = styled(Box)({
  //backgroundImage: 'url(/images/lettuce.png)',
  //background: 'linear-gradient(0.25turn, #dcedc8, #c5e1a5, #aed581)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  backgroundAttachment: 'fixed',
  height: '600px',
  width: '100%',
});

const ConfContainer = styled(Box)({
  //background: 'linear-gradient(0.25turn, #dcedc8)',
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

// function getStepContent(step) {
//   switch (step) {
//     case 0:
//       return <AddressField />;
//     case 1:
//       return <CardInfo />;
//     default:
//       throw new Error('Unknown step');
//   }
// }

function Review() {
  const classes = useStyles();
  //   const [activeStep, setActiveStep] = React.useState(0);

  //   const handleNext = () => {
  //     setActiveStep(activeStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep(activeStep - 1);
  //   };

  return (
    <BackgroundBox>
      <ConfContainer>
        <br />
        <br />
        <Grid>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Grid>
            <Grid item xs={12} align="center" justify="center">
              <Typography variant="h5" gutterBottom item xs={12}>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1" justify="center">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </ConfContainer>
      <br />
      <Copyright />
    </BackgroundBox>
  );
}

export default class Confirmation extends Component {
  render() {
    return (
      <Grid container>
        <Review />
      </Grid>
    );
  }
}
