import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import background_programImg from '../image/store/background_program.webp';
import { 
  TrendingUp, Briefcase, CheckCircle2, XCircle, ArrowRight, 
  Zap, Lock, Star, BookOpen, DollarSign, Users, ShieldCheck, 
  Crown, AlertTriangle, Check, Award, Brain, 
  Scale, Activity, Stethoscope, Laptop, Microscope, GraduationCap
} from 'lucide-react';

// --- ANIMATION CONFIG ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AyurGenXPremiumPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      <SEO 
        title="Internship in AI Healthcare | AyurGenX HealthTech Internship Program"
        description="Join the AyurGenX AI Healthcare Internship Program. Get hands-on experience in HealthTech, certification after internship, and eligibility for a paid apprenticeship."
      />
      
      {/* ================= 1. HERO SECTION (Cinematic) ================= */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/60 to-[#020617] z-10" />
          <img 
            src={background_programImg} 
            alt="AyurGenX Programs Background" 
            className="w-full h-full object-cover opacity-80"
            loading="eager"
            decoding="async"
            // @ts-ignore - fetchpriority is the correct DOM attribute for React 18+ to avoid warnings
            fetchpriority="high"
          />
        </motion.div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0F172A]/80 border border-amber-500/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-100/90">Selectivity: Top 1–5% Only</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1] tracking-tight">
              Rarity Creates <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-amber-200">
                True Value.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 border-t border-white/5 pt-8">
              A professional validation built within the <span className="text-white font-medium">IIT Madras Innovation Ecosystem</span>. 
              <br className="hidden md:block"/> A mark of excellence. A signal of trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/careers" className="group relative px-10 py-5 bg-gradient-to-r from-emerald-900 to-[#020617] border border-emerald-500/30 text-emerald-100 font-bold text-lg rounded-full overflow-hidden transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <span className="relative z-10 flex items-center gap-3">
                  Apply for Internship <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
              </Link>

              <Link to="/ambassador" className="group relative px-10 py-5 bg-gradient-to-r from-vitality-teal to-[#020617] border border-emerald-500/30 text-emerald-100 font-bold text-lg rounded-full overflow-hidden transition-all hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <span className="relative z-10 flex items-center gap-3">
                  Explore Campus Ambassador ↗
                </span>
              </Link>

              <Link to="/ayurgenx-philosophy" className="px-10 py-5 text-white font-bold text-lg border border-white/10 rounded-full hover:bg-white/5 transition-all backdrop-blur-sm">
                Explore Philosophy
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE INTRODUCTION (Bento Grid)  ================= */}
      <section className="py-32 px-6 relative bg-[#020617]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
            {/* ================= <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500 mb-4">The Definition</h2> ================= */}
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white">What Is The AyurGenX Certified?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            
            {/* CARD 1: MAIN DEFINITION (Large) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-[#0F172A] border border-white/10 rounded-[2rem] p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] group-hover:bg-emerald-500/10 transition-all duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 text-emerald-400">
                    <Award size={32} />
                  </div>
                  <h4 className="text-xl font-bold text-white">A Signal of Trust</h4>
                </div>
                <p className="text-2xl text-slate-300 leading-relaxed font-light mb-8">
                  The AyurGenX Certified Certificate is a <span className="text-white font-medium">highly selective professional validation</span>, awarded only to individuals who demonstrate exceptional capability, discipline, and responsibility.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-slate-400 border border-white/5">IIT Madras Ecosystem</span>
                  <span className="px-4 py-2 bg-white/5 rounded-full text-xs font-bold text-slate-400 border border-white/5">AI Preventive Models</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: THE CRITICAL QUESTION (Vertical) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 bg-gradient-to-br from-amber-900/20 to-[#0F172A] border border-amber-500/20 rounded-[2rem] p-10 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>
              <div className="relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-500/80 mb-6">The Litmus Test</p>
                <h4 className="text-2xl font-serif font-bold text-white leading-tight mb-4">
                  "Can this person be trusted with real responsibility?"
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  This answers the one critical question for recruiters, institutions, and collaborators.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: WHAT IT MEANS (Wide) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-12 bg-[#0F172A] border border-white/10 rounded-[2rem] p-8 mt-6"
            >
              <h5 className="text-sm font-bold uppercase text-slate-500 mb-6 tracking-widest">What Being Certified Means</h5>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: Brain, title: "Independent Thinking", desc: "Not instruction-following" },
                  { icon: Scale, title: "High-Quality Judgment", desc: "Reasoning in real contexts" },
                  { icon: ShieldCheck, title: "Ethical Responsibility", desc: "Sensitive tech systems" },
                  { icon: Lock, title: "Consistency Over Time", desc: "No short-term sprints" },
                  { icon: Activity, title: "Live Platforms", desc: "Not simulated environments" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-emerald-500/30 transition-all">
                    <item.icon className="text-emerald-500 mb-3" size={24} />
                    <h5 className="text-sm font-bold text-white mb-1">{item.title}</h5>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 3. WHO IS THIS FOR? (New Premium Grid) ================= */}
      <section className="py-24 px-6 bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Who Is This Program For?</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Designed for individuals seeking real responsibility, rigorous evaluation, and long-term professional growth — not just short-term credentials.
              </p>
            </div>
            <div className="bg-amber-900/10 border border-amber-500/20 rounded-2xl p-6 flex items-start gap-4">
              <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-amber-200 font-bold mb-1">Important Note</h4>
                <p className="text-sm text-amber-200/70">
                  This is NOT a coding course. AI is taught from a clinical, systems, and preventive-care perspective.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Healthcare */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 group hover:border-emerald-500/30 transition-all">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                <Stethoscope size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Healthcare & Wellness</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Ayurveda & Naturopathy</li>
                <li>• Yoga & Lifestyle</li>
                <li>• Preventive Care</li>
              </ul>
            </motion.div>

            {/* Card 2: HealthTech */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 group hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                <Microscope size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">HealthTech & Non-Tech</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Operations & Research</li>
                <li>• Product & Quality</li>
                <li>• Clinical Support</li>
              </ul>
            </motion.div>

            {/* Card 3: Tech & AI */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 group hover:border-purple-500/30 transition-all">
              <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                <Laptop size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Tech & AI Professionals</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Applied AI Systems</li>
                <li>• Data-Driven Health</li>
                <li>• Platform Design</li>
              </ul>
            </motion.div>

            {/* Card 4: Students */}
            <motion.div whileHover={{ y: -5 }} className="bg-[#0F172A] border border-white/5 rounded-3xl p-8 group hover:border-amber-500/30 transition-all">
              <div className="w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Early-Career</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Ready for Discipline</li>
                <li>• Ethics & Ownership</li>
                <li>• Long-Term Growth</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 4. THE DIFFERENCE (Comparison) ================= */}
      <section className="py-24 px-6 bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Why This Certification <br/> <span className="text-slate-600">Is Different ?</span>
              </h2>
              <div className="h-0.5 w-24 bg-gradient-to-r from-amber-500 to-transparent mb-8"></div>
              <p className="text-xl text-slate-400 leading-relaxed font-light mb-8">
                Just as top institutions distinguish completion from distinction, AyurGenX distinguishes effort from proven capability.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={stagger} 
              className="grid gap-4"
            >
              {[
                { title: "Performance-Based", sub: "Not attendance-based" },
                { title: "Real System Exposure", sub: "Not theory or simulations" },
                { title: "Distinction vs Completion", sub: "Clear separation of excellence" },
                { title: "Ethics-First Evaluation", sub: "Not output-at-any-cost" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp} 
                  className="flex items-center justify-between p-6 bg-[#0F172A] border border-white/5 rounded-2xl hover:border-emerald-500/30 transition-colors group"
                >
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.sub}</p>
                  </div>
                  <CheckCircle2 className="text-slate-700 group-hover:text-emerald-500 transition-colors" size={24} />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 5. DUAL FOUNDATION ================= */}
      <section className="py-32 px-6 relative bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Dual Foundation</h2>
            <p className="text-slate-400 text-lg">Where technical innovation meets managerial rigor.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* IIT Pillar */}
            <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[2rem] bg-gradient-to-br from-emerald-900/10 to-[#0F172A] border border-white/10 backdrop-blur-md group">
              <div className="w-14 h-14 bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                <Zap className="text-emerald-400" size={28} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Built Within <br/> <span className="text-emerald-400">IIT Madras Ecosystem</span>
              </h3>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Problem-solving valued over theory</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Long-term execution matters</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 shrink-0"/> Systems built with responsibility</li>
              </ul>
            </motion.div>

            {/* IIM Pillar */}
            <motion.div whileHover={{ y: -5 }} className="p-10 rounded-[2rem] bg-gradient-to-br from-amber-900/10 to-[#0F172A] border border-white/10 backdrop-blur-md group">
              <div className="w-14 h-14 bg-amber-900/20 rounded-2xl flex items-center justify-center mb-8 border border-amber-500/20 group-hover:border-amber-500/50 transition-colors">
                <BookOpen className="text-amber-400" size={28} />
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Mentored Through <br/> <span className="text-amber-400">IIM-Style Philosophy</span>
              </h3>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Decision-making quality matters</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Ownership valued over instruction</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-amber-500 shrink-0"/> Performance judged over time</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 6. THE FUNNEL (1-5%)
      <section className="py-32 px-6 bg-[#020617] border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Only 1–5% Are Certified</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-20">
            Entry may be open. Distinction is rare. This selectivity is non-negotiable and inspired by IIT/IIM rigor.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { num: '01', title: 'Participation', sub: 'Many Join', desc: 'Entry open to eligible backgrounds.', color: 'text-slate-600' },
              { num: '02', title: 'Completion', sub: 'Fewer Finish', desc: 'Requires full duration completion & ethics.', color: 'text-emerald-700' },
              { num: '03', title: 'Certification', sub: 'Elite Only', desc: 'Top 1-5% cleared for excellence.', color: 'text-amber-500' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 border border-white/5 rounded-2xl hover:bg-white/[0.02] transition-colors relative overflow-hidden">
                <div className={`text-7xl font-bold opacity-10 absolute -top-4 -right-4 ${item.color}`}>{item.num}</div>
                <div className="relative z-10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{item.sub}</h4>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>  ================= */}

      {/* ================= 7. CERTIFICATION TRACKS ================= */}
      <section className="py-32 px-6 bg-[#020617] relative border-t border-white/5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none"></div>
         <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Certification Tracks</h2>
              <p className="text-slate-400 text-lg">Clear differentiation between participation and excellence.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Card 1: Participating Intern */}
              <motion.div whileHover={{ y: -5 }} className="bg-[#0f172a] border border-slate-800 p-8 rounded-3xl relative overflow-hidden group">
                <div className="inline-block px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full">Level 1</div>
                <h3 className="text-2xl font-bold text-white mb-2">Participating Intern</h3>
                <p className="text-sm text-slate-500 mb-8 font-serif italic">Entry & Exposure Level</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-slate-400"><Check size={16} className="text-slate-600 mt-0.5"/> Access to mentorship sessions</li>
                  <li className="flex gap-3 text-sm text-slate-400"><Check size={16} className="text-slate-600 mt-0.5"/> Intro to AI-enabled prevention</li>
                  <li className="flex gap-3 text-sm text-slate-400"><Check size={16} className="text-slate-600 mt-0.5"/> Observational role</li>
                </ul>
                <div className="pt-6 border-t border-white/5">
                  <span className="text-xs font-bold text-red-400 flex items-center gap-2">
                    <XCircle size={14} className="text-red-500"/> Participation ≠ Certification
                  </span>
                </div>
              </motion.div>

              {/* Card 2: Completing Intern */}
              <motion.div whileHover={{ y: -5 }} className="bg-gradient-to-b from-[#0f172a] to-[#064e3b]/20 border border-emerald-500/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 inset-x-0 h-1 bg-emerald-600/50"></div>
                <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full border border-emerald-500/20">Level 2</div>
                <h3 className="text-2xl font-bold text-white mb-2">Completing Intern</h3>
                <p className="text-sm text-emerald-400/80 mb-8 font-serif italic">Professional Exposure Level</p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5"/> Complete full duration</li>
                  <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5"/> Meet ethics standards</li>
                  <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-emerald-500 mt-0.5"/> Contribute under supervision</li>
                </ul>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Certificate Awarded</p>
                  <span className="text-sm font-bold text-emerald-100/90">Intern – AI in Healthcare</span>
                </div>
              </motion.div>

              {/* Card 3: Elite */}
              <motion.div whileHover={{ y: -8 }} className="bg-[#0f172a] border border-amber-500/30 p-8 rounded-3xl relative overflow-hidden group shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:bg-amber-500/30 transition-all"></div>
                              <div className="inline-block px-3 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-widest mb-6 rounded-full shadow-lg shadow-amber-500/20">Level 3 (Elite)</div>
                              <h3 className="text-2xl font-bold text-white mb-2">AyurGenX Certified</h3>
                              <p className="text-sm text-amber-400 mb-8 font-serif italic">Highest Distinction</p>
                              
                              <ul className="space-y-4 mb-8 relative z-10">
                                <li className="flex gap-3 text-sm text-slate-200"><Star size={16} className="text-amber-400 mt-0.5" fill="currentColor"/> Independent decision-making</li>
                                <li className="flex gap-3 text-sm text-slate-200"><Star size={16} className="text-amber-400 mt-0.5" fill="currentColor"/> High quality clinical logic</li>
                                <li className="flex gap-3 text-sm text-slate-200"><Star size={16} className="text-amber-400 mt-0.5" fill="currentColor"/> Patient-handling maturity</li>
                                <li className="flex gap-3 text-sm text-slate-200"><Star size={16} className="text-amber-400 mt-0.5" fill="currentColor"/> Top 1-5% Only</li>
                              </ul>
                              <div className="pt-6 border-t border-white/10 relative z-10">
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">Elite Certification Title</p>
                                <span className="text-sm font-bold text-white">AyurGenX Certified HealthTech Professional</span>
                                <p className="text-xs text-amber-500/80 mt-1">Specialization: Preventive Analytics & AI</p>
                              </div>
                            </motion.div>

            </div>
         </div>
      </section>

      {/* ================= 8. THE PREMIUM PATHWAY ================= */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#020617] border-t border-white/5">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Context */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Crown size={12} fill="currentColor" /> Exclusive Pathway
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                  Beyond the <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-white">Internship</span>
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  AyurGenX does not convert interns directly. Instead, selected <span className="text-white font-medium">Certified Interns</span> move into a high-responsibility track.
                </p>
              </div>

              {/* The "Gold Card" */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group rounded-3xl p-[1px] bg-gradient-to-br from-amber-300/40 via-amber-500/10 to-transparent shadow-2xl shadow-amber-900/20"
              >
                <div className="relative h-full bg-[#0F172A] rounded-3xl p-8 overflow-hidden backdrop-blur-xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-all duration-700"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-amber-400">
                        <DollarSign size={24} />
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] uppercase tracking-widest text-amber-500/60 font-bold mb-1">Status</p>
                        <p className="text-amber-400 font-bold text-sm bg-amber-500/10 px-2 py-1 rounded border border-amber-500/20">PAID & DRIVEN</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">Paid Apprenticeship</h3>
                    <p className="text-slate-400 text-sm mb-10 border-b border-white/5 pb-6">
                      Apprentices function as junior professionals, owning real workflows.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Duration</p>
                        <p className="text-lg font-medium text-white">12–24 Weeks</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Responsibility</p>
                        <p className="text-lg font-medium text-white">Full Ownership</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Vertical Timeline */}
            <div className="lg:col-span-7 relative pl-8 lg:pl-0 mt-8 lg:mt-0">
              <div className="absolute left-[39px] lg:left-[43px] top-4 bottom-0 w-[2px] bg-gradient-to-b from-slate-800 via-emerald-500/50 to-amber-500/50"></div>

              <div className="space-y-16">
                
                {/* Phase 01 */}
                <div className="relative flex gap-8 group">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-[#020617] border border-slate-800 rounded-full flex items-center justify-center group-hover:border-slate-600 transition-colors">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-500">
                      <Briefcase size={20} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phase 01</h4>
                    <h3 className="text-2xl font-bold text-white mb-2">Internship</h3>
                    <p className="text-slate-400 max-w-md">Focus on learning, mentorship, and contribution.</p>
                  </div>
                </div>

                {/* Phase 02 */}
                <div className="relative flex gap-8 group">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-[#020617] border border-emerald-500/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                    <div className="w-12 h-12 bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-400">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">Phase 02</h4>
                    <h3 className="text-2xl font-bold text-white mb-2">Certification</h3>
                    <p className="text-slate-400 max-w-md">Validation of excellence. Top 5% clearance.</p>
                  </div>
                </div>

                {/* Phase 03 (Highlight) */}
                <div className="relative flex gap-8 group">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-[#020617] border-2 border-amber-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                    <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-[#020617] shadow-lg">
                      <TrendingUp size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">Phase 03</h4>
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Paid Apprenticeship</h3>
                    <p className="text-slate-300 max-w-md">Selected candidates enter a paid role with deep responsibility.</p>
                  </div>
                </div>

                {/* Phase 04 */}
                <div className="relative flex gap-8 group">
                  <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-[#020617] border border-slate-800 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                    <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-300">
                      <Users size={20} />
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Future</h4>
                    <h3 className="text-2xl font-bold text-white mb-2">Career Progression</h3>
                    <p className="text-slate-400 max-w-md">Core Team roles, Research Fellowships, or Alumni Network.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 9. FOOTER (ETHICS) ================= */}
      <section className="bg-[#020617] py-32 px-6 text-center text-white relative border-t border-white/5">
         <div className="max-w-4xl mx-auto relative z-10">
           
           <div className="flex justify-center mb-10">
             <div className="p-5 bg-emerald-500/5 rounded-full border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
               <Lock size={32} className="text-emerald-400" />
             </div>
           </div>

           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Ethics & Responsibility</h2>
           <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed font-light">
             AyurGenX maintains strict standards. No unsupervised medical decisions. No diagnostic authority granted to interns. AI is used only as a supportive tool.
           </p>

           <div className="inline-block p-10 bg-gradient-to-b from-white/5 to-transparent border border-white/10 backdrop-blur-md mb-16 max-w-2xl rounded-2xl">
             <p className="text-xl font-serif italic text-white/90">
               “Top-performing AyurGenX Certified Interns are offered a paid apprenticeship, where they take on real ownership within our preventive healthcare platform.”
             </p>
           </div>

           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <Link to="/careers" className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold tracking-wide transition-all shadow-xl shadow-emerald-900/50 rounded-lg uppercase text-sm">
               Apply for Internship
             </Link>
             <Link to="/about" className="px-10 py-4 bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold tracking-wide transition-all rounded-lg uppercase text-sm">
               Learn More
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
}
