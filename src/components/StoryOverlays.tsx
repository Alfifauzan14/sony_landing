"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function StoryOverlays() {
  const { scrollYProgress } = useScroll();

  // ── Hero: 0–17% ──────────────────────────────────────────────────────
  const heroOpacity = useTransform(scrollYProgress, [0, 0.13, 0.17], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0.13, 0.17], [0, -40]);

  // ── Engineering: 20–42% ──────────────────────────────────────────────
  const engOpacity = useTransform(scrollYProgress, [0.20, 0.25, 0.39, 0.43], [0, 1, 1, 0]);
  const engX = useTransform(scrollYProgress, [0.20, 0.26], [-70, 0]);

  // ── Noise Cancelling: 46–67% ─────────────────────────────────────────
  const noiseOpacity = useTransform(scrollYProgress, [0.46, 0.51, 0.64, 0.68], [0, 1, 1, 0]);
  const noiseX = useTransform(scrollYProgress, [0.46, 0.52], [70, 0]);

  // ── Sound: 70–87% ────────────────────────────────────────────────────
  const soundOpacity = useTransform(scrollYProgress, [0.70, 0.75, 0.85, 0.89], [0, 1, 1, 0]);
  const soundX = useTransform(scrollYProgress, [0.70, 0.76], [-70, 0]);

  // ── CTA: 91–100% ─────────────────────────────────────────────────────
  const ctaOpacity = useTransform(scrollYProgress, [0.91, 0.96], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.91, 0.96], [40, 0]);
  // Hanya intercept klik saat CTA benar-benar terlihat
  const ctaPointerEvents = useTransform(ctaOpacity, (v) => (v > 0.05 ? "auto" : "none"));

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_62%,rgba(0,80,255,0.06),transparent_70%)] pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#00D6FF] text-[11px] tracking-[0.35em] uppercase font-medium mb-6 opacity-80"
        >
          Sony Unggulan · 2025
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(3.2rem,9vw,8rem)] font-bold tracking-[-0.04em] leading-none mb-5"
          style={{
            backgroundImage: "linear-gradient(160deg, #ffffff 55%, #a8d4ff 80%, #00D6FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          WH‑1000XM6
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9 }}
          className="text-[clamp(1rem,2.2vw,1.4rem)] text-white/45 font-light tracking-wide mb-4"
        >
          Keheningan, disempurnakan.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="text-[13px] text-white/28 max-w-xs leading-relaxed"
        >
          Peredam bising nirkabel andalan,<br />
          dirancang ulang untuk dunia yang tak pernah berhenti.
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="text-white/18 text-[10px] tracking-[0.3em] uppercase">Gulir</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/22 to-transparent" />
        </motion.div>
      </motion.div>

      {/* ━━━ REKAYASA (kiri) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        style={{ opacity: engOpacity, x: engX }}
        className="absolute left-8 md:left-14 top-[50%] -translate-y-1/2 w-[270px]"
      >
        <div className="w-6 h-px bg-gradient-to-r from-[#0050FF] to-[#00D6FF] mb-5" />
        <p className="text-[#00D6FF] text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-75">
          Rekayasa
        </p>
        <h2
          className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold tracking-tight leading-[1.15] mb-4"
          style={{
            backgroundImage: "linear-gradient(140deg, #ffffff 65%, #a8d4ff 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dirancang presisi<br />untuk keheningan.
        </h2>
        <p className="text-white/42 text-[12.5px] leading-relaxed mb-2.5">
          Driver khusus, ruang akustik tertutup, dan aliran udara yang dioptimalkan menghadirkan kejernihan setara studio.
        </p>
        <p className="text-white/28 text-[12px] leading-relaxed">
          Setiap komponen disetel untuk keseimbangan, daya, dan kenyamanan—jam demi jam.
        </p>
        <div className="mt-6 flex flex-col gap-2.5">
          {[
            "Driver dinamis presisi 40mm",
            "Ruang akustik dua lapis",
            "Aliran udara teroptimasi AI",
          ].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#00D6FF]/55 shrink-0" />
              <span className="text-white/30 text-[11px] tracking-wide">{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ━━━ PEREDAM BISING (kanan) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        style={{ opacity: noiseOpacity, x: noiseX }}
        className="absolute right-12 md:right-16 top-[50%] -translate-y-1/2 w-[265px] text-right"
      >
        <div className="w-6 h-px bg-gradient-to-l from-[#0050FF] to-[#00D6FF] mb-5 ml-auto" />
        <p className="text-[#00D6FF] text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-75">
          Peredam Bising
        </p>
        <h2
          className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold tracking-tight leading-[1.15] mb-4"
          style={{
            backgroundImage: "linear-gradient(140deg, #ffffff 65%, #a8d4ff 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Peredam bising adaptif,<br />didefinisikan ulang.
        </h2>
        <div className="flex flex-col gap-3.5">
          {[
            "Array multi-mikrofon menangkap suara dari segala arah.",
            "Analisis kebisingan real-time menyesuaikan lingkungan Anda.",
            "Musik tetap murni—pesawat, kereta, keramaian memudar.",
          ].map((line, i) => (
            <div key={i} className="flex items-start gap-2 justify-end">
              <span className="text-white/40 text-[12px] leading-relaxed">{line}</span>
              <div className="w-1 h-1 rounded-full bg-[#0050FF]/55 shrink-0 mt-1.5" />
            </div>
          ))}
        </div>
        <div className="mt-6 ml-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0050FF]/20 bg-[#0050FF]/5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse" />
          <span className="text-[#00D6FF]/60 text-[10px] font-medium tracking-widest uppercase">−30 dB ANC</span>
        </div>
      </motion.div>

      {/* ━━━ KUALITAS SUARA (kiri) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <motion.div
        style={{ opacity: soundOpacity, x: soundX }}
        className="absolute left-8 md:left-14 top-[50%] -translate-y-1/2 w-[270px]"
      >
        <div className="w-6 h-px bg-gradient-to-r from-[#0050FF] to-[#00D6FF] mb-5" />
        <p className="text-[#00D6FF] text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-75">
          Kualitas Suara
        </p>
        <h2
          className="text-[clamp(1.5rem,2.8vw,2.2rem)] font-bold tracking-tight leading-[1.15] mb-4"
          style={{
            backgroundImage: "linear-gradient(140deg, #ffffff 65%, #a8d4ff 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Suara imersif<br />yang terasa nyata.
        </h2>
        <p className="text-white/42 text-[12.5px] leading-relaxed mb-2.5">
          Driver berperforma tinggi menghadirkan detail, kedalaman, dan tekstur di setiap lagu.
        </p>
        <p className="text-white/28 text-[12px] leading-relaxed">
          Peningkatan berbasis AI memulihkan kejernihan audio terkompresi—setiap nada terasa hidup.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-2">
          {[
            { label: "Frekuensi", value: "4Hz–40kHz" },
            { label: "Baterai", value: "40 jam" },
            { label: "Codec", value: "LDAC" },
            { label: "Hi-Res", value: "Nirkabel" },
          ].map((item) => (
            <div key={item.label} className="border border-white/6 rounded-lg p-2.5 bg-white/2">
              <p className="text-white/22 text-[9px] tracking-widest uppercase mb-1">{item.label}</p>
              <p className="text-white/60 text-[12px] font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ━━━ CTA (tengah bawah) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* pointer-events berubah dinamis: 'auto' hanya saat CTA terlihat */}
      <motion.div
        style={{ opacity: ctaOpacity, y: ctaY, pointerEvents: ctaPointerEvents }}
        className="absolute bottom-12 left-0 right-0 flex flex-col items-center text-center px-6"
      >
        <p className="text-[#00D6FF] text-[10px] tracking-[0.35em] uppercase font-medium mb-4 opacity-70">
          Pengalaman Unggulan
        </p>
        <h2
          className="text-[clamp(1.8rem,5vw,3.8rem)] font-bold tracking-[-0.03em] leading-none mb-3"
          style={{
            backgroundImage: "linear-gradient(160deg, #ffffff 55%, #a8d4ff 80%, #00D6FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Dengar segalanya.<br />Rasakan kedamaian.
        </h2>
        <p className="text-white/32 text-[13px] mb-8 mt-2">
          WH‑1000XM6. Dirancang untuk fokus, dibuat untuk kenyamanan.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              const el = document.getElementById("beli");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-full font-semibold text-white text-[13px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:opacity-90 shadow-[0_0_28px_rgba(0,80,255,0.4)] hover:shadow-[0_0_38px_rgba(0,214,255,0.5)] transition-all duration-300 cursor-pointer"
          >
            Rasakan WH‑1000XM6
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("spesifikasi");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-white/32 hover:text-white/60 text-[12px] underline underline-offset-4 transition-colors duration-200 cursor-pointer"
          >
            Lihat spesifikasi lengkap →
          </button>
        </div>
        <p className="mt-5 text-white/18 text-[11px]">
          Dirancang untuk bandara, kantor, dan semua situasi lainnya.
        </p>
      </motion.div>

    </div>
  );
}
