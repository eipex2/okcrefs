import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';
import { firebase } from './Firebase';

import {Loading} from './Components'

import {
  Login,
  Profile,
  Landing,
  Settings,
  RefStatus,
  Calendar,
  Rules,
  SRCInfo,
  Evaluations,
  Links
} from './Pages'

export const UserContext = React.createContext('GUEST')

class App extends Component {

  state = {loading:true}

  componentWillMount() {
    firebase.auth.onAuthStateChanged(user => {
      this.setState({ user, loading:false })
    })
  }

  render() {

    if(this.state.loading){
      return <Loading />
    }else{
      return (
        <UserContext.Provider value={this.state.user}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/rules" component={Rules} />
            <Route exact path="/srcInfo" component={SRCInfo} />
            <Route exact path="/evaluations" component={Evaluations} />
            <Route exact path="/links" component={Links} />
            <Route exact path="/policies" component={Profile} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/refstatus" component={RefStatus} />
          </Switch>
        </Router>
        </UserContext.Provider>
      );
    }
    
  }
}



export default App;
