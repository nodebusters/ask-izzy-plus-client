// DEPENDENCIES: Node.js dependencies from node_modules folder
const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const configPassport = require('./configPassport');

// MONGOOSE: Connection to MongoDB via Mongoose
require ('./configMongoose'); // Connecting to MongoDB

// MIDDLEWARE (PASSPORT): Google OAuth configuration settings
configPassport(passport); 
app.use(passport.initialize());

// DOTENV: Reads environmental variables from .env file
require('dotenv').load();

// MIDDLEWARE (COOKIE SESSION): Client-side user session
app.use(cookieSession({
  name: 'session',
  keys: [`${process.env.SESSION_SECRET_KEY}`],
  maxAge: 24 * 60 * 60 * 1000
}));

// MIDDLEWARE (EXPRESS.JSON): Accesses req.body 
app.use(express.json());

// MIDDLEWARE (COOKIE-PARSER): Populates req.cookies with the header parsed cookie, or populates req.secret if a secret string is used.
app.use(cookieParser()); 

// MIDDLEWARE (CONTROLLERS): Routes for authentication, public and private endpoints
app.use(require('./controllers'));

// EXPRESS SERVER PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});