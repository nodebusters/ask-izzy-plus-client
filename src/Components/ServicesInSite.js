//Component Description: ServicesInSite component iterates each of the services of only one site that has been passed in props, and it returns in a separate tab the service name and the Service component as a tab conent. 
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Service from './Service'

class ServicesInSite extends Component {
  render() {
    // Services component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key
    // Within site object contained in sitesInOrganisation array, iterates through the array values contained in servicesInSite key, renders to Dashboard
    // services = [ { services1 }, { services2 }, {services3} ]
    const { services, org_id, site_id, updateOrganisation } = this.props;
    return (
      <React.Fragment>
        <strong>Services:</strong>
        <Tabs defaultIndex={1} >

          <TabList>
            {/* REACT-TABS: Nested TabList to show multiple Service names as header */ }
            {services.map(service => {
              return <Tab key={service.name}>{service.name}</Tab>
            })}
          </TabList>


          {services.map(service => {
            return (
              <React.Fragment key={service.name}>
                {/* REACT-TABS: Nested TabPanel to show multiple Service information as content */}

                {/* NOTE this props are very important for the PUT request later on. */}
                <TabPanel> <Service service={service} org_id={org_id} site_id={site_id} updateOrganisation={updateOrganisation} /> </TabPanel>
              </React.Fragment>
            )
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default ServicesInSite;