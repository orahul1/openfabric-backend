'use strict';

const express = require('express');
const router = express.Router();

// Main App Routes
const appModuleRoutes = require('../modules/app/index');
const productModuleRoutes = require('../modules/product/index');

router.use('/app', appModuleRoutes);
router.use('/product', productModuleRoutes);

module.exports = router;
