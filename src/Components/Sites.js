//Component Description: Sites component iterates the sitesInOrganisation array and returns a Tabs component with each of the sites information in a separated tab.

import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Site from "./Site";
import NewSite from "./NewSite";

class Sites extends Component {
  render() {
    // Sites component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    const { organisation } = this.props;
    const org_id = organisation._id;
    // sites = [ {site1}, {site2}, {site3} ]
    const sites = organisation.sitesInOrganisation;

    // Storing updateOrganisation in a const so we can pass it to Site
    const { updateOrganisation } = this.props;
    return (
      <React.Fragment>
        <Tabs defaultIndex={0}>
          {/* REACT-TABS: Nested TabList to show multiple Site names as header */}
          <TabList>
            {sites.map(site => {
              return <Tab key={site.name}>{site.name}</Tab>;
            })}
            <Tab key="New"> New </Tab>
          </TabList>

          {sites.map(site => {
            return (
              <React.Fragment key={site.name}>
                {/* REACT-TABS: Nested TabPanel to show multiple Site information as content */}
                <TabPanel>
                  <Site
                    org_id={org_id}
                    site={site}
                    updateOrganisation={updateOrganisation}
                  />
                </TabPanel>
              </React.Fragment>
            );
          })}
          {/* NEW SITE FORM */}
          <TabPanel>
            <NewSite org_id={org_id} updateOrganisation={updateOrganisation} />
          </TabPanel>
        </Tabs>
      </React.Fragment>
    );
  }
}
export default Sites;