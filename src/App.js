import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import './stylesheets/App.css';
import history from './history';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Admin from './Components/Admin';
import AdminDashboard from './Components/AdminDashboard';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Route exact path="/" component={HomePage} />          
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />

        </React.Fragment>
      </Router>
    );
  }
}

export default App;