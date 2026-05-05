"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Ikhtisar", href: "#ikhtisar" },
  { label: "Teknologi", href: "#teknologi" },
  { label: "Peredam Suara", href: "#peredam-suara" },
  { label: "Spesifikasi", href: "#spesifikasi" },
  { label: "Beli", href: "#beli" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 120], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(16px)"]);
  const backgroundColor = useTransform(
    scrollY,
    [0, 120],
    ["rgba(5,5,5,0)", "rgba(5,5,5,0.85)"]
  );

  const handleScrollTo = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      style={{
        opacity,
        backdropFilter: backdropBlur,
        backgroundColor,
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 border-b border-white/5"
    >
      {/* Logo */}
      <div className="flex-1">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-white/85 font-semibold tracking-tight text-[15px] cursor-pointer hover:text-white transition-colors duration-200"
        >
          WH‑1000XM6
        </button>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-7">
        {NAV_LINKS.map((item) => (
          <button
            key={item.label}
            onClick={() => handleScrollTo(item.href)}
            className="text-white/50 hover:text-white/85 text-[13px] font-medium transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* CTA */}
      <div className="flex-1 flex justify-end">
        <button
          onClick={() => handleScrollTo("#beli")}
          className="px-5 py-2 rounded-full text-[12px] font-semibold text-white/90 bg-gradient-to-r from-[#0050FF]/20 to-[#00D6FF]/20 border border-[#0050FF]/30 hover:border-[#00D6FF]/50 hover:from-[#0050FF]/30 hover:to-[#00D6FF]/30 transition-all duration-300 shadow-[0_0_14px_rgba(0,80,255,0.15)] hover:shadow-[0_0_22px_rgba(0,214,255,0.25)] cursor-pointer"
        >
          Rasakan WH‑1000XM6
        </button>
      </div>
    </motion.nav>
  );
}
