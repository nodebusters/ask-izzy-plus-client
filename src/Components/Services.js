//Component Decription: Services component objective is to list all the sites in the organisation and its services. It returns a tab for each site and as a tab content the ServicesInSite component. 
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServicesInSite from './ServicesInSite'

class Services extends Component {
  render() {
    const { organisation } = this.props;
    const sites = organisation.sitesInOrganisation;
    return (
      <React.Fragment>
        <Tabs defaultIndex={2} >
          {sites.map(site => {
            const services = site.servicesInSite;
            return (
              <React.Fragment>
                <TabList> <Tab>{site.name}</Tab> </TabList>
                <TabPanel>
                  <ServicesInSite services = {services} />
                </TabPanel>
              </React.Fragment>
            )
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default Services;
