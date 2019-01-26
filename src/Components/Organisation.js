import React, { Component } from "react";
class Organisation extends Component {
  render() {
    const { organisation } = this.props;
    return (
      <React.Fragment>
        {Object.entries(organisation).map(([key, value]) => {
          if (key !== "sitesInOrganisation") {
            return (
              <p key={key}>
                {key}: {value}
              </p>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
export default Organisation;