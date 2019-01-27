import React, { Component } from 'react';
import LogIn from './LogIn';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <LogIn />
        </nav>
        <h1>Home Page.</h1>
      </React.Fragment>
    );
  }
}
export default HomePage;