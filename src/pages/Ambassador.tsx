import React from "react";
import heroimg from '../image/ambassador/heroimg.jpg'
import { useRef, useEffect, useState, type ReactNode } from "react";
import { motion, useInView, animate, type Variants, AnimatePresence } from "framer-motion";
import {
  Rocket,
  Users,
  TrendingUp,
  Briefcase,
  Award,
  Network,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Sparkles,
  Flag,
  Handshake,
  FileCheck,
  PhoneCall,
  UserPlus,
  Compass,
  ClipboardCheck,
  MessageSquare,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import roleImg1 from "../image/ambassador/role1.jpg";
import roleImg3 from "../image/ambassador/role3.jpg";
import roleImg4 from "../image/ambassador/role4.jpg";
import roleImg5 from "../image/ambassador/role5.jpg";

/* =========================================================
   DESIGN TOKENS — light pastel teal / mint system.
   Reserve `accent` (the neon teal-green) for high-priority
   focus elements only: the gradient headline word, primary
   buttons, stat numbers, and success checkmarks. Everything
   else uses `ink` / `inkSoft` so the neon doesn't get diluted.
========================================================= */
const TEAL = {
  bg: "#F7FAFA",
  bgSoft: "#FFFFFF",
  bgTint: "#E6F4F1",

  accent: "#449B85",
  accentDeep: "#318B97",

  ink: "#22686B",
  inkSoft: "#5B6775",

  glow: "rgba(68,155,133,0.18)",
};

type IconComponent = LucideIcon;
type EyebrowProps = { children: ReactNode; color?: string; center?: boolean };
type CounterProps = { to: number; suffix?: string; duration?: number };
type GlassCardProps = { children: ReactNode; spanClass?: string; className?: string };
type IconBadgeProps = { icon: IconComponent; highlight?: boolean };
type CheckItemProps = { icon: IconComponent; title: string; desc: string };
type TimelineItemProps = { icon: IconComponent; title: string; desc: string; isLast?: boolean };

/* =========================================================
   MOTION VARIANTS
========================================================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/* =========================================================
   SMALL REUSABLE PIECES
========================================================= */

function Eyebrow({ children, color = TEAL.accent, center = false }: EyebrowProps) {
  return (
    <p
      className={`mb-4 ${center ? "text-center" : ""}`}
      style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: "12px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
      }}
    >
      {children}
    </p>
  );
}

function GlowOrb({ className = "", color = TEAL.glow, size = 600 }) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{ width: size, height: size, background: color, filter: "blur(160px)" }}
    />
  );
}

// Counts up from 0 to `to` once the element scrolls into view.
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

// White/frosted card used everywhere — Why Join, Stats, Perks, Eligibility.
function GlassCard({ children, spanClass = "", className = "" }: GlassCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-[28px] p-8 overflow-hidden group ${spanClass} ${className}`}
      style={{
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(11,61,58,0.08)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 20px 40px rgba(0,180,140,0.07)",
      }}
    >
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${TEAL.glow}, transparent 70%)` }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

function IconBadge({ icon: Icon, highlight = false }: IconBadgeProps) {
  return (
    <div
      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
      style={{ background: highlight ? "rgba(0,230,163,0.16)" : "rgba(11,61,58,0.06)" }}
    >
      <Icon size={24} color={highlight ? TEAL.accentDeep : TEAL.ink} />
    </div>
  );
}



// Vertical connected-flow item for the Responsibilities timeline.
function TimelineItem({ icon: Icon, title, desc, isLast = false }: TimelineItemProps) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-8 pb-16 last:pb-0">
      {!isLast && (
        <div
          className="absolute left-7 top-14 bottom-0 w-[2px]"
          style={{ background: "linear-gradient(to bottom, rgba(0,230,163,0.4), rgba(0,230,163,0.05))" }}
        />
      )}
      <div
        className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "rgba(0,230,163,0.12)", boxShadow: `0 0 24px ${TEAL.glow}` }}
      >
        <Icon size={22} color={TEAL.accent} />
      </div>
      <div className="pt-2">
        <h4 style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, fontSize: "26px", color: TEAL.ink }}>
          {title}
        </h4>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed" style={{ color: TEAL.inkSoft }}>
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   CONTENT
========================================================= */
const STATS = [
  { icon: GraduationCap, to: 100, suffix: "+", label: "Campuses" },
  { icon: Users, to: 500, suffix: "+", label: "Ambassadors" },
  { icon: Calendar, to: 50, suffix: "+", label: "Events" },
  { icon: TrendingUp, to: 10000, suffix: "+", label: "Students Reached" },
];

const RESPONSIBILITIES = [
  { icon: Flag, title: "Represent AyurGenX", desc: "Champion the brand at campus events, workshops and online communities." },
  { icon: Calendar, title: "Host Events & Workshops", desc: "Organize wellness talks, hackathon meetups and startup sessions for your peers." },
  { icon: Users, title: "Grow The Community", desc: "Onboard new members and keep your campus chapter active and engaged." },
  { icon: MessageSquare, title: "Share Feedback", desc: "Relay student insights back to the AyurGenX team to help shape future programs." },
  { icon: Handshake, title: "Collaborate With The Team", desc: "Work directly with mentors and founders on campus initiatives.", isLast: true },
];

