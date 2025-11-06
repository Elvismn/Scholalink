// src/pages/admin/Dashboard.jsx
import React from "react";
import { UserButton, useUser } from "@clerk/clerk-react";

export default function Dashboard() {
const { user } = useUser();

return (
<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to Admin Dashboard</h1>

        {user ? (
        <>
        <p className="text-gray-700 mb-4">
            Welcome, <span className="font-semibold">{user.fullName}</span> 👋
        </p>

        <p className="text-gray-500 text-sm mb-6">{user.primaryEmailAddress?.emailAddress}</p>

        <div className="flex top-0 right-0 justify-end">
            <UserButton appearance={{
            elements: {
            userButtonAvatarBox: "w-10 h-10", // size
            userButtonOuterIdentifier: "text-gray-700",
            },
            }}
            afterSignOutUrl="/Admin/Login"/>
        </div>
        </>
        ) : (
        <p>Loading user data...</p>
        )}
    </div>
</div>
);
}

