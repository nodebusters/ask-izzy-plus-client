import React, { Component } from 'react';

// import "../stylesheets/Admin.css";

import Navigation from './Navigation';
import AdminLogIn from './AdminLogIn';
import Footer from './Footer';

class Admin extends Component {
  render() {
    return (

      <div className="page-container">
        <Navigation originPage="home"/>

        <div className="body-container">
          <h1>Welcome to Ask Izzy Plus, Infoxchange</h1>
          <AdminLogIn />
        </div>

        <Footer />
      </div>
    );
  }
}
export default Admin;