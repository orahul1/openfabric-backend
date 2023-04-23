'use strict';

const Product = require('../../models/product');
const responseUtil = require('../../utilities/response');
const { check, validationResult } = require('express-validator');

module.exports = [
  /* Validate incoming request data */
  check('id').not().isEmpty(),
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

      let updateData = {};

      if (requestData.name) updateData.name = requestData.name;

      if (requestData.description)
        updateData.description = requestData.description;

      if (requestData.price) updateData.price = requestData.price;

      await Product.findByIdAndUpdate(requestData.id, {
        $set: updateData,
      }).then(() => {
        responseUtil.successResponse(res, 'Product updated successfully');
      });

      responseUtil.successResponse(res, 'Product created', null);
    } catch (ex) {
      responseUtil.serverErrorResponse(res, ex);
    }
  },
];
