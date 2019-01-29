import React, { Component } from "react";
import axios from "axios";
class Organisation extends Component {
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
    const  org_id = this.props.organisation._id;
    console.log('this.state', ': ', this.state);
    
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/update/organisation/${org_id}`;

    const data = this.state;

    axios.put(url, data)
    .then((resp=>{
      console.log('resp.data',': ', resp.data);
      updateOrganisation(resp.data);
    }))
    .catch(err=>{
      
    })
  }

  createTextInput = (attr, description) => {
    return (
    <React.Fragment>
      <label htmlFor={`"${attr}"`}> {description} </label>
      <input type="text" id={`"${attr}"`} onChange={this.handleInputChange} />
      <br></br>
    </React.Fragment>
    );
  }
    

  render() {

    // Organisation component inherits props from Organisation model, renders object's key/values as an array to Dashboard
    const { organisation } = this.props;

    return (
      <React.Fragment>
        <form>
          {this.createTextInput("name", "Name:")}
          {this.createTextInput("description", "Description:")}
          {this.createTextInput("creationTime", "Creation Time:")}
          {this.createTextInput("lastModified", "Last Modified:")}
          {this.createTextInput("lastUpdated", "Last Updated:")}
          {this.createTextInput("website", "Website:")}
          {this.createTextInput("abn", "ABN:")}
          {this.createTextInput("providerType", "Provider Type:")}
          {this.createTextInput("alsoKnownAs", "Also Known As:")}
          {this.createTextInput("emailAddress", "Email Address:")}
          {this.createTextInput("emailIsConfidential", "Email Is Confidential:")}
          {this.createTextInput("postalAddress", "Postal Address:")}
          {this.createTextInput("postalAddressState", "State:")}
          {this.createTextInput("postalAddressSuburb", "Suburb:")}
          {this.createTextInput("postalAddressPostcode", "Postcode:")}
          {this.createTextInput("postalAddressIsConfidential", "Postal Address Is Confidential:")}
          {this.createTextInput("phoneNumber", "Phone Number:")}
          {this.createTextInput("phoneKind", "Phone Kind:")}
          {this.createTextInput("phoneIsConfidential", "Phone Is Confidential:")}
          {this.createTextInput("ceo", "CEO:")}

          <button onClick={this.submitForm}>Update</button>
        </form>


        {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(organisation).map(([key, value]) => {
          // Unless no array exists in sitesInOrganisation, iterate through, otherwise render key/value for sitesInOrganisation
          if (key !== "sitesInOrganisation") {
            return (
              <p key={key}> {key}: {value} </p>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
export default Organisation;