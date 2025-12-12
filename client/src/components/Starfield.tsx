import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface StarfieldProps {
  mode?: "normal" | "vertical" | "paused";
}

function generateStars(
  count: number,
  width: number,
  height: number,
  sizeRange: [number, number],
  speedRange: [number, number]
): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
      speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
      opacity: Math.random() * 0.5 + 0.5,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    });
  }
  return stars;
}

export default function Starfield({ mode = "normal" }: StarfieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modeRef = useRef(mode);
  const layersRef = useRef<{ stars: Star[]; speed: number }[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false })!;

    // dynamically update size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      layersRef.current = [
        { stars: generateStars(100, canvas.width, canvas.height, [0.5, 0.8], [0.05, 0.15]), speed: 0.2 },
        { stars: generateStars(30, canvas.width, canvas.height, [0.8, 1.3], [0.1, 0.2]), speed: 0.4 },
        { stars: generateStars(15, canvas.width, canvas.height, [1.3, 1.6], [0.3, 0.5]), speed: 0.6 },
      ];
    };

    resizeCanvas();

    const animate = () => {
      requestAnimationFrame(animate);

      const width = canvas.width;
      const height = canvas.height;

      timeRef.current += 0.016;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, width, height);

      layersRef.current.forEach(({ stars, speed }) => {
        stars.forEach((star) => {
          const twinkle = Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset) * 0.2 + 0.8;
          const finalOpacity = star.opacity * twinkle;

          ctx.fillStyle = `rgba(255, 255, 255, ${finalOpacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();

          let dx = -0.5 * speed;
          let dy = 0.5 * speed;

          if (modeRef.current === "paused") {
            dx = dy = 0;
          } else if (modeRef.current === "vertical") {
            dx = 0;
            dy = -10 * speed;
          }

          star.x += dx;
          star.y += dy;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        });
      });
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-50"
    />
  );
}
