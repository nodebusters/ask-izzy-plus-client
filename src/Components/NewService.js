//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.
import React, { Component } from "react";
import axios from "axios";
import "../stylesheets/NewForm.css";

class NewService extends Component {
  // Declaring state.
  state = {
    data: {}
  };

  handleInputChange = e => {
    const { value, id } = e.currentTarget;
    const data = this.state.data;
    data[id] = value;
    this.setState({ data });
  };

  submitForm = e => {
    //This method updates the org data in the app.
    const { org_id, site_id, updateOrganisation } = this.props;
    e.preventDefault();
    //PUT request.

    console.log("FORM this.state", ": ", this.state);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/service/${org_id}/${site_id}`;

    const { data } = this.state;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };

    axios
      .post(url, data, config)
      .then(resp => {
        console.log("PUT resp.data", ": ", resp.data);
        updateOrganisation(resp.data);
        //Changing to edit mode:
      })
      .catch(err => {});
  };

  createTextInput = (attr, description) => {
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}> {description} </label>
        <input type="text" id={`${attr}`} onChange={this.handleInputChange} />
        <br />
      </React.Fragment>
    );
  };

  createOptionInput = (attr, description) => {
    // const { site } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}>{description} </label>
        <select id={`${attr}`} onChange={this.handleInputChange}>
          <option value="" selected disabled hidden>
            {" "}
          </option>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </select>
        <br />
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="new-form">
        <form id="form" className="editMode" data-new-form>
          <button onClick={this.submitForm}>Create</button>
          <br />
          {this.createTextInput("name", "Name:")}
          {this.createTextInput("description", "Description:")}
          {this.createTextInput("referralInfo", "Referral Info:")}
          {this.createOptionInput("adhcEligible", "ADHC Eligible:")}
          {this.createTextInput("assessmentCriteria", "Assessment Criteria:")}
          {this.createTextInput("targetGender", "Target Gender:")}
          {this.createTextInput("availability", "Availability:")}
          {this.createTextInput("billingMethod", "Billing Method:")}
          {this.createTextInput("cost", "Cost:")}
          {this.createTextInput("crisisKeywords", "Crisis Keywords:")}
          {this.createTextInput("details", "Details:")}
          {this.createTextInput("eligibilityInfo", "Eligibility Info:")}
          {this.createTextInput("ineligibilityInfo", "Ineligibility Info:")}
          {this.createTextInput("fundingBody", "Funding Body:")}
          {this.createOptionInput(
            "healthcareCardHolders",
            "Healthcare CardHolders:"
          )}
          {this.createTextInput("intakeInfo", "Intake Info:")}
          {this.createTextInput("intakePoint", "Intake Point:")}
          {this.createOptionInput("isBulkBilling", "Is Bulk Billing:")}
          {this.createOptionInput("ndisApproved", "NDIS Approved:")}
          {this.createOptionInput("promotedService", "Promoted Service:")}
          {this.createTextInput("specialRequirements", "Special Requirements:")}
          {this.createTextInput("language", "Language:")}
          {this.createTextInput("ageGroupKeyword", "Age Group Keyword:")}
          {this.createTextInput(
            "ageGroupDescription",
            "Age Group Description:"
          )}
          {this.createTextInput("serviceTypes", "Service Types:")}
          {this.createTextInput(
            "indigenousClassification",
            "Indigenous Classification:"
          )}
          {this.createTextInput("capacityStatus", "Capacity Status:")}
          {this.createTextInput("capacityStatusText", "Capacity Status Text:")}
          {this.createTextInput("capacityFrequency", "Capacity Frequency:")}
          {this.createTextInput(
            "capacityLastNotification",
            "Capacity Last Notification:"
          )}
          {this.createTextInput(
            "capacityLastStatusUpdate",
            "Capacity Last Status Update:"
          )}
          {this.createTextInput("capacityExpireDate", "Capacity Expire Date:")}
          {this.createTextInput("accreditationName", "Accreditation Name:")}
        </form>
      </div>
    );
  }
}
export default NewService;