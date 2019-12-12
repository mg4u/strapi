import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container, Heading, Box } from "gestalt";
import './App.css';
import 'gestalt/dist/gestalt.css'
import Strapi from 'strapi-sdk-javascript/build/main'
import SignIn from './signin';
import SignOut from './signout';
import CheckOut from './checkout';
import Navbar from './navbar';

class App extends Component {
  render() {
    return (
      
      <Container>
        <Box display="flex" justifyContent="center">
          <Heading color="maroon" >Main APP</Heading>
        </Box>
      </Container>
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
