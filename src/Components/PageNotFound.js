import React, { Component } from 'react';
// import "../stylesheets/App.css"

// COMPONENTS
import Navigation from './Navigation';
import Footer from './Footer';

class PageNotFound extends Component {
  render() {
    return (
      <div className="page-container">

        <Navigation originPage='home'/>

        <div className="body-container">
          <h1 className="page-not-found-h1">Ru-roh! Page not found. Try again.</h1>
        </div>

        <Footer />
      </div>
    );
  }
}

export default PageNotFound;