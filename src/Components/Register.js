import React, { Component } from 'react';
// import "../stylesheets/App.css";

// COMPONENTS
import Navigation from './Navigation';
import Footer from './Footer';
import register from '../Images/app/register.png';
import about from '../Images/app/about-ask-izzy-plus.png';
import nodebusters from '../Images/app/nodebusters-logo-small.png';


class Register extends Component {
  render() {
    return (
      <div className="page-container">

        <Navigation originPage='home'/>

        <div className="body-container">
          <h1 className="home-register">About Ask Izzy Plus</h1>
          <p>Ask Izzy Plus is a self-service application for Infoxchange service providers.</p>
          <p>
             Users can login and update organisation, site and service contact details quickly and easily.
          </p>
          <div className="homepage-icon">
            <img src={register} alt="Register"/>
          </div>
          <h2>Register</h2>
          <p>To gain access to Ask Izzy using your Google account to login, please contact Infoxchange on askizzyplus.info@gmail.com.</p>

          <div className="homepage-icon">
            <img src={about} alt="About"/>
          </div>

          <h2>Feedback</h2>
          <p>This application was created by four web development students at Coder Academy.</p>
          <div className="homepage-icon">
            <a href="https://github.com/nodebusters"><img src={nodebusters} alt="Nodebusters"/></a>
          </div>
          <p>If you would like to view the code on GitHub or have any feedback, click the Nodebusters logo or the link in the footer to contact the developers!</p>

        </div>

        <Footer />
      </div>
    );
  }
}

export default Register;