// EXPRESS ROUTER: for /, /protected, /public routes
const express = require('express');
const router = express.Router();

// MIDDLEWARE: Between all requests/responses for /, /protected, /public routes
router.use('/', require('./public'));
router.use('/auth', require('./auth'));
router.use('/protected', require('./protected'));

module.exports = router;