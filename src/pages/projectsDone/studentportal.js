import React from "react";

export default function StudentPortal() {
    return (
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
                <h3 className="text-2xl font-semibold mb-3 text-black">Student Portal</h3>
                <p className="text-gray-700 mb-4">
                    A portal for students and admins with Firebase authentication and database, showing results of students based on their CNIC number.
                </p>
            </div>
            <a 
                href="https://github.com/walidkhan112233/Student-x-Admin-portal-with-firebase-Begginer-level-" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brown-500 hover:underline mt-auto"
            >
                View Project in GitHub
            </a>
        </div>
    );
}
