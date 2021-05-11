import React, { Component } from 'react';
import { makeStyles, styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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