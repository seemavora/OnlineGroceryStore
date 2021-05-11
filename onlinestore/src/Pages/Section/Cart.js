import React, { Component } from "react";

import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import "./Details.css";
import "./Cart.css";
import TransactionCombo from './TransactionCombo'

export class Cart extends Component {
  static contextType = DataContext;

  componentDidMount() {
    this.context.getPriceTotal();
  }

  componentWeightMount() {
    this.context.getWeightTotal();
  }

  // shippingCalculated()
  // {
  //   <div className = "shipping"></div>
  //   if ({weightTotal} > 20)
  //   {
      
  //       shipping = 5;
  //       <h3>Shipping: $5.00 </h3>
  //   }
  //   else
  //   {
  //       shipping = 0;
  //       <h3>Shipping: Free</h3>
  //   }
    
  // }

  render() {
    const { cart, increase, reduction, removeProduct, priceTotal, weightTotal, shipping } = this.context;
    if (cart.length === 0) {
      return <h2 style={{ textAlign: "center" }}>No Products in Cart</h2>;
    } else {
      return (
        <>
          {cart.map((item) => (
            <div className="details cart" key={item._id}>
              <img src={item.src} alt="" />
              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
                <p>Weight: {item.weight * item.count} lbs</p>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className="amount">
                  <button className="count" onClick={() => reduction(item._id)}>
                    -
                  </button>
                  <span>{item.count}</span>
                  <button className="count" onClick={() => increase(item._id)}>
                    +
                  </button>
                </div>
              </div>
              <div className="delete" onClick={() => removeProduct(item._id)}>
                X
              </div>
            </div>
          ))}

          <div className = "subTotal">  
          <h3> </h3>
          <h3>Subtotal: $ {priceTotal} </h3>
          </div>
          
          <div className = "weightTotal">
            <h3></h3>
          <h3>Weight: {weightTotal} lbs </h3>
          </div> 
          
          {/* const weight = 20;
          <div className = "shipping">  
          <h3> </h3>
          if ({weightTotal} {">"} weight)
          {
            shipping = 5,
            <h3>Shipping: $5.00</h3>
          }
          else
          {
           shipping = 0,
            <h3>Shipping: Free </h3>
          }
          </div> */}

          <div className="priceTotal">
            <Link to="/payment">Payment</Link>
            <h3>Total: $ {priceTotal}</h3>
          </div>



          {/* <div className = "weightTotal">
            <div className="priceTotal">
              <h3>Weight: {weightTotal} lbs </h3>
            </div> 
              <Link to="/payment">Payment</Link>
              <h3>Total: $ {priceTotal}</h3>
          </div>  */}
        <TransactionCombo></TransactionCombo>
        </>
      );
    }
  }
}

export default Cart;
