import React, { Component } from 'react';
import { Router } from "react-router-dom";
import RouterMap from '../src/router/routerMap'
import BaseLayout from './layout/BaseLayout'
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <BaseLayout>
            <RouterMap></RouterMap>
        </BaseLayout>
      </Router>
    );
  }
}
export default App;