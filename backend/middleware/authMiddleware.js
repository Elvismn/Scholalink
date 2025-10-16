// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// ✅ Protect routes (verify JWT and attach user)
const protect = async (req, res, next) => {
try {
// Check for "Authorization" header
const authHeader = req.headers.authorization;

if (!authHeader || !authHeader.startsWith("Bearer ")) {
return res.status(401).json({ message: "Not authorized, no token provided" });
}

// Extract token
const token = authHeader.split(" ")[1];

// Verify token
const decoded = jwt.verify(token, process.env.JWT_SECRET);

// Find user and attach to request
const user = await User.findById(decoded.id).select("-password");
if (!user) {
return res.status(404).json({ message: "User not found" });
}

req.user = user;
next();
} catch (error) {
console.error("Auth Middleware Error:", error.message);
res.status(401).json({ message: "Not authorized, token failed or expired" });
}
};

// ✅ Role-Based Access Control (RBAC)
const authorizeRoles = (...allowedRoles) => {
return (req, res, next) => {
if (!req.user || !allowedRoles.includes(req.user.role)) {
return res.status(403).json({
message: `Access denied. Requires one of: [${allowedRoles.join(", ")}]`,
});
}
next();
};
};

module.exports = { protect, authorizeRoles };
