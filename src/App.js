import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginView } from './views/LoginView';
import { FeedView } from './views/FeedView';
import { NotificationView } from './views/NotificationView';

class App extends Component {
  render() {
    return (
       <BrowserRouter
          forceRefresh={false}>
          <Switch>
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/notifications" component={NotificationView}/>
            <Route component={FeedView}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
