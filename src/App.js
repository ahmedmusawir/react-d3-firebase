import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import Circle from './containers/Circle';
import Firebase from './containers/Firebase';

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
        <Router>
          <div className="contact-context-app">
            <Header branding={name} />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/firebase" component={Firebase} />
                <Route exact path="/circle" component={Circle} />
                {/* <Route exact path="/about" component={About} /> */}
                {/* <Route component={NotFound404} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
