const express = require('express');
const http = require('http');

//create express app
const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 4000;

require('./modules/loaders')(app);

server.listen(port, error => {
  error ? console.error(`Server error ${ error }`) : console.log(`Server listening at port ${ port }`);
})