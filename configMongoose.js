// MONGOOSE CONFIGURATION: Connects to MongoDB database via Mongoose
const mongoose = require('mongoose');

// DOTENV: Reads MONGO_DRIVER url from .env file
require('dotenv').load();
const driver = process.env.MONGO_DRIVER;

// MONGOOSE: Connects to the MongoDB database on localhost:27017
mongoose.connect(driver, { useNewUrlParser: true });

// MONGOOSE: Connection event - when successfully connected
mongoose.connection.on('connected', () => {
  console.log('connected to mongod');
  console.log('-------------------------------');
});

// MONGOOSE: Connection event - when disconnected
mongoose.connection.on('error', () => {
  console.log('failed to connect to mongod');
});