import React from 'react';
import { Link } from 'react-router-dom'

export default function HomeProjectsSection() {
    return (<>

        {/* Projects */}
        <section className="bg-white text-black py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="border p-4">
                        <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
                        <p>A portal for students and admins with Firebase authentication and Firebase Database,whixh shows Result of the Students by their CnicNumber.</p>
                        <Link to="./Projects" className="text-brown-300 hover:underline">View Project</Link>
                    </div>
                    <div className="border p-4">
                        <h3 className="text-xl font-semibold mb-2">Student Portal</h3>
                        <p>A portal for students and admins with Firebase authentication and Firebase Database,whixh shows Result of the Students by their CnicNumber.</p>
                        <Link to="./Projects" className="text-brown-300 hover:underline">View Project</Link>
                    </div>
                    {/* Add more projects in the same format */}
                </div>
            </div>
        </section>
    </>);
}