const express = require('express');
const Parent = require('../models/Parent');
const router = express.Router();
const parentController = require('../controllers/parentController');

const {
  createParent,
  getParents,
  getParent,
  updateParent,
  deleteParent
} = require('../controllers/parentController');

router.post('/', createParent);
router.get('/', getParents);
router.get('/:id', getParent);
router.put('/:id', updateParent);
router.delete('/:id', deleteParent);

// Parent Routes
router.post('/', parentController.createParent);
router.get('/', parentController.getParents);
router.get('/:id', parentController.getParent);
router.put('/:id', parentController.updateParent);
router.delete('/:id', parentController.deleteParent);

// @desc   Get all parents
// @route  GET /api/parents
router.get('/', async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Get a single parent
// @route  GET /api/parents/:id
router.get('/:id', async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    res.json(parent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Create new parent
// @route  POST /api/parent
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, address, studentIds } = req.body;
    const parent = new Parent({ name, email, phone, address, studentIds });
    const savedParent = await parent.save();
    res.status(201).json(savedParent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Update parent
// @route  PUT /api/parent/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, email, phone, address, studentIds } = req.body;
    const updatedParent = await Parent.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, address, studentIds },
      { new: true }
    );
    if (!updatedParent) return res.status(404).json({ message: 'Parent not found' });
    res.json(updatedParent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Delete parent
// @route  DELETE /api/parent/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedParent = await Parent.findByIdAndDelete(req.params.id);
    if (!deletedParent) return res.status(404).json({ message: 'Parent not found' });
    res.json({ message: 'Parent removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
