//Component Description: Sites component iterates the sitesInOrganisation array and returns a Tabs component with each of the sites information in a separated tab. 

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Site from './Site'

class Sites extends Component {
  render() {
    // Sites component inherits props from Organisation models, iterates through the array values contained in sitesInOrganisation key, renders to Dashboard
    const { organisation } = this.props;
    const sites = organisation.sitesInOrganisation;
    return (
      <React.Fragment>
        <Tabs defaultIndex={2} >
          {sites.map(site => {
            return (
              <React.Fragment>
                {/* REACT-TABS: Nested TabList to show multiple Site names as header */}
                <TabList>
                  <Tab>{site.name}</Tab>
                </TabList>

                {/* REACT-TABS: Nested TabPanel to show multiple Site information as content */}
                <TabPanel>
                  <Site site={site} />
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

