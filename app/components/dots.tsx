"use client";
import { useEffect, useRef } from "react";

const COLORS = [
  "#f5e0dc",
  "#f2cdcd",
  "#f5c2e7",
  "#cba6f7",
  "#f38ba8",
  "#eba0ac",
  "#fab387",
  "#f9e2af",
  "#a6e3a1",
  "#94e2d5",
  "#89dceb",
  "#74c7ec",
  "#89b4fa",
  "#b4befe",
];

export const Dots = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<
    Array<{
      x: number;
      y: number;
      radius: number;
      originalRadius: number;
      speedX: number;
      speedY: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initializeDots = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const spacing = 30;
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      dotsRef.current = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dotsRef.current.push({
            x: j * spacing,
            y: i * spacing,
            radius: 1,
            originalRadius: 1,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
          });
        }
      }
    };

    const handleResize = () => initializeDots();
    window.addEventListener("resize", handleResize);
    initializeDots();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalAlpha = 0.5;

      dotsRef.current.forEach((dot) => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      return requestAnimationFrame(animate);
    };

    const animationFrameId = animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-1]"
      style={{ background: "rgba(0,0,0,0.05)" }}
    />
  );
};
