const mongoose = require('mongoose');

// Defining the Schema to follow specific rules for collections 
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);