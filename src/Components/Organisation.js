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
    e.preventDefault();
    //PUT request.
    const  org_id = this.props.organisation._id;
    console.log('this.state', ': ', this.state);
    
    const baseURL = process.env.REACT_APP_BASE_URL;
    const url = `${baseURL}/protected/update/organisation/${org_id}`;

    const data = this.state;

    axios.put(url, data)
    .then((resp=>{
      console.log('resp',': ', resp);
    }))
    .catch(err=>{
      
    })
  }

  render() {

    // Organisation component inherits props from Organisation model, renders object's key/values as an array to Dashboard
    const { organisation } = this.props;
    return (
      <React.Fragment>

        <form>
          <label htmlFor="name"> Name: </label>
          <input type="text" id="name" onChange={this.handleInputChange} />
          <br></br>
          <label htmlFor="description"> Description: </label>
          <input type="text" id="description" onChange={this.handleInputChange} />
          <br></br>
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