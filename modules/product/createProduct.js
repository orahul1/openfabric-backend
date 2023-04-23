'use strict';
const Product = require('../../models/product');
const responseUtil = require('../../utilities/response');
const { check, validationResult } = require('express-validator');

/***
 * @description This API endpoint creates a new product.
 */

module.exports = [
  /* Validate incoming request data */
  check('name').not().isEmpty(),
  check('description').not().isEmpty(),
  check('price').not().isEmpty(),

  /* Handle the API endpoint's main logic */
  async (req, res) => {
    /* Check if there are any validation errors */
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return responseUtil.validationErrorResponse(res, errors.array());

    try {
      var requestData = req.body;

      await new Product({
        name: requestData.name,
        description: requestData.description,
        price: requestData.price,
      }).save();

      responseUtil.successResponse(res, 'Product created', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
