import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";
import { useRef } from "react";
import fragShader from "../Hologram/shaders/hologramFrag.glsl";
import vertShader from "../Hologram/shaders/hologramVert.glsl";

export default function HologramImage({ src }: { src: string }) {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 1.5] }}
      className="w-full h-full"
    >
      <HologramMesh src={src} />
    </Canvas>
  );
}

function HologramMesh({ src }: { src: string }) {
  const texture = useLoader(TextureLoader, src);

  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  // Removed swaying / rotating
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
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
