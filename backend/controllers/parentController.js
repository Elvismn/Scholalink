const Student = require('../models/Parent');

// @desc   Create new parent
// @route  POST /api/parents
const createParent = async (req, res) => {
  try {
    const parent = new Parent(req.body);
    const savedParent = await parent.save();
    res.status(201).json(savedParent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Get all parents
// @route  GET /api/parents
const getParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.json(parent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Get one parent by ID
// @route  GET /api/parents/:id
const getParent = async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    res.json(parent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc   Update parent
// @route  PUT /api/parent/:id
const updateParent = async (req, res) => {
  try {
    const parent = await Parent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!parent) return res.status(404).json({ message: 'Parent not found' });
    res.json(parent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc   Delete parent
// @route  DELETE /api/parent/:id
const deleteParent = async (req, res) => {
  try {
    const parent = await Parent.findByIdAndDelete(req.params.id);
    if (!parent) return res.status(404).json({ message: 'parent not found' });
    res.json({ message: 'parent deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ Export all functions properly
module.exports = {
  createParent,
  getParents,
  getParent,
  updateParent,
  deleteParent
};