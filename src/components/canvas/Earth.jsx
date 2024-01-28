import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const EarthModel = () => {
  const gltf = useGLTF("./space_boi/scene.gltf");

  // Cleanup
  useEffect(() => {
    return () => {
      gltf.scene.traverse((object) => {
        if (object.isMesh) {
          if (object.geometry) object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, [gltf]);

  return <primitive object={gltf.scene} scale={[1.0, 1.0, 1.0]} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 8, 7], fov: 95 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} autoRotate={true} />
        <ambientLight intensity={0.5} />
        <EarthModel />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
