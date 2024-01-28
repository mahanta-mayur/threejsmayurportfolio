import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components';
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './components/canvas';

const App = () => {
  const [currentCanvas, setCurrentCanvas] = useState('computers'); // default to 'computers'

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar /> 
          <Hero />
          {/* Render ComputersCanvas right after Hero if currentCanvas is 'computers' */}
          <About />
          <StarsCanvas />
          {/* ... other conditions for different canvases */}
        </div>
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          {currentCanvas === 'earth' && <EarthCanvas />}
          {currentCanvas === 'ball' && <BallCanvas />}
          {/* ... other conditions for different canvases */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
