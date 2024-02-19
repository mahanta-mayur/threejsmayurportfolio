import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './components/canvas';
import AnimatedBackground from './components/AnimatedBackground'; 

const App = () => {
  const [currentCanvas, setCurrentCanvas] = useState('computers'); // default to 'computers'

  return (
    <BrowserRouter>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
          <Navbar /> 
          <Hero />
          {/* Render ComputersCanvas right after Hero if currentCanvas is 'computers' */}
          <About />
          {/* <StarsCanvas /> */}
          {/* ... other conditions for different canvases */}
        <Experience />
        {/* <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
          {currentCanvas === 'earth' && <EarthCanvas />}
          {/* ... other conditions for different canvases */}
        </div>
    </BrowserRouter>
  );
}

export default App;
