import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';



import {
  Login,
  Profile,
  Landing,
  Settings
} from './Pages'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/policies" component={Profile} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </Router>
    );
  }
}



export default App;
