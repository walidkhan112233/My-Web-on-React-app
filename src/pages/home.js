import React from 'react';

import HomeHeroSection from '../components/HomeComps/homehero';
import HomeAboutSection from '../components/HomeComps/homeAbout';
import HomeProjectsSection from '../components/HomeComps/homeprojects';
import FooterSection from '../components/footer';

export default function Home() {
   return (<>
      <HomeHeroSection />

      <HomeAboutSection />

      <HomeProjectsSection />

      <FooterSection />

   </>)
}
