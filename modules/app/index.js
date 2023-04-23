const express = require('express');
const router = express.Router();

const getToken = require('./getToken');

router.get('/token', getToken);

module.exports = router;
