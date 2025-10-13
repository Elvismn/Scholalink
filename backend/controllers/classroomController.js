const Classroom = require('../models/Classroom');

// @desc   Create new classroom
// @route  POST /api/classrooms
const createClassroom = async (req, res) => {
    try {
        const classroom = new Classroom(req.body);
        const savedClassroom = await classroom.save();
        res.status(201).json(savedClassroom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc   Get all classrooms
// @route  GET /api/classrooms
const getClassrooms = async (req, res) => {
    try {
        const classrooms = await Classroom.find();
        res.json(classrooms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Get one classroom by ID
// @route  GET /api/classrooms/:id
const getClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.id);
        if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json(classroom);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// @desc   Update classroom
// @route  PUT /api/classrooms/:id
const updateClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json(classroom);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// @desc   Delete classroom
// @route  DELETE /api/classrooms/:id
const deleteClassroom = async (req, res) => {
    try {
        const classroom = await Classroom.findByIdAndDelete(req.params.id);
        if (!classroom) return res.status(404).json({ message: 'Classroom not found' });
        res.json({ message: 'Classroom deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// ✅ Export all functions properly
module.exports = {
    createClassroom,
    getClassrooms,
    getClassroom,
    updateClassroom,
    deleteClassroom
};