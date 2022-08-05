/* PG-PROMISE CONFIGURATION */

// Init pp-promise
const pgp = require('pg-promise')();
// Importing database
const config = require('./dbConfig');

module.exports = pgp(config);
