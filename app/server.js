/* EXPRESS SERVER CONFIGURATION */
require('dotenv').config();

// Acquire Dependencies
const express = require('express');
// Logs server status response
const logger = require('morgan');
// Data storing on incoming requests
const bodyParser = require('body-parser');
// Client-side server communication
const cors = require('cors');

// Acquire Routers
const repoRouter = require('./routes/reposRoute');
const contactRouter = require('./routes/contactRoute');

// Initializing PORT
const PORT = process.env.PORT || 3000;

// Initializing App
const app = express();
// Initializing Morgan
app.use(logger('dev'));
// Initializing body-parser to present readable data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Is there a connection to the server? 200 = OK
app.get('/', (req, res) => {
  res.send('Server is up and running...');
});

// Route Error Handler
app.use('*', (err, req, res, next) => {
  res.status(400).json({
    error: err,
    message: err.message,
  });
  next();
});

// Server-side Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: err.message,
  });
  next();
});

// Establish PORT Connection
app.listen(PORT, () => {
  console.log(`Sever is up and listening on ${PORT}, in ${app.get('env')} mode.`);
});
