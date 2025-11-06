import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
return (
<>
  <div className="max-w-2xl mx-auto mt-10 p-4 mb-10 rounded-lg bg-gray-100 shadow-lg text-center justify-center rounded-lg">
    <nav className="mb-6 rounded-lg bg-white p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Scholalink Admin</h1>
    </nav>
    <nav className="mb-6 rounded-lg bg-white p-6 shadow-md rounded-lg center space-y-4">
    <ul>
    <li className="mb-2 rounded hover:bg-blue-100">
        <Link to="/Admin/Login">Login</Link>
    </li>
    <li className="mb-2 rounded hover:bg-blue-100 space-y-4">
        <Link to="/Admin/Register">Register</Link>
    </li>
    </ul>
    </nav>
  </div>
</>
);
}
