"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const BEAT_POSITIONS = [0.07, 0.30, 0.55, 0.77, 0.93];

// Each dot needs its own component so hooks are called correctly
function Dot({ scrollYProgress, pos }: { scrollYProgress: MotionValue<number>; pos: number }) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, pos - 0.07), pos, Math.min(1, pos + 0.07)],
    [0.15, 1, 0.15]
  );
  const scale = useTransform(
    scrollYProgress,
    [Math.max(0, pos - 0.07), pos, Math.min(1, pos + 0.07)],
    [0.5, 1, 0.5]
  );
  return (
    <div className="relative w-3 h-3 rounded-full border border-white/12 bg-[#050505] flex items-center justify-center z-10">
      <motion.div
        style={{ opacity, scale }}
        className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#0050FF] to-[#00D6FF]"
      />
    </div>
  );
}

export default function ProgressIndicator() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center">
      <div className="relative flex flex-col items-center" style={{ gap: "40px" }}>
        {/* Track line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/8 pointer-events-none" />
        {/* Animated progress line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-[#0050FF] to-[#00D6FF] origin-top pointer-events-none"
          style={{ height: lineHeight }}
        />
        {/* Dots */}
        {BEAT_POSITIONS.map((pos, i) => (
          <Dot key={i} scrollYProgress={scrollYProgress} pos={pos} />
        ))}
      </div>
    </div>
  );
}
