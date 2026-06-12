import { motion } from "framer-motion";
import {
  CalendarDays,
  Trophy,
  Users,
  Globe,
  ArrowRight,
  ShieldCheck,
  Brain,
  HeartPulse,
  Activity,
  Stethoscope,
  Sparkles,
  Cpu,
  HeartHandshake,
  Leaf,
  GraduationCap,
} from "lucide-react";

// import heroBg from "../image/hackathon/hero-bg.jpg";
// import heroImage from "../image/hackathon/hero-image.png";
// import ctaBg from "../image/hackathon/cta-bg.jpg";

const heroBg = "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?auto=format&fit=crop&q=80&w=2070";
const heroImage = "";
const ctaBg = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2070";



const Hackathon = () => {
  const tracks = [
    { 
      title: "Artificial Intelligence", 
      icon: <Brain size={26} />, 
      desc: "Build intelligent AI systems solving real-world healthcare challenges at scale.",
      span: "lg:col-span-2", 
      accent: "border-l-2 border-[#2D8A82]", 
      offset: "",
      bg: "#F9F9F9",
      iconBg: "rgba(45,138,130,0.1)",
      iconColor: "#2D8A82"
    },
    { 
      title: "Health Care", 
      icon: <HeartPulse size={26} />, 
      desc: "Create impactful digital healthcare and wellness solutions.",
      span: "", 
      accent: "border-t-2 border-[#2A6F9E]", 
      offset: "lg:mt-10",
      bg: "rgba(42,111,158,0.05)",
      iconBg: "rgba(42,111,158,0.1)",
      iconColor: "#2A6F9E"
    },
    { 
      title: "Ayurveda", 
      icon: <Leaf size={26} />, 
      desc: "Combine traditional Ayurvedic knowledge with modern technology.",
      span: "", 
      accent: "border-r-2 border-[#C69200]", 
      offset: "",
      bg: "rgba(198,146,0,0.05)",
      iconBg: "rgba(198,146,0,0.08)",
      iconColor: "#C69200"
    },
    { 
      title: "Women's Wellness", 
      icon: <Activity size={26} />, 
      desc: "Design innovative solutions focused on women's wellness.",
      span: "", 
      accent: "border-b-2 border-[#E45A49]", 
      offset: "lg:mt-6",
      bg: "rgba(228,90,73,0.05)",
      iconBg: "rgba(228,90,73,0.08)",
      iconColor: "#E45A49"
    },
    { 
      title: "Student Wellness", 
      icon: <Stethoscope size={26} />, 
      desc: "Develop platforms improving student health and mental wellness.",
      span: "", 
      accent: "border-l-2 border-[#3E8E56]", 
      offset: "",
      bg: "rgba(62,142,86,0.05)",
      iconBg: "rgba(62,142,86,0.1)",
      iconColor: "#3E8E56"
    },
  ];

  const timeline = [
    { label: "Registration", phase: "01", note: "Open now", status: "active" },
    { label: "Track Release", phase: "02", note: "Problem statements dropped", status: "upcoming" },
    { label: "Project Submission", phase: "03", note: "48-hour sprint ends", status: "upcoming" },
    { label: "Winner Announcement", phase: "04", note: "Results & ceremony", status: "upcoming" },
  ];

  const deliverables = [
    { 
      title: "Prototype / MVP", 
      desc: "A working prototype demonstrating your core solution. Show the judges it runs.", 
      phase: "01",
      span: "lg:row-span-2", 
      accent: "border-l-2 border-[#2D8A82]",
      bg: "#F9F9F9",
      accentColor: "#2D8A82"
    },
    { 
      title: "Pitch Deck", 
      desc: "Presentation covering problem statement and solution.", 
      phase: "02",
      span: "", 
      accent: "border-t-2 border-[#2A6F9E]",
      bg: "rgba(42,111,158,0.05)",
      accentColor: "#2A6F9E"
    },
    { 
      title: "GitHub Repository", 
      desc: "Clean documented source code with setup instructions.", 
      phase: "03",
      span: "", 
      accent: "border-r-2 border-[#C69200]",
      bg: "rgba(198,146,0,0.05)",
      accentColor: "#C69200"
    },
    { 
      title: "Demo Video", 
      desc: "Short walkthrough showcasing workflow and features. Keep it tight, make it count.", 
      phase: "04",
      span: "lg:col-span-2", 
      accent: "border-b-2 border-[#E45A49]",
      bg: "#F9F9F9",
      accentColor: "#E45A49"
    },
  ];

  const faqs = [
    { q: "Who can participate?", a: "Students, developers, designers and innovators are welcome." },
    { q: "Can I participate solo?", a: "Yes, solo and team participation are allowed." },
    { q: "Will certificates be provided?", a: "Yes, certificates will be provided to eligible participants." },
    { q: "Is the event online?", a: "The hackathon will be conducted in hybrid mode." },
  ];

  return (
    <main
      style={{
        backgroundColor: "#FFFFFF",
        color: "#4A4A4A",
        fontFamily: "'Space Grotesk', sans-serif",
        overflowX: "hidden",
      }}
    >
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
          
          @keyframes pulse-custom {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
        `}
      </style>


        
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="hero" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(249,249,249,0.55) 0%, rgba(249,249,249,0.82) 70%, #F9F9F9 100%)" }}></div>

        {/* ambient glow orb */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,138,130,0.07) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-6xl mx-auto text-center w-full z-10">
          <motion.div initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>

            {/* pill */}
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-10"
              style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(45,138,130,0.2)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2D8A82", boxShadow: "0 0 8px #2D8A82", animation: "pulse-custom 2s infinite" }} />
              <span
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.28em", color: "#4A4A4A" }}
              >
                AYURGENX HACKATHON 2026
              </span>
            </div>

            {/* heading */}
            <h1
              className="mb-6"
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(64px, 10vw, 112px)", lineHeight: 0.88, letterSpacing: "-0.03em", color: "#4A4A4A" }}
            >
              Innovation
              <span
                className="block"
                style={{ background: "linear-gradient(135deg, #4A4A4A 20%, #2D8A82 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Hackathon 2026
              </span>
            </h1>

            {/* subtext */}
            <p
              className="max-w-4xl mx-auto mb-14"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.2, fontWeight: 500, letterSpacing: "-0.03em", color: "rgba(74,74,74,0.8)" }}
            >
              Reimagining the future of healthcare through AI-driven innovation,
              wellness technologies and next-generation digital experiences.
            </p>

            {/* meta */}
            <div
              className="flex flex-wrap justify-center items-center gap-5 mb-14"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "15px", color: "#4A4A4A" }}
            >
              {["48 Hours", "Team Size 1–3", "₹1L+ Prize Pool", "Hybrid Event"].map((m, i) => (
                <span key={i} className="flex items-center gap-5">
                  <span style={{ color: "#2D8A82", fontWeight: 600 }}>{m}</span>
                  {i < 3 && <span style={{ color: "#EAEAEA" }}>·</span>}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfCi2KowCwiiqUqpX6TBrmfhNuzewE22Idm84Khi7muQF009w/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-full font-semibold transition-all"
                style={{
                  background: "#2D8A82",
                  color: "#FFFFFF",
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                  boxShadow: "0 0 32px rgba(45,138,130,0.35)",
                  transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px) scale(1.02)"; e.currentTarget.style.boxShadow = "0 0 48px rgba(45,138,130,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 32px rgba(45,138,130,0.35)"; }}
              >
                Register Now
              </a>
              <a
                href="#tracks"
                className="px-10 py-4 rounded-full font-medium transition-all"
                style={{
                  background: "rgba(255,255,255,0.6)",
                  color: "#4A4A4A",
                  border: "1px solid rgba(45,138,130,0.25)",
                  fontSize: "15px",
                  backdropFilter: "blur(12px)",
                  transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), background 0.3s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.background = "rgba(255,255,255,0.9)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.6)"; }}
              >
                Explore Tracks
              </a>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className="relative py-32 px-6" style={{ background: "#F9F9F9" }}>

        {/* subtle horizontal rule top */}
        <div className="max-w-5xl mx-auto mb-20" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(45,138,130,0.3), transparent)" }} />

        <div className="max-w-5xl mx-auto text-center">
          <p
            className="mb-4 uppercase"
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.32em", color: "#2D8A82" }}
          >
            About the Event
          </p>
          <h2
            className="mb-6"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 7vw, 80px)", letterSpacing: "-0.03em", lineHeight: 1, color: "#4A4A4A" }}
          >
            Reimagining Healthcare
            <span className="block italic" style={{ color: "#2A6F9E" }}>Through Innovation</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "#4A4A4A", fontSize: "17px", lineHeight: 1.75, fontWeight: 400 }}
          >
            AyurGenX Hackathon 2026 brings together innovators, developers, researchers and designers
            to solve real-world healthcare challenges through AI, wellness systems and digital technologies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-20" style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(45,138,130,0.15), transparent)" }} />
      </section>

      {/* ── TRACKS ───────────────────────────────────────────── */}
      <section id="tracks" className="py-28 px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">

          <div className="mb-20">
            <h1
              className="uppercase mb-3"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}
            >
              Problem Statements
            </h1>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}
            >
              Innovation Tracks
            </h2>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.20, ease: [0.22, 1, 0.36, 1] }}
                className={`${track.span} ${track.offset} rounded-[28px] p-10 relative overflow-hidden`}
                style={{ 
                  background: track.bg, 
                  border: "1px solid rgba(45,138,130,0.12)",
                  ... (track.accent.includes("border-l-2") ? { borderLeft: `2px solid ${track.accent.split(" ").pop()}` } : {}),
                  ... (track.accent.includes("border-t-2") ? { borderTop: `2px solid ${track.accent.split(" ").pop()}` } : {}),
                  ... (track.accent.includes("border-r-2") ? { borderRight: `2px solid ${track.accent.split(" ").pop()}` } : {}),
                  ... (track.accent.includes("border-b-2") ? { borderBottom: `2px solid ${track.accent.split(" ").pop()}` } : {}),
                  minHeight: "200px" 
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(45,138,130,0.06) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: track.iconBg, color: track.iconColor }}>
                  {track.icon}
                </div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", color: "#4A4A4A", marginBottom: "12px" }}>{track.title}</h3>
                <p style={{ color: "#4A4A4A", fontSize: "15px", lineHeight: 1.7, maxWidth: track.span ? "380px" : "100%" }}>{track.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRIZES ───────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}>
              Rewards
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}>
              Prizes & Recognition
            </h2>
          </motion.div>

          {/* Prize podium — asymmetric heights */}
          <div className="grid lg:grid-cols-3 gap-5 items-end mb-10">
            {/* Runner Up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-[24px] p-8 text-center"
              style={{ background: "#FFFFFF", border: "1px solid rgba(45,138,130,0.2)", borderTop: "1px solid rgba(45,138,130,0.25)" }}
            >
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#4A4A4A", marginBottom: "16px" }}>RUNNER UP</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "52px", color: "#2D8A82", lineHeight: 1, marginBottom: "12px" }}>₹50K</h3>
              <p style={{ color: "#4A4A4A", fontSize: "14px" }}>Exciting rewards and recognition.</p>
            </motion.div>

            {/* Grand Prize — tallest, glowing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: -20 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -28 }}
              className="rounded-[32px] p-12 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #FFFFFF 0%, #F9F9F9 100%)",
                border: "1px solid rgba(45,138,130,0.4)",
                boxShadow: "0 0 60px rgba(45,138,130,0.12), 0 0 120px rgba(45,138,130,0.06)",
              }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(45,138,130,0.08) 0%, transparent 60%)" }} />
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#2D8A82", marginBottom: "16px" }}>GRAND PRIZE</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "72px", color: "#4A4A4A", lineHeight: 1, marginBottom: "12px" }}>₹1L+</h3>
              <p style={{ color: "#4A4A4A", fontSize: "14px" }}>Premium rewards, mentorship and opportunities.</p>
            </motion.div>

            {/* Innovation Award */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -6 }}
              className="rounded-[24px] p-8 text-center"
              style={{ background: "#FFFFFF", border: "1px solid rgba(198,146,0,0.25)", borderBottom: "1px solid rgba(198,146,0,0.4)" }}
            >
              <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: "#C69200", marginBottom: "16px" }}>INNOVATION AWARD</p>
              <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "52px", color: "#C69200", lineHeight: 1, marginBottom: "12px" }}>₹25K</h3>
              <p style={{ color: "#4A4A4A", fontSize: "14px" }}>Special recognition for innovation and impact.</p>
            </motion.div>
          </div>

          {/* Benefits row */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mt-6">
            {["ChatGPT Plus", "Claude Pro", "Lovable Pro", "Canva Pro", "Mentorship & Networking", "and many more…"].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[16px] px-4 py-3 text-center"
                style={{
                  background: index === 5 ? "transparent" : "#FFFFFF",
                  border: index === 5 ? "1px dashed rgba(45,138,130,0.25)" : "1px solid rgba(45,138,130,0.12)",
                }}
              >
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: index === 5 ? "#4A4A4A" : "#2D8A82", fontWeight: 500 }}>{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">

          <div className="mb-24">
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}>
              Schedule
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}>
              Timeline & Milestones
            </h2>
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between gap-10">
            {/* connector line */}
            <div className="absolute hidden lg:block top-8 left-0 w-full" style={{ height: "1px", background: "linear-gradient(90deg, rgba(45,138,130,0.6), rgba(45,138,130,0.1))" }} />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex-1"
              >
                {/* step marker */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-8"
                  style={{
                    background: index === 0 ? "#2D8A82" : "#F9F9F9",
                    border: "1px solid rgba(45,138,130,0.4)",
                    boxShadow: index === 0 ? "0 0 24px rgba(45,138,130,0.4)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: index === 0 ? "#FFFFFF" : "#2D8A82",
                    }}
                  >
                    {item.phase}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", fontWeight: 600, color: "#4A4A4A", marginBottom: "8px" }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4A4A4A" }}>
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ─────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#F9F9F9" }}>
        <div className="max-w-6xl mx-auto">

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}>
              Submission
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}>
              Deliverables
            </h2>
          </motion.div>

          {/* Asymmetric 3-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {deliverables.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`${item.span} rounded-[28px] p-10`}
                style={{ 
                  background: item.bg, 
                  border: "1px solid rgba(45,138,130,0.12)",
                  ... (item.accent.includes("border-l-2") ? { borderLeft: `2px solid ${item.accentColor}` } : {}),
                  ... (item.accent.includes("border-t-2") ? { borderTop: `2px solid ${item.accentColor}` } : {}),
                  ... (item.accent.includes("border-r-2") ? { borderRight: `2px solid ${item.accentColor}` } : {}),
                  ... (item.accent.includes("border-b-2") ? { borderBottom: `2px solid ${item.accentColor}` } : {}),
                }}
              >
                <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", letterSpacing: "0.2em", color: item.accentColor }}>{item.phase}</span>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: item.span ? "28px" : "22px", color: "#4A4A4A", margin: "16px 0 12px" }}>{item.title}</h3>
                <p style={{ color: "#4A4A4A", fontSize: item.span ? "15px" : "14px", lineHeight: 1.75, maxWidth: item.span ? "480px" : "100%" }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RULES ────────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start mb-16"
          >
            <ShieldCheck size={48} style={{ color: "#2D8A82", marginBottom: "24px" }} />
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}>
              Guidelines
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}>
              Rules & Code of Conduct
            </h2>
          </motion.div>

        <div className="space-y-0">

          {[
            "All submissions must be original work created during the hackathon.",
            "Participants must maintain respectful and professional behavior.",
            "Projects submitted after the deadline will not be accepted.",
            "Judges' decisions will remain final throughout the event.",
          ].map((rule, i) => (

            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group py-6 px-4 flex items-start gap-6 cursor-pointer rounded-2xl transition-all duration-500"
              style={{
                borderBottom: "1px solid rgba(234,234,234,0.5)",
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(45,138,130,0.05)";
                e.currentTarget.style.transform = "translateX(10px)";
                e.currentTarget.style.borderColor = "rgba(45,138,130,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateX(0)";
                e.currentTarget.style.borderColor = "rgba(234,234,234,0.5)";
              }}
            >

              <span
                className="transition-all duration-500"
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px",
                  color: "#2D8A82",
                  paddingTop: "3px",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <p
                className="transition-all duration-500"
                style={{
                  color: "#4A4A4A",
                  fontSize: "17px",
                  lineHeight: 1.6,
                }}
              >
                {rule}
              </p>

            </motion.div>

          ))}

        </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="py-28 px-6" style={{ background: "#F9F9F9" }}>
        <div className="max-w-4xl mx-auto">

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <p className="uppercase mb-3" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "51px", letterSpacing: "0.3em", color: "#2D8A82" }}>
              FAQ
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.03em", color: "#4A4A4A" }}>
              Common Questions
            </h2>
          </motion.div>

        <div className="space-y-4">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <details
                className="group rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(234,234,234,0.5)",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = "rgba(255,255,255,1)";
                  e.currentTarget.style.borderColor = "rgba(45,138,130,0.22)";
                  e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.borderColor = "rgba(234,234,234,0.5)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                <summary
                  className="list-none flex justify-between items-center px-7 py-6 cursor-pointer"
                  style={{
                    color: "#4A4A4A",
                    fontSize: "17px",
                    fontWeight: 500,
                  }}
                >

                  <span
                    className="transition-all duration-500 group-hover:translate-x-1"
                  >
                    {faq.q}
                  </span>

                  <span
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "20px",
                      color: "#2D8A82",
                      transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                      display: "inline-block",
                    }}
                    className="group-open:rotate-45 group-hover:scale-110"
                  >
                    +
                  </span>

                </summary>

                <div
                  className="px-7 pb-6"
                  style={{
                    borderTop: "1px solid rgba(234,234,234,0.5)",
                  }}
                >

                  <p
                    style={{
                      color: "#4A4A4A",
                      fontSize: "15px",
                      lineHeight: 1.75,
                      paddingTop: "16px",
                    }}
                  >
                    {faq.a}
                  </p>

                </div>

              </details>
            </motion.div>

          ))}

        </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative py-36 overflow-hidden" style={{ background: "#FFFFFF" }}>
        <div className="absolute inset-0">
          <img src={ctaBg} alt="cta" className="w-full h-full object-cover" style={{ opacity: 0.12 }} />
        </div>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(178,216,213,0.3) 0%, transparent 70%)" }} />
        {/* glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(45,138,130,0.06) 0%, transparent 70%)" }} />

        <div className="relative max-w-4xl mx-auto text-center px-6">
          <p className="uppercase mb-5" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "41px", letterSpacing: "0.3em", color: "#2D8A82" }}>
            Join The Future
          </p>
          <h2
            className="mb-8"
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#4A4A4A" }}
          >
            Ready to Build the
            <span className="block italic" style={{ color: "#2A6F9E" }}>Future of Healthcare?</span>
          </h2>
          <p className="mb-14 max-w-xl mx-auto" style={{ color: "#4A4A4A", fontSize: "17px", lineHeight: 1.7 }}>
            Collaborate with innovators, researchers and developers to create impactful AI-powered healthcare solutions.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfCi2KowCwiiqUqpX6TBrmfhNuzewE22Idm84Khi7muQF009w/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 rounded-full font-semibold"
            style={{
              background: "#2D8A82",
              color: "#FFFFFF",
              fontSize: "16px",
              letterSpacing: "-0.01em",
              boxShadow: "0 0 40px rgba(45,138,130,0.35)",
              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px) scale(1.03)"; e.currentTarget.style.boxShadow = "0 0 64px rgba(45,138,130,0.5)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0) scale(1)"; e.currentTarget.style.boxShadow = "0 0 40px rgba(45,138,130,0.35)"; }}
          >
            Register for Hackathon
          </a>
        </div>
      </section>

    </main>
  );
};

export default Hackathon;