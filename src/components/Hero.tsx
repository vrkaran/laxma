import { motion } from "framer-motion";
import type { ReactNode } from "react";
import HeroCards, { HeroCardsMobile } from "./HeroCards";
import HeroOrbit from "./HeroOrbit";
import {
  ArrowRight,
  ShieldCheck,
  Sparkle,
  Handshake,
  Leaf,
  Cpu,
  Wind,
  Flame,
  Drop,
  Pulse,
  TrendUp,
} from "@phosphor-icons/react";
import heroBg from "../image/home/hero-bg.jpg";
import heroBgMobile from "../image/home/herobgm.jpg";

const trustBadges = [
  { label: "Trusted by Doctors", icon: Handshake },
  { label: "AI-Powered Health Intelligence", icon: Cpu },
  { label: "5000+ Years of Ayurveda", icon: Leaf },
  { label: "Privacy First", icon: ShieldCheck },
];

const doshas = [
  { label: "Vata", icon: Wind },
  { label: "Pitta", icon: Flame },
  { label: "Kapha", icon: Drop },
];

const doshaBars = [80, 65, 90, 55, 70];
const vitalityBars = [60, 85, 45, 75, 90];

function GlassFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-[28px] p-[1px] bg-gradient-to-br from-[#0C6C57]/15 via-[#D7E4DF] to-[#0C6C57]/5">
      <div className="shine-card relative overflow-hidden rounded-[27px] bg-white border border-[#E0E6E1] px-6 py-5 shadow-[0_20px_60px_-15px_rgba(12,108,87,.12)]">
        {children}
      </div>
    </div>
  );
}

function MiniBars({ bars }: { bars: number[] }) {
  return (
    <div className="mt-4 space-y-2">
      {bars.map((w: number, i: number) => (
        <div key={i} className="h-1.5 w-full rounded-full bg-[#EAF2EC] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#4A6B53] to-[#D4B85C]"
            style={{ width: `${w}%` }}
          />
        </div>
      ))}
    </div>
  );
}

function DoshaCard() {
  return (
    <GlassFrame>
      <div className="flex items-center gap-2 text-[#1C3322]">
        <Leaf weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Dosha Balance</span>
      </div>
      <div className="mt-5 flex justify-between">
        {doshas.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E0E6E1] bg-[#EAF2EC] transition-colors duration-300 hover:border-[#4A6B53]/40 hover:bg-[#4A6B53]/10">
              <Icon weight="duotone" className="h-5 w-5 text-[#4A6B53]" />
            </div>
            <span className="text-[11px] text-[#6A827C]">{label}</span>
          </div>
        ))}
      </div>
      <MiniBars bars={doshaBars} />
    </GlassFrame>
  );
}

function VitalityCard() {
  const value = 87;
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <GlassFrame>
      <div className="flex items-center gap-2 text-[#1C3322]">
        <Pulse weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Vitality Score</span>
      </div>
      <div className="mt-5 flex items-center gap-6">
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 96 96" className="h-24 w-24 -rotate-90">
            <circle cx="48" cy="48" r={radius} fill="none" stroke="#EAF2EC" strokeWidth="8" />
            <motion.circle
              cx="48"
              cy="48"
              r={radius}
              fill="none"
              stroke="url(#vitalityGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="vitalityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A6B53" />
                <stop offset="100%" stopColor="#D4B85C" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-[#1C3322]">{value}</span>
            <span className="text-[10px] text-[#6A827C]">/100</span>
          </div>
        </div>
        <MiniBars bars={vitalityBars} />
      </div>
    </GlassFrame>
  );
}

