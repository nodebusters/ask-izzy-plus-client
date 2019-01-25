import React, { Component } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
    state = {}

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
            axios.get(url, options)
            .then(res => {
                // console.log('res.data', ': ', res.data);   
                const {organisation} = res.data                    
                const {user} = res.data                    
                
                // console.log('organisation',': ', organisation);
                
                this.setState({
                    organisation,
                    user
                })
                
                console.log('this.state',': ', this.state);
                    
                })
        } else {
            console.log("doesnt exists");
            this.setState({ error: "token error" })
        }
    }

    componentDidMount() {
        console.log("did mount");
        
        this.handleProtectedRequest();
    }

    componentDidUpdate(){
        // console.log('this.state',': ', this.state);
        
    }

    // sitesDetails = () => {
    //     const { organisation } = this.state;
    //     // console.log(organisation.sitesInOrganisation)
    //     // organisation.sitesInOrganisation 
    //     const sites = organisation.sitesInOrganisation;
    //     console.log('sites',': ', sites);
    //     console.log('sites.length',': ', sites.length);

    //     // for (let i=0; i < sites.length; i++) {
    //     //     // console.log(organisation.sitesInOrganisation)
    //     //     
    //     }


    render() {
        const { organisation, user } = this.state;
        
        
        if (organisation) {
            
            const { sitesInOrganisation } = organisation;
    
            
            // console.log(organisation);
            // console.log(user);
            // console.log('sitesInOrganisation',': ', sitesInOrganisation);
            
            // const sitesDetails = this.sitesDetails();
            // console.log(sitesDetails)

            // const sitesDetails = Object.entries(sitesInOrganisation[0]).map(([key, value]) => {
            //     console.log('key', ': ', key);

            //     // if  (key!=='servicesInSite'){
            //     //     return <p key={key}>{key}: {value}</p>
            //     // }
            //     // return <p key={key}>{key}: {value}</p>
            //     // console.log(key, value)
            // })

            // const sitesDetails = ()=>{
            //     return <p>hi</p>
            // }


            // const organisationDetails = () => {
            //     return <React.Fragment>
            //         {Object.entries(organisation[0]).map(([key, value]) => {
            //             if (key !== 'sitesInOrganisation') {
            //                 return <p key={key}>{key}: {value}</p>
                            
            //             }
            //         })}
            //     </React.Fragment>
            // }

            
            // const servicesDetails = Object.entries(organisation.sitesInOrganisation[0].servicesInSite[0]).map(([key, value]) => {
            //     return <p key={key}>{key}: {value}</p>
            // });


            // const sitesDetails = Object.entries(organisation[0]).map(([key, value]) => {
            //     if (key !== 'sitesInOrganisation') {
            //         return <p key={key}>{key}: {value}</p>
                    
            //     }

            // });


            const organisationDetails = Object.entries(organisation[0]).map(([key, value]) => {
                if (key !== 'sitesInOrganisation') {
                    return <p key={key}>{key}: {value}</p>
                    
                }

            });



            const userDetails = Object.entries(user).map(([key, value]) => {
                return <p key={key}>{key}: {value}</p>
            });

            const displayTabs = (
                <Tabs defaultIndex={2} onSelect={index => console.log(index + 1)}>
                    <TabList>
                        <Tab>Organisation</Tab>
                        {/* <Tab>Sites</Tab>
                        <Tab>Services</Tab> */}
                        <Tab>User Profile</Tab>
                    </TabList>
                    <TabPanel>{organisationDetails}</TabPanel>
                    {/* <TabPanel>{sitesDetails}</TabPanel>
                    <TabPanel>{servicesDetails}</TabPanel> */}
                    <TabPanel> {userDetails} </TabPanel>
                </Tabs>
            );

            return (
                <React.Fragment>
                    {displayTabs}
                    <p>loading</p>
                </React.Fragment>
            );

        } else {
            return null;
        }

    }
}
export default Dashboard;