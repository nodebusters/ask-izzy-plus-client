import React, { Component } from "react";
import history from "../history";

// COMPONENTS
import LogOut from "./LogOut";
import Banner from "./Banner";

class Navigation extends Component {
  redirect = () => {
    history.push("/register");
  };
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
              <a onClick={this.redirect} className="header-link">
                Register
              </a>
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