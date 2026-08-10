import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView, animate, type Variants, AnimatePresence } from "framer-motion";
import {
  Brain,
  Rocket,
  Trophy,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Mail,
  ShieldCheck,
  UserCircle,
  ListChecks,
  Award,
  Crown,
  Medal,
  Zap,
  Lightbulb,
  Calendar,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

const T = {
  bg: "#F9F9F6",
  bgSoft: "#FFFFFF",
  bgTint: "#EAF2EC",

  accent: "#4A6B53",
  accentDeep: "#0C6C57",
  gold: "#D4B85C",
  goldDeep: "#B8862E",

  ink: "#1C3322",
  inkSoft: "#55665A",
  inkFaint: "#6A827C",

  border: "#E0E6E1",
  glow: "rgba(74,107,83,0.18)",
};

type IconComponent = LucideIcon;
type CounterProps = { to: number; suffix?: string; duration?: number };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

function GlowOrb({ className = "", color = T.glow, size = 600 }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ width: size, height: size, background: color, filter: "blur(160px)" }}
    />
  );
}

function Counter({ to, suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate(latest) {
        setValue(Math.floor(latest));
      },
    });
    return () => controls.stop();
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-center mb-4"
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: T.accentDeep,
        fontWeight: 600,
      }}
    >
      {children}
    </p>
  );
}

function HighlightPill({ icon: Icon, label }: { icon: IconComponent; label: string }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-full"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: `1px solid ${T.border}`,
        backdropFilter: "blur(10px)",
      }}
    >
      <Icon size={15} color={T.accentDeep} />
      <span style={{ fontSize: "13px", fontWeight: 600, color: T.ink }}>{label}</span>
    </div>
  );
}

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "₹0 to Participate" },
  { icon: Users, label: "Open to All Students" },
  { icon: Calendar, label: "8-Week AI Healthcare Challenge" },
  { icon: Trophy, label: "Weekly Leaderboard" },
  { icon: Award, label: "Premium Rewards" },
  { icon: Rocket, label: "Internship Opportunities" },
  { icon: Crown, label: "Founder Recognition" },
];

const STATS = [
  { icon: Users, to: 1000, suffix: "+", label: "Community Members Goal" },
  { icon: Calendar, to: 8, suffix: "", label: "Weeks of Real Challenges" },
  { icon: Trophy, to: 3, suffix: "", label: "Question Drops / Week" },
  { icon: Rocket, to: 100, suffix: "%", label: "Talent Pipeline, Not Just a Quiz" },
];

const JOURNEY_STEPS = [
  { icon: Mail, title: "Register With College Email", desc: "Sign up using your official college ID — e.g. abc@smail.iitm.ac.in. No personal email, no spam." },
  { icon: ShieldCheck, title: "Verify With OTP", desc: "A one-time code confirms it's really you, and keeps the community verified and trustworthy." },
  { icon: UserCircle, title: "Complete Your Profile", desc: "Add your name, nickname, WhatsApp, college, year and department. Your nickname is what the world sees." },
  { icon: Brain, title: "Solve Weekly Challenges", desc: "Three question drops a week — Monday, Wednesday, Friday — each testing a different kind of thinking." },
  { icon: Zap, title: "Earn Points", desc: "Points come from correctness, explanation quality, creativity and how early you submit." },
  { icon: Award, title: "Unlock Rewards & Badges", desc: "Climb the leaderboard, collect badges, and unlock premium prizes as your streak grows." },
  { icon: Rocket, title: "Get Spotted", desc: "Top performers are invited into internships, the Campus Ambassador program, and the Hackathon finals." },
];

