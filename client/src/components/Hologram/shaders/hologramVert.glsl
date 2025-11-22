varying vec2 vUv;

void main() {
  vUv = uv;
  vec3 pos = position;

  pos.z += sin((position.y + position.x) * 4.0) * 0.01;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
