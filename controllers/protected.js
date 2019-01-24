// EXPRESS ROUTER: Protected pages redirected from auth.js middleware
const router = require('express').Router();
const jwtDecode = require('jwt-decode');

router.get('/test', (req, res) => {
  return res.send("protected route working")
})

// MIDDLEWARE: isAuthenticated function checks for Google oAuth token first
const isAuthenticated = (req, res, next) => {
  if (req.session.token) {
    next();
  } else {
    res.send("Sorry you need to login");
  }
}

// PASSPORT: To access profile, isAuthenticated function runs first, returns a Google oAuth object
router.get('/profile', isAuthenticated, (req, res) => {
  const { user } = req.session.passport;
  console.log('req.session', ': ', req.session);
  res.send(user.profile);
});

// PASSPORT: To access dashboard, a token must exist, otherwise will show a message to sign in
router.get('/dashboard', (req, res) => {
  if (req.session.token) {
    const { user } = req.session.passport
    console.log('req.session', ': ', req.session);
    const { givenName } = user.profile.name;
    res.send(`Welcome ${givenName}`);
  } else {
    res.send("Sorry you need to sign in.");
  }
})

//CHECKS for google oauth token and send back data to client.
//localhost:5000/protected/getUserData
router.get('/getUserData', (req, res) => {
  const { token } = req.headers;
  console.log('token', ': ', token);

  const decoded = jwtDecode(token);
  console.log(decoded);
  
  // const data = decoded;
  const organisation = {
    name: "organisation 1",
    sitesInOrganisation: [{
      name: "site 1",
      servicesInSite: [{ name: "service 1" }]
    }]
  }

  const data = {
    user: { name: "user1", email: "user1@gmail.com" },
    organisation: organisation
  };

  return res.send(data);
})

module.exports = router;
