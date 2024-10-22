import React from 'react';
import { Link } from 'react-router-dom'

export default function HomeAboutSection() {
    return (<>
        {/* section hai about intro detail ma */}
        <section className="bg-light-brown text-black py-8">
            <div className="container mx-auto text-center">
                <Link to="/about">
                    <h2 className="text-4xl font-bold mb-4 hover:text-brown-300 hover:underline transition duration-300 cursor-pointer">
                        About Me
                    </h2>
                </Link>
                <p className="text-lg mb-6">
                    Hi! I'm Currently learning React in my Journey to become a Web and App Developer, with a passion for creating interactive, user-friendly web experiences.
                </p>

                {/* Skills or Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19l-6 6m0 0l6-6m-6 6V4a2 2 0 012-2h14a2 2 0 012 2v12m-4 4h-4"></path></svg>
                        <p>JavaScript</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l4-4m0 0l4 4m-4-4v12"></path></svg>
                        <p>React</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 text-black mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v12a4 4 0 004 4h8a4 4 0 004-4V4"></path></svg>
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </section>
    </>);
}