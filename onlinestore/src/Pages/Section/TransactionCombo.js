import React, { Component } from 'react';
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
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import Transaction from './Transaction1';
import PaymentIcon from '@material-ui/icons/Payment';
import IconButton from '@material-ui/core/IconButton';


const PaymentButton = styled(IconButton)({
  color: 'Green',
});

  function CollapseTransaction(){
    const [expand, setExpand] = React.useState(false);
  
    const handleClick = () => {
      setExpand((prev) => !prev);
    };
  
    return (
      <div>
          <PaymentButton aria-label="Payment" onClick={handleClick}>
              <PaymentIcon/>
               Payment
              </PaymentButton>
        <div>
          <Collapse in={expand} collapsedHeight={40}>
            <Transaction/>
          </Collapse>
        </div>
      </div>
    );
  }
  
export default class TransactionCombo extends Component {
    render() {
      return (
        <Grid container>
          <CollapseTransaction/>
        </Grid>
      );
    }
  }