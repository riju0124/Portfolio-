
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

const FloatingGeometry = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[2, 1, -5]}>
        <octahedronGeometry args={[0.8]} />
        <meshStandardMaterial 
          color="#8b5cf6" 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-3, -1, -8]}>
        <torusGeometry args={[1.2, 0.3, 16, 32]} />
        <meshStandardMaterial 
          color="#a855f7" 
          wireframe 
          transparent 
          opacity={0.4} 
        />
      </mesh>
    </Float>
  );
};

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.004;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 2, -6]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#6366f1" 
        wireframe 
        transparent 
        opacity={0.5} 
      />
    </mesh>
  );
};

export const Scene3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      <Stars 
        radius={50} 
        depth={50} 
        count={3000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
      
      <FloatingGeometry />
      <FloatingTorus />
      <FloatingCube />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
};
