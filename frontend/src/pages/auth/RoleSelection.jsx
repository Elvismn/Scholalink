import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@radix-ui/themes"; 
import { motion } from "framer-motion";

export default function RoleSelection() {
  const navigate = useNavigate();

  const roles = [
    { name: "Admin", path: "/admin/login", color: "bg-indigo-600" },
    { name: "Teacher", path: "/teacher/login", color: "bg-blue-600" },
    { name: "Student", path: "/student/login", color: "bg-green-600" },
    { name: "Parent", path: "/parent/login", color: "bg-pink-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <motion.h1
        className="text-3xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to ScholaLink! Who are you?
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {roles.map((role) => (
          <motion.div
            key={role.name}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => navigate(role.path)}
          >
            <Card className="flex flex-col items-center justify-center h-40 shadow-md rounded-2xl transition-all hover:shadow-xl">
              <div
                className={`w-full h-full flex items-center justify-center text-white text-xl font-semibold rounded-2xl ${role.color}`}
              >
                {role.name}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
