import React, { Component } from 'react';
class Services extends Component {
  render() {
    const { organisation } = this.props;

    const { sitesInOrganisation } = organisation;
    //  console.log('sitesInOrganisation', ': ', sitesInOrganisation);
    const site = sitesInOrganisation[0];
    //  console.log('sites', ': ', sites);
    const service = site.servicesInSite[0];

    return (
      <React.Fragment>
        <h3>Site:{site.name} </h3>
        {Object.entries(service).map(([key, value]) => {
          return <p key={key}>{key}: {value} </p>
        })}

      </React.Fragment>
    );
  }
}
export default Services;
