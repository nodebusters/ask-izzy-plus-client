import React, { Component } from 'react';
import axios from 'axios';

// COMPONENTS
// import User from './User';
// import Organisation from './Organisation';

class AdminDashboard extends Component {
  state = {}

  componentDidMount() {
    console.log("AdminDashboard Component did mount");
    this.getAdminUserData();
  }

  getAdminUserData = (e) => {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log(token);
      const baseURL = process.env.REACT_APP_BASE_URL;
      const url = `${baseURL}/protected/getAdminUserData`;
      // Sending the token in the headers to the server:
      const options = {
        headers: { token }
      }
      // The server will send back res.data containing { user } and { organisation } objects
      axios.get(url, options)
        .then(res => { 
          const { _id, email, firstName, lastName } = res.data; 
          this.setState({
            id: _id,
            email,
            firstName,
            lastName
          })
        })
    } else {
      console.log("doesnt exists");
      this.setState({ error: "token error" })
    }
  }

  render() {
    const { email, firstName, lastName } = this.state;
      return (
        <React.Fragment>
          <h3>You are now logged in as: </h3>
          <p>email: {email}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
        </React.Fragment>
      );
    }
  }
export default AdminDashboard;