// src/pages/auth/AdminLogin.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function ParentLogin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
        path="/Parent/Login"
        routing="path"
        signUpUrl="/Parent/Register"
        afterSignInUrl="/parent/dashboard"
      />
    </div>
  );
}
