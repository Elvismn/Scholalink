const express = require('express');
const Subject = require('../models/Subject');
const router = express.Router();
const subjetController = require('../controllers/subjectController');

const {
  createSubject,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject
} = require('../controllers/subjectController');

router.post('/', createSubject);
router.get('/', getSubjects);
router.get('/:id', getSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);

// Subject Routes
router.post('/', subjetController.createSubject);
router.get('/', subjetController.getSubjects);
router.get('/:id', subjetController.getSubject);
router.put('/:id', subjetController.updateSubject);
router.delete('/:id', subjetController.deleteSubject);

// @desc   Get all subjects
// @route  GET /api/subjects
router.get('/', async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Get a single subject
// @route  GET /api/subjects/:id
router.get('/:id', async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) return res.status(404).json({ message: 'Subject not found' });
    res.json(subject);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Create new subject
// @route  POST /api/subjects
router.post('/', async (req, res) => {
  try {
    const { name, code, teacherId } = req.body;
    const subject = new Subject({ name, code, teacherId });
    const savedSubject = await subject.save();
    res.status(201).json(savedSubject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Update subject
// @route  PUT /api/subjects/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, code, teacherId } = req.body;
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      { name, code, teacherId },
      { new: true }
    );
    if (!updatedSubject) return res.status(404).json({ message: 'Subject not found' });
    res.json(updatedSubject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Delete subject
// @route  DELETE /api/subjects/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
    if (!deletedSubject) return res.status(404).json({ message: 'Subject not found' });
    res.json({ message: 'Subject removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
