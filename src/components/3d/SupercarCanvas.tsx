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
      Math.sin(state.clock.elapsedTime * 1.4) * 0.04 - 0.1;
  });

  return (
    <group ref={groupRef}>
      <primitive object={cloned} dispose={null} />
    </group>
  );
}

// ─── Studio lighting (unchanged) ─────────────────────────────────────────────
function SceneEnvironment() {
  return (
    <>
      <ambientLight intensity={0.6} />
      {/* Key light */}
      <directionalLight
        position={[6, 8, 6]}
        intensity={1.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.0001}
      />
      {/* Telemetry cyan rim light */}
      <spotLight
        position={[-6, 4, -4]}
        angle={0.6}
        penumbra={1}
        intensity={3.5}
        color="#00F0FF"
      />
      {/* Warm fill */}
      <spotLight
        position={[5, 2, 4]}
        angle={0.7}
        penumbra={0.8}
        intensity={1.5}
        color="#FFE0B2"
      />
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

// ─── Loading shimmer shown inside <Suspense> ──────────────────────────────────
function CanvasLoader() {
  return (
    <mesh>
      <boxGeometry args={[0, 0, 0]} />
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function SupercarCanvas() {
  const [mounted, setMounted] = useState(false);
  const [glError, setGlError] = useState(false);

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

  if (glError) {
    return <FallbackSupercarCard />;
  }

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing select-none">
      <Canvas
        camera={{ position: [-4.2, 2.2, 4.5], fov: 38 }}
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
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 2 - 0.05}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>

      {/* HUD Overlay */}
      <div className="absolute bottom-4 left-4 pointer-events-none flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-alkota-cyan animate-ping" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">
          3D TWIN: 60FPS // DRAG TO ROTATE
        </span>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none text-right">
        <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 block">
          992 GT3 RS // ALK-01
        </span>
        <span className="text-xs font-mono text-alkota-cyan font-semibold">
          PRECISION SPEC
        </span>
      </div>
    </div>
  );
}
