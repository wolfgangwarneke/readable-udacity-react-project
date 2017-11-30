import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <h1>Home page</h1>
        )} />
        <Route exact path="/category" render={() => (
          <h1>Category route test</h1>
        )} />
      </div>
    );
  }
}

export default App;
