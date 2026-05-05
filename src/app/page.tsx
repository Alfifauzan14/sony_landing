"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import StoryOverlays from "@/components/StoryOverlays";
import ProgressIndicator from "@/components/ProgressIndicator";

const CanvasSequence = dynamic(() => import("@/components/CanvasSequence"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="bg-[#050505] relative">
      {/* Navbar — z-50, selalu di atas */}
      <Navbar />

      {/* Indikator progres samping */}
      <ProgressIndicator />

      {/* ─── Anchor target: Ikhtisar ─── */}
      <div id="ikhtisar" />

      {/* ─── Kontainer gulir 600vh ─── */}
      <div className="relative" style={{ height: "600vh" }}>
        {/* Canvas background (tidak memblokir klik) */}
        <div className="sticky top-0 h-screen w-full">
          <CanvasSequence />
        </div>

        {/* Story overlays di atas canvas */}
        <div className="sticky top-0 h-screen w-full" style={{ marginTop: "-100vh" }}>
          <StoryOverlays />
        </div>
      </div>

      {/* ─── Anchor: Teknologi & Peredam Suara ─── */}
      <div id="teknologi" />
      <div id="peredam-suara" />

      {/* ─── Seksi Spesifikasi ─── */}
      <section
        id="spesifikasi"
        className="relative z-10 bg-[#0A0A0C] border-t border-white/5 px-8 md:px-16 py-20 scroll-mt-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(0,80,255,0.04),transparent_60%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <p className="text-[#00D6FF] text-[10px] tracking-[0.3em] uppercase font-medium mb-2">
            Spesifikasi Lengkap
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/88 mb-10">
            Dibangun untuk hal-hal luar biasa.
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {[
              { label: "Unit Driver", value: "40mm Dinamis" },
              { label: "Respons Frekuensi", value: "4Hz – 40kHz" },
              { label: "Daya Tahan Baterai", value: "Hingga 40 jam" },
              { label: "Waktu Pengisian", value: "3,5 jam" },
              { label: "Pengisian Cepat", value: "3 menit → 3 jam" },
              { label: "Bluetooth", value: "5.3 / Multipoint" },
              { label: "Codec", value: "LDAC / AAC / SBC" },
              { label: "Bobot", value: "250 gram" },
            ].map((spec) => (
              <div
                key={spec.label}
                className="bg-[#0A0A0C] px-5 py-5 hover:bg-white/3 transition-colors duration-300 group"
              >
                <p className="text-white/25 text-[9px] tracking-widest uppercase mb-1.5 group-hover:text-white/40 transition-colors">
                  {spec.label}
                </p>
                <p className="text-white/75 text-[14px] font-semibold">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Fitur unggulan */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "◈",
                title: "Hi-Res Audio Nirkabel",
                desc: "Nikmati kualitas audio resolusi tinggi secara nirkabel dengan codec LDAC Sony.",
              },
              {
                icon: "◉",
                title: "Peningkatan AI (DSEE Extreme)",
                desc: "Secara cerdas meningkatkan audio terkompresi menjadi kualitas mendekati Hi-Res secara real-time.",
              },
              {
                icon: "◍",
                title: "Multipoint Dual",
                desc: "Terhubung ke dua perangkat sekaligus. Berpindah dengan mulus antara ponsel dan laptop.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="border border-white/6 rounded-xl p-5 bg-white/2 hover:border-white/12 hover:bg-white/[0.04] transition-all duration-300"
              >
                <p className="text-[#00D6FF]/60 text-xl mb-3">{f.icon}</p>
                <p className="text-white/80 text-[13px] font-semibold mb-1.5">{f.title}</p>
                <p className="text-white/35 text-[12px] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seksi Beli ─── */}
      <section
        id="beli"
        className="relative z-10 bg-[#050505] border-t border-white/5 px-8 md:px-16 py-20 scroll-mt-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,80,255,0.05),transparent_70%)] pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-lg">
            <p className="text-[#00D6FF] text-[10px] tracking-[0.3em] uppercase font-medium mb-3 opacity-75">
              Tersedia Sekarang
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90 mb-4 leading-tight">
              Siap merasakan<br />keheningan sejati?
            </h2>
            <p className="text-white/38 text-[14px] leading-relaxed mb-2">
              Tersedia di toko Sony dan pengecer resmi di seluruh Indonesia.
            </p>
            <p className="text-white/22 text-[12px]">
              Dirancang untuk bandara, kantor, dan semua situasi lainnya.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0">
            {/* Harga placeholder */}
            <div className="text-center mb-2">
              <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">Mulai dari</p>
              <p
                className="text-[2.5rem] font-bold tracking-tight"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ffffff 50%, #00D6FF 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Rp 6.000.000
              </p>
            </div>

            <button 
              onClick={() => window.open('https://www.sony.co.id', '_blank')}
              className="w-full px-8 py-3.5 rounded-full font-semibold text-white text-[13px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] hover:opacity-90 shadow-[0_0_30px_rgba(0,80,255,0.4)] hover:shadow-[0_0_40px_rgba(0,214,255,0.5)] transition-all duration-300 cursor-pointer"
            >
              Beli Sekarang
            </button>
            <button className="w-full px-8 py-3 rounded-full font-medium text-white/55 text-[13px] border border-white/12 hover:border-white/25 hover:text-white/80 transition-all duration-300 cursor-pointer">
              Temukan Toko Terdekat
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("spesifikasi");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-white/28 hover:text-white/55 text-[12px] underline underline-offset-4 transition-colors duration-200 cursor-pointer"
            >
              Lihat spesifikasi lengkap →
            </button>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="bg-[#030303] border-t border-white/5 px-8 md:px-16 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/80 font-semibold tracking-tight text-[15px]">WH‑1000XM6</p>
          <div className="flex gap-7">
            {["Privasi", "Hukum", "Kontak", "Dukungan"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/22 hover:text-white/50 text-[11px] tracking-wide uppercase transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="text-white/18 text-[11px]">© 2025 Sony Group Corporation</p>
        </div>
      </footer>
    </main>
  );
}
