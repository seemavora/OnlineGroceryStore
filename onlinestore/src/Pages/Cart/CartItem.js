import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img
          src="./images/1.png"
          width="200"
          height="100"
          alt="Product Name"
        ></img>
      </div>

      <p>Product 1</p>

      <p className="cartitem__price">$8.99</p>

      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button className="cartitem__deleteBtn">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
        ></link>
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  );
};
export default CartItem;
