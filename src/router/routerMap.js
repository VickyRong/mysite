import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import routes from './routes.js'
class routerMap extends Component {
    render(){
      return (
        <Switch>
          { routes.map((route,i) => 
              <Route key={i}
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
          ) }
        </Switch>
      )
    }
}

export default routerMap;