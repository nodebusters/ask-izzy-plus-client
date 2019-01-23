const router = require('express').Router();
const mongoose = require('mongoose');
const Organisation = require('../models/Organisation')

// PUBLIC ROUTES: ROOT
router.get('/', (req,res) => {
  return res.send("public route working")
})

// PUBLIC ROUTES: DISPLAY ALL ORGANISATIONS 
router.get('/organisations', (req, res) => {
  Organisation.find()
    .then(doc => {
      res.send(doc)
    })
})

module.exports = router;