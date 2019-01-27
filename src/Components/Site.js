//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
class Site extends Component {
  render() {
    // Site component inherits props from Sites component, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    // site1 = { siteName: 'Melbourne Medical', siteAddress: '123 Example Street'}
    const { site } = this.props;
    //TODO: implement site form below.
    return (
      <React.Fragment>
      {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(site).map(([key, value]) => {
        // Unless no array exists in servicesInSite and openingHours, iterate through, otherwise render key/value for sitesInOrganisation
          if (key !== 'servicesInSite' && key !== 'openingHours') {
            return <p key={key}>{key}: {value} </p>
          }
        })}
      </React.Fragment>
    );
  }
}
export default Site;