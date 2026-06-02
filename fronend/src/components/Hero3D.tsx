import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Sparkles, ContactShadows, Image } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSuit({ isHero = false }: { isHero?: boolean }) {
  const mesh = useRef<THREE.Group>(null!);
  const glintRef = useRef<THREE.Mesh>(null!);
  const time = useRef(0);
  
  useFrame((state, delta) => {
    time.current += delta;
    const t = time.current;
    const { x, y } = state.mouse;
    
    // Sophisticated, multi-harmonic floating motion
    const slowT = t * 0.4;
    const fastT = t * 0.8;
    
    // Multi-axis rotation with mouse influence and organic drift
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y, 
      x * 0.25 + Math.sin(slowT) * 0.12 + Math.cos(fastT * 0.5) * 0.05, 
      0.05
    );
    mesh.current.rotation.x = THREE.MathUtils.lerp(
      mesh.current.rotation.x, 
      -y * 0.15 + Math.cos(slowT * 1.1) * 0.08 + Math.sin(fastT * 0.3) * 0.03, 
      0.05
    );
    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      Math.sin(slowT * 0.7) * 0.04 + (x * y) * 0.1,
      0.05
    );
    
    // Layered vertical and horizontal drift for "weightless" feel
    mesh.current.position.y = Math.sin(t * 0.5) * 0.12 + Math.sin(t * 1.2) * 0.03;
    mesh.current.position.x = Math.cos(t * 0.4) * 0.08 + Math.sin(t * 0.9) * 0.02;
    
    // Elegant "Breathing" scale effect
    const breathingFactor = (Math.sin(t * 0.6) * 0.015) + (Math.sin(t * 2.2) * 0.002);
    const baseScale = isHero ? 1.02 : 0.8; 
    const scale = baseScale + breathingFactor;
    mesh.current.scale.set(scale, scale, scale);

    // Dynamic Mouse-Driven Light Flares
    if (glintRef.current) {
      // Periodic sweep cycle
      const glintCycle = (t * 0.5) % 8;
      const autoSweepX = (glintCycle - 4) * 1.5;
      
      // Mouse-driven offset - flares react to hover
      const mouseInfluenceX = x * 1.2;
      const mouseInfluenceY = -y * 0.5;
      
      // Combine auto-sweep and mouse hover
      glintRef.current.position.x = THREE.MathUtils.lerp(glintRef.current.position.x, autoSweepX + mouseInfluenceX, 0.1);
      glintRef.current.position.y = THREE.MathUtils.lerp(glintRef.current.position.y, mouseInfluenceY - 0.2, 0.1);
      
      if (glintRef.current.material) {
        // Increase intensity when mouse is moving or periodic sweep is active
        const mouseSpeed = Math.abs(x) + Math.abs(y);
        const sweepIntensity = Math.max(0, Math.sin(glintCycle * Math.PI / 4) * 0.15);
        const mouseIntensity = mouseSpeed * 0.05;
        
        (glintRef.current.material as THREE.MeshBasicMaterial).opacity = THREE.MathUtils.lerp(
          (glintRef.current.material as THREE.MeshBasicMaterial).opacity,
          Math.min(0.25, sweepIntensity + mouseIntensity),
          0.1
        );
      }
    }
  });

  return (
    <group ref={mesh}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        {/* Mannequin Head - Metallic Gold */}
        <mesh position={[0, 1.8, 0.1]} scale={[0.45, 0.6, 0.45]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial 
            color="#C5A059" 
            metalness={1} 
            roughness={0.08} 
            envMapIntensity={2.5}
          />
        </mesh>
        
        {/* Suit Image - Verified Quality White Suit Image */}
        <Image 
          url="https://m.media-amazon.com/images/I/415QnlZD2OL._AC_SR1000_.jpg"
          transparent
          opacity={1}
          scale={[3.5, 4.5]}
          toneMapped={false}
          position={[0, -0.2, 0]}
        />

        {/* Primary Interactive Flare */}
        <mesh ref={glintRef} position={[0, -0.2, 0.05]} scale={[0.8, 5.5, 1]} rotation={[0, 0, Math.PI / 3]}>
          <planeGeometry />
          <meshBasicMaterial 
            transparent 
            opacity={0} 
            color="#C5A059" 
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Secondary Subtle Flare for Depth */}
        <mesh position={[0.2, -0.1, 0.04]} scale={[0.3, 5, 1]} rotation={[0, 0, Math.PI / 3.5]}>
          <planeGeometry />
          <meshBasicMaterial 
            transparent 
            opacity={0.05} 
            color="#ffffff" 
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </Float>
    </group>
  );
}

function DynamicLighting() {
  const lightRef = useRef<THREE.SpotLight>(null!);
  const time = useRef(0);
  
  useFrame((_state, delta) => {
    time.current += delta;
    const t = time.current;
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(t * 0.5) * 15;
      lightRef.current.position.z = Math.cos(t * 0.5) * 15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      
      {/* Dynamic spot light that subtly orbits */}
      <spotLight 
        ref={lightRef}
        position={[10, 10, 10]} 
        angle={0.15} 
        penumbra={1} 
        intensity={4} 
        color="#C5A059" 
      />
      
      <spotLight position={[-10, 5, 5]} angle={0.2} penumbra={1} intensity={2} />
      <pointLight position={[0, -2, 5]} intensity={1} color="#C5A059" />
      <pointLight position={[5, 5, -5]} intensity={0.5} color="#fff" />
    </>
  );
}

export default function Hero3D({ isHero = false }: { isHero?: boolean }) {
  return (
    <div className={`z-10 pointer-events-none ${isHero ? 'relative w-full h-full' : 'fixed inset-0 opacity-80'}`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: isHero ? 42 : 35 }} alpha={true}>
        
        <DynamicLighting />
        
        <Suspense fallback={null}>
          <FloatingSuit isHero={isHero} />
        </Suspense>
        
        <Sparkles 
          count={200} 
          scale={15} 
          size={2} 
          speed={0.6} 
          color="#C5A059" 
          opacity={0.7} 
        />
        
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.5} 
          scale={15} 
          blur={3} 
          far={5} 
        />
      </Canvas>
    </div>
  );
}
