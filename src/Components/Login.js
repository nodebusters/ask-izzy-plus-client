import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import history from "../history";

class Login extends Component {
  responseGoogle = response => {
    localStorage.setItem("token", response.tokenId);
    history.push("/dashboard");
  };

  errorGoogle = response => {
    console.log(response);
  };

  handleGoogleLogin = () => {
    console.log("Successfully clicked!");
  };
  render() {
    const googleClient = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    return (
      <div className="login-button-container">
        {/* <button className="login-button" onClick={this.handleGoogleLogin}>
          Login
        </button>
        <div className="forgotten-password">
          <a href="forgot-password">Forgot Password?</a>
        </div> */}

        <GoogleLogin
          clientId={googleClient}
          render={renderProps => (
            <button onClick={renderProps.onClick} className="login-button">Login</button>
          )}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.errorGoogle}
          className="login-button"
        />
        {/* <div className="forgotten-password">
          <a href="forgot-password">Forgot Password?</a>
        </div> */}
      </div>
    );
  }
}

export default Login;
