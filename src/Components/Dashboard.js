import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          organisation: {
            name: '',
            sitesInOrganisation: [{
                name: "",
                servicesInSite: [{ 
                    name: ""
                }]
            }]
          },
          user: {
            email: '',
            firstName: '',
            lastName: '',
            organisation: 0
          }
        };
      }

    handleProtectedRequest = (e) => {
        const token = localStorage.getItem('token');
        if (token) {
            // console.log(token);
            // const baseURL =  process.env.REACT_APP_URL;
            const url = `http://localhost:5000/protected/getUserData`

            //here we are sending the token to the server.
            const options = {
                headers: { token }
            }

        // const token = localStorage.getItem('token')
            axios.get(url,options)
                .then(res => {
                    this.setState({
                            organisation: res.data.organisation, 
                            user: res.data.user
                        })
                })
        } else {
            console.log("doesnt exists");
            this.setState({ error: "token error" })
        }
    }

    componentDidMount(){
        this.handleProtectedRequest();
    }
    
    render() {
        const { organisation, user } = this.state;
        console.log(organisation);
        console.log(user);
        
        const organisationDetails = Object.entries(organisation).map(([key, value]) => {
            if  (key!=='sitesInOrganisation'){
                return <p key={key}>{key}: {value}</p>
            }
        });

        const sitesDetails = (
            <React.Fragment>
                <p>Name: {organisation.sitesInOrganisation[0].name}</p>
            </React.Fragment>
        );

        const servicesDetails = (
            <React.Fragment>
                <p>Name: {organisation.sitesInOrganisation[0].servicesInSite[0].name}</p>
            </React.Fragment>
        );
       
        const userDetails = Object.entries(user).map(([key, value]) => {
            return <p key={key}>{key}: {value}</p>
        });

        const displayTabs = (
            <Tabs defaultIndex={2} onSelect={index => console.log(index + 1)}>
                <TabList>
                    <Tab>Organisation</Tab>
                    <Tab>Sites</Tab>
                    <Tab>Services</Tab>
                    <Tab>User Profile</Tab>
                </TabList>
                <TabPanel>{organisationDetails}</TabPanel>
                <TabPanel>{sitesDetails}</TabPanel>
                <TabPanel>{servicesDetails}</TabPanel>
                <TabPanel>{userDetails}</TabPanel>
            </Tabs>
        );

        return (
            <React.Fragment>
                {displayTabs}
            </React.Fragment>
        );
    }
}
export default Dashboard;