const QUESTION_DAYS = [
  {
    day: "Monday",
    tag: "Warm-Up",
    icon: ListChecks,
    title: "Multiple Choice",
    desc: "Easy, confidence-building questions to start your week. Quick to answer, quick to feel the momentum.",
    color: T.accentDeep,
  },
  {
    day: "Wednesday",
    tag: "Reasoning",
    icon: Lightbulb,
    title: "Myth vs Fact",
    desc: "\u201cAI can completely replace doctors \u2014 Fact or Myth?\u201d Explain your reasoning in two sentences. Being right isn't enough — you have to say why.",
    color: T.goldDeep,
  },
  {
    day: "Friday",
    tag: "Innovation",
    icon: Sparkles,
    title: "Innovation Question",
    desc: "\u201cHow could AI reduce stress among engineering students?\u201d Max 150 words. This is where we find the real innovators.",
    color: T.accent,
  },
];

const SCORING = [
  { label: "Correct Answer", points: 10 },
  { label: "Explanation Quality", points: 10 },
  { label: "Creativity", points: 5 },
  { label: "Early Submission (within 1st hour)", points: 5 },
];

const LEADERBOARD_PREVIEW = [
  { rank: 1, name: "ByteDoctor", pts: 620, icon: Crown, color: T.gold },
  { rank: 2, name: "RoboMedic", pts: 590, icon: Medal, color: "#A3C6AE" },
  { rank: 3, name: "QuantumPulse", pts: 560, icon: Medal, color: "#C99B6B" },
];

const REWARDS = [
  {
    place: "1st",
    icon: "🥇",
    title: "Champion",
    items: [
      "Lovable AI Pro — 1 Year",
      "Champion Badge",
      "LinkedIn Feature",
      "Founder Recognition",
      "Priority Internship Interview",
    ],
    featured: true,
  },
  {
    place: "2nd",
    icon: "🥈",
    title: "Runner-Up",
    items: ["AyurGenX T-Shirt", "Digital Badge"],
    featured: false,
  },
  {
    place: "3rd",
    icon: "🥉",
    title: "Third Place",
    items: ["AyurGenX Bottle", "Digital Badge"],
    featured: false,
  },
];

const BADGES = [
  { icon: Brain, label: "AI Thinker", desc: "5 Correct Answers" },
  { icon: Rocket, label: "Early Bird", desc: "20 Early Submissions" },
  { icon: Lightbulb, label: "Healthcare Innovator", desc: "Top Innovation Answer" },
  { icon: Trophy, label: "Top Contributor", desc: "100 Points" },
];

