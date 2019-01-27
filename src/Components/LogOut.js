import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
// import axios from 'axios';
import history from '../history';

class LogOut extends Component {
  logout = () => {
    // console.log(response.tokenId);
    localStorage.setItem('token', '');
    history.push('/')
  }

  render() {
    return (
      <React.Fragment>
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        >
        </GoogleLogout>
      </React.Fragment>
    );
  }
}
export default LogOut;