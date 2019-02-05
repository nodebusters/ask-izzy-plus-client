import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import axios from "axios";
import userAvatar from '../Images/user-avatar.svg';
import "../stylesheets/AdminDashboard.css";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

// COMPONENTS
// import User from './User';
// import Organisation from './Organisation';
import Navigation from "./Navigation";
import Footer from "./Footer";
import AdminLogOut from "./AdminLogOut";

const jwtDecode = require("jwt-decode");

class AdminDashboard extends Component {
  state = {
    adminUser: {},
    newUser: {
      email: "",
      organisation: ""
    },
    organisations: [],
    users: []
  };

  componentDidMount() {
    console.log("AdminDashboard Component did mount");
    this.getAdminUserData();
    this.getOrganisationData();
    this.getAllUsersData();
  }

  getAdminUserData = e => {
    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const { given_name, family_name } = decoded;
    const adminName = given_name;
    const adminLastName = family_name;
    this.setState({ adminName, adminLastName });

    if (token) {
      // console.log(token);
      const baseURL = process.env.REACT_APP_BASE_URL;
      const url = `${baseURL}/protected/getAdminUserData`;
      // Sending the token in the headers to the server:
      const options = {
        headers: { token }
      };
      // The server will send back res.data containing { user } and { organisation } objects
      axios.get(url, options).then(res => {
        // console.log(res.data);
        const { adminUser, message } = res.data;
        this.setState({ adminUser, message });
      });
    } else {
      console.log("doesnt exists");
      this.setState({ error: "token error" });
    }
  };

  getOrganisationData = e => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/organisations`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };
    axios.get(url, config).then(res => {
      const organisations = [];
      for (let i = 0; i < res.data.length; i++) {
        const organisation = { name: "", _id: "" };
        organisation.name = res.data[i].name;
        organisation._id = res.data[i]._id;
        organisations.push(organisation);
      }
      this.setState({ organisations });
    });
  };

  getAllUsersData = () => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/users`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };
    axios.get(url, config).then(res => {
      const users = res.data;
      this.setState({ users });
    });
  };

  handleInputChange = e => {
    const { value, id } = e.currentTarget;
    const { newUser } = this.state;
    newUser[id] = value;
    this.setState({ newUser });
  };

 deleteOneUser = (user_id) => {
    // e.preventDefault();
    console.log("Delete one user request triggered.");
    // console.log(e.currentTarget.id);
    // const user_id = e.currentTarget.id;
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/user/${user_id}`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };
    axios.delete(url, config).then(res => this.updateUser(res.data));
  };

  submitForm = e => {
    e.preventDefault();
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/user`;
    const { newUser } = this.state;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };

    axios.post(url, newUser, config).then(res => {
      this.updateUser(res.data)
      this.submitSuccessMsg();
    });
  };

  updateUser = newData => {
    this.setState({ users: newData });
  };

  confirmDelete = (e) => {
    const user_id = e.currentTarget.id;
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='confirm-delete'>
            <h1>Are you sure?</h1>
            <p>Delete this user?</p>
            <button onClick={onClose}>No</button>
            <button onClick={() => {
                this.deleteOneUser(user_id)
                onClose()
            }}>Yes, delete it!</button>
          </div>
        )
      }
    })
  }

  submitSuccessMsg = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='submit-new-user-msg'>
            <h1>A new user has been added</h1>
            <p>You can find all users in the "View All Users" tab</p>
            <button onClick={onClose}>Close</button>
          </div>
        )
      }
    })
  }

  
  render() {
    const { adminUser, users } = this.state;
    if (adminUser && users) {
      const { email } = adminUser;
      const { organisations, adminName, adminLastName } = this.state;
      // const userData = this.displayAllUsers(users);
      return (
        <div className="page-container">
          {/* <nav>
            <AdminLogOut />
          </nav> */}

          <Navigation originPage="dashboard" />

          <div className="body-container">
            <Tabs
              defaultIndex={2}
              onSelect={index => {
                // console.log(index + 1)
              }}
            >
              <TabList>
                <Tab>Administrator Profile</Tab>
                <Tab>Add New User</Tab>
                <Tab>View All Users</Tab>
                <Tab>Settings</Tab>
              </TabList>

              <TabPanel>
                <h2> Welcome {adminName}</h2>
                <div className="admin-card">
                    <div className="admin-info">
                      <h3>You are now logged in as: </h3>
                      <p>email: {email}</p>
                      <p>First Name: {adminName}</p>
                      <p>Last Name: {adminLastName}</p>
                    </div>
                    <div className="user-avatar">
                      <img src={userAvatar} alt="User avatar"/>
                    </div>
                  </div>
              </TabPanel>

              <TabPanel>
                <div className="add-user-container">
                  <form id="link_user_organisation" className="add-user-form">
                    <h2>Add New User</h2>
                    <label> Email: </label>
                    <input
                      type="text"
                      id="email"
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <label> Organisation: </label>
                    <select id="organisation" onChange={this.handleInputChange} >
                      <option>Please select</option>
                      {organisations.map(organisation => {
                        return (
                          <option
                            key={organisation._id}
                            value={organisation._id}
                          >
                            {organisation.name}
                          </option>
                        );
                      })}
                    </select>
                    <br />
                    <button
                      onClick={this.submitForm}
                      className="createUsers"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="all-users-container">
                  <h2>Authorized service providers</h2>
                  {users.map(user => {
                    return (
                      <React.Fragment key={`fragment of` + user._id}>
                        <span key={`info of` + user._id}>
                          {user.email} | {user.organisation}
                        </span>
                        <button
                          key={user._id}
                          id={user._id}
                          onClick={this.confirmDelete}
                          className="deleteUsers"
                        >
                          Delete
                        </button>
                        <br />
                      </React.Fragment>
                    );
                  })}
                </div>
              </TabPanel>

              <TabPanel>
                <h2>Settings</h2>
              </TabPanel>
            </Tabs>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <nav>
            <AdminLogOut />
          </nav>
          <h3> {this.state.message} </h3>
        </React.Fragment>
      );
    }
  }
}

export default AdminDashboard;