// PASSPORT: Delegated Gmail authentication using OAuth
const passport = require('passport');

// EXPRESS ROUTER: http://localhost:5000/auth/
const router = require('express').Router();

router.get('/test', (req, res) => {
  return res.send("auth route working")
})

// Token info:
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

router.get('/logout/message', (req,res)=>{
    return res.send("logout successful")
  })

router.get('/logout', (req, res) => {
    // req.logout() is a passport method that terminates the login session
    req.logout();
    // req.session=null destroys the cookie-session :        
    req.session = null;
    // redirecting to root
    res.redirect('/auth/logout/message');
});



router.get('/login', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/login/error', (req,res)=>{
    return res.send("Something went wrong with Google Oauth.")
  })

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