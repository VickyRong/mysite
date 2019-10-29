import React, { Component } from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'  
import NavBar from './components/NavBar/NavBar'
import './App.css';


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
    </Router>
    );
  }
}

export default App;