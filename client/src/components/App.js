import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import 'gestalt/dist/gestalt.css'
import SignIn from './signin';
import SignOut from './signout';
import CheckOut from './checkout';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

const Root = () => (
    <Router>
  <React.Fragment>
    <Navbar/>
      <Switch>
        <Route component={App} exact path="/"/>
        <Route component={SignIn} path="/signin"/>
        <Route component={SignOut} path="/signout"/>
        <Route component={CheckOut} path="/checkout"/>
      </Switch>
  </React.Fragment>
    </Router>
)

export default Root;
