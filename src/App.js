import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import history from './history';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/HomePage';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>

          <Route exact path="/" component={HomePage} />          
          <Route exact path="/dashboard" component={Dashboard} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;