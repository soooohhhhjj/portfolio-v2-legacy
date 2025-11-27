varying vec2 vUv;
uniform sampler2D uImage;
uniform float uTime;

void main() {
  vec2 uv = vUv;

  // Scanlines (brightness waves)
  float scan = sin((uv.y + uTime * 0.8) * 300.0) * 0.08;

  // RGB split (subtle)
  float r = texture2D(uImage, uv + vec2(0.0010, 0.0)).r;
  float g = texture2D(uImage, uv).g;
  float b = texture2D(uImage, uv - vec2(0.0010, 0.0)).b;

  vec3 color = vec3(r, g, b);

  // Add scanline brightness
  color += scan;

  // Soft hologram fade
  float alpha = .95;

  gl_FragColor = vec4(color, alpha);
}
