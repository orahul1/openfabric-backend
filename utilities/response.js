'use strict';

const config = require('../config');

exports.successResponse = (res, message, result) => {
  var response = {
    success: true,
    message: message,
  };

  if (result)
    response.result = result;

  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.OK).send(response);
};

exports.serverErrorResponse = (res, error) => {
  console.error(error);
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR).send({
    success: false,
    error: error.toString(),
    message: 'Server Error',
  });
};

exports.validationErrorResponse = (res, errors) => {
  var response = {
    success: false,
    errors: errors,
    message: 'Validation Errors',
  };

  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY).json(response);
};

exports.badRequestErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.BAD_REQUEST).send({
    success: false,
    message: message,
  });
};

exports.authorizationErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNAUTHORIZED).send({
    success: false,
    message: message,
  });
};

exports.permissionErrorResponse = (res, message) => {
  res.status(config.APP_CONSTANTS.HTTP_STATUS_CODES.UNAUTHORIZED).send({
    success: false,
    message: message,
  });
};
