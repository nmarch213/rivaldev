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
  const mouseRef = useRef({ x: 0, y: 0 });
  const dotsRef = useRef<
    Array<{
      x: number;
      y: number;
      radius: number;
      originalX: number;
      originalY: number;
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

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const initializeDots = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const spacing = 30;
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      dotsRef.current = [];
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing;
          const y = i * spacing;
          dotsRef.current.push({
            x,
            y,
            originalX: x,
            originalY: y,
            radius: 1,
            originalRadius: 1,
            speedX: (Math.random() - 0.5) * 0.3,
            speedY: (Math.random() - 0.5) * 0.3,
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
      ctx.globalAlpha = 0.4;

      dotsRef.current.forEach((dot) => {
        // Add small random variations to speed
        dot.speedX += (Math.random() - 0.5) * 0.1;
        dot.speedY += (Math.random() - 0.5) * 0.1;

        // Limit max speed
        dot.speedX = Math.max(Math.min(dot.speedX, 0.7), -0.7);
        dot.speedY = Math.max(Math.min(dot.speedY, 0.7), -0.7);

        // Constant movement
        dot.x += dot.speedX;
        dot.y += dot.speedY;

        // Cursor repulsion
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          // Push dots away from cursor
          const angle = Math.atan2(dy, dx);
          const pushForce = (1 - distance / maxDistance) * 3;
          dot.x -= Math.cos(angle) * pushForce;
          dot.y -= Math.sin(angle) * pushForce;
        }

        // Boundary checks with wrap-around
        if (dot.x > canvas.width) dot.x = 0;
        if (dot.x < 0) dot.x = canvas.width;
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;

        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow for next dot
        ctx.shadowBlur = 0;
      });

      ctx.globalAlpha = 1;
      return requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    initializeDots();
    const animationFrameId = animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
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
