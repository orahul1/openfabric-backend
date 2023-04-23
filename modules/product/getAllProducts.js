'use strict';

const Product = require('../../models/product');
const responseUtil = require('../../utilities/response');

module.exports = async (req, res) => {
  try {
    let productData = await Product.find({}).select(
      '-__v -updated_at -created_at'
    );

    responseUtil.successResponse(res, 'All product fetched', productData);
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
};
