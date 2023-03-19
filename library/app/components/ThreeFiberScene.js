import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Box() {
  return (
    <mesh scale={[1, 1, 1]}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial color="orange" attach="material" />
    </mesh>
  );
}

export default function ThreeFiberScene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Box />
      <OrbitControls />
      <Stars />
    </Canvas>
  );
}
