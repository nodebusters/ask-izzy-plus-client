import React, { Component } from "react";

class Login extends Component {
  state = {
  }
  handleGoogleLogin = () => {
    console.log('Successfully clicked!')
  }
  render() {
    return (
      <div className="login-button-container">
        <button className="login-button" onClick={this.handleGoogleLogin}>Login</button>
        <div className="forgotten-password">
          <a href="forgot-password">Forgot Password?</a>
        </div>
      </div>
    );
  }
}

export default Login;