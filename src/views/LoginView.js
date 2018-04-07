import * as React from 'react';
import logo from './logo.svg';

export default class LoginView extends React.Component<any, any>  {

  constructor() {
    super();
  }

  render() {
    return (      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Teste de ver como que worka</p>
      </div>);
    );
  }
}
