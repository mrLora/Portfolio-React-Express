/* CONTACT ROUTE */
const router = require('express')();

const contactController = require('../controllers/contactController');

router.get(
  '/',
  contactController.getAll,
  (req, res) => res.json({ contacts: res.locals.data }),
);
router.get(
  '/:id',
  contactController.getOne,
  (req, res) => res.json(res.locals.data),
);
// Main http used for now
router.post(
  '/',
  contactController.create,
  (req, res) => res.json({ contacts: res.locals.data }),
);
router.delete(
  '/:id',
  contactController.destroy,
);

module.exports = router;
