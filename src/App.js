import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginView } from './views/LoginView';

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
