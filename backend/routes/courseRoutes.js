// routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Create
router.post("/", courseController.createCourse);

// Read
router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getCourseById);

// Update
router.put("/:id", courseController.updateCourse);

// Delete
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
