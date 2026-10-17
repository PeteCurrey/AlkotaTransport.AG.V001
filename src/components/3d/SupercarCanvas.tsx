"use client";

import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import FallbackSupercarCard from "./FallbackSupercarCard";

const MODEL_URL = "/models/supercar.glb";

// Preload the GLB so it starts fetching immediately when the module loads
useGLTF.preload(MODEL_URL);

// ─── Real GLTF model ─────────────────────────────────────────────────────────
function SupercarModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(MODEL_URL);

  // Clone so each mount gets its own copy; enable shadows on every mesh
  const cloned = React.useMemo(() => {
    const clone = scene.clone(true);
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    return clone;
  }, [scene]);

  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle breathing float
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.03 - 0.08;
  });

  return (
    <group ref={groupRef}>
      <primitive object={cloned} dispose={null} />
    </group>
  );
}

// ─── Luxury Studio Lighting ─────────────────────────────────────────────────
function SceneEnvironment() {
  return (
    <>
      <ambientLight intensity={0.35} />
      {/* Studio Key Light */}
      <directionalLight
        position={[6, 9, 5]}
        intensity={2.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      {/* Subtle Electric Blue Rim Accent */}
      <spotLight
        position={[-6, 4, -4]}
        angle={0.6}
        penumbra={1}
        intensity={2.6}
        color="#1D6AF5"
      />
      {/* Soft Cool Overhead Fill */}
      <spotLight
        position={[4, 3, 4]}
        angle={0.7}
        penumbra={0.9}
        intensity={1.0}
        color="#DCE3EC"
      />
      <ContactShadows
        position={[0, -0.05, 0]}
        opacity={0.85}
        scale={13}
        blur={1.8}
        far={3}
        color="#000000"
      />
    </>
  );
}

function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0, 0, 0]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

export default function SupercarCanvas() {
  const [mounted, setMounted] = useState(false);
  const [glError, setGlError] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FallbackSupercarCard />;
  }

  if (glError) {
    return <FallbackSupercarCard />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [-4.6, 1.8, 4.2], fov: 36 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          // Fallback if WebGL context is lost
          gl.domElement.addEventListener("webglcontextlost", () =>
            setGlError(true)
          );
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <SceneEnvironment />
          <SupercarModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
