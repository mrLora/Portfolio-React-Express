/* DATABASE CONFIGURATION */
module.exports = process.env.DATABASE_URL || {
  // Postgresql default PORT
  port: process.env.PORT || 5432,
  // After/Before deployment hosts
  host: process.env.HOST || 'localhost',
  database: process.env.DATABASE || 'contact_dev',
};
