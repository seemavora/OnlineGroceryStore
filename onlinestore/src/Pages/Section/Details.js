import React, { Component } from "react";
import { DataContext } from "./Context";
import { Link } from "react-router-dom";
import "./Details.css";

export class Details extends Component {
  static contextType = DataContext;
  state = {
    product: [],
  };

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products;
      const data = res.filter((item) => {
        return item._id === this.props.match.params.id;
      });
      this.setState({ product: data });
    }
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    console.log(this.context.products);
    const { product } = this.state;
    const { addCart } = this.context;
    return (
      <>
      {console.log(this.props)}
        {product.map((item) => (
          <div className="details" key={item._id}>
            <img src={item.src ? item.src : "../images/noImage.png"}  alt="" />
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>${item.price}</span>
              </div>
              <p>Weight: {item.weight} lbs</p>
              <p>{item.description}</p>
              <p>{item.content ? item.content : "------------------------------------------------------------------"}</p>
              <Link
                to="/cart"
                className="cart"
                onClick={() => addCart(item._id)}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default Details;
