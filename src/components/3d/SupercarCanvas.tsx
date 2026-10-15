"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Parametric 3D Supercar Digital Twin
function SupercarMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const frontLeftWheelRef = useRef<THREE.Group>(null);
  const frontRightWheelRef = useRef<THREE.Group>(null);
  const rearLeftWheelRef = useRef<THREE.Group>(null);
  const rearRightWheelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    // Gentle floating idle breathing & subtle yaw response to mouse
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.03;
    
    // Slowly rotate wheels for subtle motion feel
    const wheelRot = delta * 1.2;
    if (frontLeftWheelRef.current) frontLeftWheelRef.current.rotation.x += wheelRot;
    if (frontRightWheelRef.current) frontRightWheelRef.current.rotation.x += wheelRot;
    if (rearLeftWheelRef.current) rearLeftWheelRef.current.rotation.x += wheelRot;
    if (rearRightWheelRef.current) rearRightWheelRef.current.rotation.x += wheelRot;
  });

  return (
    <group ref={groupRef} position={[0, -0.1, 0]}>
      {/* --- SUPERCAR MAIN BODYWORK --- */}
      {/* Lower Chassis / Underbody */}
      <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.05, 0.28, 4.8]} />
        <meshPhysicalMaterial
          color="#161A22"
          metalness={0.9}
          roughness={0.2}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Aerodynamic Front Nose & Bonnet Slant */}
      <mesh position={[0, 0.42, 1.6]} rotation={[-0.12, 0, 0]} castShadow>
        <boxGeometry args={[1.98, 0.2, 1.8]} />
        <meshPhysicalMaterial
          color="#1C222D"
          metalness={0.85}
          roughness={0.25}
          clearcoat={0.9}
        />
      </mesh>

      {/* Front Nose Wedge */}
      <mesh position={[0, 0.3, 2.45]} rotation={[-0.25, 0, 0]} castShadow>
        <boxGeometry args={[1.9, 0.16, 0.6]} />
        <meshPhysicalMaterial
          color="#0F131A"
          metalness={0.95}
          roughness={0.2}
          clearcoat={1.0}
        />
      </mesh>

      {/* Front Carbon Splitter */}
      <mesh position={[0, 0.16, 2.55]} castShadow>
        <boxGeometry args={[2.08, 0.04, 0.5]} />
        <meshStandardMaterial color="#0A0C10" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Sleek Aerodynamic Cabin / Greenhouse */}
      <mesh position={[0, 0.72, -0.2]} castShadow>
        <boxGeometry args={[1.5, 0.46, 2.3]} />
        <meshPhysicalMaterial
          color="#06080C"
          roughness={0.1}
          metalness={0.9}
          clearcoat={1.0}
          transmission={0.4}
        />
      </mesh>

      {/* Windshield Rake (Front) */}
      <mesh position={[0, 0.68, 0.9]} rotation={[-0.58, 0, 0]}>
        <boxGeometry args={[1.44, 0.08, 1.15]} />
        <meshPhysicalMaterial
          color="#020406"
          roughness={0.05}
          metalness={0.9}
          clearcoat={1.0}
        />
      </mesh>

      {/* Rear Fastback Engine Cover & Louvres */}
      <mesh position={[0, 0.62, -1.35]} rotation={[0.22, 0, 0]} castShadow>
        <boxGeometry args={[1.56, 0.16, 1.6]} />
        <meshPhysicalMaterial
          color="#181D26"
          metalness={0.9}
          roughness={0.3}
          clearcoat={0.7}
        />
      </mesh>

      {/* Rear Carbon Diffuser & Exhaust Tunnel */}
      <mesh position={[0, 0.22, -2.4]} castShadow>
        <boxGeometry args={[2.02, 0.18, 0.5]} />
        <meshStandardMaterial color="#090B0E" roughness={0.5} metalness={0.9} />
      </mesh>

      {/* Integrated Rear Aerodynamic Ducktail Spoiler */}
      <mesh position={[0, 0.68, -2.35]} rotation={[-0.08, 0, 0]} castShadow>
        <boxGeometry args={[1.86, 0.06, 0.35]} />
        <meshStandardMaterial color="#00F0FF" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* --- TELEMETRY LIGHTING & SIGNATURE LEDS --- */}
      {/* Front Left Headlight DRL Strip (Telemetry Cyan) */}
      <mesh position={[-0.75, 0.42, 2.45]} rotation={[-0.2, 0.15, 0]}>
        <boxGeometry args={[0.38, 0.04, 0.12]} />
        <meshBasicMaterial color="#00F0FF" />
      </mesh>
      {/* Front Right Headlight DRL Strip */}
      <mesh position={[0.75, 0.42, 2.45]} rotation={[-0.2, -0.15, 0]}>
        <boxGeometry args={[0.38, 0.04, 0.12]} />
        <meshBasicMaterial color="#00F0FF" />
      </mesh>

      {/* Rear Continuous Full-Width LED Taillight Bar (Velocity Amber/Red) */}
      <mesh position={[0, 0.52, -2.42]}>
        <boxGeometry args={[1.82, 0.04, 0.08]} />
        <meshBasicMaterial color="#FF3300" />
      </mesh>

      {/* --- WHEELS, ROTORS & CALIPERS --- */}
      {/* Front Left Wheel Assembly */}
      <group ref={frontLeftWheelRef} position={[-1.02, 0.34, 1.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.24, 24]} />
          <meshStandardMaterial color="#11141A" roughness={0.7} metalness={0.2} />
        </mesh>
        {/* Rim Spokes */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.26, 0.26, 0.25, 8]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.9} />
        </mesh>
        {/* Brake Caliper (Performance Orange) */}
        <mesh position={[0.08, 0.16, 0]}>
          <boxGeometry args={[0.08, 0.16, 0.1]} />
          <meshStandardMaterial color="#FF5500" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Front Right Wheel Assembly */}
      <group ref={frontRightWheelRef} position={[1.02, 0.34, 1.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.35, 0.35, 0.24, 24]} />
          <meshStandardMaterial color="#11141A" roughness={0.7} metalness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.26, 0.26, 0.25, 8]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[-0.08, 0.16, 0]}>
          <boxGeometry args={[0.08, 0.16, 0.1]} />
          <meshStandardMaterial color="#FF5500" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Rear Left Wheel Assembly */}
      <group ref={rearLeftWheelRef} position={[-1.04, 0.36, -1.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.37, 0.37, 0.28, 24]} />
          <meshStandardMaterial color="#11141A" roughness={0.7} metalness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.29, 8]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[0.08, 0.16, 0]}>
          <boxGeometry args={[0.08, 0.16, 0.1]} />
          <meshStandardMaterial color="#FF5500" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>

      {/* Rear Right Wheel Assembly */}
      <group ref={rearRightWheelRef} position={[1.04, 0.36, -1.45]}>
        <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.37, 0.37, 0.28, 24]} />
          <meshStandardMaterial color="#11141A" roughness={0.7} metalness={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.29, 8]} />
          <meshStandardMaterial color="#94A3B8" roughness={0.2} metalness={0.9} />
        </mesh>
        <mesh position={[-0.08, 0.16, 0]}>
          <boxGeometry args={[0.08, 0.16, 0.1]} />
          <meshStandardMaterial color="#FF5500" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

