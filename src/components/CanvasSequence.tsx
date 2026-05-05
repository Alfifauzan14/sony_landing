"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;

function getFramePath(index: number) {
  const padded = Math.round(index).toString().padStart(3, "0");
  return `/images/sequence/ezgif-frame-${padded}.jpg`;
}

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(Array(FRAME_COUNT).fill(false));
  const rafRef = useRef<number | null>(null);
  const currentFrameRef = useRef(1);

  const { scrollYProgress } = useScroll();
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    const images: HTMLImageElement[] = Array(FRAME_COUNT);
    imagesRef.current = images;

    const loadRange = (from: number, to: number) => {
      for (let i = from; i <= to; i++) {
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          loadedRef.current[i - 1] = true;
          if (i === 1) drawFrame(1);
        };
        images[i - 1] = img;
      }
    };

    loadRange(1, 30);
    const timer = setTimeout(() => loadRange(31, FRAME_COUNT), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      drawFrame(currentFrameRef.current);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const imgIdx = Math.min(Math.max(0, Math.round(index) - 1), FRAME_COUNT - 1);
    const img = imagesRef.current[imgIdx];

    ctx.fillStyle = "#050505";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!img || !loadedRef.current[imgIdx]) return;

    const cW = canvas.width;
    const cH = canvas.height;
    const iW = img.naturalWidth || img.width;
    const iH = img.naturalHeight || img.height;
    if (!iW || !iH) return;

    const scale = Math.min(cW / iW, cH / iH);
    const dW = iW * scale;
    const dH = iH * scale;
    const dX = (cW - dW) / 2;
    const dY = (cH - dH) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dX, dY, dW, dH);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    currentFrameRef.current = latest;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(latest));
  });

  return (
    // pointer-events-none: canvas hanya dekorasi, tidak boleh memblokir klik
    <div className="w-full h-full absolute inset-0 bg-[#050505] pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #050505 100%)",
        }}
      />
    </div>
  );
}
