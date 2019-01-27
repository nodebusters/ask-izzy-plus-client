//Component Description: Site component takes information of only one site and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
class Site extends Component {
  render() {
    const {site} = this.props;
    //TODO: implement site form below.
    return (
      <React.Fragment>
        {Object.entries(site).map(([key, value]) => {
          if (key !== 'servicesInSite' && key !== 'openingHours') {
            return <p key={key}>{key}: {value} </p>
          }
        })}
      </React.Fragment>
    );
  }
}
export default Site;