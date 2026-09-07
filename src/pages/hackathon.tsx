import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  HeartPulse,
  MessageCircleQuestion,
  Sparkles,
  Layers,
  Users,
  FileCode2,
  Rocket,
  UserPlus,
  ClipboardCheck,
  Hammer,
  Presentation,
  Trophy,
  Github,
  FileText,
  Video,
  Boxes,
} from "lucide-react";

import heroBg3 from "../image/hackathon/hero-bg3.jpg";
import ctaBg from "../image/hackathon/cta-bg.jpg";
import { useState, useEffect, useRef } from "react";

/* =========================================================
   DESIGN TOKENS — same sage / cream / gold system as Home
   and Ambassador. Green-on-black swapped for sage-on-cream.
========================================================= */
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
};

const NAV_LINKS = [
  { label: "Overview",     id: "overview"     },
  { label: "Challenges",   id: "tracks"       },
  { label: "Builder Program", id: "prizes"    },
  { label: "Timeline",     id: "timeline"     },
  { label: "Deliverables", id: "deliverables" },
  { label: "Judging",      id: "rules"        },
  { label: "FAQ",          id: "faq"          },
];

const Hackathon = () => {

  const tracks = [
    { title: "AI Health Assistant", icon: <Brain size={24} />, desc: "Build a RAG / LLM-based health information assistant for women's wellness.", accentStyle: { borderLeft: `2px solid ${T.accentDeep}` }, iconBg: "rgba(74,107,83,0.10)", iconColor: T.accentDeep, colSpan: "md:col-span-2", bg: T.bgTint },
    { title: "Women's Health Assessment", icon: <HeartPulse size={22} />, desc: "An AI-powered assessment engine with a working backend.", accentStyle: { borderTop: `2px solid ${T.accentDeep}` }, iconBg: "rgba(74,107,83,0.08)", iconColor: T.inkFaint, colSpan: "", bg: "rgba(74,107,83,0.05)" },
    { title: "Personalization Engine", icon: <Sparkles size={22} />, desc: "Personalized health-content recommendation system.", accentStyle: { borderRight: `2px solid ${T.gold}` }, iconBg: "rgba(212,184,92,0.12)", iconColor: T.goldDeep, colSpan: "", bg: "rgba(212,184,92,0.06)" },
    { title: "Community Backend", icon: <Users size={22} />, desc: "APIs for users, challenges, events and engagement.", accentStyle: { borderBottom: `2px solid ${T.accentDeep}` }, iconBg: "rgba(74,107,83,0.08)", iconColor: T.accentDeep, colSpan: "", bg: T.bgTint },
    { title: "Anonymous Q&A", icon: <MessageCircleQuestion size={22} />, desc: "A secure, anonymous health-question system.", accentStyle: { borderLeft: `2px solid ${T.inkFaint}` }, iconBg: "rgba(85,102,90,0.08)", iconColor: T.inkSoft, colSpan: "", bg: "rgba(255,255,255,0.6)" },
    { title: "AI Safety Layer", icon: <ShieldCheck size={22} />, desc: "Misinformation and risk detection with escalation logic.", accentStyle: { borderTop: `2px solid ${T.gold}` }, iconBg: "rgba(212,184,92,0.1)", iconColor: T.goldDeep, colSpan: "md:col-span-2", bg: "rgba(212,184,92,0.05)" },
  ];

  const deliverables = [
    { n: "01", icon: <Github size={20} />, title: "GitHub Repository", desc: "Clean, documented source code with setup instructions.", featured: true },
    { n: "02", icon: <Rocket size={20} />, title: "Working Demo", desc: "A deployed, functioning demonstration of your solution." },
    { n: "03", icon: <FileText size={20} />, title: "API Documentation", desc: "Clear documentation for every endpoint you build." },
    { n: "04", icon: <Boxes size={20} />, title: "Architecture Diagram", desc: "A visual breakdown of how your system fits together." },
    { n: "05", icon: <FileCode2 size={20} />, title: "README", desc: "Setup, usage and design decisions, written for a stranger." },
    { n: "06", icon: <Video size={20} />, title: "Demo Video", desc: "A tight 3–5 minute walkthrough of your build." },
  ];

  const timeline = [
    { icon: <UserPlus size={20} />,   phase: "Day 1",    label: "Kickoff & Problem Understanding", note: "90-min session · teams pick their challenge", desc: "AyurGenX intro, the women's healthcare problem, technical architecture, and problem statement reveal." },
    { icon: <Layers size={20} />,     phase: "Day 2–3",  label: "Architecture & Initial Build",     note: "Design before you code", desc: "Teams lock in their architecture and start implementation using the provided Developer Kit." },
    { icon: <ClipboardCheck size={20} />, phase: "Day 4", label: "Mentor Checkpoint",               note: "Progress review", desc: "Each team presents architecture, current progress and technical blockers to their mentor." },
    { icon: <Hammer size={20} />,     phase: "Day 5–8",  label: "Development Sprint",               note: "Build, test, iterate", desc: "The core build phase — backend, AI, and API development take priority over frontend polish." },
    { icon: <ClipboardCheck size={20} />, phase: "Day 9", label: "Testing & Deployment",             note: "Get it running end-to-end", desc: "Final testing pass and deployment before submissions close." },
    { icon: <Presentation size={20} />, phase: "Day 10", label: "Submission & Demo Day",            note: "Judging & awards", desc: "Final demos, jury discussion, panel session, results and awards — live." },
  ];

  const judging = [
    { label: "Technical Implementation", weight: 25 },
    { label: "Backend / API Architecture", weight: 20 },
    { label: "AI Implementation", weight: 20 },
    { label: "Women's Healthcare Relevance", weight: 15 },
    { label: "Scalability & Security", weight: 10 },
    { label: "UX / Integration", weight: 5 },
    { label: "Documentation", weight: 5 },
  ];

  const faqs = [
    { q: "Who can participate?", a: "Engineering, AI/ML, healthcare and design students — solo or in teams." },
    { q: "What's the format?", a: "A 10-day technical buildathon focused on backend, APIs and AI — not just frontend demos." },
    { q: "Do I need a finished idea to apply?", a: "No. You'll pick from six defined problem statements once selected — see the Challenges section." },
    { q: "What happens after the event ends?", a: "Top teams are invited into the AyurGenX Builder Program for product refinement, integration discussions, and internship opportunities." },
  ];

  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const els = NAV_LINKS.map((l) => document.getElementById(l.id)).filter((el): el is HTMLElement => el !== null);
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 116, behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <main style={{ backgroundColor: T.bg, color: T.ink, fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>

      <style>{`
        .nav-inner { display: flex; align-items: center; gap: 2px; padding: 0 16px; flex-shrink: 0; }
        .nav-item { font-size: 10px; letter-spacing: 0.18em; padding: 6px 12px; }
        @media (max-width: 768px) {
          .nav-inner { justify-content: space-between; width: 100%; padding: 0 6px; gap: 1px; }
          .nav-item { font-size: clamp(7px, 2.2vw, 9px); letter-spacing: 0.04em; padding: 4px 4px; flex: 1; justify-content: center; }
        }
      `}</style>

      {/* ── SECTION NAV ──────────────────────────────────────── */}
      <div
        style={{
          position: "fixed", top: "72px", left: 0, right: 0, zIndex: 49,
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
          height: "44px", background: "rgba(249,249,246,0.95)",
          borderTop: `1px solid ${T.border}`, borderBottom: `1px solid ${T.border}`,
          backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
        }}
      >
        <div className="nav-inner">
          {NAV_LINKS.map(({ label, id }) => {
            const isActive = activeId === id;
            return (
              <div
                key={id}
                onClick={() => scrollToSection(id)}
                className="nav-item"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  borderRadius: "4px",
                  color: isActive ? T.accentDeep : T.inkFaint,
                  borderBottom: isActive ? `1px solid ${T.accentDeep}` : "1px solid transparent",
                  transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                  whiteSpace: "nowrap", userSelect: "none",
                  height: "100%", display: "flex", alignItems: "center",
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = T.ink; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = T.inkFaint; }}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg3} alt="hero" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(249,249,246,0.55) 0%, rgba(249,249,246,0.88) 70%, #F9F9F6 100%)" }} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "min(700px, 100vw)", height: "min(700px, 100vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,107,83,0.10) 0%, transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto text-center w-full z-10" style={{ paddingTop: "116px" }}>
          <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8" style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(20px)", border: `1px solid ${T.border}` }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: T.accentDeep, boxShadow: `0 0 8px ${T.accentDeep}`, animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.24em", color: T.inkFaint }}>
                AYURGENX WOMEN'S HEALTH AI BUILDATHON
              </span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 8vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: T.ink }}>
              Build AI for
              <span className="block" style={{ background: `linear-gradient(135deg, ${T.accentDeep} 20%, ${T.gold} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Women's Healthcare
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 2.5vw, 22px)", lineHeight: 1.4, fontWeight: 500, letterSpacing: "-0.02em", color: T.inkSoft }}>
              How can AI and technology improve preventive and personalized women's healthcare
              for young adults? A 10-day technical buildathon — backend, APIs and AI first.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-10" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "16px", color: T.inkFaint }}>
              {["10 Days", "Team Size 2-5", "6 Problem Statements", "Hybrid Event"].map((m, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span style={{ color: T.ink, fontWeight: 600 }}>{m}</span>
                  {i < 3 && <span style={{ color: T.accentDeep }}>·</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="px-8 py-4 rounded-full font-semibold"
                style={{ background: T.accentDeep, color: "#FFFFFF", fontSize: "14px", boxShadow: "0 0 32px rgba(12,108,87,0.3)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(12,108,87,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(12,108,87,0.3)"; }}
              >
                Register Your Team
              </a>
              <a
                href="#tracks"
                onClick={(e) => { e.preventDefault(); scrollToSection("tracks"); }}
                className="px-8 py-4 rounded-full font-medium"
                style={{ background: "rgba(255,255,255,0.7)", color: T.ink, border: `1px solid ${T.border}`, fontSize: "14px", backdropFilter: "blur(12px)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(255,255,255,0.95)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.7)"; }}
              >
                Explore Challenges
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section id="overview" className="relative py-20 md:py-32 px-4 md:px-6" style={{ background: T.bg }}>
        <div className="max-w-5xl mx-auto mb-12 md:mb-20" style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${T.accentDeep}40, transparent)` }} />
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4 uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.3em", color: T.accentDeep }}>
            About the Event
          </p>
          <h2 className="mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(32px, 6vw, 68px)", letterSpacing: "-0.03em", lineHeight: 1.05, color: T.ink }}>
            Not Just a Hackathon.
            <span className="block italic" style={{ color: T.inkFaint }}>A Talent Pipeline.</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: T.inkSoft, fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75 }}>
            Engineering, AI/ML, healthcare and design students come together to build real
            backend and AI solutions for women's healthcare — not throwaway demos. The best
            teams go on to refine their product with AyurGenX and enter our Builder Program.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-12 md:mt-20" style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${T.accentDeep}20, transparent)` }} />
      </section>

      {/* ── TRACKS / CHALLENGES ──────────────────────────────── */}
      <section id="tracks" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bg }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              Problem Statements
            </p>
            <p className="mt-3 max-w-xl" style={{ color: T.inkSoft, fontSize: "15px", lineHeight: 1.7 }}>
              Priority is backend, AI and API development — the frontend only needs to demonstrate the solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[20px] p-7 md:p-8 relative overflow-hidden ${track.colSpan}`}
                style={{ background: track.bg, border: `1px solid ${T.border}`, minHeight: "160px", ...track.accentStyle }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: track.iconBg, color: track.iconColor }}>
                  {track.icon}
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: index === 0 || index === 5 ? "24px" : "20px", color: T.ink, marginBottom: "10px" }}>
                  {track.title}
                </h3>
                <p style={{ color: T.inkSoft, fontSize: "14px", lineHeight: 1.7 }}>{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDER PROGRAM / OUTCOMES ───────────────────────── */}
      <section id="prizes" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bg }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 md:mb-20">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              AyurGenX Builder Program
            </p>
            <p className="mt-3 max-w-xl" style={{ color: T.inkSoft, fontSize: "15px", lineHeight: 1.7 }}>
              This doesn't end when winners are announced. Your solution can become the product.
            </p>
          </div>

          {/* Funnel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-end mb-16">

            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[24px] p-8 text-center order-2 md:order-1" style={{ background: T.bgTint, border: `1px solid ${T.border}` }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: T.inkFaint, marginBottom: "16px" }}>TOP 10</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "34px", color: T.accentDeep, lineHeight: 1, marginBottom: "12px" }}>Technical Review</h3>
              <p style={{ color: T.inkSoft, fontSize: "14px" }}>Every top-10 team gets a full technical review from the AyurGenX team.</p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[32px] p-10 text-center relative overflow-hidden order-1 md:order-2" style={{ background: `linear-gradient(160deg, ${T.bgTint} 0%, #FFFFFF 100%)`, border: `1px solid ${T.accentDeep}40`, boxShadow: "0 0 60px rgba(12,108,87,0.10)", transform: "translateY(-12px)" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: T.accentDeep, marginBottom: "16px" }}>TOP 5</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(38px, 6vw, 52px)", color: T.ink, lineHeight: 1, marginBottom: "12px" }}>Product Refinement</h3>
              <p style={{ color: T.inkSoft, fontSize: "14px" }}>Work directly with the AyurGenX team to shape your solution into something real.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[24px] p-8 text-center order-3" style={{ background: "rgba(212,184,92,0.08)", border: `1px solid ${T.gold}40` }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: T.goldDeep, marginBottom: "16px" }}>TOP 3</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "30px", color: T.goldDeep, lineHeight: 1.15, marginBottom: "12px" }}>Integration Discussion</h3>
              <p style={{ color: T.inkSoft, fontSize: "14px" }}>Selected participants move into internship and project opportunities.</p>
            </motion.div>
          </div>

          {/* Pipeline strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", letterSpacing: "0.08em" }}>
            {["Hackathon", "Technical Talent", "Best Solutions", "Product Refinement", "AyurGenX Prototype", "Potential Integration"].map((step, i, arr) => (
              <span key={step} className="flex items-center gap-2 md:gap-3">
                <span className="px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,0.9)", border: `1px solid ${T.border}`, color: T.ink }}>
                  {step}
                </span>
                {i < arr.length - 1 && <span style={{ color: T.accentDeep }}>→</span>}
              </span>
            ))}
          </div>

          {/* Perks */}
          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {["Certificate", "LinkedIn Recommendation", "AyurGenX Recognition", "Merchandise", "Internship Consideration", "Best Campus Partner Award"].map((perk) => (
              <div
                key={perk}
                className="px-4 py-2 rounded-full"
                style={{ background: "rgba(74,107,83,0.08)", border: `1px solid ${T.accentDeep}25`, color: T.ink, fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px" }}
              >
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section id="timeline" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bgTint }}>
        <div className="max-w-4xl mx-auto">

          <div className="mb-16 md:mb-24">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              10-Day Schedule
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-[1px]" style={{ background: `linear-gradient(180deg, ${T.accentDeep} 0%, ${T.gold}80 60%, ${T.accentDeep}10 100%)` }} />

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-6 md:gap-8 items-start group"
                >
                  <div
                    className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "#FFFFFF", border: `1px solid ${T.accentDeep}50`, boxShadow: "0 4px 14px rgba(28,51,34,0.08)", color: T.accentDeep }}
                  >
                    {item.icon}
                  </div>

                  <div
                    className="flex-1 relative p-6 md:p-8 rounded-[18px] transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.75)", border: `1px solid ${T.border}` }}
                  >
                    <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.25em", color: T.accentDeep, marginBottom: "10px", textTransform: "uppercase" }}>
                      {item.phase} — {item.note}
                    </p>
                    <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(20px, 3vw, 26px)", color: T.ink, marginBottom: "8px", lineHeight: 1.15 }}>
                      {item.label}
                    </h3>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: T.inkSoft, lineHeight: 1.7 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ─────────────────────────────────────── */}
      <section id="deliverables" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              Mandatory Deliverables
            </p>
            <p className="mt-3 max-w-xl" style={{ color: T.inkSoft, fontSize: "15px", lineHeight: 1.7 }}>
              Bonus points for Docker, unit testing, CI/CD, security and clean documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {deliverables.map((d) => (
              <motion.div
                key={d.n}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[20px] p-7 md:p-8 ${d.featured ? "lg:row-span-2" : ""}`}
                style={{
                  background: d.featured ? T.bgTint : "rgba(255,255,255,0.85)",
                  border: `1px solid ${T.border}`,
                  borderLeft: d.featured ? `2px solid ${T.accentDeep}` : `1px solid ${T.border}`,
                }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(74,107,83,0.1)", color: T.accentDeep }}>
                  {d.icon}
                </div>
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: T.accentDeep }}>{d.n}</span>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: d.featured ? "clamp(22px, 3vw, 28px)" : "20px", color: T.ink, margin: "10px 0 10px" }}>
                  {d.title}
                </h3>
                <p style={{ color: T.inkSoft, fontSize: d.featured ? "15px" : "14px", lineHeight: 1.75 }}>{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JUDGING ──────────────────────────────────────────── */}
      <section id="rules" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bgTint }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <Trophy size={36} style={{ color: T.accentDeep, marginBottom: "20px" }} />
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              Two-Stage Judging
            </p>
            <p className="mt-3 max-w-xl" style={{ color: T.inkSoft, fontSize: "15px", lineHeight: 1.7 }}>
              Stage 1 screens every submission and shortlists ~10 teams. Stage 2 is a live final demo to the jury.
            </p>
          </div>

          <div
            className="rounded-[28px] overflow-hidden"
            style={{ background: "#FFFFFF", border: `1px solid ${T.border}`, boxShadow: "0 16px 40px rgba(28,51,34,0.05)" }}
          >
            {judging.map((row, i) => (
              <div
                key={row.label}
                className="flex items-center gap-6 px-6 md:px-8 py-5 md:py-6"
                style={{ borderBottom: i < judging.length - 1 ? `1px solid ${T.border}` : "none" }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px", color: T.accentDeep, fontWeight: 700, width: "48px" }}>
                  {row.weight}%
                </span>
                <div className="flex-1">
                  <p style={{ color: T.ink, fontSize: "15px", fontWeight: 500, marginBottom: "8px" }}>{row.label}</p>
                  <div className="h-[6px] rounded-full" style={{ background: T.bgTint }}>
                    <div className="h-full rounded-full" style={{ width: `${row.weight * 4}%`, background: `linear-gradient(90deg, ${T.accentDeep}, ${T.gold})` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 px-4 md:px-6" style={{ background: T.bg }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(24px, 4.4vw, 44px)", letterSpacing: "0.1em", color: T.ink, fontWeight: 700 }}>
              FAQ
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer"
                style={{ background: "rgba(255,255,255,0.85)", border: `1px solid ${T.border}`, transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = `${T.accentDeep}40`; e.currentTarget.style.boxShadow = "0 10px 30px rgba(28,51,34,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = T.border; e.currentTarget.style.boxShadow = "none"; }}
              >
                <summary className="list-none flex justify-between items-center px-5 md:px-7 py-5 md:py-6 cursor-pointer" style={{ color: T.ink, fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 500 }}>
                  {faq.q}
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "20px", color: T.accentDeep, transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)", display: "inline-block", flexShrink: 0, marginLeft: "16px" }} className="group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-7 pb-5 md:pb-6" style={{ borderTop: `1px solid ${T.border}` }}>
                  <p style={{ color: T.inkSoft, fontSize: "15px", lineHeight: 1.75, paddingTop: "14px" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: T.bg }}>
        <div className="absolute inset-0">
          <img src={ctaBg} alt="cta" className="w-full h-full object-cover" style={{ opacity: 0.1 }} />
        </div>
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 50% 50%, ${T.bgTint} 0%, transparent 70%)` }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "min(600px, 100vw)", height: "min(600px, 100vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(74,107,83,0.10) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto text-center px-4 md:px-6">
          <p className="uppercase mb-5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.3em", color: T.accentDeep }}>
            Build The Future
          </p>
          <h2 className="mb-8" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 6.5vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.03em", color: T.ink }}>
            Ready to Build for
            <span className="block italic" style={{ color: T.inkFaint }}>Women's Healthcare?</span>
          </h2>
          <p className="mb-12 max-w-xl mx-auto" style={{ color: T.inkSoft, fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Bring your backend, AI and API skills. Build something that could genuinely
            become part of the AyurGenX platform.
          </p>
          <a
            href="#"
            className="inline-block px-10 md:px-12 py-4 md:py-5 rounded-full font-semibold"
            style={{ background: T.accentDeep, color: "#FFFFFF", fontSize: "15px", letterSpacing: "-0.01em", boxShadow: "0 0 40px rgba(12,108,87,0.3)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 0 60px rgba(12,108,87,0.45)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(12,108,87,0.3)"; }}
          >
            Register for Buildathon
          </a>
        </div>
      </section>

    </main>
  );
};

export default Hackathon;