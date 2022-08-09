/* SCHEMA CONFIGURATION */
DROP DATABASE IF EXISTS contacts_dev;
CREATE DATABASE contact_dev;

-- Reference tables drop first and are created last
DROP TABLE IF EXISTS contacts;

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
-- Faster lookups based on names or dates
CREATE INDEX ON contacts (client_name);
CREATE INDEX ON contacts (created_at);
