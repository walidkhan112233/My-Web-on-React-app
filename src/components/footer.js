import React from 'react';
import { Link } from 'react-router-dom'

export default function FooterSection(){
    return(<>
      {/* footer */}
      <footer className="bg-light-brown text-black py-6 text-center">
         <p>&copy; 2024 My Website | All Rights Reserved</p>
         <div className="mt-4">
            <a href="https://github.com/walidkhan112233" className="text-black hover:text-white mx-2">GitHub</a>
            <a href="https://linkedin.com" className="text-black hover:text-white mx-2">LinkedIn</a>
            <a href="https://linkedin.com" className="text-black hover:text-white mx-2">LinkedIn</a>
         </div>
      </footer>


    </>);
}