import React, { Component } from 'react';
import AdminLogIn from './AdminLogIn';

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>This page is for Admin from Infoxchange</h1>
        <AdminLogIn />
      </React.Fragment>
    );
  }
}
export default Admin;