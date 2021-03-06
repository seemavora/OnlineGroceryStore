import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage'
import Inventory from './Pages/Inventory/Inventory';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
export default function Routes(props){
  const routes = [
    {
      path:'/',
      component: Homepage
    },
    {
      path:'/SignUp',
      component: SignUp
    },
    {
      path:'/Login',
      component: Login
    },
    {
      path:'/Inventory',
      component: Inventory
    }
  ]

  return (
    <Router>
        <Switch>
            {routes.map((route, index) => {
                return <Route exact key={index}
                    path={route.path} component={route.component} />
            })}
        </Switch>
    </Router>
)
}