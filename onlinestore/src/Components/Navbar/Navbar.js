import React, { useState, useContext } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";
import AuthContext from "../../Context/AuthContext";
import LogOutBtn from "../Buttons/LogOutBtn";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { loggedIn, isAdmin } = useContext(AuthContext); // check to see if loggedIn/isAdmin are fields (change to lets)
  // const checkContext = useContext(AuthContext);
  //
  const menuToggle = () => {
    setToggle(!toggle);
  };
  // console.log(checkContext);

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="" width="20" />
      </div>
      <div className="logo">
        <h1>
          <Link to="/">OFS</Link>
        </h1>
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <li>
            <Link to="/">Home</Link>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </li>
          {loggedIn === false && (
            <>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
          {loggedIn === true && (
            <>
              {isAdmin === 0 && (
                <>
                  <li>
                    <Link to="/CustomerInventory">Groceries</Link>
                  </li>
                  <li>
                    <Link to="/cart">Cart</Link>
                  </li>
                  <li className="close" onClick={menuToggle}>
                    <img src={Close} alt="" width="20" />
                    {/* <LogOutBtn /> */}
                  </li>
                </>
              )}

              {isAdmin === 1 && (
                <>
                  <li>
                    <Link to="/inventory">Inventory</Link>
                  </li>
                  <li>
                    <Link to="/TransactionHistory">Transactions</Link>
                  </li>
                  <li className="close" onClick={menuToggle}>
                    <img src={Close} alt="" width="20" />
                  </li>
                </>
              )}
              <LogOutBtn />
            </>
          )}
        </ul>
        <div className="nav-cart">
          <span>0</span>
          <Link to="/cart">
            <img src={CartIcon} alt="" width="20" />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
