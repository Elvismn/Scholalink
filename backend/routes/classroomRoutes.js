const express = require('express');
const Classroom = require('../models/Classroom');
const router = express.Router();
const classroomController = require('../controllers/classroomController');

const {
    createClassroom,
    getClassrooms,
    getClassroom,
    updateClassroom,
    deleteClassroom
} = require('../controllers/classroomController');

router.post('/', createClassroom);
router.get('/', getClassrooms);
router.get('/:id', getClassroom);
router.put('/:id', updateClassroom);
router.delete('/:id', deleteClassroom);

// Classroom Routes
router.post('/', classroomController.createClassroom);
router.get('/', classroomController.getClassrooms);
router.get('/:id', classroomController.getClassroom);
router.put('/:id', classroomController.updateClassroom);
router.delete('/:id', classroomController.deleteClassroom);

// @desc   Get all classrooms
// @route  GET /api/classrooms
router.get('/', async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json(classrooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc   Get a single classroom
// @route  GET /api/classrooms/:id
router.get('/:id', async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json(classroom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// @desc   Create new classroom
// @route  POST /api/classrooms
router.post('/', async (req, res) => {
    try {
        const { name, age, course, year } = req.body;
        const classroom = new Classroom({ name, age, course, year });
        const savedClassroom = await classroom.save();
        res.status(201).json(savedClassroom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @desc   Update classroom
// @route  PUT /api/classrooms/:id
router.put('/:id', async (req, res) => {
    try {
        const { name, age, course, year } = req.body;
        const updatedClassroom = await Classroom.findByIdAndUpdate(
            req.params.id,
            { name, age, course, year },
            { new: true }
        );
        if (!updatedClassroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json(updatedClassroom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// @desc   Delete classroom
// @route  DELETE /api/classrooms/:id
router.delete('/:id', async (req, res) => {
    try {
        const deletedClassroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!deletedClassroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json({ message: 'Classroom removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
