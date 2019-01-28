//Component Description: Service component takes information of only one service and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
import axios from 'axios';

class Service extends Component {
   //Declaring state.
   state = {}

   handleInputChange = (e) => {
     const { value, id } = e.currentTarget;
     this.setState({[id]: value });
   }
 
   submitForm = (e) => {
     const {org_id, site_id, service, updateOrganisation} = this.props;
     e.preventDefault();
     //PUT request.
      const service_id =  service._id;

     console.log('this.state', ': ', this.state);
 
     const baseURL = process.env.REACT_APP_BASE_URL;
     const url = `${baseURL}/protected/update/service/${org_id}/${site_id}/${service_id}`;
 
     const data = this.state;
 
     axios.put(url, data)
     .then((resp=>{
       console.log('resp.data',': ', resp.data);
       updateOrganisation(resp.data);
     }))
     .catch(err=>{
       
     })
   }

  //TODO: implement site form below.
  render() {
    // Service component inherits props from Services component, iterates through the array values contained in ServicesInSites key, renders to Dashboard
    // service2 = { serviceName: 'Melbourne Medical X-Rays', siteAddress: '123 Example Street'}
    const { service} = this.props;
    return (
      <React.Fragment>

        <form>
          <label htmlFor="name"> Name: </label>
          <input type="text" id="name" onChange={this.handleInputChange} />
          <br></br>
          <button onClick={this.submitForm}>Update</button>
        </form>

        {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(service).map(([key, value]) => {
          return <p key={key}>{key}: {value} </p>
        })}
      </React.Fragment>
    );
  }
}
export default Service;