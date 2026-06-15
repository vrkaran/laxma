import { motion } from "framer-motion";
import {
  ShieldCheck,
  Brain,
  HeartPulse,
  Activity,
  Stethoscope,
  Leaf,
  UserPlus,
  Layers,
  Upload,
  Trophy,
} from "lucide-react";

import heroBg3 from "../image/hackathon/hero-bg3.jpg";
import ctaBg from "../image/hackathon/cta-bg.jpg";
import { useState, useEffect, useRef } from "react";

const ChatGPTIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#10a37f" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.371 2.019-1.164a.076.076 0 0 1 .071 0l4.83 2.786a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.4-.678zm2.010-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.602 1.5v2.999l-2.602 1.5-2.602-1.5z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-claude" viewBox="0 0 16 16" color="#D97757">
  <path d="m3.127 10.604 3.135-1.76.053-.153-.053-.085H6.11l-.525-.032-1.791-.048-1.554-.065-1.505-.08-.38-.081L0 7.832l.036-.234.32-.214.455.04 1.009.069 1.513.105 1.097.064 1.626.17h.259l.036-.105-.089-.065-.068-.064-1.566-1.062-1.695-1.121-.887-.646-.48-.327-.243-.306-.104-.67.435-.48.585.04.15.04.593.456 1.267.981 1.654 1.218.242.202.097-.068.012-.049-.109-.181-.9-1.626-.96-1.655-.428-.686-.113-.411a2 2 0 0 1-.068-.484l.496-.674L4.446 0l.662.089.279.242.411.94.666 1.48 1.033 2.014.302.597.162.553.06.17h.105v-.097l.085-1.134.157-1.392.154-1.792.052-.504.25-.605.497-.327.387.186.319.456-.045.294-.19 1.23-.37 1.93-.243 1.29h.142l.161-.16.654-.868 1.097-1.372.484-.545.565-.601.363-.287h.686l.505.751-.226.775-.707.895-.585.759-.839 1.13-.524.904.048.072.125-.012 1.897-.403 1.024-.186 1.223-.21.553.258.06.263-.218.536-1.307.323-1.533.307-2.284.54-.028.02.032.04 1.029.098.44.024h1.077l2.005.15.525.346.315.424-.053.323-.807.411-3.631-.863-.872-.218h-.12v.073l.726.71 1.331 1.202 1.667 1.55.084.383-.214.302-.226-.032-1.464-1.101-.565-.497-1.28-1.077h-.084v.113l.295.432 1.557 2.34.08.718-.112.234-.404.141-.444-.08-.911-1.28-.94-1.44-.759-1.291-.093.053-.448 4.821-.21.246-.484.186-.403-.307-.214-.496.214-.98.258-1.28.21-1.016.19-1.263.112-.42-.008-.028-.092.012-.953 1.307-1.448 1.957-1.146 1.227-.274.109-.477-.247.045-.44.266-.39 1.586-2.018.956-1.25.617-.723-.004-.105h-.036l-4.212 2.736-.75.096-.324-.302.04-.496.154-.162 1.267-.871z"/>
  </svg>   
);

const LovableIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#e94560" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z"/>
  </svg>
);

const CanvaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#7d2ae8" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.328 15.555c-.207.31-.621.414-.932.207l-.005-.003c-.972-.65-2.174-1.02-3.391-1.02-1.201 0-2.388.362-3.354.998a.68.68 0 0 1-.938-.196.68.68 0 0 1 .196-.938c1.181-.779 2.61-1.205 4.096-1.205 1.508 0 2.952.435 4.132 1.225.31.207.394.621.196.932zm1.411-2.962c-.262.393-.786.518-1.179.256-1.197-.797-2.689-1.253-4.26-1.253-1.554 0-3.028.448-4.22 1.23a.858.858 0 0 1-1.184-.232.858.858 0 0 1 .232-1.184c1.424-.949 3.148-1.471 4.972-1.471 1.851 0 3.599.531 5.027 1.479.393.262.5.786.238 1.179l-.626-.004zm.137-3.077c-1.44-.9-3.232-1.415-5.076-1.415-1.826 0-3.601.507-5.033 1.396a1.03 1.03 0 0 1-1.424-.29 1.03 1.03 0 0 1 .29-1.424C8.12 6.611 10.174 6 12.4 6c2.249 0 4.326.619 5.967 1.695a1.03 1.03 0 0 1 .29 1.424 1.03 1.03 0 0 1-1.424.29l-.357.107z"/>
  </svg>
);

