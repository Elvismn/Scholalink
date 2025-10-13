const express = require('express');
const router = express.Router();
const {
  createTeacher,
  getTeachers,
  getTeacher,
  updateTeacher,
  deleteTeacher
} = require('../controllers/teacherController');

// Teacher Routes
router.post('/', createTeacher);
router.get('/', getTeachers);
router.get('/:id', getTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

// @desc   Get all teachers
// @route  GET /api/teachers
router.get('/', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Get a single teacher
// @route  GET /api/teachers/:id
router.get('/:id', async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);
    if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json(teacher);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc   Create new teacher
// @route  POST /api/teachers
router.post('/', async (req, res) => {
  try {
    const { name, subject, email, hireDate } = req.body;
    const teacher = new Teacher({ name, subject, email, hireDate });
    const savedTeacher = await teacher.save();
    res.status(201).json(savedTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Update teacher
// @route  PUT /api/teachers/:id
router.put('/:id', async (req, res) => {
  try {
    const { name, subject, email, hireDate } = req.body;
    const updatedTeacher = await Teacher.findByIdAndUpdate(
      req.params.id,
      { name, subject, email, hireDate },
      { new: true }
    );
    if (!updatedTeacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json(updatedTeacher);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// @desc   Delete Teacher
// @route  DELETE /api/teachers/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(req.params.id);
    if (!deletedTeacher) return res.status(404).json({ message: 'Teacher not found' });
    res.json({ message: 'Teacher removed' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
