import { Link } from "react-router-dom";
import React from "react";

export default function StudentHome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <h1 className="text-3xl font-bold mb-4">Student Home</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              to="/Student/Login"
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/Student/Register"
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
