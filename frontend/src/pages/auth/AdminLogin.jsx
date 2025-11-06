// src/pages/auth/AdminLogin.jsx
import React from "react";
import { SignIn } from "@clerk/clerk-react";

export default function AdminLogin() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <SignIn
        path="/Admin/Login"
        routing="path"
        signUpUrl="/Admin/Register"
        afterSignInUrl="/admin/dashboard"
      />
    </div>
  );
}
