// src/pages/auth/AdminLogin.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function TeacherLogin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
        path="/Teacher/Login"
        routing="path"
        signUpUrl="/Teacher/Register"
        afterSignInUrl="/teacher/dashboard"
      />
    </div>
  );
}
