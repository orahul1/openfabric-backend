const responseUtil = require('../utilities/response');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return responseUtil.authorizationErrorResponse(res, 'Unauthorized request');
  }

  let token = authHeader.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return responseUtil.serverErrorResponse(res, 'Authorization failed');
    }
    next();
  });
};
