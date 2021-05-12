import React, { Component, useState, useEffect } from "react";
import axios from 'axios';

export const DataContext = React.createContext();

// function Context() {
//   const [items, setItem] = useState([]);
//   async function getItems() {
//     const itemRes = await axios.get("http://localhost:5000/item/");

//     setItem(itemRes.data);
//   }
//   return getItems();
//   //  useEffect(() => {
//   //    getItems();
//   //  }, []);
// }
export class DataProvider extends Component {
  constructor(props) {

    super(props);
   
  }
  state = {
    products: [
      {
        _id: "1",
        title: "Fresh Bananas",
        src: "../images/8.png",
        description: "Organic Bananas - From Ecuador",
        content: "------------------------------------------------------------------",
        price: 1.50,
        weight: 2, //lbs
        count: 1,
      },
      {
        _id: "2",
        title: "Good & Gather Apples",
        src: "../images/9.png",
        description: "Bag of Fresh, Organic Apples",
        content: "------------------------------------------------------------------",
        price: 3.50,
        weight: 2, //lbs
        count: 1,
      },
      {
        _id: "3",
        title: "California Oranges",
        src: "../images/16.png",
        description: "Bag of Fresh Oranges",
        content: "------------------------------------------------------------------",
        price: 4,
        weight: 4, //lbs
        count: 1,
      },
      {
        _id: "4",
        title: "Fresh Chicken Thighs",
        src: "../images/4.png",
        description: "Pilgrim's Boneless Fresh Chicken Thighs",
        content: "------------------------------------------------------------------",
        price: 6.90,
        weight: 5.5, //lbs
        count: 1,
      },
      {
        _id: "5",
        title: "Foster Farms Crispy Wings",
        src: "../images/12.png",
        description: "Take Out Chicken Wings w/ Buffalo Sauce",
        content: "------------------------------------------------------------------",
        price: 17.50,
        weight: 4, //lbs
        count: 1,
      },
      {
        _id: "6",
        title: "Morning Star Veggie Burgers",
        src: "../images/13.png",
        description: "Veggie Burgers Chipotle Black Bean (12)",
        content: "------------------------------------------------------------------",
        price: 14.50,
        weight: 3.2, //lbs
        count: 1,
      },
      {
        _id: "7",
        title: "Smoked Boneless Cooked Ham",
        src: "../images/1.png",
        description: "Cooked Ham with Natural Juices",
        content: "------------------------------------------------------------------",
        price: 12.60,
        weight: 2, //lbs
        count: 1,
      },
      {
        _id: "8",
        title: "Organic Grade A Brown Eggs",
        src: "../images/3.png",
        description: "Brown Eggs (10)",
        content: "------------------------------------------------------------------",
        price: 4.00,
        weight: 1.5, //lbs
        count: 1,
      },
      {
        _id: "9",
        title: "Fresh Atlantic Salmon",
        src: "../images/2.png",
        description: "Atlantic Salmon, Farm-Raised",
        content: "------------------------------------------------------------------",
        price: 10,
        weight: 1, //lbs
        count: 1,
      },
      {
        _id: "10",
        title: "Kirkland Cooked Shrimp",
        src: "../images/11.png",
        description: "Farmed-Raised, Cooked, Tail-On Shrimp (40 Counts)",
        content: "------------------------------------------------------------------",
        price: 15.50,
        weight: 2, //lbs
        count: 1,
      },
      {
        _id: "11",
        title: "Wild Alaskan Pacific Cod",
        src: "../images/10.png",
        description: "Frozen Pacific Cod",
        content: "------------------------------------------------------------------",
        price: 20,
        weight: 2, //lbs
        count: 1,
      },
      {
        _id: "12",
        title: "Chicken & Vegetable Stir Fry",
        src: "../images/5.png",
        description: "Healthy Choice Chicken & Vegetable Stir Fry",
        content: "------------------------------------------------------------------",
        price: 5.50,
        weight: 0.57, //lbs
        count: 1,
      },
      {
        _id: "13",
        title: "100% Whole Grain Bread",
        src: "../images/6.png",
        description: "Nature's Own 100% Whole Grain",
        content: "------------------------------------------------------------------",
        price: 2.50,
        weight: 1.25, //lbs
        count: 1,
      },
      {
        _id: "14",
        title: "Golden Star Jasmine Rice",
        src: "../images/14.png",
        description: "Prime Grade Jasmine Rice",
        content: "------------------------------------------------------------------",
        price: 6.50,
        weight: 5, //lbs
        count: 1,
      },
      {
        _id: "15",
        title: "Ritz Crackers Family Size",
        src: "../images/15.png",
        description: "Ritz Crackers (12 Stacks)",
        content: "------------------------------------------------------------------",
        price: 2.50,
        weight: 1.2, //lbs
        count: 1,
      },
      {
        _id: "16",
        title: "Borden 1% Lowfat Milk",
        src: "../images/7.png",
        description: "1% Lowfat Milk",
        content: "------------------------------------------------------------------",
        price: 2,
        weight: 2, //lbs
        count: 1,
      },
    ],
    cart: [],
    priceTotal: 0,
    weightTotal: 0,
    name: '',
    weight: 0,
    price: 0,
    quantity: 0,
    description: '',
    dbItems: []
    // shipping: 0,
  };
  getItemsFromDB(){
    axios.get('http://localhost:5000/item/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          weight: res.data.weight,
          price: res.data.price,
          quantity: res.data.quantity,
          description: res.data.description
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  addCart = (id) => {
    const { products, cart } = this.state;
    const {dbItems} = this.getItemsFromDB;
  
    // const { dbItems } = this.state;
    // dbItems = Context();
    // console.log(dbItems);
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      this.setState({ cart: [...cart, ...data, ...dbItems] });
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
    this.getWeightTotal();
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
    this.getWeightTotal();

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
      this.getWeightTotal();

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
    localStorage.setItem("dataTotal", JSON.stringify(this.state.priceTotal));
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart !== null) {
      this.setState({ cart: dataCart });
    }
    const dataTotal = JSON.parse(localStorage.getItem("dataTotal"));
    if (dataTotal !== null) {
      this.setState({ priceTotal: dataTotal });
    }
  }

  componentWeightUpdate() {
    localStorage.setItem("weightCart", JSON.stringify(this.state.cart));
    localStorage.setItem("weightTotal", JSON.stringify(this.state.weightTotal));
  }

  componentWeightMount() {
    const dataWeightCart = JSON.parse(localStorage.getItem("weightCart"));
    if (dataWeightCart !== null) {
      this.setState({ cart: dataWeightCart });
    }
    const dataWeightTotal = JSON.parse(localStorage.getItem("weightTotal"));
    if (dataWeightTotal !== null) {
      this.setState({ weightTotal: dataWeightTotal });
    }
  }

  render() {
    const { products, cart, priceTotal, weightTotal } = this.state;

    const { addCart, reduction, increase, removeProduct, getPriceTotal, getWeightTotal } = this;
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
