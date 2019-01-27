//Component Decription: Services component objective is to list all the sites in the organisation and its services. It returns a tab for each site and as a tab content the ServicesInSite component. 
import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServicesInSite from './ServicesInSite'

class Services extends Component {
  render() {
    // Services component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key
    // Within site object contained in sitesInOrganisation array, iterates through the array values contained in servicesInSite key, renders to Dashboard
    const { organisation } = this.props;
    // sites = [ {site1}, {site2}, {site3} ]
    const sites = organisation.sitesInOrganisation;
    return (
      <React.Fragment>
        <Tabs defaultIndex={2} >
          {sites.map(site => {
            const services = site.servicesInSite;
            return (
              <React.Fragment>
                {/* REACT-TABS: Nested TabList to show multiple Site names as header */}
                <TabList> <Tab>{site.name}</Tab> </TabList>

                {/* REACT-TABS: Nested TabPanel to show multiple ServicesInSite information as content */}
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
