import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//Tab components:
import User from './User';
import Organisation from './Organisation';
import Sites from './Sites';
import Services from './Services';
import LogOut from './LogOut';

class Dashboard extends Component {
  state = {}

  getUserData = (e) => {
    const token = localStorage.getItem('token');
    if (token) {
      // console.log(token);
      const baseURL = process.env.REACT_APP_BASE_URL;
      const url = `${baseURL}/protected/getUserData`;
      //Sending the token in the headers to the server:
      const options = {
        headers: { token }
      }
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
    const { organisation, user } = this.state;

    if (organisation) {
      return (
        <React.Fragment>
          <nav>
            <LogOut />
          </nav>

          <Tabs defaultIndex={2} onSelect={index => {
            // console.log(index + 1)
          }}>
            <TabList>
              <Tab>User Profile</Tab>
              <Tab>Organisation</Tab>
              <Tab>Sites</Tab>
              <Tab>Services</Tab>
            </TabList>


            <TabPanel> <User user={user} /> </TabPanel>
            <TabPanel><Organisation organisation={organisation} /></TabPanel>
            {/* NOTE that we are passing the whole organisation and then deconstructing it in Sites.js */}
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