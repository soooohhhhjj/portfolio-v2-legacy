varying vec2 vUv;
uniform sampler2D uImage;
uniform float uTime;

void main() {
  vec2 uv = vUv;

  // Scanlines
  float scan = sin((uv.y + uTime * 0.8) * 300.0) * 0.04;

  // RGB split
  float r = texture2D(uImage, uv + vec2(0.002, 0.0)).r;
  float g = texture2D(uImage, uv).g;
  float b = texture2D(uImage, uv - vec2(0.002, 0.0)).b;

  vec3 color = vec3(r, g, b);

  // Blue hologram tint
  color.b += 0.1;

  // Hologram brightness
  color += scan;

  // Slight transparency for hologram look
  float alpha = 0.88;

  gl_FragColor = vec4(color, alpha);
}
