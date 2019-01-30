import React, { Component } from 'react';
import "./Home.css";
// import "./Home-2.css";
import Navigation from './Navigation';
import Login from './Login-2';
import Footer from './Footer';

class Home extends Component {
  state = {
  }
  handleGoogleLogin = () => {
    console.log('Successfully clicked!')
  }
  render() {
    return (
      // CONTAINER: ENTIRE PAGE (DODGERBLUE)gi
      <div className="homepage-container">
        <Navigation />
      
        {/* CONTAINER: MAIN */}
        <div className="body-container">

          {/* HEADER: NAVIGATION BAR/HERO IMAGE */}
          
          {/* HEADER: ASK IZZY */}
          <h1>Welcome to App</h1>

          {/* ASK IZZY PLUS: LOGIN VIA GOOGLE OAUTH */}
          <Login />

        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Home;