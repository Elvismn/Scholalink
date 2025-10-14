const express = require('express');
const router = express.Router();
const {
  createAdmin,
  getAdmins,
  getAdmin,
  updateAdmin,
  deleteAdmin
} = require('../controllers/adminController');

router.post('/', createAdmin);
router.get('/', getAdmins);
router.get('/:id', getAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

module.exports = router;
