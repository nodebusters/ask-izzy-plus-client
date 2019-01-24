import React, { Component } from 'react';
import axios from 'axios';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

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
        // console.log(this.state);
        console.log(organisation);
        console.log(user);
        return (
            <div>
                <strong>User Profile</strong>
                <p>email: {user.email}</p>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>


                <h1>Welcome {user.firstName}</h1>
                <strong>Organisation</strong>
                <p>Name: {organisation.name}</p>

                <strong>Sites</strong>
                <p>Name: {organisation.sitesInOrganisation[0].name}</p>

                <strong>Services</strong>
                <p>Name: {organisation.sitesInOrganisation[0].servicesInSite[0].name}</p>
            </div>
        );
    }
}
export default Dashboard;

//<React.Fragment>
//{user && <h1> Welcome {user.firstName}</h1>}
//</React.Fragment>