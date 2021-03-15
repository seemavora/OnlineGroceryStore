import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage'
export default function Routes(props){
  const routes = [
    {
      path:'/',
      component: Homepage
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