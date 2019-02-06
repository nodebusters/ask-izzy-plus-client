import React, { Component } from "react";
import "../stylesheets/User.css";
import userAvatar from '../Images/user-avatar.svg';

class User extends Component {
  render() {
    // User component inherits props from User model, renders object's key/values as an array to Dashboard
    const { user, organisation, given_name, family_name  } = this.props;
    console.log('given_name',': ', given_name);
    
    return (
      <div className="user-container">
        <h1> Welcome {given_name} </h1>
          <div className="user-card">
            {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
            <div className="user-info">
              <h3> User Profile </h3>
              <p> <strong>First Name: </strong> {given_name} </p>
              <p> <strong>Last Name: </strong> {family_name} </p>
              <p> <strong> Registered Email: </strong> {user.email} </p>
              <p> <strong> Organisation: </strong> {organisation.name} </p>
            </div>
            <div className="user-avatar">
              <img src={userAvatar} alt="User avatar"/>
            </div>
          </div>
      </div>
    );
  }
}
export default User;