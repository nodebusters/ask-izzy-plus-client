const router = require('express').Router();

router.get('/test', (req,res)=>{
  return res.send("protected route working")
})

// isAuthenticated checks for google oauth token.
const isAuthenticated = (req, res, next) => {
  if (req.session.token) {
      next();  
  } else {
      res.send("Sorry you need to login");
  }
}

router.get('/profile',isAuthenticated, (req,res)=>{
    const {user} = req.session.passport;
    console.log('req.session',': ', req.session);
    res.send(user.profile);
})

router.get('/dashboard', (req,res)=>{
  if (req.session.token) {
      const {user} = req.session.passport
      console.log('req.session',': ', req.session);
      const {givenName} = user.profile.name;
      res.send(`Welcome ${givenName}`);
  } else {
      res.send("Sorry you need to sign in.");
  }
})

module.exports = router;
