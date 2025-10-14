// controllers/enrollmentController.js
const Enrollment = require("../models/Enrollment");

// ✅ Enroll a student
exports.createEnrollment = async (req, res) => {
  try {
    const newEnrollment = new Enrollment(req.body);
    await newEnrollment.save();
    res.status(201).json({ message: "Enrollment created successfully", newEnrollment });
  } catch (error) {
    res.status(400).json({ message: "Error creating enrollment", error: error.message });
  }
};

// ✅ Get all enrollments
exports.getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student")
      .populate("course");
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollments", error: error.message });
  }
};

// ✅ Get enrollment by ID
exports.getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id)
      .populate("student")
      .populate("course");
    if (!enrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: "Error fetching enrollment", error: error.message });
  }
};

// ✅ Update enrollment
exports.updateEnrollment = async (req, res) => {
  try {
    const updatedEnrollment = await Enrollment.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedEnrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json({ message: "Enrollment updated successfully", updatedEnrollment });
  } catch (error) {
    res.status(400).json({ message: "Error updating enrollment", error: error.message });
  }
};

// ✅ Delete enrollment
exports.deleteEnrollment = async (req, res) => {
  try {
    const deletedEnrollment = await Enrollment.findByIdAndDelete(req.params.id);
    if (!deletedEnrollment) return res.status(404).json({ message: "Enrollment not found" });
    res.status(200).json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting enrollment", error: error.message });
  }
};
