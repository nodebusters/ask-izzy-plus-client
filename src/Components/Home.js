import React, { Component } from 'react';
import header from "../img/header.png";
import logo from '../img/askizzy-logo.png'
import "../stylesheets/Home.css";

class Home extends Component {
  state = {
    value: "Hello World"
  }
  handleGoogleLogin = () => {
    console.log('Successfully clicked!')
  }
  render() {
    return (
      // CONTAINER: ENTIRE PAGE (DODGERBLUE)
      <div className="homepage-container">

        {/* CONTAINER: MAIN */}
        <div className="body-container">

          {/* HEADER: NAVIGATION BAR/HERO IMAGE */}
          <div className="header-wrapper">
            <div className="header-bar">
              <span className="quick-exit-left">
              </span>
              <span className="quick-exit-right">
                <a href="logout">Logout</a>
              </span>
            </div>

            <div className="image-wrapper">
              <div className="hero-image">
                <img src={header} />
              </div>
              <div className="logo-image">
               <img src={logo} />
              </div>
            </div>
          </div>
          
          {/* HEADER: ASK IZZY */}
          <h1>Welcome to Ask Izzy Plus</h1>

          {/* ASK IZZY PLUS: LOGIN VIA GOOGLE OAUTH */}
          <div className="login-button-container">
          <button className="login-button" onClick={this.handleGoogleLogin}>Login</button>

          <div className="forgotten-password">
            <a href="forgot-password">Forgot Password?</a>
          </div>
        </div>

        </div>
        <footer className="footer-container">
            <ul className="footer-list">
              <li>
                <a href="about">About Ask Izzy Plus</a>
              </li>
              <li>
                <a href="terms">Terms</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
              <li>
                <a href="resources">Online Resources</a>
              </li>
            </ul>
        </footer>

      </div>
    );
  }
}

export default Home;