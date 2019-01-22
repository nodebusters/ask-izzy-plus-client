const express = require('express');
const app = express();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const configPassport = require('./configPassport');
require ('./configMongoose'); //Connecting to MongoDB

//Configuring passport
configPassport(passport); 
app.use(passport.initialize());

require('dotenv').load();
app.use(cookieSession({
    name: 'session',
    keys: [`${process.env.SESSION_SECRET_KEY}`],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(express.json());
app.use(cookieParser()); // cookieParser populates req.cookies with the header parsed cookie, or populates req.secret if a secret string is used.

app.use(require('./controllers'));


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is running on port', port);
});