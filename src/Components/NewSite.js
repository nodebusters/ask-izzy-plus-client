//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
import axios from 'axios';

class NewSite extends Component {
  //Declaring state.
  state = {
    data: {
      openingHours:[{},{},{},{},{},{},{}]
    }
  }

  handleInputChange = (e) => {
    const { value, id } = e.currentTarget;
    const data = this.state.data;
    data[id] = value;
    this.setState({ data });
  }

  submitForm = (e) => {
    //This method updates the org data in the app.
    const { updateOrganisation } = this.props;
    e.preventDefault();
    //PUT request.
    const { org_id } = this.props;

    console.log('FORM this.state', ': ', this.state);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/create/site/${org_id}`;

    const { data } = this.state;

    axios.post(url, data)
      .then((resp => {
        console.log('PUT resp.data', ': ', resp.data);
        updateOrganisation(resp.data);
        //Changing to edit mode:
      }))
      .catch(err => {

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

  convertToYesOrNo = (val) => {
    if (val === true) {
      return "YES"
    } else {
      return "NO"
    }
  }

  createOptionInput = (attr, description) => {
    // const { site } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}>{description} </label>
        <select id={`${attr}`} onChange={this.handleInputChange}>
          <option value="" selected disabled hidden> </option>
          <option value="true">YES</option>
          <option value="false">NO</option>
        </select>
        <br></br>
      </React.Fragment>
    );
  }

  edit = (e) => {
    e.preventDefault();
    if (e.target.innerHTML === "Edit") {
      e.target.innerHTML = "Cancel"
      this.setState({
        formClass: "editMode",
        editButton: "cancelButton"
      })

    } else {
      e.target.innerHTML = "Edit"
      this.setState({
        formClass: "readMode",
        editButton: "editButton"
      })
    }
  }

  convertIndexToDay = (index) => {
    if (index === 0) {
      return "Monday"
    }
    if (index === 1) {
      return "Tuesday"
    }
    if (index === 2) {
      return "Wednesday"
    }
    if (index === 3) {
      return "Thursday"
    }
    if (index === 4) {
      return "Friday"
    }
    if (index === 5) {
      return "Saturday"
    }
    if (index === 6) {
      return "Sunday"
    }
  }

  handleOpeningHours = (e) => {
    const { value, id, name } = e.currentTarget;
    const { data } = this.state;
    // console.log('data',': ', data);
    const { openingHours } = data;
    // console.log('openingHours',': ', openingHours);

    //Note that in this case name refers to the day index (eg. 0 => Monday)
    openingHours[name][id] = value;
    this.setState({ data });
    // console.log('HANDLE, this.state.data', ': ', this.state.data);
  }

  openingHoursCreateDay = (day, index) => {
    return (
      <React.Fragment>
        <td>
          {this.convertIndexToDay(index)}
        </td>
        <td>
          <input type="text" name={index} id="openTime" placeholder={day.openTime} onChange={this.handleOpeningHours} />
        </td>
        <td>
          <input type="text" name={index} id="closeTime" placeholder={day.closeTime} onChange={this.handleOpeningHours} />
        </td>
        <td>
          <input type="text" name={index} id="openingHoursNote" placeholder={day.openingHoursNote} onChange={this.handleOpeningHours} />
        </td>
      </React.Fragment>
    )
  }

  openingHours = () => {
    const {data:{openingHours}} = this.state;

    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th> Day </th>
              <th> Opening Time </th>
              <th> Closing Time </th>
              <th> Notes </th>
            </tr>
          </thead>
          <tbody>
            {openingHours.map((day, index) => {
              // console.log(`day ${index}`,': ', day);

              return (
                <tr>
                  {this.openingHoursCreateDay(day, index)}
                </tr>
              );
            })}
          </tbody>
        </table>

        <br></br>
      </React.Fragment>
    );
  }

  render() {
    //TODO: IMPLEMENT OPENING HOURS.

    return (
      <React.Fragment>
        <form id="form" className="editMode">
          <button onClick={this.submitForm}>Update</button>
          <br></br>

          {this.openingHours()}

          <hr></hr>
          {this.createTextInput("name", "Name:")}
          {this.createTextInput("accessibility", "Accessibility:")}
          {this.createTextInput("locationDetails", "Location Details:")}
          {this.createTextInput("parkingInfo", "Parking Info:")}
          {this.createTextInput("publicTransportInfo", "Public Transport Info:")}
          {this.createOptionInput("isMobile", "Is mobile:")}
          {this.createTextInput("emailAddress", "Email Address:")}
          {this.createOptionInput("emailIsConfidential", "Email Is Confidential:")}
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
          {this.createTextInput("addressStreetName", "Street Name:")}
          {this.createTextInput("addressStreetType", "Street Type:")}
          {this.createTextInput("addressStreetSuffix", "Street Suffix:")}
          {this.createTextInput("addressSuburb", "Suburb:")}
          {this.createTextInput("addressState", "State:")}
          {this.createTextInput("addressPostcode", "Postcode:")}
          {this.createOptionInput("addressIsConfidential", "Address Is Confidential:")}
        </form>
      </React.Fragment>
    );
  }
}
export default NewSite;