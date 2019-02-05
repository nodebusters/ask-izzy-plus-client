import React, { Component } from 'react';
// import "../stylesheets/Home.css";

// COMPONENTS
import Navigation from './Navigation';
import Login from './Login';
import Footer from './Footer';

class LandingPage extends Component {

  render() {
    return (
      <div className="page-container">

        <Navigation originPage='home'/>

        <div className="body-container">
          <h1> Welcome to Ask Izzy Plus</h1>
          <h2>Are you an...?</h2>
          <div className="root-container">
            <button className="user">User</button>
            <button className="admin">Admin</button>
          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default LandingPage;