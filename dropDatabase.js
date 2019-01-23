// DOTENV: Reads environmental variables from .env file
require('dotenv').load();

console.clear();

// MONGOOSE: Connection to MongoDB via Mongoose
require('./configMongoose');

//TODO: Implement drop database method