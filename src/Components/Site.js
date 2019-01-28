//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
import axios from 'axios';

class Site extends Component {
  //Declaring state.
  state = {}

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    this.setState({[id]: value });
  }

  submitForm = (e) => {
    const {updateOrganisation} = this.props;
    e.preventDefault();
    //PUT request.
    const {org_id} = this.props;
    const site_id = this.props.site._id;

    console.log('this.state', ': ', this.state);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/update/site/${org_id}/${site_id}`;

    const data = this.state;

    axios.put(url, data)
    .then((resp=>{
      console.log('resp.data',': ', resp.data);
      updateOrganisation(resp.data);
    }))
    .catch(err=>{
      
    })
  }

  render() {
    // Site component inherits props from Sites component, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    // site1 = { siteName: 'Melbourne Medical', siteAddress: '123 Example Street'}
    const { site } = this.props;
    //TODO: implement site form below.
    return (
      <React.Fragment>

        <form>
          <label htmlFor="name"> Name: </label>
          <input type="text" id="name" onChange={this.handleInputChange} />
          <br></br>
          <button onClick={this.submitForm}>Update</button>
        </form>

        {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(site).map(([key, value]) => {
          // Unless no array exists in servicesInSite and openingHours, iterate through, otherwise render key/value for sitesInOrganisation
          if (key !== 'servicesInSite' && key !== 'openingHours') {
            return <p key={key}>{key}: {value} </p>
          }
        })}
      </React.Fragment>
    );
  }
}
export default Site;