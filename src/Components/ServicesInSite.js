//Component Description: ServicesInSite component iterates each of the services of only one site that has been passed in props, and it returns in a separate tab the service name and the Service component as a tab conent. 
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Service from './Service'

class ServicesInSite extends Component {
   render() {
    const {services} = this.props;
    return (
      <React.Fragment>
        <Tabs defaultIndex={2} >
          {services.map(service => {
            return (
              <React.Fragment>
                <TabList> <Tab>{service.name}</Tab> </TabList>
                <TabPanel> <Service service={service} /> </TabPanel>
              </React.Fragment>
            )
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default ServicesInSite;


{/* <Tabs defaultIndex={2} >
{services.map(service => {
  return (
    <React.Fragment>

      <TabList> {service.name} </TabList>
      <TabPanel> <Service service={service}/> </TabPanel>
    </React.Fragment>
  );
})}
</Tabs > */}