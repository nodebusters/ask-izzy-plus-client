import React, { Component } from 'react';
import "../stylesheets/Home.css";

// COMPONENTS
import Navigation from './Navigation';
import Login from './Login';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div className="page-container">

        <Navigation originPage='home'/>

        <div className="body-container">
          <h1 className="home-headline">Welcome to Ask Izzy Plus, User</h1>
          <Login />
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;