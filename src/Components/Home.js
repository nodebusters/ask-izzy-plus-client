import React, { Component } from 'react';
import "../stylesheets/Home.css";
import Navigation from './Navigation';
import Login from './Login';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      // CONTAINER: ENTIRE PAGE (DODGERBLUE)
      <div className="page-container">

        {/* HEADER: NAVIGATION BAR/HERO IMAGE/LOGO */}
        <Navigation originPage='home'/>
      
        {/* CONTAINER: MAIN */}
        <div className="body-container">
          {/* HEADER: ASK IZZY */}
          <h1>Welcome to Ask Izzy Plus</h1>
          {/* ASK IZZY PLUS: LOGIN BUTTON VIA GOOGLE OAUTH */}
          <Login />
        </div>
        
        {/* FOOTER: Main Ask Izzy Links */}
        <Footer />
      </div>
    );
  }
}

export default Home;