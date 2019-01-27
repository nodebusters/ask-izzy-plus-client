import React, { Component } from "react";
class User extends Component {
  render() {
    // User component inherits props from User model, renders object's key/values as an array to Dashboard
    const { user } = this.props;
    return (
      <React.Fragment>
      {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(user).map(([key, value]) => {
          return (
            <p key={key}> {key}: {value} </p>
          );
        })}
      </React.Fragment>
    );
  }
}
export default User;