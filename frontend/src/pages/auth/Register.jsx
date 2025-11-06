// src/pages/auth/Register.jsx
import React from "react";
import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignUp/>
    </div>
  );
}
