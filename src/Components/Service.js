//Component Description: Service component takes information of only one service and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
class Service extends Component {
  //TODO: implement site form below.
  render() {
    // Service component inherits props from Services component, iterates through the array values contained in ServicesInSites key, renders to Dashboard
    // service2 = { serviceName: 'Melbourne Medical X-Rays', siteAddress: '123 Example Street'}
    const { service } = this.props;
    return (
      <React.Fragment>
      {/* Object.entries() returns an array of a given object's own enumerable property [key, value] pairs, in the same order as that provided */}
        {Object.entries(service).map(([key, value]) => {
          return <p key={key}>{key}: {value} </p>
        })}
      </React.Fragment>
    );
  }
}
export default Service;