import React, { Component } from 'react';
// import "../stylesheets/App.css";

// COMPONENTS
import Navigation from './Navigation';
import Footer from './Footer';

class Register extends Component {
  render() {
    return (
      <div className="page-container">

        <Navigation originPage='home'/>

        <div className="body-container">
          <h1 className="home-register">How to Register for Ask Izzy</h1>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Register;