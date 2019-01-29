import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './stylesheets/App.css';
import history from './history';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>

          <Route exact path="/" component={HomePage} />          
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;