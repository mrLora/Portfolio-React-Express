/* CONTACT MODEL */
const db = require('../config/dbConnection');
// Grab all contacts
const getContacts = () => db.many(`
  SELECT *
  FROM contacts
`);
// Serach for one contact
const getContact = (id) => db.one(`
  SELECT *
  FROM contacts
  WHERE id = $1
`, id);
// Insert contact into DB
const saveContact = (contact) => db.one(`
  INSERT INTO contacts (name, email, description)
  VALUES ($/name/, $/email/, $/description/)
  RETURNING *
`, contact);
// Remove contact from DB
const destroy = (id) => db.none(`
  DELETE
  FROM contacts
  WHERE id = $1
`, id);

module.exports = {
  getContacts, getContact, saveContact, destroy,
};
