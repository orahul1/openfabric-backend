'use strict';

/* Parse incoming request bodies in a middleware before your handlers, 
   available under the req.body property. */
const bodyParser = require('body-parser');

/* Compression will attempt to compress response bodies for all
    request that traverse through the middleware */
const compression = require('compression');

/* Helps to secure your Express apps by setting various HTTP headers */
const helmet = require('helmet');

/* Used to enable CORS */
const cors = require('cors');

/* For Logging */
const logger = require('@accubits/logger');

/* Application routes */
const routes = require('../../routes');

module.exports = async (app) => {
  app.use(
    bodyParser.urlencoded({
      extended: false,
    })
  );
  app.use(bodyParser.json());
  app.use(compression());
  app.use(cors());
  app.use(helmet());
  logger.init({});
  app.use(routes);

  /* Catch 404 and forward to error handler */
  app.use(function (req, res, next) {
    res.status(404);
    next({
      status: 404,
      message: 'Method or URL not found',
    });
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send({
      success: false,
      error: err.message || 'Method or URL not found',
    });
  });
};
