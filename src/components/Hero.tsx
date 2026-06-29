import { motion } from "framer-motion";
import HeroCards from "./HeroCards";
import HeroOrbit from "./HeroOrbit";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  Leaf,
  Cpu,
  Wind,
  Flame,
  Droplet,
  Activity,
  TrendingUp,
} from "lucide-react";
import heroBg from "../image/home/hero-bg.jpg";
import GlassCard from "./GlassCard";

const trustBadges = [
  { label: "Trusted by Doctors", icon: HeartHandshake },
  { label: "AI-Powered Health Intelligence", icon: Cpu },
  { label: "5000+ Years of Ayurveda", icon: Leaf },
  { label: "Privacy First", icon: ShieldCheck },
];

const doshas = [
  { label: "Vata", icon: Wind },
  { label: "Pitta", icon: Flame },
  { label: "Kapha", icon: Droplet },
];

const doshaBars = [80, 65, 90, 55, 70];
const vitalityBars = [60, 85, 45, 75, 90];

function GlassFrame({ children }) {
  return (
    <div className="relative rounded-[28px] p-[1px] bg-gradient-to-br from-white/40 via-emerald-200/15 to-white/5">
      <div className="shine-card relative overflow-hidden rounded-[27px] bg-[#0d2a23]/70 backdrop-blur-xl border border-white/10 px-6 py-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,.65)]">
        {children}
      </div>
    </div>
  );
}

function MiniBars({ bars }) {
  return (
    <div className="mt-4 space-y-2">
      {bars.map((w, i) => (
        <div key={i} className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-[#EFD98B]"
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
      <div className="flex items-center gap-2 text-white/90">
        <Leaf className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Dosha Balance</span>
      </div>
      <div className="mt-5 flex justify-between">
        {doshas.map(({ label, icon: Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5">
              <Icon className="h-5 w-5 text-emerald-200" />
            </div>
            <span className="text-[11px] text-white/60">{label}</span>
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
      <div className="flex items-center gap-2 text-white/90">
        <Activity className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Vitality Score</span>
      </div>
      <div className="mt-5 flex items-center gap-6">
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 96 96" className="h-24 w-24 -rotate-90">
            <circle cx="48" cy="48" r={radius} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="8" />
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
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#EFD98B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold text-white">{value}</span>
            <span className="text-[10px] text-white/50">/100</span>
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
      <div className="flex items-center gap-2 text-white/90">
        <TrendingUp className="h-4 w-4 text-emerald-300" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em]">Longevity Potential</span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-5 h-20 w-full overflow-visible">
        <defs>
          <linearGradient id="longevityFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((p) => (
          <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} stroke="rgba(255,255,255,.08)" strokeWidth="1" />
        ))}
        <path d={areaPath} fill="url(#longevityFill)" />
        <path d={path} fill="none" stroke="#EFD98B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </GlassFrame>
  );
}

const railCards = [DoshaCard, VitalityCard, LongevityCard];

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
        <img
        src={heroBg}
        alt="AyurGenX Hero"
        className="absolute inset-0 h-full w-full object-cover object-[62%_58px] lg:object-[62%_80px]"
        />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B17]/85 via-[#081B17]/55 to-transparent" />

      {/* Soft Glow */}
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,.18),transparent_45%)]" />

      {/* Main Content */}
      <div className="relative z-20 mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-26 lg:grid-cols-2 lg:px-10 lg:pt-32">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2"
          >
            <Sparkles className="h-4 w-4 text-emerald-300" />
            <span className="text-sm font-medium tracking-wide text-white">
              Precision Ayurveda + Artificial Intelligence
            </span>
          </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-2"
        >
        <h2
            className="
            font-serif
            text-[4.4rem]
            md:text-[5.8rem]
            leading-none
            tracking-[-0.04em]
        bg-gradient-to-b
            from-[#FFFCE7]
            via-[#F4DE97]
            to-[#D7A73A]
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_22px_rgba(255,220,120,.28)]
            "
        >
            AyurGenX™
        </h2>

        <div className="mt-3 h-px w-72 bg-gradient-to-r from-[#E7C86E] via-[#F7EFC7] to-transparent" />

        <p className="mt-2 text-[11px] uppercase tracking-[0.42em] text-[#E9D896]/80">
            Predict • Prevent • Personalize • Prolong
        </p>
        </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl"
          >
            AyurGenX combines 5000+ years of Ayurvedic knowledge with
            cutting-edge AI to understand your body, improve your wellness,
            and build a truly personalized health journey.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-[#0F5A4A] px-8 py-4 text-white shadow-lg hover:bg-[#126654] transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-8 py-4 text-white"
            >
              Explore Platform
            </motion.button>
          </motion.div>

          {/* Trust Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 flex flex-wrap gap-4"
          >
            {trustBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/90"
              >
                <Icon className="h-3.5 w-3.5 text-emerald-300" />
                {label}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — floating stat cards */}

        <HeroOrbit />
        <HeroCards/>
      </div>

      <style>{`
        @keyframes cardScroll {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        .card-track {
          animation: cardScroll 22s linear infinite;
        }
        .card-rail:hover .card-track {
          animation-play-state: paused;
        }
        .shine-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(115deg, transparent 20%, rgba(255,255,255,.18) 50%, transparent 80%);
          transform: translateX(-120%);
          transition: transform .8s ease;
          pointer-events: none;
        }
        .shine-card:hover::after {
          transform: translateX(120%);
        }
      `}</style>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#081B17] pointer-events-none" />
    </section>
  );
}