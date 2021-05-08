import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Inventory from "./Pages/Inventory/Inventory";
import CustomerInventory from "./Pages/CustomerInventory/CustomerInventory";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import CartScreen from "./Pages/Cart/CartScreen";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
export default function Routes(props) {
  const routes = [
    {
      path: "/",
      component: Homepage,
    },
    {
      path: "/SignUp",
      component: SignUp,
    },
    {
      path: "/Login",
      component: Login,
    },
    {
      path: "/Inventory",
      component: Inventory,
    },
    {
      path:'/TransactionHistory',
      component: TransactionHistory
    },
    {
      path: "/Contact",
      component: Contact,
    },
    {
      path: "/Cart",
      component: CartScreen,
    },
    {
      path: "/CustomerInventory",
      component: CustomerInventory
    },
  ];

  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              exact
              key={index}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}
