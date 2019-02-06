import React, { Component } from "react";
import GoogleLogin from "react-google-login";
// import axios from 'axios';
import history from "../history";

// REACT-GOOGLE-LOGIN: Google oAUth Login Component (required: clientId, onSuccess and onFailure callback)
// FIXME: Rename LogIn component and filename to Login ???
class AdminLogIn extends Component {
  responseGoogle = response => {
    // console.log(response.tokenId);
    localStorage.setItem("token", response.tokenId);
    history.push("/admin/dashboard");
  };

  errorGoogle = response => {
    console.log(response);
  };

  render() {
    const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return (
      <div className="login-button-container">
        <GoogleLogin
          clientId={googleClient}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="login-button">Login</button>
          )}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.errorGoogle}
        />
        <div className="toggle-login-container">
          <a className="toggle-login" href="/home">Are you a Service Provider?</a>
        </div>
      </div>
    );
  }
}

export default AdminLogIn;