function LongevityCard() {
  const points = [4, 18, 10, 26, 16, 30, 22, 36, 28, 40];
  const w = 220;
  const h = 64;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - p}`)
    .join(" ");
  const areaPath = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <GlassFrame>
      <div className="flex items-center gap-2 text-[#1C3322]">
        <TrendUp weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Longevity Potential</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 h-20 w-full overflow-visible">
        <defs>
          <linearGradient id="longevityFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A6B53" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4A6B53" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((p) => (
          <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} stroke="#EAF2EC" strokeWidth="1" />
        ))}
        <path d={areaPath} fill="url(#longevityFill)" />
        <path d={path} fill="none" stroke="#D4B85C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </GlassFrame>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F6]">

      {/* ================= MOBILE / TABLET (below lg) ================= */}
      <div className="lg:hidden relative px-5 pt-28 pb-16 sm:px-6">
        {/* soft tint bg, no image behind text block */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(74,107,83,.06),transparent_55%)]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-md text-center"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E0E6E1] bg-white px-4 py-2 shadow-sm">
            <Sparkle weight="fill" className="h-3.5 w-3.5 text-[#4A6B53]" />
            <span className="text-[11px] font-medium tracking-wide text-[#1C3322]">
              Precision Ayurveda + AI
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-[3rem] leading-none tracking-[-0.03em] bg-gradient-to-b from-[#0C6C57] via-[#4A6B53] to-[#D4B85C] bg-clip-text text-transparent">
            AyurGenX™
          </h1>

          <div className="mx-auto mt-3 h-px w-40 bg-gradient-to-r from-transparent via-[#D4B85C] to-transparent" />

          <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#55665A]">
            Predict • Prevent • Personalize
          </p>

          {/* Description */}
          <p className="mt-6 text-[15px] leading-7 text-[#55665A]">
            AyurGenX combines 5000+ years of Ayurvedic knowledge with
            cutting-edge AI to build your truly personalized health journey.
          </p>
        </motion.div>

        {/* Circular hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10 mx-auto mt-10 h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]"
        >
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#4A6B53]/15 via-[#D4B85C]/10 to-transparent blur-xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-[0_20px_60px_rgba(12,108,87,.18)]">
            <img
              src={heroBgMobile}
              alt="AyurGenX"
              className="h-full w-full object-cover object-[center_20%]"
            />
          </div>
          {/* small floating vitality chip on the circle edge */}
          <div className="absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full border border-[#E0E6E1] bg-white px-4 py-2 shadow-md">
            <Pulse weight="duotone" className="h-4 w-4 text-[#4A6B53]" />
            <span className="text-sm font-semibold text-[#1C3322]">87</span>
            <span className="text-[10px] text-[#6A827C]">Vitality</span>
          </div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="relative z-10 mt-10 flex flex-col gap-3"
        >
          <button className="w-full rounded-full bg-[#4A6B53] py-4 text-white font-medium shadow-lg active:scale-[0.98] transition-transform">
            <span className="flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight weight="bold" size={16} />
            </span>
          </button>
          <button className="w-full rounded-full border border-[#D7E4DF] bg-white py-4 text-[#1C3322] font-medium active:scale-[0.98] transition-transform">
            Explore Platform
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 mt-8 grid grid-cols-2 gap-3"
        >
          {trustBadges.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-[#E0E6E1] bg-white px-3 py-3 text-[11px] text-[#1C3322]"
            >
              <Icon weight="duotone" className="h-4 w-4 shrink-0 text-[#4A6B53]" />
              <span className="leading-tight">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= DESKTOP (lg and up) — unchanged ================= */}
      <div className="hidden lg:block relative min-h-[100svh]">
        <img
          src={heroBg}
          alt="AyurGenX Hero"
          className="absolute inset-0 h-full w-full object-cover object-[62%_80px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F9F9F6] via-[#F9F9F6]/70 via-35% to-transparent to-60%" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(74,107,83,.05),transparent_45%)]" />

        <div className="relative z-20 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-2 items-center gap-12 px-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E0E6E1] bg-white px-5 py-2 shadow-sm transition-colors duration-300 hover:border-[#4A6B53]/40"
            >
              <Sparkle weight="fill" className="h-4 w-4 text-[#4A6B53]" />
              <span className="text-sm font-medium tracking-wide text-[#1C3322]">
                Precision Ayurveda + Artificial Intelligence
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-2"
            >
              <h1 className="font-serif text-[4.4rem] md:text-[5.8rem] leading-none tracking-[-0.04em] bg-gradient-to-b from-[#0C6C57] via-[#4A6B53] to-[#D4B85C] bg-clip-text text-transparent">
                AyurGenX™
              </h1>
              <div className="mt-3 h-px w-72 bg-gradient-to-r from-[#0C6C57] via-[#D4B85C] to-transparent" />
              <p className="mt-2 text-[11px] uppercase tracking-[0.42em] text-[#55665A]">
                Predict • Prevent • Personalize • Prolong
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-[#55665A]"
            >
              AyurGenX combines 5000+ years of Ayurvedic knowledge with
              cutting-edge AI to understand your body, improve your wellness,
              and build a truly personalized health journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 rounded-full bg-[#4A6B53] px-8 py-4 text-white shadow-lg transition-all duration-300 hover:bg-[#3D5A46] hover:shadow-[0_18px_40px_-12px_rgba(74,107,83,.35)]"
              >
                Start Your Journey
                <ArrowRight weight="bold" size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-[#D7E4DF] bg-white px-8 py-4 text-[#1C3322] transition-colors duration-300 hover:border-[#4A6B53]/40 hover:bg-[#EAF2EC]"
              >
                Explore Platform
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 flex flex-wrap gap-4"
            >
              {trustBadges.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-[#E0E6E1] bg-white px-4 py-2 text-sm text-[#1C3322] transition-colors duration-300 hover:border-[#4A6B53]/40"
                >
                  <Icon weight="duotone" className="h-3.5 w-3.5 text-[#4A6B53]" />
                  {label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <div>
            <HeroOrbit />
          </div>
          <HeroCards />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#F9F9F6] pointer-events-none" />
      </div>

      <style>{`
        .shine-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 20%, rgba(74,107,83,.06) 50%, transparent 80%);
          transform: translateX(-120%);
          transition: transform .8s ease;
          pointer-events: none;
        }
        .shine-card:hover::after {
          transform: translateX(120%);
        }
      `}</style>
    </section>
  );
}