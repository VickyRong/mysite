import React , { Component } from 'react';
import {Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import routes from './routes.js'


class routerMap extends Component {
    render(){
      return (
        <Switch>
          { renderRoutes(routes) }
        </Switch>
      )
    }
}

export default routerMap;