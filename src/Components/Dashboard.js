import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "../stylesheets/Home.css";

// COMPONENTS
import User from './User';
import Organisation from './Organisation';
import Sites from './Sites';
import Services from './Services';
import Navigation from './Navigation';
import LogOut from './LogOut';
import Footer from './Footer';
const jwtDecode = require('jwt-decode');

class Dashboard extends Component {
  // State is initially empty object, will contain { user } and { organisation } objects when component mounts
  state = {}

  //This method is important to update the information after the forms are submitted. When the form is submited an new organisation object with the new data will be returned by the server, we can use this new data to update the state in dashboard and in the whole application as a result. 
  // Note we need to pass this method to the other components in the props.
  updateOrganisation = (newData) => {
    this.setState({
      organisation: newData
    })
  }

  // Check for response.tokenId in local storage, if token exists, GET the /protected/user endpoint, sending the token as a header option
  getUserData = (e) => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);

    // console.log('decoded',': ', decoded);
    const {given_name,family_name} = decoded;
    this.setState({ given_name, family_name })
    if (token) {
      // console.log(token);
      const baseURL = process.env.REACT_APP_BASE_URL;
      const url = `${baseURL}/protected/getUserData`;
      // Sending the token in the headers to the server:
      const options = {
        headers: { token }
      }
      // The server will send back res.data containing { user } and { organisation } objects
      axios.get(url, options)
        .then(res => {
          // console.log('res.data', ': ', res.data);   
          const { organisation, user, message } = res.data
          this.setState({
            organisation,
            user,
            message
          })
          console.log('DASHBOARD this.state', ': ', this.state);
        })
    } else {
      console.log("doesnt exists");
      this.setState({ error: "token error" })
    }
  }

  componentDidMount() {
    console.log("Component did mount");
    this.getUserData();
  }

  render() {
    // Whenever component is rendered, get state data and store it in consts.
    const { organisation, user, given_name,family_name } = this.state;

    // If organisation object exists in state, render information from { user } and { organisation } objects into tabs
    if (organisation) {
      return (
        <div className="page-container">
          
          {/* NAVIGATION: Header Container w/ Logout, Hero & Logo */}
          <Navigation originPage='dashboard'/>

          <div className="body-container">
          {/* REACT-TABS: Main <Tabs> Container */}
            {/* defaultIndex changes he tab that should be open on initial render. This is a zero-based index, so first tab is 0, second tab is 1, ... */}
            {/* onSelect is called every time a tab is about to change. It will be called with the index that it will be changed to, the lastIndex which was selected before and the underlying event. */}
            <Tabs
              defaultIndex={2}
              onSelect={index => {
              // console.log(index + 1)
              }}
            >
            {/* REACT-TABS: <TabList> Wrapper and <Tab> Headers */}
              {/* User Profile, Organisation, Sites, Services */}
              <TabList>
                <Tab>User Profile</Tab>
                <Tab>Organisation</Tab>
                <Tab>Sites</Tab>
                <Tab>Services</Tab>
              </TabList>

            {/* REACT-TABS: <TabPanel> Body Content */}
              {/* TAB: User */}
              <TabPanel>
                <User
                  user={user}
                  organisation={organisation}
                  given_name={given_name}
                  family_name = {family_name}
                />
              </TabPanel>
              
              {/* TAB: Organisation */}
              <TabPanel>
                <Organisation
                  organisation={organisation}
                  updateOrganisation={this.updateOrganisation}
                />
              </TabPanel>
              
            {/* TAB: Organisation > Sites */}
              {/* NOTE that we are passing the whole organisation and then deconstructing it in Sites.js and Services.js */}
              {/* Also note that we are passing updateOrganisation method so we can update the data after submitting forms. */}
              <TabPanel>
                <Sites
                  organisation={organisation}
                  updateOrganisation={this.updateOrganisation}
                />
              </TabPanel>
              
              {/* TAB: Organisation > Sites > Services */}
              <TabPanel>
                <Services
                  organisation={organisation}
                  updateOrganisation={this.updateOrganisation}
                />
              </TabPanel>
            </Tabs>
          </div>

          <Footer />

        </div>
      );
    } else {
      return (
        <div className="page-container">
        
          <nav>
            <LogOut />
          </nav>

          <div className="body-container">
            <h3> {this.state.message} </h3>
          </div>

        </div>
      );
    }

  }
}
export default Dashboard;