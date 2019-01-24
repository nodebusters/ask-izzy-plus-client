// MONGOOSE: Connection configuration to MongoDB database via Mongoose library
// DOTENV: Reads MONGO_DRIVER url from .env file
console.clear();
require('dotenv').load();
const mongoose = require('mongoose');

// MONGOOSE: Connects to the MongoDB database on localhost:27017
const driver = process.env.MONGO_DRIVER;
mongoose.connect(driver);

// MONGOOSE: Connection event - when successfully connected
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
  console.log('-------------------------------');

  const Organisation = require('./models/Organisation');
  // const siteData = {id:1}

  // To seed up to five organisations, set index to 1-5
  for (let index = 1; index <= 5; index++) {

    const dateValue = new Date('August 19, 1975 23:15:30');
    const stringValue = `Text entry ${index}` // adding the index to the strings.
    const booleanValue = false;

    const siteData = {
      id: index,
      name: stringValue,
      accessibility: stringValue,
      locationDetails: stringValue,
      parkingInfo: stringValue,
      publicTransportInfo: stringValue,
      isMobile: booleanValue,
      emailAddress: stringValue,
      emailIsConfidential: stringValue,
      website: stringValue,
      postalAddress: stringValue,
      postalAddressState: stringValue,
      postalAddressSuburb: stringValue,
      postalAddressPostcode: stringValue,
      postalAddressIsConfidential: booleanValue,
      phoneNumber: stringValue,
      phoneKind: stringValue,
      phoneIsConfidential: booleanValue,
      openingHours: [{day:"Monday",
        openTime:"8:30",
        closeTime:"15:30",
        openingHoursNote: "closes early"}],
      addressBuilding: stringValue,
      addressLevel: stringValue,
      addressFlatUnit: stringValue,
      addressStreetNumber: stringValue,
      addressStreetName: stringValue,
      addressStreetType: stringValue,
      addressStreetSuffix: stringValue,
      addressSuburb: stringValue,
      addressState: stringValue,
      addressPostcode: stringValue,
      addressIsConfidential: booleanValue,
      servicesInSite: [],
    }
​
​
    const organisationData = {
      id: index, // note we add the index as id
      name: stringValue,
      description: stringValue,
      creationTime: dateValue,
      lastModified: dateValue,
      lastUpdated: dateValue,
      website: stringValue,
      abn: stringValue,
      providerType: stringValue,
      alsoKnownAs: stringValue,
      emailAddress: stringValue,
      emailIsConfidential: booleanValue,
      postalAddress: stringValue,
      postalAddressState: stringValue,
      postalAddressSuburb: stringValue,
      postalAddressPostcode: stringValue,
      postalAddressIsConfidential: booleanValue,
      phoneNumber: stringValue,
      phoneKind: stringValue,
      phoneIsConfidential: booleanValue,
      ceo: stringValue,
      sitesInOrganisation: [siteData],
    }

    Organisation.create(organisationData)
      .then(() => {
        console.log(`organisation ${index} seeded`);
      });
  }
});

// MONGOOSE: Connection event - when disconnected
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});