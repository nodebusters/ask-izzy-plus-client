import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './stylesheets/App.css';
import history from './history';
import LogIn from './Components/LogIn';
import Dashboard from './Components/Dashboard';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <nav>
              <LogIn/>
            <li className="navigation-links"><Link to="/">Home</Link> </li>
          </nav>
          
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/dashboard" component={Dashboard} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;