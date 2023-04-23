'use strict';

const responseUtil = require('../../utilities/response');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const token = jwt.sign({ user: 'guest' }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    responseUtil.successResponse(res, 'Token generated', token);
  } catch (ex) {
    responseUtil.serverErrorResponse(res, ex);
  }
};
