import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // toggle menu for responsive navbar

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (<>
     <nav className="bg-black sticky top-0 p-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl  font-bold">𝓦'𝓼 𝓓𝓮𝓷</div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="text-white block md:hidden"
            onClick={toggleMenu}
          >
            {/* 3-line "hamburger" icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-16 6h16"}
              />
            </svg>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-brown-300 hover:underline transition duration-300">𝐻𝑜𝓂𝑒</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-brown-300 hover:underline transition duration-300">𝒜𝒷𝑜𝓊𝓉</Link>
            </li>
            <li>
              <Link to="/projects" className="text-white hover:text-brown-300 hover:underline transition duration-300">𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈</Link>
            </li>
            
            <li>
              <Link to="/contactus" className="text-white hover:text-brown-300 hover:underline transition duration-300">𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈</Link>
            </li>
           
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden bg-black mt-4 space-y-2 p-4">
            <li>
              <Link to="/" className="block text-white hover:text-brown-300 hover:underline transition duration-300">𝐻𝑜𝓂𝑒</Link>
            </li>
            <li>
              <Link to="/about" className="block text-white hover:text-brown-300 hover:underline transition duration-300">𝒜𝒷𝑜𝓊𝓉</Link>
            </li>
            <li>
              <Link to="/projects" className="block text-white hover:text-brown-300 hover:underline transition duration-300">𝒫𝓇𝑜𝒿𝑒𝒸𝓉𝓈</Link>
            </li>
            
            <li>
              <Link to="/contactus" className="block text-white hover:text-brown-300 hover:underline transition duration-300">𝒞𝑜𝓃𝓉𝒶𝒸𝓉 𝒰𝓈</Link>
            </li>
           
          </ul>
        )}
      </nav>

    </>)

}