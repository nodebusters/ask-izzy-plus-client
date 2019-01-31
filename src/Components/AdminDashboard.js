import React, { Component } from 'react';
import axios from 'axios';
import LogOut from './LogOut';
const jwtDecode = require('jwt-decode');

// COMPONENTS
// import User from './User';
// import Organisation from './Organisation';

class AdminDashboard extends Component {
  state = {
    adminUser: {},
    newUser: {
      email: "",
      firstName: "",
      lastName: "",
      organisation:""
    },
    organisations: []
  }

  componentDidMount() {
    console.log("AdminDashboard Component did mount");
    this.getAdminUserData();
    this.getOrganisationData();
  }

  getAdminUserData = (e) => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);

    console.log('decoded',': ', decoded);
    const {given_name,family_name} = decoded;
    const adminName = given_name;
    const adminLastName = family_name;
    this.setState({adminName,adminLastName})

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
          // console.log(res.data);
          const { adminUser, message } = res.data; 
          this.setState({ adminUser, message });
        })
    } else {
      console.log("doesnt exists");
      this.setState({ error: "token error" })
    }
  }

  getOrganisationData = (e) => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/organisations`; 
    axios.get(url)
      .then(res => {
        const organisations = [];
        for (let i=0; i<res.data.length; i++) {
          const organisation = {name: "", _id: ""};
          organisation.name = res.data[i].name
          organisation._id = res.data[i]._id
          organisations.push(organisation)
        }
        this.setState({ organisations })
      })
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    const { newUser } = this.state;
    newUser[id]= value; 
    this.setState({ newUser });
    // console.log(newUser);
    // console.log(this.state.newUser)
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/create/user`; 
    const { newUser } = this.state;
    axios.post(url, newUser)
      .then(res => console.log(res))
  }

  render() {
    const { adminUser } = this.state;
    if (adminUser) {
      const { email } = adminUser;
      const { organisations, adminName, adminLastName } = this.state;
      return (
        <React.Fragment>
          <nav>
            <LogOut />
          </nav>
          <h3>You are now logged in as: </h3>
          <p>email: {email}</p>
          <p>First Name: {adminName}</p>
          <p>Last Name: {adminLastName}</p>

          <form id="link_user_organisation">
            <h3>Add New User</h3>
            <label> New user email: </label>
              <input type="text" id="email" onChange={this.handleInputChange}></input>
              <br></br>
            <label> New user organisation </label>
              <select id="organisation" onChange={this.handleInputChange}>
              <option key="" value="1234567890">Testing Organisation Name</option>
              {organisations.map(organisation => {
                return <option key={organisation._id} value={organisation._id}>{organisation.name}</option>
              })
              }
              </select>
              <br></br>
              <button onClick={this.submitForm}>Submit</button>
          </form>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav>
            <LogOut />
          </nav>
          <h3> {this.state.message} </h3>
        </React.Fragment>
      );
    }
    }
  }
export default AdminDashboard;