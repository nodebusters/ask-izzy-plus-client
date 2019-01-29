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
      window.location.reload();
    }))
    .catch(err=>{
      
    })
  }

  createTextInput = (attr, description) => {
    const { site } = this.props;
    return (
    <React.Fragment>
      <label htmlFor={`${attr}`}> {description} </label>
      <input type="text" id={`${attr}`} placeholder={site[attr]} onChange={this.handleInputChange} />
      <br></br>
    </React.Fragment>
    );
  }

  createOptionInput = (attr, description) => {
    const { site } = this.props;
    return (
    <React.Fragment>
          <label htmlFor={`${attr}`}>{description} </label>
          <select id = {`${attr}`} onChange={this.handleInputChange}>
               <option value = "true">YES</option>
               <option value = "false">NO</option>
             </select>
          <br></br>
    </React.Fragment>
    );
  }

  render() {
    // Site component inherits props from Sites component, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    // site1 = { siteName: 'Melbourne Medical', siteAddress: '123 Example Street'}
    const { site } = this.props;
    //TODO: implement site form below.
    console.log('site.isMobile',': ', site.isMobile);
    
    return (
      <React.Fragment>
        <form>
          {this.createTextInput("name", "Name:")}
          {this.createTextInput("accessibility", "Accessibility:")}
          {this.createTextInput("locationDetails", "Location Details:")}
          {this.createTextInput("parkingInfo", "Parking Info:")}
          {this.createTextInput("publicTransportInfo", "Public Transport Info:")}
          
          {this.createOptionInput("isMobile", "Is mobile:")}

          {this.createTextInput("emailAddress", "Email Address:")}
          {this.createTextInput("emailIsConfidential", "Email Is Confidential:")}
          {this.createTextInput("website", "Website:")}
          {this.createTextInput("postalAddress", "Postal Address:")}
          {this.createTextInput("postalAddressState", "State:")}
          {this.createTextInput("postalAddressSuburb", "Suburb:")}
          {this.createTextInput("postalAddressPostcode", "Postcode:")}
          
          {this.createOptionInput("postalAddressIsConfidential", "Postal Address Is Confidential:")}
          
          {this.createTextInput("phoneNumber", "Phone Number:")}
          {this.createTextInput("phoneKind", "Phone Kind:")}
          
          {this.createOptionInput("phoneIsConfidential", "Phone Is Confidential:")}
          
          {this.createTextInput("addressBuilding", "Building:")}
          {this.createTextInput("addressLevel", "Level:")}
          {this.createTextInput("addressFlatUnit", "Flat Unit:")}
          {this.createTextInput("addressStreetNumber", "Street Number:")}
          {this.createTextInput("addressStreetName", "StreetName:")}
          {this.createTextInput("addressStreetType", "StreetType:")}
          {this.createTextInput("addressStreetSuffix", "Street Suffix:")}
          {this.createTextInput("addressSuburb", "Suburb:")}
          {this.createTextInput("addressState", "State:")}
          {this.createTextInput("addressPostcode", "Postcode:")}
          
          {this.createOptionInput("addressIsConfidential", "Address Is Confidential:")}
          <button onClick={this.submitForm}>Update</button>
        </form>

        {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(site).map(([key, value]) => {
          // Unless no array exists in servicesInSite and openingHours, iterate through, otherwise render key/value for sitesInOrganisation
          if (key !== 'servicesInSite' && key !== 'openingHours') {
            return <p key={key}>{key}: {value} </p>
          }
        })}

        <p> isMobile: {site.isMobile.toString()}</p>
      </React.Fragment>
    );
  }
}
export default Site;