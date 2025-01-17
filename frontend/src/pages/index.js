import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import Skill from '../components/Skill';
import Project from '../components/Project';

function Home1() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <React.Fragment>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Home/>
      <Skill/>
      <Project/>
      <Footer />
    </React.Fragment>
  );
}

export default Home1;
