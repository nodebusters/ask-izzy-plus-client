import React, { Component } from 'react';

// import "../stylesheets/AdminHome.css";

import Navigation from './Navigation';
import AdminLogIn from './AdminLogIn';
import Footer from './Footer';
import heart from '../Images/app/heart.png';
class Admin extends Component {
  render() {
    return (

      <div className="page-container">
        <Navigation originPage="home"/>

        <div className="body-container">
          <h1>Welcome to Ask Izzy Plus, Infoxchange</h1>
          <div className="homepage-icon">
              <img src={heart} alt="Homepage icon" />
          </div>
          <AdminLogIn />
        </div>

        <Footer />
      </div>
    );
  }
}
export default Admin;