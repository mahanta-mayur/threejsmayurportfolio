import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  // Cleanup
  useEffect(() => {
    return () => {
      decal.dispose();
    };
  }, [decal]);

  return (
    <Float speed={3.0} rotationIntensity={0.1} floatIntensity={2.0}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0.35, 0.30, 0.2]} />
      <mesh castShadow receiveShadow scale={3.00}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 3]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.9} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
