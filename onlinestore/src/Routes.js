import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Inventory from "./Pages/Inventory/Inventory";
import CustomerInventory from "./Pages/CustomerInventory/CustomerInventory";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import CartScreen from "./Pages/Cart/CartScreen";
import TransactionHistory from "./Pages/TransactionHistory/TransactionHistory";
import AuthContext from "./Context/AuthContext";
// export default function Routes(props) {
//   const routes = [
//     {
//       path: "/",
//       component: Homepage,
//     },
//     {
//       path: "/SignUp",
//       component: SignUp,
//     },
//     {
//       path: "/Login",
//       component: Login,
//     },
//     {
//       path: "/Inventory",
//       component: Inventory,
//     },
//     {
//       path:'/TransactionHistory',
//       component: TransactionHistory
//     },
//     {
//       path: "/Contact",
//       component: Contact,
//     },
//     {
//       path: "/Cart",
//       component: CartScreen,
//     },
//     {
//       path: "/CustomerInventory",
//       component: CustomerInventory,
//     },
//   ];

//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         {routes.map((route, index) => {
//           return (
//             <Routes
//               exact
//               key={index}
//               path={route.path}
//               component={route.component}
//             />
//           );
//         })}
//       </Switch>
//     </Router>
//   );
// }

function Routes() {
  const { loggedIn } = useContext(AuthContext);
  const {isAdmin } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route exact path="/Contact">
          <Contact/>
        </Route>

        {(loggedIn === false)&& (
          <>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          
          </>
        )}
        {(loggedIn === true)&& (
          <>
            <Route path="/customerinventory">
              <CustomerInventory />
            </Route>
            <Route path="/cart">
              <CartScreen />
            </Route>
          </>
        )}
         {(loggedIn === true && isAdmin === true )&& (
          <>
            <Route path="/transactionHistory">
              <TransactionHistory />
            </Route>
            <Route path="/adminInventory">
              <Inventory />
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
