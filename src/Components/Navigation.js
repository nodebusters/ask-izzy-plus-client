import React from "react";
import header from "../Images/banners/atsi.png";
import logo from '../Images/logo/ask-izzy-logo-edited.svg'
// import logo from './ask-izzy-logo.png'
// import logo from './ask-izzy-logo-original.svg'

const Navigation = () => {

  return (
    <div className="header-wrapper">
      <div className="header-bar">
     {/*    <span className="quick-exit-left" /> */}
        <span className="quick-exit-right">
          <a href="logout">Logout</a>
        </span>
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
};

export default Navigation;