'use strict';

const mongoose = require('mongoose');

module.exports = () => {
  var promise = mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  promise
    .then(() => {
      console.log({
        message: 'MongoDB connected',
        level: 'info',
      });
    })
    .catch((err) => {
      console.error({
        message: `MongoDB Connection error - ${err.toString()}`,
        level: 'error',
      });
    });
};
