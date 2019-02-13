//Component Description: Service component takes information of only one service and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.
import React, { Component } from "react";
import axios from "axios";
import "../stylesheets/Service.css";

class Service extends Component {
  // Declaring state.
  state = {
    data: {},
    formClass: "readMode",
    editButton: "editButton"
  };

  componentDidMount() {
    //Hidding updateButton:
    const updateButton = document.querySelector("#updateButton");
    updateButton.style.visibility = "hidden";
  }

  handleInputChange = e => {
    const { value, id } = e.currentTarget;
    const data = this.state.data;
    data[id] = value;
    this.setState({ data });
  };

  submitForm = e => {
    const { org_id, site_id, service, updateOrganisation } = this.props;
    e.preventDefault();
    const service_id = service._id;

    console.log("this.state", ": ", this.state);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/service/${org_id}/${site_id}/${service_id}`;

    const { data } = this.state;

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };

    // Axios: HTTP PUT Request
    axios
      .put(url, data, config)
      .then(resp => {
        console.log("resp.data", ": ", resp.data);
        updateOrganisation(resp.data);
        //Changing to edit mode:
        this.setState({
          formClass: "readMode",
          editButton: "editButton"
        });
        const editButton = document.querySelector("#editButton");
        editButton.innerHTML = "Edit";
      })
      .catch(err => {});
  };

  createTextInput = (attr, description) => {
    const { service } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}> {description} </label>
        <input
          type="text"
          id={`${attr}`}
          onChange={this.handleInputChange}
          placeholder={service[attr]}
        />
        <br />
      </React.Fragment>
    );
  };

  convertToYesOrNo = val => {
    if (val === true) {
      return "YES";
    } else {
      return "NO";
    }
  };

  createOptionInput = (attr, description) => {
    const { service } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}>{description} </label>
        <select id={`${attr}`} onChange={this.handleInputChange}>
          <option value="" selected disabled hidden>
            {this.convertToYesOrNo(service[attr])}
          </option>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </select>
        <br />
      </React.Fragment>
    );
  };

  edit = e => {
    e.preventDefault();
    // If innerHTML is equal to Edit, change formClass to editMode and editButton to cancelButton
    if (e.target.innerHTML === "Edit") {
      e.target.innerHTML = "Cancel";
      this.setState({
        formClass: "editMode",
        editButton: "cancelButton"
      });
      //Showing the updateButton with vanilla js.
      const updateButton = document.querySelector("#updateButton");
      updateButton.style.visibility = "visible";
    } else {
      e.target.innerHTML = "Edit";
      this.setState({
        formClass: "readMode",
        editButton: "editButton"
      });
      //Hiding the updateButton with vanilla js.
      const updateButton = document.querySelector("#updateButton");
      updateButton.style.visibility = "hidden";
    }
  };

  delete = e => {
    e.preventDefault();
    console.log("Delete request triggered.");
    //NOTE that we are getting updateOrganisation method from props.
    const { org_id, site_id, service, updateOrganisation } = this.props;
    const service_id = service._id;
    // console.log('org_id',': ', org_id);
    // console.log('site_id',': ', site_id);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/service/${org_id}/${site_id}/${service_id}`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };

    axios.delete(url, config).then(resp => {
      //res.data supposed to be the new organisation after deleting site.
      console.log("resp.data", ": ", resp.data);
      //calling updateOrganisation so it renders the new data.
      updateOrganisation(resp.data);
    });
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.edit}
          id="editButton"
          className={this.state.editButton}
        >
          Edit
        </button>
        <button onClick={this.delete} className="cancelButton">
          Delete
        </button>
        <button
          onClick={this.submitForm}
          id="updateButton"
          className="updateButton"
        >
          Update
        </button>
        <div className="service-form">
          <form id="form" className={this.state.formClass} data-service-form>
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
            {this.createTextInput(
              "specialRequirements",
              "Special Requirements:"
            )}
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
            {this.createTextInput(
              "capacityStatusText",
              "Capacity Status Text:"
            )}
            {this.createTextInput("capacityFrequency", "Capacity Frequency:")}
            {this.createTextInput(
              "capacityLastNotification",
              "Capacity Last Notification:"
            )}
            {this.createTextInput(
              "capacityLastStatusUpdate",
              "Capacity Last Status Update:"
            )}
            {this.createTextInput(
              "capacityExpireDate",
              "Capacity Expire Date:"
            )}
            {this.createTextInput("accreditationName", "Accreditation Name:")}
          </form>
        </div>

        {/* {Object.entries(service).map(([key, value]) => {
          return <p key={key}>{key}: {value} </p>
        })} */}
      </React.Fragment>
    );
  }
}
export default Service;