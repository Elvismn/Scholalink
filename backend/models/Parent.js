const mongoose = require('mongoose');

const parentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true },

  email: { 
    type: String, 
    unique: true },

  phone: { 
    type: String },

  address: { 
    type: String },
  
  studentIds: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student' }]
});

module.exports = mongoose.model('Parent', parentSchema);
