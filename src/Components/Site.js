//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.
import React, { Component } from "react";
import axios from "axios";
import "../stylesheets/Site.css";

class Site extends Component {
  // Declaring state.
  // Note we need to define openingHours here so there is no error the first time it renders.
  state = {
    data: {},
    formClass: "readMode",
    editButton: "editButton"
  };

  // These steps are important in order to retrieve the data in the db and store it in state. Otherwise everytime we update opening hours it could erase existing data.
  componentDidMount() {
    const { site } = this.props;
    this.setState({ data: site });
    // Hiding updateButton:
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
    const { updateOrganisation } = this.props;

    e.preventDefault();
    // PUT request.
    const { org_id } = this.props;
    const site_id = this.props.site._id;

    console.log("FORM this.state", ": ", this.state);

    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/site/${org_id}/${site_id}`;

    const { data } = this.state;

    axios
      .put(url, data, config)
      .then(resp => {
        console.log("PUT resp.data", ": ", resp.data);
        updateOrganisation(resp.data);
        // Changing to edit mode:
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
    const { site } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}> {description} </label>
        <input
          type="text"
          id={`${attr}`}
          placeholder={site[attr]}
          onChange={this.handleInputChange}
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
    const { site } = this.props;
    return (
      <React.Fragment>
        <label htmlFor={`${attr}`}>{description} </label>
        <select id={`${attr}`} onChange={this.handleInputChange}>
          <option value="" selected disabled hidden>
            {this.convertToYesOrNo(site[attr])}
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
      // Showing the updateButton with vanilla js.
      const updateButton = document.querySelector("#updateButton");
      updateButton.style.visibility = "visible";
    } else {
      e.target.innerHTML = "Edit";
      this.setState({
        formClass: "readMode",
        editButton: "editButton"
      });
      // Hiding the updateButton with vanilla js.
      const updateButton = document.querySelector("#updateButton");
      updateButton.style.visibility = "hidden";
    }
  };

  delete = e => {
    e.preventDefault();
    console.log("Delete request triggered.");
    // NOTE that we are getting updateOrganisation method from props.
    const { org_id, site, updateOrganisation } = this.props;
    const site_id = site._id;
    // console.log('org_id',': ', org_id);
    // console.log('site_id',': ', site_id);

    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/site/${org_id}/${site_id}`;
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        token
      }
    };
    axios.delete(url, config).then(resp => {
      // res.data is the new organisation after deleting site.
      // console.log('resp.data', ': ', resp.data);
      // calling updateOrganisation so it renders the new data.
      updateOrganisation(resp.data);
    });
  };

  convertIndexToDay = index => {
    if (index === 0) {
      return "Monday";
    }
    if (index === 1) {
      return "Tuesday";
    }
    if (index === 2) {
      return "Wednesday";
    }
    if (index === 3) {
      return "Thursday";
    }
    if (index === 4) {
      return "Friday";
    }
    if (index === 5) {
      return "Saturday";
    }
    if (index === 6) {
      return "Sunday";
    }
  };

  handleOpeningHours = e => {
    const { value, id, name } = e.currentTarget;
    const { data } = this.state;
    // console.log('data',': ', data);
    const { openingHours } = data;
    // console.log('openingHours',': ', openingHours);

    // Note that in this case name refers to the day index (eg. 0 => Monday)
    openingHours[name][id] = value;
    this.setState({ data });
    // console.log('HANDLE, this.state.data', ': ', this.state.data);
  };

  openingHoursCreateDay = (day, index) => {
    return (
      <React.Fragment>
        <td>{this.convertIndexToDay(index)}</td>
        <td>
          <input
            type="text"
            name={index}
            id="openTime"
            placeholder={day.openTime}
            onChange={this.handleOpeningHours}
          />
        </td>
        <td>
          <input
            type="text"
            name={index}
            id="closeTime"
            placeholder={day.closeTime}
            onChange={this.handleOpeningHours}
          />
        </td>
        <td>
          <input
            type="text"
            name={index}
            id="openingHoursNote"
            placeholder={day.openingHoursNote}
            onChange={this.handleOpeningHours}
          />
        </td>
      </React.Fragment>
    );
  };

  openingHours = () => {
    const { site } = this.props;

    const { openingHours } = site;

    return (
      <React.Fragment>
        <table className="opening-hours">
          <thead>
            <tr>
              <th className="opening-days">Day</th>
              <th className="opening-times">Opening Time</th>
              <th className="opening-times">Closing Time</th>
              <th className="open">Notes</th>
            </tr>
          </thead>
          <tbody>
            {openingHours.map((day, index) => {
              // console.log(`day ${index}`,': ', day);

              return <tr>{this.openingHoursCreateDay(day, index)}</tr>;
            })}
          </tbody>
        </table>

        <br />
      </React.Fragment>
    );
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
        <div className="site-form">
          <form id="form" className={this.state.formClass} data-site-form>
            {this.createTextInput("name", "Name:")}
            {this.createTextInput("accessibility", "Accessibility:")}
            {this.createTextInput("locationDetails", "Location Details:")}
            {this.createTextInput("parkingInfo", "Parking Info:")}
            {this.createTextInput(
              "publicTransportInfo",
              "Public Transport Info:"
            )}
            {this.createOptionInput("isMobile", "Is mobile:")}
            {this.createTextInput("emailAddress", "Email Address:")}
            {this.createOptionInput(
              "emailIsConfidential",
              "Email Is Confidential:"
            )}
            {this.createTextInput("website", "Website:")}
            {this.createTextInput("postalAddress", "Postal Address:")}
            {this.createTextInput("postalAddressState", "State:")}
            {this.createTextInput("postalAddressSuburb", "Suburb:")}
            {this.createTextInput("postalAddressPostcode", "Postcode:")}
            {this.createOptionInput(
              "postalAddressIsConfidential",
              "Postal Address Is Confidential:"
            )}
            {this.createTextInput("phoneNumber", "Phone Number:")}
            {this.createTextInput("phoneKind", "Phone Kind:")}
            {this.createOptionInput(
              "phoneIsConfidential",
              "Phone Is Confidential:"
            )}
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
            {this.createOptionInput(
              "addressIsConfidential",
              "Address Is Confidential:"
            )}
            <br />
            {this.openingHours()}
            <button onClick={this.submitForm} className="updateButton">
              Update
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default Site;