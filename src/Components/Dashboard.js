import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

// COMPONENTS
import User from './User';
import Organisation from './Organisation';
import Sites from './Sites';
import Services from './Services';
import LogOut from './LogOut';

class Dashboard extends Component {
  // State is initially empty object, will contain { user } and { organisation } objects when component mounts
  state = {}

  // Check for response.tokenId in local storage, if token exists, GET the /protected/user endpoint, sending the token as a header option
  getUserData = (e) => {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log(token);
      const baseURL = process.env.REACT_APP_BASE_URL;
      // FIXME: Change getUserData camelCase to /protected/users??
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
          console.log('this.state', ': ', this.state);
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
    // Whenever component is rendered, update state
    const { organisation, user } = this.state;

    // If organisation object exists in state, render information from { user } and { organisation } objects into tabs
    if (organisation) {
      return (
        <React.Fragment>
        {/* REACT-TABS: Tabs (Container) */}
        {/* defaultIndex allows changing the tab that should be open on initial render. This is a zero-based index, so first tab is 0, second tab is 1, ... */}
        {/* onSelect is called every time a tab is about to change. It will be called with the index that it will be changed to, the lastIndex which was selected before and the underlying event. */}
          <nav>
            <LogOut />
          </nav>

          <Tabs defaultIndex={2} onSelect={index => {
            // console.log(index + 1)
          }}>

          {/* REACT-TABS: TabList (Wrapper) and Tab (Headers) */}
            <TabList>
              <Tab>User Profile</Tab>
              <Tab>Organisation</Tab>
              <Tab>Sites</Tab>
              <Tab>Services</Tab>
            </TabList>

          {/* REACT-TABS: TabPanel (Content) */}
            <TabPanel> <User user={user} /> </TabPanel>
            <TabPanel> <Organisation organisation={organisation} /> </TabPanel>
            {/* TODO: NOTE that we are passing the whole organisation and then deconstructing it in Sites.js */}
            <TabPanel> <Sites organisation={organisation} /> </TabPanel>
            <TabPanel> <Services organisation={organisation} /> </TabPanel>

          </Tabs>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav>
            <LogOut />
          </nav>

          <h3> Error: {this.state.message} </h3>
        </React.Fragment>
      );
    }

  }
}
export default Dashboard;