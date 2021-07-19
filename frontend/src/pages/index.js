import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Team from '../components/Team';
import Service from '../components/Service';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <About/>
      <Service/>
      <Team /> 
      <Footer />
    </React.Fragment>
  );
}

export default Home;
