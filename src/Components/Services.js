// Component Description: Services component objective is to list all the sites in the organisation and its services. It returns a tab for each site and as a tab content the ServicesInSite component.
import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ServicesInSite from "./ServicesInSite";

class Services extends Component {
  render() {
    // Services component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key
    // Within site object contained in sitesInOrganisation array, iterates through the array values contained in servicesInSite key, renders to Dashboard
    const { organisation } = this.props;
    const org_id = organisation._id;

    const { updateOrganisation } = this.props;
    // sites = [ {site1}, {site2}, {site3} ]
    const sites = organisation.sitesInOrganisation;
    return (
      <React.Fragment>
        <Tabs defaultIndex={0}>
          {/* REACT-TABS: Nested TabList to show multiple Site names as header */}
          <strong>Sites:</strong>
          <TabList>
            {sites.map(site => {
              return <Tab key={site.name}>{site.name}</Tab>;
            })}
          </TabList>

          {sites.map(site => {
            const site_id = site._id;
            const services = site.servicesInSite;
            return (
              <React.Fragment key={site.name}>
                {/* REACT-TABS: Nested TabPanel to show multiple ServicesInSite information as content */}
                {/* NOTE we are just passing down updateOrganisation to ServicesInSite, which will pass it to Site where we need to use it. ALSO NOTE we are passing down org_id and site_id. required for the PUT request */}
                <TabPanel>
                  <ServicesInSite
                    services={services}
                    org_id={org_id}
                    site_id={site_id}
                    updateOrganisation={updateOrganisation}
                  />
                </TabPanel>
              </React.Fragment>
            );
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default Services;
