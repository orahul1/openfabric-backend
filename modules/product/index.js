const express = require('express');
const router = express.Router();

const verifyToken = require('../../middlewares/verifyToken');
const createProduct = require('./createProduct');
const getAllProducts = require('./getAllProducts');
const deleteProduct = require('./deleteProduct');
const updateProduct = require('./updateProduct');

router.use(verifyToken);
router.delete('/:productId', deleteProduct);
router.post('/create', createProduct);
router.get('/all', getAllProducts);
router.put('/update', updateProduct);

module.exports = router;
