import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Brain, Target, Zap, 
  ChevronRight, ArrowLeft, Quote,
  Scale, Users, Microscope
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation variants for a "Manifesto" feel
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-[#2D8A82]/30 overflow-x-hidden">
      
      {/* --- BACK NAVIGATION --- */}
      <nav className="p-8 fixed top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#2D8A82] hover:text-white transition-colors">
          <ArrowLeft size={16} /> Back to Premium
        </Link>
      </nav>

      {/* --- SECTION 1: THE MANIFESTO HERO --- */}
      <section className="h-[70vh] flex flex-col items-center justify-center px-6 relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2D8A82]/10 via-transparent to-transparent opacity-50" />
        
        <motion.div 
          initial="hidden" animate="visible" variants={fadeInUp}
          className="max-w-4xl text-center z-10"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 tracking-tight">
            The AyurGenX <br/> <span className="italic text-[#2D8A82]">Manifesto</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
            In an era of automated certificates and participation badges, <br className="hidden md:block"/> 
            we chose to build a gate, not a hallway.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE CORE CONTRADICTION --- */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 text-[#2D8A82]/20"><Quote size={120} /></div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 relative z-10 leading-tight">
              Why being <br/> "Good Enough" <br/> is Dangerous ?
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              In preventive healthcare and AI systems, a 90% success rate is a 10% failure rate. In human health, that 10% is unacceptable. 
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our philosophy is rooted in the belief that **professional trust** is the only currency that matters. We don't certify skills; we validate character and judgment.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {[
              { 
                title: "Anti-Mediocrity", 
                desc: "We deliberately fail candidates who lack the discipline for detail. This protects the value of those who pass.",
                icon: Target 
              },
              { 
                title: "Real-World Friction", 
                desc: "Simulations are safe. Reality is messy. Our interns work in live environments within the IIT Madras ecosystem.",
                icon: Zap 
              }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-[#2D8A82]/30 transition-all">
                <card.icon className="text-[#2D8A82] mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE DUAL FOUNDATION (Visual representation) --- */}
      <section className="py-32 px-6 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">The DNA of a Leader</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-16 h-16 rounded-full bg-[#2D8A82] flex items-center justify-center text-white font-bold shadow-[0_0_30px_rgba(45,138,130,0.5)]">
              VS
            </div>
          </div>

          {/* IIT PILLAR */}
          <div className="p-10 rounded-[3rem] bg-[#0F172A] border border-emerald-500/20 text-left">
            <h3 className="text-[#2D8A82] font-black uppercase tracking-widest text-xs mb-4">The Engineering Side</h3>
            <h4 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">IIT Madras <br/> Rigor</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Derived from the most competitive engineering culture in the world. We value the "How" over the "What." 
            </p>
            <ul className="space-y-3">
              {["First-principles thinking", "Edge-case analysis", "Scalability mindset"].map((li, i) => (
                <li key={i} className="flex gap-2 text-xs font-bold text-slate-300"><ChevronRight size={14} className="text-[#2D8A82]"/> {li}</li>
              ))}
            </ul>
          </div>

          {/* IIM PILLAR */}
          <div className="p-10 rounded-[3rem] bg-[#0F172A] border border-amber-500/20 text-left">
            <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-4">The Leadership Side</h3>
            <h4 className="text-3xl font-serif font-bold text-white mb-6 tracking-tight">IIM-Style <br/> Philosophy</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Focused on ownership and decision-making quality. We don't create employees; we create platform owners.
            </p>
            <ul className="space-y-3">
              {["Extreme Ownership", "Strategic Foresight", "Ethical Responsibility"].map((li, i) => (
                <li key={i} className="flex gap-2 text-xs font-bold text-slate-300"><ChevronRight size={14} className="text-amber-500"/> {li}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE SELECTIVITY ETHOS --- */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-8">It’s not about elitism. <br/> It’s about responsibility.</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light mb-16">
            When you carry an AyurGenX certification, the market knows you have been through the fire. Our philosophy ensures that our brand remains a high-trust signal for the industry's most critical roles.
          </p>
          <Link to="/careers" className="inline-block px-12 py-5 bg-[#2D8A82] text-white font-bold rounded-full hover:shadow-[0_0_40px_rgba(45,138,130,0.4)] transition-all uppercase tracking-widest text-sm">
            Begin Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}