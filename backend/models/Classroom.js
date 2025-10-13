const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true },

  grade: { 
    type: String },

  teacherId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Teacher' },

  students: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student' }]
});

module.exports = mongoose.model('Classroom', classroomSchema);
