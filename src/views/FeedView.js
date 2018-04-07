import React, { Component } from 'react';

export default class FeedView extends Component {

  constructor() {
    super();
  }

  render() {
    return (      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Teste de ver como que worka</p>
      </div>);
  }
}

export { FeedView };
