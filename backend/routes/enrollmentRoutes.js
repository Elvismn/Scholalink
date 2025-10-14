// routes/enrollmentRoutes.js
const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");

// Create
router.post("/", enrollmentController.createEnrollment);

// Read
router.get("/", enrollmentController.getAllEnrollments);
router.get("/:id", enrollmentController.getEnrollmentById);

// Update
router.put("/:id", enrollmentController.updateEnrollment);

// Delete
router.delete("/:id", enrollmentController.deleteEnrollment);

module.exports = router;
