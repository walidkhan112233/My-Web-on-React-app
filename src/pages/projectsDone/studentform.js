import React from "react";

export default function StudentForm() {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
      <div>
        <h3 className="text-2xl font-semibold mb-3 text-black">Student Form</h3>
        <p className="text-gray-700 mb-4">
          This is a simple beginner form made with HTML, CSS, and JavaScript.
        </p>
      </div>
      <a 
        href="https://github.com/walidkhan112233/Simple-Sudent-Form" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-brown-500 hover:underline mt-auto"
      >
        View Project in GitHub
      </a>
    </div>
  );
}
