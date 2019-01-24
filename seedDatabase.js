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
      Name: stringValue,
      Accessibility: stringValue,
      LocationDetails: stringValue,
      ParkingInfo: stringValue,
      PublicTransportInfo: stringValue,
      IsMobile: booleanValue,
      EmailAddress: stringValue,
      EmailIsConfidential: stringValue,
      Website: stringValue,
      PostalAddress: stringValue,
      PostalAddressState: stringValue,
      PostalAddressSuburb: stringValue,
      PostalAddressPostcode: stringValue,
      PostalAddressIsConfidential: booleanValue,
      PhoneNumber: stringValue,
      PhoneKind: stringValue,
      PhoneIsConfidential: booleanValue,
      OpeningHours: [{day:"Monday",
        openTime:"8:30",
        closeTime:"15:30",
        openingHoursNote: "closes early"}],
      AddressBuilding: stringValue,
      AddressLevel: stringValue,
      AddressFlatUnit: stringValue,
      AddressStreetNumber: stringValue,
      AddressStreetName: stringValue,
      AddressStreetType: stringValue,
      AddressStreetSuffix: stringValue,
      AddressSuburb: stringValue,
      AddressState: stringValue,
      AddressPostcode: stringValue,
      AddressIsConfidential: booleanValue,
      servicesInSite: [],
    }


    const organisationData = {
      id: index, // note we add the index as id
      Name: stringValue,
      Description: stringValue,
      CreationTime: dateValue,
      LastModified: dateValue,
      LastUpdated: dateValue,
      Website: stringValue,
      ABN: stringValue,
      ProviderType: stringValue,
      AlsoKnownAs: stringValue,
      EmailAddress: stringValue,
      EmailIsConfidential: booleanValue,
      PostalAddress: stringValue,
      PostalAddressState: stringValue,
      PostalAddressSuburb: stringValue,
      PostalAddressPostcode: stringValue,
      PostalAddressIsConfidential: booleanValue,
      PhoneNumber: stringValue,
      PhoneKind: stringValue,
      PhoneIsConfidential: booleanValue,
      CEO: stringValue,
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