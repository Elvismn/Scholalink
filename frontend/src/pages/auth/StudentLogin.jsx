// src/pages/auth/AdminLogin.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function StudentLogin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
        path="/Student/Login"
        routing="path"
        signUpUrl="/Student/Register"
        afterSignInUrl="/student/dashboard"
      />
    </div>
  );
}
