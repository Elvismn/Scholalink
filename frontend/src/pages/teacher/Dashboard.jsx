import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";

export default function TeacherDashboard() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
        <p className="mb-6">Welcome, {user?.fullName || "Teacher"} 👋</p>
        <button
          onClick={() => {
            signOut();
            window.location.href = "/Teacher/Login";
          }}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
