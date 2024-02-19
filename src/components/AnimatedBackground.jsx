import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const containerRef = useRef(null); // Create a ref to attach to the container div

  useEffect(() => {
    if (!containerRef.current) {
      return; // Exit if the ref hasn't been attached yet
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Make background transparent

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Your Three.js background generation code would go here
    // For example, if you're creating stars or other particles:
    // const particles = new THREE.Points(/* ... */);
    // scene.add(particles);

    // This function will update the animation
    const animate = () => {
      requestAnimationFrame(animate);
      // Update the scene
      renderer.render(scene, camera);
    };

    // Start the animation loop
    animate();

    // Cleanup function to run when the component is unmounted
    return () => {
      renderer.dispose(); // Dispose of the renderer to clean up
      containerRef.current.removeChild(renderer.domElement); // Remove the canvas from the DOM
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Return a div that will act as the container for the Three.js canvas
  // The style can be adjusted as needed
  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
};

export default AnimatedBackground;
