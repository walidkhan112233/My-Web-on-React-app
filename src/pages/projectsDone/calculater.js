import React from "react";

export default function Calculator() {
    return (
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
                <h3 className="text-2xl font-semibold mb-3 text-black">Calculator</h3>
                <p className="text-gray-700 mb-4">
                    This is a beginner calculator made using only HTML, CSS, and JavaScript. 
                    You can calculate different arithmetic operations easily. 
                    This project is mainly for beginners to practice on.
                </p>
            </div>
            <a
                href="https://github.com/walidkhan112233/Calculater-as-a-begginer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-500 hover:underline mt-auto"
            >
                View Project in GitHub
            </a>
        </div>
    );
}
