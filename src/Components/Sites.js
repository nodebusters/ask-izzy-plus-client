//Component Description: Sites component iterates the sitesInOrganisation array and returns a Tabs component with each of the sites information in a separated tab. 

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Site from './Site'

class Sites extends Component {
  render() {
    // Sites component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    const { organisation } = this.props;
    const org_id = organisation._id;
    // sites = [ {site1}, {site2}, {site3} ]
    const sites = organisation.sitesInOrganisation;


    //Storing updateOrganisation in a const so we can pass it to Site
    const { updateOrganisation } = this.props;
    return (
      <React.Fragment>
        <Tabs defaultIndex={1} >

          {/* REACT-TABS: Nested TabList to show multiple Site names as header */}
          <TabList>
            {sites.map(site => {
              return <Tab>{site.name}</Tab>
            })}
          </TabList>

          {sites.map(site => {
            return (
              <React.Fragment>
                {/* REACT-TABS: Nested TabPanel to show multiple Site information as content */}
                <TabPanel>
                  <Site org_id={org_id} site={site} updateOrganisation={updateOrganisation} />
                </TabPanel>
              </React.Fragment>
            )
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default Sites;