// Scene Lighting & Studio Atmosphere
function SceneEnvironment() {
  return (
    <>
      <ambientLight intensity={0.6} />
      {/* Studio Key Light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      {/* Cool Telemetry Cyan Rim Light (Rear Left) */}
      <spotLight
        position={[-6, 4, -4]}
        angle={0.6}
        penumbra={1}
        intensity={3.5}
        color="#00F0FF"
      />
      {/* Warm Fill Light (Front Right) */}
      <spotLight
        position={[5, 2, 4]}
        angle={0.7}
        penumbra={0.8}
        intensity={1.5}
        color="#FFE0B2"
      />
      {/* Ground Contact Shadows for Photorealism */}
      <ContactShadows
        position={[0, -0.05, 0]}
        opacity={0.8}
        scale={12}
        blur={1.8}
        far={3}
      />
    </>
  );
}

export default function SupercarCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-xs font-mono text-alkota-cyan animate-pulse">
          INITIALISING 3D TELEMETRY TWIN...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [-4.2, 2.2, 4.5], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <SceneEnvironment />
          <SupercarMesh />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>

      {/* Interactive HUD Overlay Badges */}
      <div className="absolute bottom-4 left-4 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-alkota-cyan animate-ping" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
          3D TWIN: 60FPS // DRAG TO ROTATE
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none text-right">
        <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block">
          CHASSIS REF // ALK-01
        </span>
        <span className="text-xs font-mono text-alkota-cyan font-semibold">
          PRECISION SPEC
        </span>
      </div>
    </div>
  );
}
