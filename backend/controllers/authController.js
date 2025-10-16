// controllers/authController.js
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Admin = require("../models/Admin");

// ✅ Generate JWT Token
const generateToken = (id, role) => {
return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ✅ User Registration (Student/Teacher)
exports.registerUser = async (req, res) => {
try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
return res.status(400).json({ message: "User already exists" });

// Hash password
const hashedPassword = await bcrypt.hash(password, 10);

// Create new user
const newUser = await User.create({
name,
email,
password: hashedPassword,
role, // 'student' or 'teacher'
});

const token = generateToken(newUser._id, role);
res.status(201).json({ message: "User registered successfully", token, newUser });
} catch (error) {
res.status(500).json({ message: "Registration failed", error: error.message });
}
};

// ✅ User Login
exports.loginUser = async (req, res) => {
try {
const { email, password } = req.body;

const user = await User.findOne({ email });
if (!user) return res.status(404).json({ message: "User not found" });

const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user._id, user.role);
    res.status(200).json({ message: "Login successful", token, user });
} catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
}
};

// ✅ Admin Login
exports.loginAdmin = async (req, res) => {
try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(admin._id, "admin");
    res.status(200).json({ message: "Admin login successful", token, admin });
} catch (error) {
    res.status(500).json({ message: "Admin login failed", error: error.message });
}
};
