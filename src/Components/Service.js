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

   createTextInput = (attr, description) => {
    return (
    <React.Fragment>
      <label htmlFor={`${attr}`}> {description} </label>
      <input type="text" id={`${attr}`} onChange={this.handleInputChange} />
      <br></br>
    </React.Fragment>
    );
  }


  //TODO: implement site form below.
  render() {
    // Service component inherits props from Services component, iterates through the array values contained in ServicesInSites key, renders to Dashboard
    // service2 = { serviceName: 'Melbourne Medical X-Rays', siteAddress: '123 Example Street'}
    const { service} = this.props;
    return (
      <React.Fragment>

        <form>
          {this.createTextInput("name", "Name:")}
          {this.createTextInput("description", "Description:")}
          {this.createTextInput("referralInfo", "Referral Info:")}
          {this.createTextInput("adhcEligible", "ADHC Eligible:")}
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
          {this.createTextInput("healthcareCardHolders", "Healthcare CardHolders:")}
          {this.createTextInput("intakeInfo", "Intake Info:")}
          {this.createTextInput("intakePoint", "Intake Point:")}
          {this.createTextInput("isBulkBilling", "Is Bulk Billing:")}
          {this.createTextInput("ndisApproved", "NDIS Approved:")}
          {this.createTextInput("promotedService", "Promoted Service:")}
          {this.createTextInput("specialRequirements", "Special Requirements:")}
          {this.createTextInput("language", "Language:")}
          {this.createTextInput("ageGroupKeyword", "Age Group Keyword:")}
          {this.createTextInput("ageGroupDescription", "Age Group Description:")}
          {this.createTextInput("serviceTypes", "Service Types:")}
          {this.createTextInput("indigenousClassification", "Indigenous Classification:")}
          {this.createTextInput("capacityStatus", "Capacity Status:")}
          {this.createTextInput("capacityStatusText", "Capacity Status Text:")}
          {this.createTextInput("capacityFrequency", "Capacity Frequency:")}
          {this.createTextInput("capacityLastNotification", "Capacity Last Notification:")}
          {this.createTextInput("capacityLastStatusUpdate", "Capacity Last Status Update:")}
          {this.createTextInput("capacityExpireDate", "Capacity Expire Date:")}
          {this.createTextInput("accreditationName", "Accreditation Name:")}
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