import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import history from './history';
import Register from './Components/Register';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import AdminHome from './Components/AdminHome';
import AdminDashboard from './Components/AdminDashboard';
import PageNotFound from './Components/PageNotFound';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />   
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/admin" component={AdminHome} />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;