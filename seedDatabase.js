// MONGOOSE: Connection configuration to MongoDB database via Mongoose library
// DOTENV: Reads MONGO_DRIVER url from .env file
console.clear();
require('dotenv').load();
const mongoose = require('mongoose');

// MONGOOSE: Connects to the MongoDB database on localhost:27017
const driver = process.env.MONGO_DRIVER_PROD;
mongoose.connect(driver);

// MONGOOSE: Connection event - when successfully connected
const Organisation = require('./models/Organisation');
const User = require('./models/User');

mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
  console.log('-------------------------------');
  async function dropDatabase(){
    return new Promise ((resolve,reject)=>{
      Organisation.deleteMany({})
      .then(()=>{
        User.deleteMany({})
        .then(()=>{
          resolve('done');
        })
      })
    })

  }

  async function seedOrganisations(){
    return new Promise ((resolve,reject)=>{ 
      // const siteData = {id:1}
    
      // To seed up to five organisations, set index to 1-5
      for (let index = 1; index <= 1; index++) {
    
        const dateValue = new Date('August 19, 1975 23:15:30');
        const booleanValue = false;
        const stringValue = `Text entry ${index}` // adding the index to the strings.
        
        const serviceData ={
          id: index,
          name: stringValue,
          description: stringValue,
          referralInfo: stringValue,
          adhcEligible: booleanValue,
          assessmentCriteria: stringValue,
          targetGender: stringValue,
          availability: stringValue,
          billingMethod: stringValue,
          cost: stringValue,
          crisisKeywords: stringValue,
          details: stringValue,
          eligibilityInfo: stringValue,
          ineligibilityInfo: stringValue,
          fundingBody: stringValue,
          healthcareCardHolders: booleanValue,
          intakeInfo: stringValue,
          intakePoint: stringValue,
          isBulkBilling: booleanValue,
          ndisApproved: booleanValue,
          promotedService: booleanValue,
          specialRequirements: stringValue,
          language: stringValue,
          ageGroupKeyword: stringValue,
          ageGroupDescription: stringValue,
          serviceTypes: stringValue,
          indigenousClassification: stringValue,
          capacityStatus: stringValue,
          capacityStatusText: stringValue,
          capacityFrequency: stringValue,
          capacityLastNotification: stringValue,
          capacityLastStatusUpdate: stringValue,
          capacityExpireDate: stringValue,
          accreditationName: stringValue,
        }
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
          servicesInSite: [serviceData],
        }
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
            resolve('done');
          });
      }
    })
  }

  async function seedUsers(){
    return new Promise ((resolve,reject)=>{


      Organisation.find()
      .then((doc)=>{
        const organisationId = doc[0]._id 
        console.log('organisationId',': ', organisationId);
        
        const dataUser = {
          email: "askizzyplustest1@gmail.com",
          firstName: "John",
          lastName: "Citizen",
          organisation:organisationId,
        }
  
        User.create(dataUser)
        .then (()=>{
          console.log(`user seeded`);
          resolve('done');
        })
        resolve ('done');      
      
      })

      
    })
  }

  async function seed(){
    await dropDatabase();
    await seedOrganisations();
    await seedUsers();
    console.log("Seeding process finalized.");
    
  }

  seed();


});

// MONGOOSE: Connection event - when disconnected
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});