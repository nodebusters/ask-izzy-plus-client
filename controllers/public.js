// EXPRESS ROUTER: Public pages to show all users and guests
const router = require('express').Router();

// MONGOOSE: Connect to MongoDB via Mongoose and reference Organisation collection
const mongoose = require('mongoose');
const Organisation = require('../models/Organisation')

// PUBLIC ROUTES: Root
router.get('/', (req,res) => {
  return res.send("public route working")
})

// PUBLIC ROUTES: To display all organisations
router.get('/organisations', (req, res) => {
  Organisation.find()
    .then(doc => {
      res.send(doc)
    })
})

module.exports = router;