export default function Community() {
  return (
    <main
      className="overflow-hidden"
      style={{ fontFamily: "'Space Grotesk', sans-serif", color: T.ink, background: T.bg }}
    >
      {/* ============ HERO ============ */}
      <section
        className="relative min-h-[92vh] overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${T.bgSoft} 0%, ${T.bg} 100%)` }}
      >
        <GlowOrb className="top-[-220px] right-[-120px]" size={700} />
        <GlowOrb className="bottom-[-250px] left-[-140px]" color="rgba(212,184,92,0.14)" size={600} />

        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(28,51,34,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(28,51,34,0.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: `1px solid ${T.border}`,
                backdropFilter: "blur(10px)",
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ background: T.accent }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
              />
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: T.ink,
                  fontWeight: 600,
                }}
              >
                AyurGenX Community Challenge
              </span>
            </motion.div>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: T.accentDeep,
                fontWeight: 600,
              }}
            >
              Think. Solve. Innovate.
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 700,
                fontSize: "clamp(38px, 6vw, 76px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: T.ink,
              }}
            >
              Can You Solve{" "}
              <span
                style={{
                  background: `linear-gradient(135deg, ${T.accentDeep}, ${T.gold})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Tomorrow's Healthcare
              </span>{" "}
              Problems?
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl mx-auto mt-8"
              style={{ fontSize: "18px", lineHeight: 1.8, color: T.inkSoft }}
            >
              Think beyond textbooks. Solve real AI healthcare challenges, compete with
              brilliant students, earn exclusive rewards, and unlock internships with AyurGenX.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-10">
              {HIGHLIGHTS.map((h) => (
                <HighlightPill key={h.label} icon={h.icon} label={h.label} />
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5 mt-12">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-5 rounded-full inline-flex items-center gap-2"
                style={{
                  background: `linear-gradient(135deg, ${T.accent}, ${T.accentDeep})`,
                  boxShadow: `0 0 44px ${T.glow}`,
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "16px",
                }}
              >
                Join the Challenge
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-9 py-5 rounded-full inline-flex items-center gap-2"
                style={{
                  border: `1.5px solid rgba(28,51,34,0.2)`,
                  background: "rgba(255,255,255,0.6)",
                  color: T.ink,
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                <MessageSquare size={18} color={T.accentDeep} />
                Join WhatsApp Community
              </motion.button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6"
              style={{ fontSize: "13px", color: T.inkFaint }}
            >
              Currently focused on IITM students · more campuses opening soon
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ============ SOCIAL PROOF / STATS ============ */}
      <section className="relative py-24 px-6 overflow-hidden" style={{ background: T.bgTint }}>
        <GlowOrb className="top-10 left-1/2 -translate-x-1/2" size={480} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <SectionEyebrow>Why It Matters</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-16"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              lineHeight: 1.05,
              color: T.ink,
            }}
          >
            Not "who knows the right answer."
            <span className="block" style={{ color: T.accentDeep }}>
              "Who thinks like an innovator?"
            </span>
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(28,51,34,0.1)" }}
                transition={{ duration: 0.25 }}
                className="rounded-[24px] p-7 text-center"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 10px 24px rgba(28,51,34,0.05)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(74,107,83,0.12)" }}
                >
                  <stat.icon size={16} color={T.accentDeep} />
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(30px,3.4vw,42px)",
                    color: T.ink,
                  }}
                >
                  <Counter to={stat.to} suffix={stat.suffix} />
                </h3>
                <p
                  className="mt-3"
                  style={{
                    color: T.inkSoft,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ HOW IT WORKS — TIMELINE ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bg }}>
        <GlowOrb className="top-20 right-0" color="rgba(212,184,92,0.08)" size={500} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <SectionEyebrow>How It Works</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-20"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            From sign-up to spotlight.
          </motion.h2>

          <div className="relative">
            <div
              className="absolute left-7 top-2 bottom-2 w-[2px]"
              style={{ background: "linear-gradient(to bottom, rgba(74,107,83,0.35), rgba(212,184,92,0.15))" }}
            />
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div key={step.title} variants={fadeUp} className="relative flex gap-8 pb-14 last:pb-0">
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(74,107,83,0.12)", boxShadow: `0 0 22px ${T.glow}` }}
                >
                  <step.icon size={22} color={T.accentDeep} />
                </div>
                <div className="pt-1">
                  <p
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      color: T.goldDeep,
                      fontWeight: 700,
                    }}
                  >
                    STEP {String(i + 1).padStart(2, "0")}
                  </p>
                  <h4
                    className="mt-1"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "24px",
                      color: T.ink,
                    }}
                  >
                    {step.title}
                  </h4>
                  <p className="mt-2 max-w-lg text-[15px] leading-relaxed" style={{ color: T.inkSoft }}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ WEEKLY QUESTION TYPES ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bgTint }}>
        <GlowOrb className="bottom-0 left-[-100px]" size={500} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <SectionEyebrow>Every Week</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            Three questions. Three kinds of thinking.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center max-w-xl mx-auto mb-16"
            style={{ color: T.inkSoft, fontSize: "16px", lineHeight: 1.8 }}
          >
            New questions drop automatically at 6 PM, every Monday, Wednesday and Friday.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {QUESTION_DAYS.map((q) => (
              <motion.div
                key={q.day}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="rounded-[28px] p-8"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 16px 40px rgba(28,51,34,0.06)",
                  borderTop: `3px solid ${q.color}`,
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${q.color}18` }}
                  >
                    <q.icon size={24} color={q.color} />
                  </div>
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: q.color,
                      fontWeight: 700,
                    }}
                  >
                    {q.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: T.inkFaint,
                  }}
                >
                  {q.day} · 6:00 PM
                </p>
                <h3
                  className="mt-2"
                  style={{ fontFamily: "'DM Serif Display', serif", fontSize: "26px", color: T.ink }}
                >
                  {q.title}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ color: T.inkSoft, fontSize: "15px" }}>
                  {q.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ SCORING SYSTEM ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bg }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <SectionEyebrow>Scoring</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            Reasoning matters more than being right.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center max-w-xl mx-auto mb-16"
            style={{ color: T.inkSoft, fontSize: "16px", lineHeight: 1.8 }}
          >
            Even a wrong answer, argued well, still earns points. That's the whole point —
            we're looking for how you think, not just what you know.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-[32px] overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.92)",
              border: `1px solid ${T.border}`,
              boxShadow: "0 20px 50px rgba(28,51,34,0.06)",
            }}
          >
            {SCORING.map((row, i) => (
              <div
                key={row.label}
                className="flex items-center justify-between px-8 py-6"
                style={{ borderBottom: i < SCORING.length - 1 ? `1px solid ${T.border}` : "none" }}
              >
                <span style={{ fontSize: "17px", color: T.ink, fontWeight: 500 }}>{row.label}</span>
                <span
                  className="rounded-full px-4 py-1.5"
                  style={{
                    background: "rgba(74,107,83,0.1)",
                    color: T.accentDeep,
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontWeight: 700,
                    fontSize: "14px",
                  }}
                >
                  +{row.points} pts
                </span>
              </div>
            ))}
            <div
              className="flex items-center justify-between px-8 py-7"
              style={{ background: `linear-gradient(135deg, ${T.accent}, ${T.accentDeep})` }}
            >
              <span style={{ fontSize: "18px", color: "#FFFFFF", fontWeight: 700 }}>
                Total Possible Per Question
              </span>
              <span style={{ fontSize: "22px", color: "#FFFFFF", fontWeight: 700 }}>30 pts</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ LEADERBOARD PREVIEW ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bgTint }}>
        <GlowOrb className="top-0 right-[-120px]" color="rgba(212,184,92,0.1)" size={500} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <SectionEyebrow>Leaderboard</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            Nicknames only. Always.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-center max-w-lg mx-auto mb-16"
            style={{ color: T.inkSoft, fontSize: "16px", lineHeight: 1.8 }}
          >
            Real names stay private. What the world sees is the identity you choose to build.
          </motion.p>

          <div className="space-y-4">
            {LEADERBOARD_PREVIEW.map((row) => (
              <motion.div
                key={row.rank}
                variants={fadeUp}
                whileHover={{ x: 8 }}
                className="flex items-center justify-between rounded-[24px] px-7 py-6"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 12px 30px rgba(28,51,34,0.05)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${row.color}22` }}
                  >
                    <row.icon size={20} color={row.color} />
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", color: T.inkFaint, fontWeight: 600 }}>#{row.rank}</p>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", color: T.ink }}>
                      {row.name}
                    </p>
                  </div>
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "18px", color: T.accentDeep, fontWeight: 700 }}>
                  {row.pts} pts
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ REWARDS ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bg }}>
        <GlowOrb className="bottom-0 left-1/2 -translate-x-1/2" size={550} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <SectionEyebrow>Rewards</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-16"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            Worth showing up for.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {REWARDS.map((r) => (
              <motion.div
                key={r.place}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="rounded-[32px] p-8"
                style={
                  r.featured
                    ? {
                        background: `linear-gradient(160deg, ${T.accent}, ${T.accentDeep})`,
                        boxShadow: "0 30px 60px rgba(74,107,83,0.3)",
                        transform: "scale(1.04)",
                      }
                    : {
                        background: "rgba(255,255,255,0.92)",
                        border: `1px solid ${T.border}`,
                        boxShadow: "0 16px 40px rgba(28,51,34,0.06)",
                      }
                }
              >
                <div className="text-5xl mb-4">{r.icon}</div>
                <p
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "12px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: r.featured ? "rgba(255,255,255,0.75)" : T.inkFaint,
                    fontWeight: 700,
                  }}
                >
                  {r.place} Place
                </p>
                <h3
                  className="mt-1 mb-6"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "28px",
                    color: r.featured ? "#FFFFFF" : T.ink,
                  }}
                >
                  {r.title}
                </h3>
                <div className="space-y-3">
                  {r.items.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 size={16} color={r.featured ? "#FFFFFF" : T.accentDeep} />
                      <span style={{ fontSize: "14px", color: r.featured ? "rgba(255,255,255,0.9)" : T.inkSoft }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ BADGES ============ */}
      <section className="relative py-32 px-6 overflow-hidden" style={{ background: T.bgTint }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <SectionEyebrow>Collectibles</SectionEyebrow>
          <motion.h2
            variants={fadeUp}
            className="text-center mb-16"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px,4.5vw,52px)",
              color: T.ink,
            }}
          >
            Badges worth collecting.
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {BADGES.map((b) => (
              <motion.div
                key={b.label}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="rounded-[26px] p-7 text-center"
                style={{
                  background: "rgba(255,255,255,0.92)",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 14px 34px rgba(28,51,34,0.06)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${T.accent}22, ${T.gold}22)`,
                    border: `1px solid ${T.border}`,
                  }}
                >
                  <b.icon size={26} color={T.accentDeep} />
                </div>
                <h4 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", color: T.ink }}>
                  {b.label}
                </h4>
                <p className="mt-2" style={{ fontSize: "12px", color: T.inkFaint }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============ COMMUNITY / WHATSAPP CTA ============ */}
      <section className="relative py-28 px-6 overflow-hidden" style={{ background: T.bg }}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[36px] p-10 md:p-14 text-center relative overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${T.accent}, ${T.accentDeep})`,
              boxShadow: "0 30px 70px rgba(74,107,83,0.3)",
            }}
          >
            <GlowOrb className="top-[-100px] right-[-100px]" color="rgba(212,184,92,0.25)" size={400} />
            <MessageSquare size={40} color="#FFFFFF" className="mx-auto mb-6 relative z-10" />
            <h2
              className="relative z-10"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(28px,4vw,44px)",
                color: "#FFFFFF",
                lineHeight: 1.15,
              }}
            >
              Never solve this alone.
            </h2>
            <p
              className="relative z-10 max-w-xl mx-auto mt-5"
              style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: 1.8 }}
            >
              Get hints, discuss answers, meet other innovators, and build the connections
              that outlast the challenge itself.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative z-10 mt-8 inline-flex items-center gap-2 px-9 py-4 rounded-full"
              style={{ background: "#FFFFFF", color: T.accentDeep, fontWeight: 700, fontSize: "16px" }}
            >
              Join WhatsApp Community
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section
        className="relative py-40 px-6 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${T.ink} 0%, #0F2419 100%)` }}
      >
        <GlowOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={800} color="rgba(74,107,83,0.2)" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
          >
            <Target size={14} color="#FFFFFF" />
            <span
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.14em",
                color: "#FFFFFF",
              }}
            >
              REGISTRATIONS ARE OPEN
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(38px,6vw,64px)",
              lineHeight: 1.05,
              color: "#FFFFFF",
            }}
          >
            Your next opportunity starts
            <span
              className="block"
              style={{
                background: `linear-gradient(135deg, ${T.accent}, ${T.gold})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with one question.
            </span>
          </motion.h2>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5 mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-9 py-5 rounded-full inline-flex items-center gap-2"
              style={{
                background: `linear-gradient(135deg, ${T.accent}, ${T.accentDeep})`,
                boxShadow: "0 0 50px rgba(74,107,83,0.4)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Join the Challenge
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            Free forever · 8 weeks · Real problems · Real recognition
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}