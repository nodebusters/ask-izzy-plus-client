import React, { Component } from "react";

// COMPONENTS
import LogOut from "./LogOut";
import Banner from "./Banner";

class Navigation extends Component {
  render() {
    // From props read the originPage attribute, render Logout if logged in else render Register button
    const { originPage } = this.props;
    return (
      <div className="header-wrapper">
        <div className="header-bar">
          {originPage === "dashboard" && (
            <span className="quick-exit-right">
              <LogOut />
            </span>
          )}
          {originPage === "home" && (
            <span className="quick-exit-right">
              <a href="other-link">Register</a>
            </span>
          )}
        </div>

        {/* Import Image Wrapper w/ random hero image & Ask Izzy Plus logo */}
        <Banner />
      </div>
    );
  }
}

export default Navigation;