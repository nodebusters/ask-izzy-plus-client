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
                    console.log(res.data);
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

    sitesDetails = () => {
        const { organisation } = this.state;
        console.log(organisation.sitesInOrganisation)
        let i = 0
        for (i; i < organisation.sitesInOrganisation.length; i++) {
            // console.log(organisation.sitesInOrganisation)
                Object.entries(organisation.sitesInOrganisation[i]).map(([key, value]) => {
                // if  (key!=='servicesInSite'){
                //     return <p key={key}>{key}: {value}</p>
                // }
                return <p key={key}>{key}: {value}</p>
                // console.log(key, value)
            })};
        }
    };
    
    render() {
        const { organisation, user } = this.state;
        console.log(organisation);
        console.log(user);

        const sitesDetails = this.sitesDetails();
        console.log(sitesDetails)
        
        const organisationDetails = Object.entries(organisation).map(([key, value]) => {
            if  (key!=='sitesInOrganisation'){
                return <p key={key}>{key}: {value}</p>
            }
        });
            
        const servicesDetails = Object.entries(organisation.sitesInOrganisation[0].servicesInSite[0]).map(([key, value]) => {
                return <p key={key}>{key}: {value}</p>
        });
       
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