// DOTENV: Reads environmental variables from .env file
require('dotenv').load();

// PASSPORT: Using Google authentication strategy for OAuth
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// PASSPORT: Once authneticated, each subsequent request will not contain credentials, but rather the unique cookie that identifies the session. In order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
function configPassport(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.GOOGLE_CALLBACK_URL}`
    },
    (token, refreshToken, profile, done) => {
      return done(null, {
        profile: profile,
        token: token
      });
    }
  ));
}

module.exports = configPassport;
