import { Link } from "react-router-dom";
import React from "react";

export default function TeacherHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold mb-4">Teacher Home</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/Teacher/Login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/Teacher/Register"
              className="text-blue-600 hover:underline"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
