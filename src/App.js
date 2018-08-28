import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import {
  Login,
  Profile,
  Landing,
  Settings,
  Links,
  Policies,
  SRCInfo,
  ComingSoon,
} from './Pages'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/policies" component={Policies} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/links" component={Links} />
          <Route exact path="/srcInfo" component={SRCInfo} />
          <Route exact path="/comingSoon" component={ComingSoon} />
        </Switch>
      </Router>
    );
  }
}



export default App;
