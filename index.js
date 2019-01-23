// DEPENDENCIES: Node.js dependencies from node_modules folder
const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const configPassport = require('./configPassport');

// MONGOOSE: Connection configuration to MongoDB database via Mongoose library
require ('./configMongoose');

// MIDDLEWARE (PASSPORT): Google OAuth configuration settings from configPassport.js file
configPassport(passport); 
app.use(passport.initialize());

// DOTENV: Reads environmental variables from .env file
require('dotenv').load();

// MIDDLEWARE (COOKIE-SESSION): Middleware creates a new client-side user session
// The credentials used to authenticate a user will only be transmitted during the login request. 
// If authentication succeeds, a session will be established and maintained via a cookie set in the user's browser.
app.use(cookieSession({
  name: 'session',
  keys: [`${process.env.SESSION_SECRET_KEY}`],
  maxAge: 24 * 60 * 60 * 1000
}));

// MIDDLEWARE (EXPRESS.JSON): Accesses req.body 
app.use(express.json());

// MIDDLEWARE (COOKIE-PARSER): Populates req.cookies with the header parsed cookie, or populates req.secret if a secret string is used.
app.use(cookieParser()); 

// MIDDLEWARE (CONTROLLERS): Middleware routes for authentication, public and private endpoints from controllers/index.js
app.use(require('./controllers'));

// EXPRESS SERVER/PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running on port', port);
});