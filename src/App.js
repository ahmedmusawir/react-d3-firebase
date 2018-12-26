import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React D3 Firebase',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{name}</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
