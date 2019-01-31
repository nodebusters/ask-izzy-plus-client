import React, { Component } from "react";
import header from "../Images/banners/food.png";
import logo from '../Images/logo/ask-izzy-logo-edited.svg'
// import logo from './ask-izzy-logo.png'
// import logo from './ask-izzy-logo-original.svg'
import LogOut from './LogOut';

class Navigation extends Component {
  render() {
    const { originPage } = this.props
      return (
        <div className="header-wrapper">
        <div className="header-bar">
        { originPage === 'dashboard' && 
          <span className="quick-exit-right">
            <LogOut />
          </span>
        }
        { originPage === 'home' && 
          <span className="quick-exit-right">
            <a href="other-link">Other</a>
          </span>
        }
        </div>

        <div className="image-wrapper">
          <div className="hero-image">
            <img src={header} alt="Ask Izzy Plus banner" />
          </div>
          <div className="logo-image">
            <img src={logo} alt="Ask Izzy Plus logo"/>
          </div> 
        </div>
      </div>
    );
  }
};

export default Navigation;