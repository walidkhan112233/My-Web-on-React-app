import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar'
import Home from '../../pages/home';

import About from '../../pages/about';
import Projects from '../../pages/projects';

import ContactUs from '../../pages/contactus';
import FooterSection from '../../components/footer';


export default function RouterApp() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='projects' element={<Projects />} />
                    <Route path='contactus' element={<ContactUs />} />
                </Routes>
                <FooterSection/>
            </Router>
        </>
    );
}

