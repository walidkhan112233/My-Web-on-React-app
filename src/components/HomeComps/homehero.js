import React from 'react';
import { Link } from 'react-router-dom'

export default function HomeHeroSection(){
    return(<>
     {/* Hero Section hai intro wala */}
     <section className="bg-black text-white h-screen flex flex-col justify-center items-center">
         <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
         <p className="text-xl mb-6">I'm Currently learning Web and App Development at SayalniWelfare</p>
         <Link to="/projects" className="bg-brown-300 text-black px-6 py-3 rounded hover:bg-white transition">
            Explore My Work
         </Link>
      </section>
    </>);
}