const ELIGIBILITY = [
  { icon: GraduationCap, title: "Currently Enrolled", desc: "Pursuing an undergraduate or postgraduate degree at any recognized institution." },
  { icon: Sparkles, title: "Genuine Interest", desc: "Curious about healthcare, wellness or startup ecosystems." },
  { icon: Users, title: "Active On Campus", desc: "Involved in clubs, societies or student communities." },
  { icon: MessageSquare, title: "Strong Communicator", desc: "Comfortable speaking to groups and writing for social platforms." },
  { icon: Calendar, title: "Time Commitment", desc: "Available for at least 6 months of active participation." },
];

const COMMITMENT = [
  {
    icon: Calendar,
    title: "2–4 Hours / Week",
    desc: "A manageable weekly commitment that fits around your academic schedule.",
  },
  {
    icon: Users,
    title: "Monthly Meetups",
    desc: "Connect with mentors, founders and fellow ambassadors every month.",
  },
  {
    icon: GraduationCap,
    title: "Student Friendly",
    desc: "Designed to balance leadership experience with your college life.",
  },
];

const PERKS = [
  { icon: FileCheck, title: "Verified Achievement Certificates", desc: "Official recognition for every milestone you complete." , wheelLable : "Certificates"},
  { icon: Network, title: "Founder & Industry Networking", desc: "Direct access to founders, mentors and fellow ambassadors.", wheelLable : "Networking" },
  { icon: Flag, title: "Real Leadership Experience", desc: "Lead a real chapter with real responsibility.", wheelLable : "Leadership" },
  { icon: Briefcase, title: "Exclusive Internship Opportunities", desc: "Priority consideration for roles at AyurGenX.", wheelLable : "Internship" },
  { icon: Rocket, title: "Startup Ecosystem Exposure", desc: "See how an early-stage healthtech company actually runs.", wheelLable : "Startup" },
  { icon: Award, title: "Recognition & Personal Branding", desc: "Top ambassadors are featured and rewarded each season.", wheelLable : "Recognition" },
];

const APPLICATION_STEPS = [
  { icon: ClipboardCheck, title: "Apply Online", desc: "Submit your application with a few details about yourself." },
  { icon: PhoneCall, title: "Screening Call", desc: "A quick conversation to understand your goals and fit." },
  { icon: UserPlus, title: "Onboarding", desc: "Get access to resources, mentors and your campus toolkit." },
  { icon: Compass, title: "Start Your Journey", desc: "Launch your first event and begin building your chapter." },
];

const AMBASSADOR_LEVELS = [
  {
    level: "Level 1",
    name: "Rising Ambassador",
    target: "25 Community Joins",
    rewards: [
      "Campus Ambassador Certificate",
      "AyurGenX Stickers",
      "Community Recognition",
    ],
    extras: [
      "Certificate of Completion",
      "Official Recognition",
    ],
  },

  {
    level: "Level 2",
    name: "Growth Ambassador",
    target: "50 Community Joins",
    rewards: [
      "Certificate of Excellence",
      "AyurGenX Merchandise",
      "Priority Internship Consideration",
    ],
    extras: [
      "Higher Campus Visibility",
      "Early Internship Access",
    ],
  },

  {
    level: "Level 3",
    name: "Star Ambassador",
    target: "100 Community Joins",
    rewards: [
      "Star Ambassador Certificate",
      "Premium Merchandise",
      "Founder Interaction Session",
      "Fast-Track Internship Interview",
    ],
    extras: [
      "Direct Founder Access",
      "Priority Hiring Pipeline",
    ],
  },

  {
    level: "Level 4",
    name: "Elite Ambassador",
    target: "150+ Community Joins",
    rewards: [
      "Elite Ambassador Award",
      "Premium Merchandise Kit",
      "1-on-1 Founder Mentorship",
      "Guaranteed Internship Interview",
      "Featured on LinkedIn & Social Media",
    ],
    extras: [
      "Letter of Recommendation",
      "LinkedIn Recommendation",
      "Exclusive Merchandise",
      "Certificate of Completion",
    ],
  },
];

