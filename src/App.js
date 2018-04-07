import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <BrowserRouter
          forceRefresh={false}>
          <Switch>
            <Route exact path="/login" component={LoginView} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
