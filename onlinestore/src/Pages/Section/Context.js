import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Fresh Chicken Thighs",
        src: "../images/4.png",
        description: "Pilgrim's Boneless Fresh Chicken Thighs", 
        content:
          "Howdy, this is random text to see if it will go off the page, ",
        price: 23,
        weight: 1.8, //lbs
        count: 1,
      },
      {
        _id: "2",
        title: "Chicken & Vegetable Stir Fry",
        src: "../images/5.png",
        description: "Healthy Choice Chicken & Vegetable Stir Fry",
        content: "Howdy, this is random text to see if it will go off the page",
        price: 5.50,
        weight: 0.57, //lbs
        count: 1,
      },
      {
        _id: "3",
        title: "100% Whole Grain Bread",
        src: "../images/6.png",
        description: "Nature's Own 100% Whole Grain",
        content: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        price: 23,
        weight: 1.25, //lbs
        count: 1,
      },
      {
        _id: "4",
        title: "Fresh Chicken Thighs",
        src: "../images/4.png",
        description: "Pilgrim's Boneless Fresh Chicken Thighs",
        content: "------------------------------------------------------------------",
        price: 23,
        weight: 1.8, //lbs
        count: 1,
      },
      {
        _id: "5",
        title: "Chicken & Vegetable Stir Fry",
        src: "../images/5.png",
        description: "Healthy Choice Chicken & Vegetable Stir Fry",
        content: "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~",
        price: 30,
        weight: 0.57, //lbs
        count: 1,
      },
      {
        _id: "6",
        title: "100% Whole Grain Bread",
        src: "../images/6.png",
        description: "Nature's Own 100% Whole Grain",
        content: "------------------------------------------------------------------",
        price: 23,
        weight: 1.25, //lbs
        count: 1,
      },
    ],
    cart: [],
    priceTotal: 0,
    weightTotal: 0,
  };

  addCart = (id) => {
    const { products, cart } = this.state;
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data] });
    } else {
      alert("The product has been added to cart.");
    }
  };

  reduction = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count === 1 ? (item.count = 1) : (item.count -= 1);
      }
    });
    this.setState({ cart: cart });
    this.getPriceTotal();
  };

  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getPriceTotal();
  };

  removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      const { cart } = this.state;
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });
      this.setState({ cart: cart });
      this.getPriceTotal();
    }
  };

  getPriceTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ priceTotal: res });
  };

  getWeightTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.weight * item.count;
    }, 0);
    this.setState({ weightTotal: res });
  };

  componentDidUpdate() {
    localStorage.setItem("dataCart", JSON.stringify(this.state.cart));
    localStorage.setItem("dataTotal", JSON.stringify(this.state.total));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ total: dataTotal });
    }
  }

  render() {
    const { products, cart, priceTotal, weightTotal} = this.state; 

    const { addCart, reduction, increase, removeProduct, getPriceTotal, getWeightTotal} = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          priceTotal,
          weightTotal,
          getPriceTotal,
          getWeightTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
