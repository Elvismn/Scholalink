import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ Import all pages
import AdminHome from "./pages/admin/Home.jsx";
import TeacherHome from "./pages/teacher/Home.jsx";
import StudentHome from "./pages/student/Home.jsx";
import ParentHome from "./pages/parent/Home.jsx";
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import TeacherDashboard from "./pages/teacher/Dashboard";
import StudentDashboard from "./pages/student/Dashboard";
import ParentDashboard from "./pages/parent/Dashboard";
import TeacherLogin from "./pages/auth/TeacherLogin";
import StudentLogin from "./pages/auth/StudentLogin";
import ParentLogin from "./pages/auth/ParentLogin";
import AdminLogin from "./pages/auth/AdminLogin.jsx";
import Register from "./pages/auth/Register.jsx";
import RoleSelection from "./pages/auth/RoleSelection.jsx"; 
export default function App() {
  return (
    <Routes>
      
      {/* Auth routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/teacher/login" element={<TeacherLogin />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/parent/login" element={<ParentLogin />} />
        <Route path="/register" element={<Register />} />

      {/* Dashboard routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
    
      {/* 🧑‍💼 Admin */}
        <Route path="/Admin/Home" element={<AdminHome />} />
        <Route path="/Admin/Dashboard" element={<AdminDashboard />} />

      {/* 👩‍🏫 Teacher */}
        <Route path="/Teacher/Home" element={<TeacherHome />} />
        <Route path="/Teacher/Dashboard" element={<TeacherDashboard />} />

      {/* 🎓 Student */}
        <Route path="/Student/Home" element={<StudentHome />} />
        <Route path="/Student/Dashboard" element={<StudentDashboard />} />

      {/* 👨‍👩‍👧 Parent */}
        <Route path="/Parent/Home" element={<ParentHome />} />
        <Route path="/Parent/Dashboard" element={<ParentDashboard />} />
      {/* Role Selection */}
      <Route path="/" element={<RoleSelection />} />
    </Routes>
    
  );
}
