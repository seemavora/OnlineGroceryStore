import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Product 1",
        src: "./images/4.png",
        description: "This is a description",
        content:
          "Howdy, this is random text to see if it will go off the page, ",
        price: 23,
        count: 1,
      },
      {
        _id: "2",
        title: "Product 2",
        src: "./images/5.png",
        description: "I am Larry",
        content: "Howdy, this is random text to see if it will go off the page",
        price: 30,
        count: 1,
      },
      {
        _id: "3",
        title: "Product 3",
        src: "./images/6.png",
        description: "This is bread",
        content: "Howdy",
        price: 23,
        count: 1,
      },
      {
        _id: "4",
        title: "Product 4",
        src: "./images/4.png",
        description: "This is a description",
        content: "Howdy",
        price: 23,
        count: 1,
      },
      {
        _id: "5",
        title: "Product 5",
        src: "./images/5.png",
        description: "I am Larry",
        content: "Howdy",
        price: 30,
        count: 1,
      },
      {
        _id: "6",
        title: "Product 6",
        src: "./images/6.png",
        description: "This is a description",
        content: "Howdy",
        price: 23,
        count: 1,
      },
    ],
    cart: [],
    total: 0,
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
    this.getTotal();
  };
  increase = (id) => {
    const { cart } = this.state;
    cart.forEach((item) => {
      if (item._id === id) {
        item.count += 1;
      }
    });
    this.setState({ cart: cart });
    this.getTotal();
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
      this.getTotal();
    }
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
    this.setState({ total: res });
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
    const { products, cart, total } = this.state;

    const { addCart, reduction, increase, removeProduct, getTotal } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          addCart,
          cart,
          reduction,
          increase,
          removeProduct,
          total,
          getTotal,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
