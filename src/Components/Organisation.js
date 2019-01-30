import React, { Component } from "react";
import axios from "axios";
import '../stylesheets/Forms.css'

class Organisation extends Component {
  //Declaring state.
  state = {
    data: {} ,
    formClass : "readMode",
    editButton: "editButton"
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    const data = this.state.data;
    data[id]= value; 
    this.setState({ data });
  }

  submitForm = (e) => {
    const { updateOrganisation } = this.props;
    e.preventDefault();
    //PUT request.
    const org_id = this.props.organisation._id;
    console.log('this.state', ': ', this.state);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/update/organisation/${org_id}`;

    const {data} = this.state;

    axios.put(url, data)
      .then((resp => {
        console.log('resp.data', ': ', resp.data);
        updateOrganisation(resp.data);
        //RELOADING THE WINDOW. 
        window.location.reload();
      }))
      .catch(err => {

      })
  }

  createTextInput = (attr, description) => {
    const { organisation } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}> {description} </label>
        <input type="text" id={`${attr}`} onChange={this.handleInputChange} placeholder={organisation[attr]} />
        <br></br>
      </React.Fragment>
    );
  }

  convertToYesOrNo = (val) => {
    if (val === true) {
      return "YES"
    } else {
      return "NO"
    }
  }

  createOptionInput = (attr, description) => {
    const { organisation } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}>{description} </label>
        <select id={`${attr}`} onChange={this.handleInputChange}>
          <option value="" selected disabled hidden>{this.convertToYesOrNo(organisation[attr])}</option>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </select>
        <br></br>
      </React.Fragment>
    );
  }

  edit = (e) => {
    e.preventDefault();
    if (e.target.innerHTML==="Edit"){
      e.target.innerHTML="Cancel"
      this.setState({
        formClass : "editMode",
        editButton: "cancelButton"
      })
      
    }else{
      e.target.innerHTML="Edit"
      this.setState({
        formClass : "readMode",
        editButton: "editButton"
      })
    }
  }

  render() {

    // Organisation component inherits props from Organisation model, renders object's key/values as an array to Dashboard
    const { organisation } = this.props;

    return (
      <React.Fragment>
        <p>Last updated: {organisation.lastUpdated}</p>
        <p>Organisation: <strong>{organisation.name} </strong></p>
          
        <button onClick={this.edit} className={this.state.editButton}>Edit</button>          
        
        <form id="form" className={this.state.formClass}>
          <button onClick={this.submitForm}>Update</button>
          <br></br>
          {this.createTextInput("description", "Description:")}
          {this.createTextInput("website", "Website:")}
          {this.createTextInput("abn", "ABN:")}
          {this.createTextInput("providerType", "Provider Type:")}
          {this.createTextInput("alsoKnownAs", "Also Known As:")}
          {this.createTextInput("emailAddress", "Email Address:")}
          {this.createOptionInput("emailIsConfidential", "Email Is Confidential:")}
          {this.createTextInput("postalAddress", "Postal Address:")}
          {this.createTextInput("postalAddressState", "State:")}
          {this.createTextInput("postalAddressSuburb", "Suburb:")}
          {this.createTextInput("postalAddressPostcode", "Postcode:")}
          {this.createOptionInput("postalAddressIsConfidential", "Postal Address Is Confidential:")}
          {this.createTextInput("phoneNumber", "Phone Number:")}
          {this.createTextInput("phoneKind", "Phone Kind:")}
          {this.createOptionInput("phoneIsConfidential", "Phone Is Confidential:")}
          {this.createTextInput("ceo", "CEO:")}
        </form>


        {/* {Object.entries(organisation).map(([key, value]) => {
          if (key !== "sitesInOrganisation") {
            return (
              <p key={key}> {key}: {value} </p>
            );
          }
        })} */}
      </React.Fragment>
    );
  }
}
export default Organisation;