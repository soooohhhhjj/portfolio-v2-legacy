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
      camera={{ position: [0, 0, 3] }}
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

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.04;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.04;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.2, 3.2]} />
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
