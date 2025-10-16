// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const { registerUser, loginUser, loginAdmin } = require("../controllers/authController");

// ✅ User Registration and Login
router.post("/register", registerUser);
router.post("/login", loginUser);

// ✅ Admin Login
router.post("/admin/login", loginAdmin);

module.exports = router;
