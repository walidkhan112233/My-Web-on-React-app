import React from "react";

export default function Todo() {
    return (
        <div className="border border-gray-300 rounded-lg p-6 shadow-lg flex flex-col justify-between h-full">
            <div>
                <h3 className="text-2xl font-semibold mb-3 text-black">Todo App</h3>
                <p className="text-gray-700 mb-4">
                    This is a Todo app made for management of daily tasks and also can be used for work or assignments management to see if my tasks are completed or not, which the user can mark themselves.
                </p>
            </div>
            <a
                href="https://github.com/walidkhan112233/To-Do-App"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-500 hover:underline mt-auto"
            >
                View Project in GitHub
            </a>
        </div>
    );
}
