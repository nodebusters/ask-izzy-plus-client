// PASSPORT: Delegated Gmail authentication using OAuth
const passport = require('passport');

// EXPRESS ROUTER: http://localhost:5000/auth/
const router = require('express').Router();

router.get('/test', (req, res) => {
  return res.send("auth route working")
})

// FIXME: Where is this logic coming from?
// PASSPORT/COOKIE-PARSER: Checks/shows different messages if a token exists or not
router.get('/token', (req, res) => {
  console.log('req.session.token',': ', req.session.token);
  if (req.session.token) {
    res.cookie('token', req.session.token);
    res.json({
      status: 'session cookie set'
    });
  } else {
    res.cookie('token', '')
    res.json({
      status: 'session cookie not set'
    });
  }
});

// General route to redirect users to logout message upon successful session termination
router.get('/logout/message', (req,res) => {
  return res.send("logout successful")
});

// PASSPORT/COOKIE-SESSION: To terminate cookie-session and redirect to logout message, fn can be called from any route handler
router.get('/logout', (req, res) => {
  // req.logout() is a passport method that terminates the login session
  req.logout();
  // req.session=null destroys the cookie-session :        
  req.session = null;
  // redirecting to logout route
  res.redirect('/auth/logout/message');
});

// PASSPORT: To login using Google oAuth 2.0 strategy from Passport
// Uses passport.authenticate() router middleware, specifying the 'google' strategy, requires an extra scope parameter
// Redirects user to google.com - after authorization, will redirect back to this application at /auth/google/callback
router.get('/login', passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

// PASSPORT: Error handling if Google oAuth login attempt unsuccessful
router.get('/login/error', (req,res) => {
  return res.send("Something went wrong with Google Oauth.")
});

// PASSPORT: Callback routing if login is successful or unsuccessful
// Uses passport.authenticate()route middleware to authenticate the request
// If authentication fails, the user will be redirected to the error page.
// Otherwise, the primary route function function will be called, will redirect the user to the protected dashboard page
router.get('/login/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/login/error'
  }),
  (req, res) => {
    console.log(req.user.token);
    req.session.token = req.user.token;
    res.redirect('/protected/dashboard');
  }
);

module.exports = router;