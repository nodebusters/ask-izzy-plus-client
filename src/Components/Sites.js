import React, { Component } from "react";
class Sites extends Component {
  render() {
    const { organisation } = this.props;

    const { sitesInOrganisation } = organisation;
    //  console.log('sitesInOrganisation', ': ', sitesInOrganisation);
    const sites = sitesInOrganisation[0];
    //  console.log('sites', ': ', sites);

    return (
      <React.Fragment>
        {Object.entries(sites).map(([key, value]) => {
          if (key !== "servicesInSite" && key !== "openingHours") {
            return (
              <p key={key}>
                {key}: {value}{" "}
              </p>
            );
          }
        })}
      </React.Fragment>
    );
  }
}
export default Sites;