/* =========================================================
   PAGE
   Every section sits on the light teal field (TEAL.bg /
   bgSoft / bgTint — never dark). The one deliberate exception
   is the closing CTA, which uses TEAL.ink as a background for
   a cinematic finish. Flagged in the chat reply, not buried
   here — change it if you want the whole page light, no exceptions.
========================================================= */
function Ambassador() {
      const [activePerk, setActivePerk] = useState(0);
      const handleNextPerk = () => {
        setActivePerk((prev) => (prev + 1) % PERKS.length);
      };
      const [activeLevel, setActiveLevel] = useState(0);
  return (
    <>
      <main className="overflow-hidden" style={{ fontFamily: "'Space Grotesk', sans-serif", color: TEAL.ink, background: TEAL.bg }}>
        {/* ============ HERO ============ */}
        <section className="relative min-h-[85vh] overflow-hidden" style={{ background: `linear-gradient(180deg, ${TEAL.bgSoft} 0%, ${TEAL.bg} 100%)` }}>
          <GlowOrb className="top-[-200px] right-[-100px]" size={700} />
          <GlowOrb className="bottom-[-250px] left-[-100px]" color="rgba(0,181,137,0.12)" size={600} />

          {/* faint grid, tinted ink instead of white */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(11,61,58,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,61,58,0.5) 1px, transparent 1px)",
                backgroundSize: "70px 70px",
              }}
            />
          </div>

          <div className="relative max-w-7xl z-10 mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 grid lg:grid-cols-2 gap-12 items-center px-0 lg:px-0 pt-28 pb-14 lg:pt-32 lg:pb-16"
            >
              {/* LEFT */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-10 mt-4"
                  style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(11,61,58,0.1)", backdropFilter: "blur(10px)" }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{ background: TEAL.accent }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                  />
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "black",
                      fontWeight : 500,
                    }}
                  >
                    AyurGenX Campus Program
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 700,
                    fontSize: "clamp(48px, 6vw, 82px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    color: TEAL.ink,
                  }}
                >
                  Become The Face
                  <span
                    className="block"
                    style={{
                      background: `linear-gradient(135deg, ${TEAL.accent} 0%, ${TEAL.accentDeep} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Of Innovation
                  </span>
                  <span className="block">On Your Campus</span>
                </motion.h1>

                <motion.p variants={fadeUp} className="max-w-xl mt-10" style={{ fontSize: "20px", lineHeight: 1.8, color: TEAL.inkSoft }}>
                  Lead a new generation of student innovators building AI-powered wellness
                  communities and startup ecosystems across India's top campuses.
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap gap-5 mt-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 py-5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${TEAL.accent}, ${TEAL.accentDeep})`,
                      boxShadow: `0 0 40px ${TEAL.glow}`,
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    Apply Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 py-5 rounded-full"
                    style={{ border: `1.5px solid rgba(11,61,58,0.25)`, background: "rgba(255,255,255,0.5)", color: TEAL.ink, fontWeight: 600 }}
                  >
                    Explore Program
                  </motion.button>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-8"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.12em", color: TEAL.inkSoft }}
                >
                  500+ STUDENT LEADERS · 100+ CAMPUSES · NATIONWIDE
                </motion.p>
              </div>

              {/* RIGHT — floating frosted dashboard */}
              {/* RIGHT SIDE */}
              <div className="relative h-[500px] hidden lg:block mt-[78px]">

                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 rounded-[40px] overflow-hidden"
                  style={{
                    boxShadow: "0 30px 80px rgba(34,104,107,0.18)",
                  }}
                >
                  <img
                    src={heroimg}
                    alt="Campus Ambassador"
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(34,104,107,0.35), rgba(49,139,151,0.20))",
                      mixBlendMode: "multiply",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        
        {/* ============ STATS ============ */}
        <section
          className="relative py-28 px-6 overflow-hidden"
          style={{ background: TEAL.bgTint }}
        >
          <GlowOrb className="top-10 left-1/2 -translate-x-1/2" size={500} />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-7xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-center max-w-4xl mx-auto mb-16"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 400,
                fontSize: "clamp(42px,5vw,68px)",
                lineHeight: 0.95,
                color: TEAL.ink,
              }}
            >
              Building a Nationwide
              <span className="block">Student Community</span>
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                 whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(34,104,107,0.12)"
                  }}
                  transition={{ duration: 0.25 }}
                  className="rounded-[24px] p-7 text-center"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(34,104,107,0.07)",
                    boxShadow: "0 10px 24px rgba(34,104,107,0.06)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(0,230,163,0.12)" }}
                  >
                    <stat.icon size={14} color={TEAL.accentDeep} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 400,
                      fontSize: "clamp(38px,4vw,52px)",
                      lineHeight: 1,
                      color: TEAL.ink,
                    }}
                  >
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </h3>

                  <p
                    className="mt-3"
                    style={{
                      color: TEAL.inkSoft,
                      fontSize: "12px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============ WHY JOIN — BENTO GRID ============ */}
        <section
          className="relative py-32 px-6 overflow-hidden"
          style={{ background: TEAL.bg }}
        >
          <GlowOrb
            className="top-20 left-1/2 -translate-x-1/2"
            color="rgba(0,230,163,0.08)"
            size={500}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-6xl mx-auto"
          >
            {/* HEADING */}
            <div className="relative text-center">

              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                01
              </span>



        <motion.h2
          variants={fadeUp}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontWeight: 400,
            fontSize: "clamp(52px,5vw,72px)",
            lineHeight: 0.95,
            color: TEAL.ink,
          }}
        >
          Why Join Us
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(24px,3vw,36px)",
            lineHeight: 1.3,
            color: TEAL.ink,
          }}
        >
          Everything you gain as an
          <br />
          AyurGenX Campus Ambassador
        </motion.h3>

              <motion.p
                variants={fadeUp}
                className="max-w-2xl mx-auto mt-8"
                style={{
                  fontSize: "18px",
                  lineHeight: 1.8,
                  color: TEAL.inkSoft,
                }}
              >
                Join a nationwide community of student leaders,
                innovators and startup enthusiasts shaping the future
                of wellness and entrepreneurship across India's campuses.
              </motion.p>
            </div>

            {/* CHECKLIST */}
            <motion.div
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-x-20 gap-y-10 mt-24"
            >

              {[
                {
                  title: "Leadership Development",
                  desc: "Build communication, leadership and decision-making skills."
                },
                {
                  title: "Startup Ecosystem Exposure",
                  desc: "Collaborate with founders and gain startup experience."
                },
                {
                  title: "Professional Networking",
                  desc: "Connect with ambitious students and industry leaders."
                },
                {
                  title: "Career Opportunities",
                  desc: "Unlock internships and future opportunities."
                },
                {
                  title: "Founder Mentorship",
                  desc: "Learn directly from experienced founders and operators."
                },
                {
                  title: "Certificates & Recognition",
                  desc: "Earn certificates, rewards and campus recognition."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4"
                >

                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center mt-1"
                    style={{
                      background: "rgba(0,230,163,0.12)",
                    }}
                  >
                    <span
                      style={{
                        color: TEAL.accentDeep,
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                  </div>

                  <div>
                    <h4
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "30px",
                        color: TEAL.ink,
                        lineHeight: 1.1,
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="mt-2"
                      style={{
                        color: TEAL.inkSoft,
                        lineHeight: 1.8,
                        fontSize: "16px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ============ RESPONSIBILITIES — TIMELINE ============ */}
        <section
          className="relative py-32 px-6 overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, #F4FBF9 0%, #EEF8F5 100%)",
          }}
        >
          <GlowOrb
            className="bottom-0 right-0"
            color="rgba(0,230,163,0.05)"
            size={700}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-7xl mx-auto"
          >
            {/* 02 */}
            <span
              style={{
                position: "absolute",
                top: "-120px",
                left: "-20px",
                fontSize: "220px",
                fontWeight: 700,
                color: TEAL.accentDeep,
                opacity: 0.15,
                lineHeight: 1,
                pointerEvents: "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              02
            </span>

            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-start">

              {/* LEFT SIDE */}
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="mt-4 mb-16"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(42px,5vw,64px)",
                    lineHeight: 0.95,
                    color: TEAL.ink,
                  }}
                >
                  Your role on campus.
                </motion.h2>

                {RESPONSIBILITIES.map((item) => (
                  <TimelineItem key={item.title} {...item} />
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="sticky top-32">

                <div className="grid grid-cols-2 gap-8">

                  {/* TOP SMALL */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -6 }}
                    className="col-span-2 flex justify-center mt-8"
                  >
                   <div className="relative overflow-hidden rounded-[32px] w-[320px] h-[150px] mt-12">
                      <img
                        src={roleImg1}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,104,107,0.18), rgba(49,139,151,0.08))",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* BOTTOM LEFT */}
                  <motion.div
                    whileHover={{ scale: 1.04, y: -8 }}
                  >
                    <div className="relative overflow-hidden rounded-[32px] h-[220px] mt-12">
                      <img
                        src={roleImg3}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,104,107,0.18), rgba(49,139,151,0.08))",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* BOTTOM RIGHT */}
                  <motion.div
                    whileHover={{ scale: 1.04, y: -8 }}
                  >
                    <div className="relative overflow-hidden rounded-[32px] h-[220px] mt-12">
                      <img
                        src={roleImg4}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,104,107,0.18), rgba(49,139,151,0.08))",
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* BOTTOM SMALL */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -6 }}
                    className="col-span-2 flex justify-center"
                  >
                    <div className="relative overflow-hidden rounded-[32px] w-[320px] h-[170px] mt-12">
                      <img
                        src={roleImg5}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(34,104,107,0.18), rgba(49,139,151,0.08))",
                        }}
                      />
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ============ ELIGIBILITY — CHECKLIST ============ */}
        <section className="relative py-32 px-6 overflow-hidden" style={{ background: TEAL.bg }}>
          <GlowOrb className="bottom-0 right-[-150px]" color="rgba(0,230,163,0.07)" size={500} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-5xl mx-auto"
          >
                          <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                03
              </span>
            <motion.h2
              variants={fadeUp}
              className="text-center mb-16"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 800, fontSize: "clamp(36px,4.5vw,56px)", color: TEAL.ink }}
            >
              Check if you qualify.
            </motion.h2>
            <div className="grid lg:grid-cols-3 gap-6">

              {/* LARGE CARD */}
              <motion.div
                variants={fadeUp}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                className="lg:col-span-2 rounded-[32px] p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,252,251,0.78))",
                  border: "1px solid rgba(49,139,151,0.18)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 20px 40px rgba(34,104,107,0.06)",
                  borderLeft: "3px solid #318B97",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,230,163,0.10)" }}
                >
                  {React.createElement(ELIGIBILITY[0].icon, { size: 26, color: TEAL.ink })}
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "36px",
                    color: TEAL.ink,
                  }}
                >
                  {ELIGIBILITY[0].title}
                </h3>

                <p
                  className="mt-4 max-w-2xl"
                  style={{
                    color: TEAL.inkSoft,
                    fontSize: "18px",
                    lineHeight: 1.8,
                  }}
                >
                  {ELIGIBILITY[0].desc}
                </p>
              </motion.div>

              {/* SMALL CARD */}
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-[32px] p-8"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(34,104,107,0.08)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 16px 40px rgba(34,104,107,0.06)",
                  borderTop: "3px solid #318B97",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(0,230,163,0.10)" }}
                >
                  {React.createElement(ELIGIBILITY[1].icon, { size: 24, color: TEAL.ink })}
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "28px",
                    color: TEAL.ink,
                  }}
                >
                  {ELIGIBILITY[1].title}
                </h3>

                <p
                  className="mt-3"
                  style={{
                    color: TEAL.inkSoft,
                    lineHeight: 1.8,
                  }}
                >
                  {ELIGIBILITY[1].desc}
                </p>
              </motion.div>

              {/* BOTTOM CARDS */}
              {ELIGIBILITY.slice(2).map((item, index) => {

                const accentBorders = [
                  "#318B97", // teal
                  "#00E6A3", // mint
                  "#8FAAA6", // sage
                ];

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      scale: 1.01,
                    }}
                    className="rounded-[32px] p-8 transition-all"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(248,252,251,0.78))",
                      border: "1px solid rgba(49,139,151,0.18)",
                      borderBottom: `3px solid ${accentBorders[index]}`,
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 20px 40px rgba(34,104,107,0.06)",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: `${accentBorders[index]}15`,
                      }}
                    >
                      {React.createElement(item.icon, {
                        size: 24,
                        color: accentBorders[index],
                      })}
                    </div>

                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "28px",
                        color: TEAL.ink,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-3"
                      style={{
                        color: TEAL.inkSoft,
                        lineHeight: 1.8,
                      }}
                    >
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>
        

        {/* ============ PROGRAM COMMITMENT ============ */}

        <section
          className="relative py-28 px-6 overflow-hidden"
          style={{ background: TEAL.bgTint }}
        >
          <GlowOrb
            className="top-0 right-[-120px]"
            size={500}
            color="rgba(68,155,133,0.08)"
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-6xl mx-auto"
          >

              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                04
              </span>

            <motion.h2
              variants={fadeUp}
              className="text-center"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontWeight: 700,
                fontSize: "clamp(40px,5vw,60px)",
                color: TEAL.ink,
              }}
            >
              Program Commitment
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mt-6 mb-16"
              style={{
                color: TEAL.inkSoft,
                fontSize: "18px",
                lineHeight: 1.8,
              }}
            >
              A flexible commitment designed to help you grow without affecting your academics.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8">

              {COMMITMENT.map((item) => (

                <GlassCard key={item.title}>

                  <IconBadge icon={item.icon} highlight />

                  <h3
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "28px",
                      color: TEAL.ink,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-4"
                    style={{
                      color: TEAL.inkSoft,
                      lineHeight: 1.8,
                    }}
                  >
                    {item.desc}
                  </p>

                </GlassCard>

              ))}

            </div>

          </motion.div>

        </section>
        {/* ============ PERKS — BENTO ============ */}
        <section className="relative py-32 px-6 overflow-hidden" style={{ background: TEAL.bgTint }}>
          <GlowOrb className="top-0 left-[-100px]" size={550} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-7xl mx-auto"
          >
                                      <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                05
              </span>
            <motion.h2
              variants={fadeUp}
              className="text-center mb-16"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 800, fontSize: "clamp(36px,4.5vw,56px)", color: TEAL.ink }}
            >
              Perks worth the effort.
            </motion.h2>
            <div className="grid lg:grid-cols-[40%_60%] items-center gap-12 mt-20">
              {/* WHEEL */}
              <div className="relative flex items-center justify-center h-[500px]">

                <div
                  className="absolute w-[340px] h-[340px] rounded-full"
                  style={{
                    border: `2px solid rgba(49,139,151,0.12)`,
                  }}
                />

                {PERKS.map((perk, i) => {
                  const angle = (360 / PERKS.length) * i;
                  const radius = 170;
                  const isActive = i === activePerk;

                  const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                  const y = Math.sin((angle - 90) * Math.PI / 180) * radius;

                  return (
                    <motion.button
                      key={perk.title}
                      onClick={() => setActivePerk(i)}
                      className="absolute"
                      style={{
                        left: "50%",
                        top: "50%",
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div
                        className="px-5 py-3 rounded-full flex items-center gap-2"
                        style={{
                          background: isActive
                            ? `linear-gradient(135deg, ${TEAL.accent}, ${TEAL.accentDeep})`
                            : "rgba(255,255,255,0.85)",

                          color: isActive ? "white" : TEAL.ink,

                          boxShadow: isActive
                          ? "0 0 40px rgba(68,155,133,0.35)"
                          : "0 10px 20px rgba(0,0,0,0.05)"
                        }}
                      >
                        <span>{perk.wheelLable}</span>
                      </div>
                    </motion.button>
                  );
                })}

                {/* CENTER */}
                <div
                  className="absolute w-[140px] h-[140px] rounded-full flex items-center justify-center"
                  style={{
                    background: "white",
                    boxShadow: "0 25px 60px rgba(34,104,107,0.12)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      letterSpacing: "0.15em",
                      color: TEAL.ink,
                    }}
                  >
                    AYURGENX
                  </span>
                </div>

              </div>

              {/* ACTIVE CONTENT */}

              <div className="relative min-h-[320px] flex items-center">

                <AnimatePresence mode="wait">

                  <motion.div
                    key={PERKS[activePerk].title}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.45 }}
                    className="w-full"
                  >

                    <div
                      className="mb-6"
                      style={{
                        color: TEAL.accentDeep,
                        fontSize: "14px",
                        fontWeight: 600,
                        letterSpacing: "0.25em",
                        textTransform: "uppercase",
                      }}
                    >
                      0{activePerk + 1} / 06
                    </div>
                        
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "clamp(48px,4vw,72px)",
                        lineHeight: 0.95,
                        color: TEAL.ink,
                      }}
                    >
                      {PERKS[activePerk].title}
                    </h3>

                    <p
                      className="mt-8"
                      style={{
                        color: TEAL.inkSoft,
                        fontSize: "20px",
                        lineHeight: 1.9,
                        maxWidth: "520px",
                      }}
                    >
                      {PERKS[activePerk].desc}
                    </p>
                    <motion.button
                    onClick={handleNextPerk}
                    whileHover={{ x: 6 }}
                    whileTap={{ scale: 0.96 }}
                    className="mt-10 flex items-center gap-3"
                    style={{
                      color: TEAL.accentDeep,
                      fontWeight: 600,
                      fontSize: "18px",
                    }}
                  >
                    {activePerk === PERKS.length - 1
                      ? "Back To Start"
                      : "Next Perk"}

                    <motion.div
                    animate={{
                      x: [0, 6, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.div>
                  </motion.button>
                  </motion.div>

                </AnimatePresence>

              </div>

            </div>
          </motion.div>
        </section>

        <section
          className="relative py-32 px-6 overflow-hidden"
          style={{ background: TEAL.bg }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
              <span
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 2.2,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                06
              </span>
            <motion.h2
              variants={fadeUp}
              className="text-center"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(42px,5vw,60px)",
                color: TEAL.ink,
              }}
            >
              Ambassador Journey
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mt-6"
              style={{
                color: TEAL.inkSoft,
                fontSize: "18px",
              }}
            >
              Every milestone unlocks new rewards and opportunities.
            </motion.p>

            <div className="grid lg:grid-cols-[38%_62%] gap-20 mt-20">

              {/* LEFT */}

              <div className="space-y-5">

                {AMBASSADOR_LEVELS.map((item, i) => (

                  <motion.button
                    key={item.name}
                    onClick={() => setActiveLevel(i)}
                    whileHover={{ x: 8 }}
                    className="w-full text-left rounded-[24px] p-6"
                    style={{
                      background:
                        activeLevel === i
                          ? `linear-gradient(135deg, ${TEAL.accent}, ${TEAL.accentDeep})`
                          : "rgba(255,255,255,0.9)",

                      color: activeLevel === i ? "white" : TEAL.ink,

                      boxShadow:
                        activeLevel === i
                          ? "0 20px 40px rgba(68,155,133,0.25)"
                          : "0 10px 25px rgba(34,104,107,0.06)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        opacity: 0.8,
                      }}
                    >
                      {item.level}
                    </p>

                    <h3
                      className="mt-2"
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "30px",
                      }}
                    >
                      {item.name}
                    </h3>

                  </motion.button>

                ))}

              </div>

              {/* RIGHT */}

              <AnimatePresence mode="wait">

                <motion.div
                  key={AMBASSADOR_LEVELS[activeLevel].name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35 }}
                >

                  <div
                    style={{
                      color: TEAL.accentDeep,
                      letterSpacing: "0.18em",
                      fontSize: "13px",
                      textTransform: "uppercase",
                    }}
                  >
                    Target
                  </div>

                  <h2
                    className="mt-3"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "58px",
                      color: TEAL.ink,
                    }}
                  >
                    {AMBASSADOR_LEVELS[activeLevel].target}
                  </h2>

                    
                  <div className="mt-10 space-y-5">

                    {/* REWARDS */}
                    {AMBASSADOR_LEVELS[activeLevel].rewards.map((reward) => (

                      <div
                        key={reward}
                        className="flex gap-4 items-center"
                      >
                        <CheckCircle2
                          size={22}
                          color={TEAL.accent}
                        />

                        <span
                          style={{
                            fontSize: "20px",
                            color: TEAL.inkSoft,
                          }}
                        >
                          {reward}
                        </span>

                      </div>

                    ))}

                    {/* EXTRA REWARDS */}
                    {AMBASSADOR_LEVELS[activeLevel].extras.length > 0 && (

                      <div
                        className="pt-8 mt-10"
                        style={{
                          borderTop: "1px solid rgba(49,139,151,0.15)",
                        }}
                      >

                        <p
                          style={{
                            color: TEAL.accentDeep,
                            letterSpacing: "0.18em",
                            fontSize: "13px",
                            textTransform: "uppercase",
                            marginBottom: "20px",
                            fontWeight: 600,
                          }}
                        >
                          Additional Benefits
                        </p>

                        <div className="space-y-4">

                          {AMBASSADOR_LEVELS[activeLevel].extras.map((item) => (

                            <div
                              key={item}
                              className="flex gap-4 items-center"
                            >
                              <Sparkles
                                size={18}
                                color={TEAL.accentDeep}
                              />

                              <span
                                style={{
                                  fontSize: "18px",
                                  color: TEAL.inkSoft,
                                }}
                              >
                                {item}
                              </span>

                            </div>

                          ))}

                        </div>

                      </div>

                    )}

                    {/* TOP PERFORMER AWARDS (Only Elite) */}
                    {activeLevel === 3 && (

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pt-8 mt-10"
                        style={{
                          borderTop: "1px solid rgba(49,139,151,0.15)",
                        }}
                      >

                        <p
                          style={{
                            color: TEAL.accentDeep,
                            letterSpacing: "0.18em",
                            fontSize: "13px",
                            textTransform: "uppercase",
                            marginBottom: "20px",
                            fontWeight: 600,
                          }}
                        >
                          Top Performer Awards
                        </p>

                        <div className="space-y-5">

                          <div>
                            <h4
                              style={{
                                color: TEAL.ink,
                                fontWeight: 700,
                                fontSize: "18px",
                              }}
                            >
                              🥇 First Place
                            </h4>

                            <p
                              style={{
                                color: TEAL.inkSoft,
                                marginTop: "6px",
                                lineHeight: 1.7,
                              }}
                            >
                              LinkedIn Premium (3 Months)<br />
                              Elite Ambassador Recognition<br />
                              Founder Mentorship Session
                            </p>
                          </div>

                          <div>
                            <h4
                              style={{
                                color: TEAL.ink,
                                fontWeight: 700,
                                fontSize: "18px",
                              }}
                            >
                              🥈 Second Place
                            </h4>

                            <p
                              style={{
                                color: TEAL.inkSoft,
                                marginTop: "6px",
                                lineHeight: 1.7,
                              }}
                            >
                              ChatGPT Plus (1 Month)<br />
                              Premium Merchandise Kit
                            </p>
                          </div>

                          <div>
                            <h4
                              style={{
                                color: TEAL.ink,
                                fontWeight: 700,
                                fontSize: "18px",
                              }}
                            >
                              🥉 Third Place
                            </h4>

                            <p
                              style={{
                                color: TEAL.inkSoft,
                                marginTop: "6px",
                                lineHeight: 1.7,
                              }}
                            >
                              Exclusive AyurGenX Merchandise Bundle
                            </p>
                          </div>

                        </div>

                      </motion.div>

                    )}

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </motion.div>

        </section>

        
        {/* ============ APPLICATION PROCESS — STEPPER ============ */}
        <section className="relative py-32 px-6" style={{ background: TEAL.bg }}>
          <GlowOrb className="top-[-100px] right-[-100px]" size={500} />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 max-w-6xl mx-auto"
          >
              <span
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "-120px",
                  transform: "translateX(-50%)",
                  fontSize: "220px",
                  fontWeight: 700,
                  color: TEAL.accentDeep,
                  opacity: 0.15,
                  lineHeight: 1,
                  pointerEvents: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                07
              </span>
            <motion.h2
              variants={fadeUp}
              className="text-left mb-20"
              style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 800, fontSize: "clamp(36px,4.5vw,56px)", color: TEAL.ink }}
            >
              Four steps to get started.
            </motion.h2>
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="hidden lg:block absolute top-10 left-0 right-0 h-[2px] origin-left"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(68,155,133,0.08), rgba(68,155,133,0.45), rgba(68,155,133,0.08))",
                }}
              />
              {APPLICATION_STEPS.map((step, i) => (
               <motion.div
                key={step.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                className="relative"
              >
                  <div
                    className="relative z-10 w-20 h-20 rounded-full flex items-center justify-center mb-8"
                    style={{
                    background:
                      "linear-gradient(to bottom, rgba(68,155,133,0.28), rgba(68,155,133,0.05))",
                    boxShadow:
                      "0 0 35px rgba(68,155,133,0.18), 0 10px 30px rgba(68,155,133,0.10)",
                  }}
                  >
                    <motion.div
                        animate={{
                          scale: [1, 1.12, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                        className="absolute inset-0 rounded-full"
                        style={{
                          border: "1px solid rgba(68,155,133,0.22)",
                        }}
                      />
                      <step.icon size={28} color={TEAL.ink} />
                  </div>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.16em", color: TEAL.accentDeep }}>
                    STEP 0{i + 1}
                  </p>
                  <h4 className="mt-2" style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 700, fontSize: "26px", color: TEAL.ink }}>{step.title}</h4>
                  <p className="mt-4 text-[16px] leading-relaxed" style={{ color: TEAL.inkSoft }}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ============ CTA — CINEMATIC CLOSE ============
            Intentional exception to "light everywhere": uses TEAL.ink
            as a background for contrast. Swap to TEAL.bgTint below if
            you want zero dark sections on the page. */}
<section
  className="relative py-44 px-6 overflow-hidden"
  style={{
    background: `linear-gradient(180deg, ${TEAL.ink} 0%, #0B3437 100%)`,
  }}
>
  {/* BACKGROUND GLOW */}
  <GlowOrb
    className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    size={900}
    color="rgba(68,155,133,0.18)"
  />

  {/* BIG WATERMARK */}
  <span
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    style={{
      fontSize: "320px",
      fontWeight: 800,
      color: "white",
      opacity: 0.04,
      lineHeight: 1,
      pointerEvents: "none",
      fontFamily: "'Space Grotesk', sans-serif",
    }}
  >
    2026
  </span>

  {/* FLOATING DOTS */}
  {[
    { top: "15%", left: "10%", d: 7 },
    { top: "70%", left: "18%", d: 9 },
    { top: "25%", left: "85%", d: 8 },
    { top: "80%", left: "78%", d: 6 },
    { top: "45%", left: "5%", d: 10 },
    { top: "10%", left: "55%", d: 7.5 },
  ].map((p, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 rounded-full"
      style={{
        top: p.top,
        left: p.left,
        background: TEAL.accent,
        opacity: 0.4,
      }}
      animate={{
        y: [0, -25, 0],
        opacity: [0.2, 0.8, 0.2],
      }}
      transition={{
        duration: p.d,
        repeat: Infinity,
      }}
    />
  ))}

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl mx-auto text-center"
  >

    {/* BADGE */}
    <motion.div
      variants={fadeUp}
      className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Sparkles size={14} color="#FFFFFF" />
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          letterSpacing: "0.12em",
          fontSize: "12px",
          color: "#FFFFFF",
        }}
      >
        APPLICATIONS OPEN NOW
      </span>
    </motion.div>

    {/* HEADING */}
    <motion.h2
      variants={fadeUp}
      style={{
        fontFamily: "'DM Serif Display', serif",
        fontWeight: 800,
        fontSize: "clamp(52px,7vw,92px)",
        lineHeight: 0.95,
        color: "#FFFFFF",
      }}
    >
      Your Campus Needs
      <span
        className="block"
        style={{
          background: `linear-gradient(135deg, ${TEAL.accent}, #97D8C4)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        A Leader.
      </span>
    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      variants={fadeUp}
      className="mt-10 max-w-2xl mx-auto"
      style={{
        fontSize: "20px",
        lineHeight: 1.9,
        color: "rgba(255,255,255,0.75)",
      }}
    >
      Step forward. Build communities, launch initiatives,
      connect with founders and create an impact that lasts
      long after graduation.
    </motion.p>

    {/* BUTTON */}
    <motion.div variants={fadeUp} className="mt-14">
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="inline-flex items-center gap-3 px-10 py-5 rounded-full"
        style={{
          background: `linear-gradient(135deg, ${TEAL.accent}, ${TEAL.accentDeep})`,
          boxShadow: "0 0 60px rgba(68,155,133,0.35)",
          color: "#FFFFFF",
          fontWeight: 700,
          fontSize: "18px",
        }}
      >
        Apply Now
        <ArrowRight size={20} />
      </motion.button>
    </motion.div>

    {/* STATS */}
    <motion.div
      variants={fadeUp}
      className="flex flex-wrap justify-center gap-8 mt-14"
    >
      {[
        "500+ Ambassadors",
        "100+ Campuses",
        "50+ Events",
        "4.9★ Rating",
      ].map((item) => (
        <div
          key={item}
          style={{
            color: "rgba(255,255,255,0.7)",
            fontFamily: "'IBM Plex Mono', monospace",
            letterSpacing: "0.08em",
            fontSize: "13px",
          }}
        >
          {item}
        </div>
      ))}
    </motion.div>

  </motion.div>
</section>
      </main>
    </>
  );
}

export default Ambassador;