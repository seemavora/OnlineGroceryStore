import React, { Component } from 'react';
import Checkout from './Checkout';

export default class Transaction extends Component {
    render(){
        return (
            <body>
                Payment Method
                <Checkout/>
            </body>
              
          );
    }
}

