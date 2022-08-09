/* CONTACT CONTROLLER */
const db = require('../models/contactModel');
// Get all contacts from DB
const getAll = async (req, res, next) => {
  try {
    const contacts = await db.getContacts();
    res.locals.data = contacts;
    next();
  } catch (err) {
    next(err);
  }
};
// Get one contact either by id, name, or email
const getOne = async (req, res, next) => {
  try {
    const contact = await db.getContact(req.params.id);
    res.locals.data = contact;
    next();
  } catch (err) {
    next(err);
  }
};
// Create contact from input data received from client side
const create = async (req, res, next) => {
  try {
    const { name, email, description } = req.body;
    const newContact = await db.saveContact({ name, email, description });
    res.locals.data = newContact;
    next();
  } catch (err) {
    next(err);
  }
};
// Delete contact from DB
const destroy = async (req, res, next) => {
  try {
    await db.destroy(req.params.id);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll, getOne, create, destroy,
};
