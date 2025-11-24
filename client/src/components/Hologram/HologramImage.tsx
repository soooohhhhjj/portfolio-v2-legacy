import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useRef, useEffect } from "react";
import fragShader from "../Hologram/shaders/hologramFrag.glsl";
import vertShader from "../Hologram/shaders/hologramVert.glsl";

export default function HologramImage({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Flicker logic (10% chance)
  useEffect(() => {
    const flicker = () => {
      if (!containerRef.current) return;

      const shouldFlicker = Math.random() < 0.1; // 10% chance

      if (shouldFlicker) {
        containerRef.current.classList.add("holo-flicker-once");

        setTimeout(() => {
          containerRef.current?.classList.remove("holo-flicker-once");
        }, 150); // match animation duration
      }
    };

    const interval = setInterval(flicker, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <Canvas
        gl={{ antialias: true }}
        camera={{ position: [0, 0, 1.5] }}
        className="w-full h-full"
      >
        <HologramMesh src={src} />
      </Canvas>
    </div>
  );
}

function HologramMesh({ src }: { src: string }) {
  const texture = useLoader(TextureLoader, src);
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh rotation={[0, 0, 0]}>
      <planeGeometry args={[1.85, 2.4]} />
      <shaderMaterial
        ref={matRef}
        uniforms={{
          uImage: { value: texture },
          uTime: { value: 0 },
        }}
        vertexShader={vertShader}
        fragmentShader={fragShader}
        transparent
      />
    </mesh>
  );
}
