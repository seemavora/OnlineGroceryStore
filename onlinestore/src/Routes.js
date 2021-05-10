import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Inventory from "./Pages/Inventory/Inventory";
import CustomerInventory from "./Pages/CustomerInventory/CustomerInventory";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
import Products from "./Pages/Section/Products";
import Details from "./Pages/Section/Details";
import Cart from "./Pages/Section/Cart";
import { DataProvider } from "./Pages/Section/Context";

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
      path: "/TransactionHistory",
      component: TransactionHistory,
    },
    {
      path: "/Contact",
      component: Contact,
    },

    {
      path: "/CustomerInventory",
      component: CustomerInventory,
    },
    {
      path: "/product",
      component: Products,
    },
    {
      path: "/product/:id",
      component: Details,
    },
    {
      path: "/cart",
      component: Cart,
    },
  ];

  return (
    <DataProvider>
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
    </DataProvider>
  );
}
