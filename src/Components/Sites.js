//Component Description: Sites component iterates the sitesInOrganisation array and returns a Tabs component with each of the sites information in a separated tab. 

import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Site from './Site'

class Sites extends Component {
  render() {
    const { organisation } = this.props;
    const sites = organisation.sitesInOrganisation;
    return (
      <React.Fragment>
        <Tabs defaultIndex={2} >
          {sites.map(site => {
            return (
              <React.Fragment>
                <TabList> <Tab>{site.name}</Tab> </TabList>
                <TabPanel> <Site site={site} /> </TabPanel>
              </React.Fragment>
            )
          })}
        </Tabs>
      </React.Fragment>
    );
  }
}
export default Sites;

