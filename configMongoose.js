// DOTENV: Reads MONGO_DRIVER URI from .env file
require('dotenv').load();
const mongoose = require('mongoose');

const driver = process.env.MONGO_DRIVER;

mongoose.connect(driver, { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
    console.log('connected to mongod');
    console.log('-------------------------------');
});
mongoose.connection.on('error', () => {
    console.log('failed to connect to mongod');
});