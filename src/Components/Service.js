//Component Description: Service component takes information of only one service and returns a react fractment displaying its attributes. Later on this component will return a form allowing the user to send PUT requests.  
import React, { Component } from 'react';
class Service extends Component {
  //TODO: implement site form below.
  render() {
    const { service } = this.props;
    return (
      <React.Fragment>
        {Object.entries(service).map(([key, value]) => {
          return <p key={key}>{key}: {value} </p>
        })}
      </React.Fragment>
    );
  }
}
export default Service;