const NAV_LINKS = [
  { label: "Overview",     id: "overview"     },
  { label: "Tracks",       id: "tracks"       },
  { label: "Prizes",       id: "prizes"       },
  { label: "Timeline",     id: "timeline"     },
  { label: "Deliverables", id: "deliverables" },
  { label: "Rules",        id: "rules"        },
  { label: "FAQ",          id: "faq"          },
];

const BENEFIT_CARDS = [
  { name: "ChatGPT Plus", Icon: ChatGPTIcon, color: "#10a37f" },
  { name: "Claude Pro",   Icon: ClaudeIcon,  color: "#cc785c" },
  { name: "Lovable Pro",  Icon: LovableIcon, color: "#e94560" },
  { name: "Canva Pro",    Icon: CanvaIcon,   color: "#7d2ae8" },
  { name: "Mentorship",   Icon: null,        color: "#38EF7D" },
  { name: "Networking",   Icon: null,        color: "#D4AF37" },
  { name: "and more...",  Icon: null,        color: "#8FA396" },
];

const Hackathon = () => {

  const tracks = [
    { title: "Artificial Intelligence", icon: <Brain size={24} />, desc: "Build intelligent AI systems solving real-world healthcare challenges at scale.", accentStyle: { borderLeft: "2px solid #38EF7D" }, iconBg: "rgba(56,239,125,0.1)", iconColor: "#38EF7D", colSpan: "md:col-span-2", bg: "#203A2B" },
    { title: "Health Care",             icon: <HeartPulse size={22} />, desc: "Create impactful digital healthcare and wellness solutions.", accentStyle: { borderTop: "2px solid #38EF7D" }, iconBg: "rgba(32,58,43,0.8)", iconColor: "#8FA396", colSpan: "", bg: "rgba(32,58,43,0.5)" },
    { title: "Ayurveda",                icon: <Leaf size={22} />, desc: "Combine traditional Ayurvedic knowledge with modern technology.", accentStyle: { borderRight: "2px solid #D4AF37" }, iconBg: "rgba(212,175,55,0.08)", iconColor: "#D4AF37", colSpan: "", bg: "rgba(32,58,43,0.4)" },
    { title: "Women's Wellness",        icon: <Activity size={22} />, desc: "Design innovative solutions focused on women's wellness.", accentStyle: { borderBottom: "2px solid #38EF7D" }, iconBg: "rgba(56,239,125,0.08)", iconColor: "#38EF7D", colSpan: "", bg: "#203A2B" },
    { title: "Student Wellness",        icon: <Stethoscope size={22} />, desc: "Develop platforms improving student health and mental wellness.", accentStyle: { borderLeft: "2px solid #8FA396" }, iconBg: "rgba(143,163,150,0.1)", iconColor: "#8FA396", colSpan: "", bg: "rgba(13,22,17,0.6)" },
  ];

  const timeline = [
    { label: "Registration",        phase: "01", note: "Open now"                   },
    { label: "Track Release",       phase: "02", note: "Problem statements dropped"  },
    { label: "Project Submission",  phase: "03", note: "48-hour sprint ends"         },
    { label: "Winner Announcement", phase: "04", note: "Results & ceremony"          },
  ];

  const faqs = [
    { q: "Who can participate?",           a: "Students, developers, designers and innovators are welcome."  },
    { q: "Can I participate solo?",        a: "Yes, solo and team participation are allowed."                },
    { q: "Will certificates be provided?", a: "Yes, certificates will be provided to eligible participants." },
    { q: "Is the event online?",           a: "The hackathon will be conducted in hybrid mode."              },
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

  const scrollToSection = (id : string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 116, behavior: "smooth" });
    setActiveId(id);
  };

  
  return (
    <main style={{ backgroundColor: "#0D1611", color: "#E2EFE7", fontFamily: "'Space Grotesk', sans-serif", overflowX: "hidden" }}>

              <style>{`
          .nav-inner {
            display: flex;
            align-items: center;
            gap: 2px;
            padding: 0 16px;
            flex-shrink: 0;
          }
          .nav-item {
            font-size: 10px;
            letter-spacing: 0.18em;
            padding: 6px 12px;
          }
          @media (max-width: 768px) {
            .nav-inner {
              justify-content: space-between;
              width: 100%;
              padding: 0 6px;
              gap: 1px;
            }
            .nav-item {
              font-size: clamp(7px, 2.2vw, 9px);
              letter-spacing: 0.04em;
              padding: 4px 4px;
              flex: 1;
              justify-content: center;
            }
          }
        `}</style>
      {/* ── SECTION NAV ──────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          top: "72px",
          left: 0,
          right: 0,
          zIndex: 49,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "44px",
          background: "rgba(13,22,17,0.95)",
          borderTop: "1px solid rgba(56,239,125,0.08)",
          borderBottom: "1px solid rgba(56,239,125,0.12)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
      <div className="nav-inner" style={{ display: "flex", alignItems: "center" }}>
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
                color: isActive ? "#38EF7D" : "#8FA396",
                borderBottom: isActive ? "1px solid #38EF7D" : "1px solid transparent",
                textShadow: isActive ? "0 0 12px rgba(56,239,125,0.5)" : "none",
                transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
                whiteSpace: "nowrap",
                userSelect: "none",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#E2EFE7"; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#8FA396"; }}
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
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(13,22,17,0.55) 0%, rgba(13,22,17,0.82) 70%, #0D1611 100%)" }} />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "min(700px, 100vw)", height: "min(700px, 100vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,239,125,0.07) 0%, transparent 70%)" }} />

        <div className="relative max-w-6xl mx-auto text-center w-full z-10" style={{ paddingTop: "116px" }}>
          <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-8" style={{ background: "rgba(32,58,43,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(56,239,125,0.2)" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#38EF7D", boxShadow: "0 0 8px #38EF7D", animation: "pulse 2s infinite" }} />
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.24em", color: "#8FA396" }}>
                AYURGENX HACKATHON 2026
              </span>
            </div>

            <h1 className="mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 10vw, 112px)", lineHeight: 0.88, letterSpacing: "-0.03em", color: "#E2EFE7" }}>
              Innovation
              <span className="block" style={{ background: "linear-gradient(135deg, #E2EFE7 20%, #38EF7D 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Hackathon 2026
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mb-10" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 2.5vw, 24px)", lineHeight: 1.3, fontWeight: 500, letterSpacing: "-0.02em", color: "rgba(226,239,231,0.8)" }}>
              Reimagining the future of healthcare through AI-driven innovation,
              wellness technologies and next-generation digital experiences.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3 mb-10" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "16px", color: "#8FA396" }}>
              {["48 Hours", "Team Size 1-3", "₹1L+ Prize Pool", "Hybrid Event"].map((m, i) => (
                <span key={i} className="flex items-center gap-3">
                  <span style={{ color: "#E2EFE7", fontWeight: 600 }}>{m}</span>
                  {i < 3 && <span style={{ color: "#38EF7D" }}>·</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCi2KowCwiiqUqpX6TBrmfhNuzewE22Idm84Khi7muQF009w/viewform?usp=publish-editor"
                target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-full font-semibold"
                style={{ background: "#38EF7D", color: "#0D1611", fontSize: "14px", boxShadow: "0 0 32px rgba(56,239,125,0.35)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(56,239,125,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(56,239,125,0.35)"; }}
              >
                Register Now
              </a>
              <a
                href="#tracks"
                onClick={(e) => { e.preventDefault(); scrollToSection("tracks"); }}
                className="px-8 py-4 rounded-full font-medium"
                style={{ background: "rgba(32,58,43,0.6)", color: "#E2EFE7", border: "1px solid rgba(56,239,125,0.25)", fontSize: "14px", backdropFilter: "blur(12px)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(32,58,43,0.9)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(32,58,43,0.6)"; }}
              >
                Explore Tracks
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section id="overview" className="relative py-20 md:py-32 px-4 md:px-6" style={{ background: "#0D1611" }}>
        <div className="max-w-5xl mx-auto mb-12 md:mb-20" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,239,125,0.3), transparent)" }} />
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4 uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.3em", color: "#38EF7D" }}>
            About the Event
          </p>
          <h2 className="mb-6" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1.05, color: "#E2EFE7" }}>
            Reimagining Healthcare
            <span className="block italic" style={{ color: "#8FA396" }}>Through Innovation</span>
          </h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#8FA396", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.75 }}>
            AyurGenX Hackathon 2026 brings together innovators, developers, researchers and designers
            to solve real-world healthcare challenges through AI, wellness systems and digital technologies.
          </p>
        </div>
        <div className="max-w-5xl mx-auto mt-12 md:mt-20" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(56,239,125,0.15), transparent)" }} />
      </section>

      {/* ── TRACKS ───────────────────────────────────────────── */}
      <section id="tracks" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#0D1611" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
              Problem Statements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-[20px] p-7 md:p-8 relative overflow-hidden ${track.colSpan}`}
                style={{ background: track.bg, border: "1px solid rgba(143,163,150,0.1)", minHeight: "160px", ...track.accentStyle }}
              >
                {index === 0 && (
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(56,239,125,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                )}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: track.iconBg, color: track.iconColor }}>
                  {track.icon}
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: index === 0 ? "24px" : "20px", color: "#E2EFE7", marginBottom: "10px" }}>
                  {track.title}
                </h3>
                <p style={{ color: "#8FA396", fontSize: "14px", lineHeight: 1.7 }}>{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIZES ───────────────────────────────────────────── */}
      <section id="prizes" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#0D1611" }}>
        <div className="max-w-6xl mx-auto">

          <div className="mb-12 md:mb-20">
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
              Rewards
            </p>
          </div>

          {/* Prize podium */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 items-end mb-8 md:mb-0">

            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[24px] p-8 text-center order-2 md:order-1" style={{ background: "#203A2B", border: "1px solid rgba(143,163,150,0.2)", borderTop: "1px solid rgba(56,239,125,0.25)" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#8FA396", marginBottom: "16px" }}>RUNNER UP</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", color: "#38EF7D", lineHeight: 1, marginBottom: "12px" }}>₹50K</h3>
              <p style={{ color: "#8FA396", fontSize: "14px" }}>Exciting rewards and recognition.</p>
            </motion.div>

            <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[32px] p-10 text-center relative overflow-hidden order-1 md:order-2" style={{ background: "linear-gradient(160deg, #203A2B 0%, #0D1611 100%)", border: "1px solid rgba(56,239,125,0.4)", boxShadow: "0 0 60px rgba(56,239,125,0.12)", transform: "translateY(-12px)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(56,239,125,0.08) 0%, transparent 60%)" }} />
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#38EF7D", marginBottom: "16px" }}>GRAND PRIZE</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(52px, 8vw, 72px)", color: "#E2EFE7", lineHeight: 1, marginBottom: "12px" }}>₹1L+</h3>
              <p style={{ color: "#8FA396", fontSize: "14px" }}>Premium rewards, mentorship and opportunities.</p>
            </motion.div>

            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="rounded-[24px] p-8 text-center order-3" style={{ background: "rgba(32,58,43,0.4)", border: "1px solid rgba(212,175,55,0.25)", borderBottom: "1px solid rgba(212,175,55,0.4)" }}>
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#D4AF37", marginBottom: "16px" }}>INNOVATION AWARD</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", color: "#D4AF37", lineHeight: 1, marginBottom: "12px" }}>₹25K</h3>
              <p style={{ color: "#8FA396", fontSize: "14px" }}>Special recognition for innovation and impact.</p>
            </motion.div>
          </div>

          {/* Floating benefit cards — desktop absolute, mobile grid */}
          <div className="hidden md:block relative mt-16" style={{ height: "260px" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(56,239,125,0.04) 0%, transparent 70%)" }} />
            {[
              { name: "ChatGPT Plus", Icon: ChatGPTIcon, color: "#10a37f", delay: 0,   x: "4%",  y: "15%" },
              { name: "Claude Pro",   Icon: ClaudeIcon,  color: "#cc785c", delay: 0.5, x: "18%", y: "60%" },
              { name: "Lovable Pro",  Icon: LovableIcon, color: "#e94560", delay: 1.0, x: "36%", y: "12%" },
              { name: "Canva Pro",    Icon: CanvaIcon,   color: "#7d2ae8", delay: 1.5, x: "58%", y: "58%" },
              { name: "Mentorship",   Icon: null,        color: "#38EF7D", delay: 2.0, x: "72%", y: "10%" },
              { name: "Networking",   Icon: null,        color: "#D4AF37", delay: 2.5, x: "84%", y: "52%" },
            ].map(({ name, Icon, color, delay, x, y }) => (
              <motion.div
                key={name}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, delay, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.06, boxShadow: `0 0 32px ${color}40`, transition: { duration: 0.2 } }}
                style={{ position: "absolute", left: x, top: y, display: "flex", alignItems: "center", gap: "10px", padding: "10px 18px", borderRadius: "100px", background: "rgba(13,22,17,0.85)", backdropFilter: "blur(12px)", border: `1px solid ${color}40`, boxShadow: `0 0 20px ${color}18`, userSelect: "none", whiteSpace: "nowrap" }}
              >
                {Icon ? <Icon /> : <span style={{ fontSize: "14px" }}>{name === "Mentorship" ? "⬡" : "◎"}</span>}
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "16px", letterSpacing: "0.12em", color: "#E2EFE7", fontWeight: 500 }}>{name}</span>
              </motion.div>
            ))}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, delay: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", left: "40%", top: "95%", padding: "10px 18px", borderRadius: "100px", background: "transparent", border: "1px dashed rgba(143,163,150,0.25)", fontFamily: "'IBM Plex Mono', monospace", fontSize: "16px", letterSpacing: "0.12em", color: "#EAD637", whiteSpace: "nowrap", userSelect: "none" }}
            >
              and many more...
            </motion.div>
          </div>

          {/* Mobile: simple pill grid */}
          <div className="flex md:hidden flex-wrap gap-3 mt-10">
            {BENEFIT_CARDS.map(({ name, Icon, color }, i) => (
              <motion.div
                key={name}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 14px", borderRadius: "100px", background: "rgba(13,22,17,0.85)", border: `1px solid ${color}40`, userSelect: "none" }}
              >
                {Icon ? <Icon /> : <span style={{ fontSize: "12px", color }}>{name === "Mentorship" ? "⬡" : name === "Networking" ? "◎" : "·"}</span>}
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", color: "#E2EFE7" }}>{name}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
    <section id="timeline" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#111D16" }}>
      <div className="max-w-4xl mx-auto">

        <div className="mb-16 md:mb-24">
          <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
            Schedule
          </p>
        </div>

        <div className="relative">

          {/* vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-[1px]" style={{ background: "linear-gradient(180deg, rgba(56,239,125,0.8) 0%, rgba(212,175,55,0.5) 60%, rgba(56,239,125,0.1) 100%)" }} />

          <div className="space-y-6">
            {[
              { icon: <UserPlus size={20} />, label: "Registration",        phase: "Phase 01", note: "Open now",                  desc: "Register for the Hackathon and secure your spot.",    color: "#38EF7D", bg: "rgba(56,239,125,0.05)",  clip: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",  gold: false },
              { icon: <Layers size={20} />,   label: "Track Release",       phase: "Phase 02", note: "Problem statements dropped", desc: "Check the tracks, pick one and start ideating.",      color: "#38EF7D", bg: "rgba(56,239,125,0.04)",  clip: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))", gold: false },
              { icon: <Upload size={20} />,   label: "Project Submission",  phase: "Phase 03", note: "48-hour sprint ends",        desc: "Submit your MVP before the deadline. Make it count.", color: "#D4AF37", bg: "rgba(212,175,55,0.07)", clip: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",  gold: true  },
              { icon: <Trophy size={20} />,   label: "Winner Announcement", phase: "Phase 04", note: "Results & ceremony",         desc: "Top teams announced and prizes awarded live.",         color: "#8FA396", bg: "rgba(143,163,150,0.05)", clip: "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",               gold: false },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6 md:gap-8 items-start group"
              >

                {/* icon circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: item.gold ? item.color : "#0D1611",
                    border: `1px solid ${item.color}70`,
                    boxShadow: `0 0 ${item.gold ? "28px" : "14px"} ${item.color}${item.gold ? "55" : "25"}`,
                    color: item.gold ? "#0D1611" : item.color,
                  }}
                >
                  {item.icon}
                </div>

                {/* cut-corner card */}
                <div
                  className="flex-1 relative p-6 md:p-8 transition-all duration-300"
                  style={{
                    background: item.bg,
                    clipPath: item.clip,
                    border: "none",
                    outline: `1px solid ${item.color}25`,
                    outlineOffset: "-1px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(6px)";
                    e.currentTarget.style.background = `${item.bg.replace("0.0", "0.1")}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.background = item.bg;
                  }}
                >
                  {/* top accent line */}
                  <div className="absolute top-0 left-0 right-6 h-[1px]" style={{ background: `linear-gradient(90deg, ${item.color}80, transparent)` }} />

                  {/* phase label */}
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.25em", color: item.color, marginBottom: "10px", textTransform: "uppercase" }}>
                    {item.phase} — {item.note}
                  </p>

                  {/* title */}
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(22px, 3vw, 30px)", color: "#E2EFE7", marginBottom: "8px", lineHeight: 1.1 }}>
                    {item.label}
                  </h3>

                  {/* desc */}
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "#8FA396", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>

                  {/* cut corner accent dot */}
                  <div className="absolute top-[20px] right-[4px] w-1.5 h-1.5 rounded-full" style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }} />
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

      {/* ── DELIVERABLES ─────────────────────────────────────── */}
      <section id="deliverables" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#0D1611" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
              Deliverables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="rounded-[28px] p-8 md:p-10 lg:row-span-2" style={{ background: "#203A2B", borderLeft: "2px solid #38EF7D" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#38EF7D" }}>01</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(22px, 3vw, 28px)", color: "#E2EFE7", margin: "14px 0 10px" }}>Prototype / MVP</h3>
              <p style={{ color: "#8FA396", fontSize: "15px", lineHeight: 1.75 }}>A working prototype demonstrating your core solution. Show the judges it runs.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="rounded-[20px] p-7 md:p-8" style={{ background: "rgba(32,58,43,0.4)", border: "1px solid rgba(143,163,150,0.15)", borderTop: "2px solid #8FA396" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#8FA396" }}>02</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "#E2EFE7", margin: "12px 0 10px" }}>Pitch Deck</h3>
              <p style={{ color: "#8FA396", fontSize: "14px", lineHeight: 1.7 }}>Presentation covering problem statement and solution.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="rounded-[20px] p-7 md:p-8" style={{ background: "rgba(13,22,17,0.7)", border: "1px solid rgba(143,163,150,0.12)", borderRight: "2px solid #D4AF37" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#D4AF37" }}>03</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "20px", color: "#E2EFE7", margin: "12px 0 10px" }}>GitHub Repository</h3>
              <p style={{ color: "#8FA396", fontSize: "14px", lineHeight: 1.7 }}>Clean documented source code with setup instructions.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="rounded-[24px] p-7 md:p-9 lg:col-span-2" style={{ background: "#203A2B", borderBottom: "2px solid #38EF7D" }}>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#38EF7D" }}>04</span>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(20px, 3vw, 26px)", color: "#E2EFE7", margin: "12px 0 10px" }}>Demo Video</h3>
              <p style={{ color: "#8FA396", fontSize: "14px", lineHeight: 1.7 }}>Short walkthrough showcasing workflow and features. Keep it tight, make it count.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── RULES ────────────────────────────────────────────── */}
      <section id="rules" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#0D1611" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-start mb-12 md:mb-16">
            <ShieldCheck size={40} style={{ color: "#38EF7D", marginBottom: "20px" }} />
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
              Guidelines
            </p>
          </div>
          <div>
            {[
              "All submissions must be original work created during the hackathon.",
              "Participants must maintain respectful and professional behavior.",
              "Projects submitted after the deadline will not be accepted.",
              "Judges' decisions will remain final throughout the event.",
            ].map((rule, i) => (
              <div
                key={i}
                className="py-5 md:py-6 px-3 md:px-4 flex items-start gap-5 rounded-2xl transition-all duration-300"
                style={{ borderBottom: "1px solid rgba(143,163,150,0.12)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(56,239,125,0.05)"; e.currentTarget.style.transform = "translateX(8px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "translateX(0)"; }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#38EF7D", paddingTop: "3px", flexShrink: 0 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ color: "#8FA396", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.6 }}>{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-20 md:py-28 px-4 md:px-6" style={{ background: "#203A2B" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 md:mb-20">
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "clamp(28px, 5vw, 51px)", letterSpacing: "0.3em", color: "white", fontWeight: 700 }}>
              FAQ
            </p>
          </div>
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer"
                style={{ background: "rgba(13,22,17,0.55)", border: "1px solid rgba(143,163,150,0.12)", transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(56,239,125,0.22)"; e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(143,163,150,0.12)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <summary className="list-none flex justify-between items-center px-5 md:px-7 py-5 md:py-6 cursor-pointer" style={{ color: "#E2EFE7", fontSize: "clamp(15px, 2vw, 17px)", fontWeight: 500 }}>
                  {faq.q}
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "20px", color: "#38EF7D", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)", display: "inline-block", flexShrink: 0, marginLeft: "16px" }} className="group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 md:px-7 pb-5 md:pb-6" style={{ borderTop: "1px solid rgba(56,239,125,0.1)" }}>
                  <p style={{ color: "#8FA396", fontSize: "15px", lineHeight: 1.75, paddingTop: "14px" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 overflow-hidden" style={{ background: "#0D1611" }}>
        <div className="absolute inset-0">
          <img src={ctaBg} alt="cta" className="w-full h-full object-cover" style={{ opacity: 0.12 }} />
        </div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(32,58,43,0.6) 0%, transparent 70%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "min(600px, 100vw)", height: "min(600px, 100vw)", borderRadius: "50%", background: "radial-gradient(circle, rgba(56,239,125,0.06) 0%, transparent 70%)" }} />
        <div className="relative max-w-4xl mx-auto text-center px-4 md:px-6">
          <p className="uppercase mb-5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.3em", color: "#38EF7D" }}>
            Join The Future
          </p>
          <h2 className="mb-8" style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#E2EFE7" }}>
            Ready to Build the
            <span className="block italic" style={{ color: "#8FA396" }}>Future of Healthcare?</span>
          </h2>
          <p className="mb-12 max-w-xl mx-auto" style={{ color: "#8FA396", fontSize: "clamp(15px, 2vw, 17px)", lineHeight: 1.7 }}>
            Collaborate with innovators, researchers and developers to create impactful AI-powered healthcare solutions.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCi2KowCwiiqUqpX6TBrmfhNuzewE22Idm84Khi7muQF009w/viewform?usp=publish-editor"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 md:px-12 py-4 md:py-5 rounded-full font-semibold"
            style={{ background: "#38EF7D", color: "#0D1611", fontSize: "15px", letterSpacing: "-0.01em", boxShadow: "0 0 40px rgba(56,239,125,0.35)", transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)" }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 0 64px rgba(56,239,125,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(56,239,125,0.35)"; }}
          >
            Register for Hackathon
          </a>
        </div>
      </section>

    </main>
  );
};

export default Hackathon;