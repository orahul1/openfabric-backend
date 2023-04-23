'use strict';

const responseUtil = require('../../utilities/response');
const Product = require('../../models/product');

module.exports = async (req, res) => {
  try {
    const { productId } = req.params;

    let productData = await Product.findOne({
      _id: productId,
    });

    if (!productData)
      return responseUtil.notFoundErrorResponse(res, 'Product not found');

    await Product.findByIdAndDelete(productId);

    responseUtil.successResponse(res, 'Product deleted successfully');
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
};
