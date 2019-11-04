import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';

class SolutionIndex extends Component {
    render(){
      let { routes } = this.props;
      return (
          <Switch>
            {routes.map((route, i) => (
              <Route key={i} 
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
               />
            ))}
          </Switch>
      );
    }
}

export default SolutionIndex