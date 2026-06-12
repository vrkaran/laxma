import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEO from '../components/SEO';
import Daily_Conscious_CareImg from '../image/store/Daily_Conscious_Care.webp';
import WellnessImg from '../image/store/Wellness.webp';
import SpiritualImg from '../image/store/Spiritual.webp';
import NutritionImg from '../image/store/Nutrition.webp';
import HealthMonitoringImg from '../image/store/Health_&_Monitoring.webp';
import backgroundImg from '../image/store/background.webp';
import { 
  Leaf, Watch, Flower2, Droplets, Bell, 
  Brain, ShieldCheck, ArrowRight, Sparkles, 
  Database, Lock, Activity, Search, RefreshCw, CheckCircle2
} from 'lucide-react';
import HealthReportPopup from '../components/HBXHealthReportPopup';

// --- DATA: PRODUCT CATEGORIES (With Real Images) ---
const categories = [
  {
    id: "nutrition",
    title: "Ayurvedic & Clinical Nutrition",
    subtitle: "Internal Organ Health",
    icon: Leaf,
    color: "text-emerald-400",
    image: NutritionImg,
    items: [
      "Clinically validated Ayurvedic supplements",
      "Organ-specific nutrition (Heart, Liver, Gut)",
      "Preventive care formulations (Diabetes, BP)",
      "Seasonal immunity & detox kits"
    ],
    philosophy: "Food and supplements that support internal organ health, not just outward appearance."
  },
  {
    id: "tech",
    title: "Smart Health & Monitoring",
    subtitle: "Real-Time Bio-Tracking",
    icon: Watch,
    color: "text-blue-400",
    image: HealthMonitoringImg,
    items: [
      "Health wearables & monitoring devices",
      "Real-time tracking of heart rate & sleep",
      "AI-powered early risk detection",
      "Doctor alert systems for abnormal patterns"
    ],
    philosophy: "In India, people look young externally but face internal risks. We focus on what’s happening inside."
  },
  {
    id: "wellness",
    title: "Wellness Essentials",
    subtitle: "Yoga, Recovery & Lifestyle",
    icon: Flower2,
    color: "text-amber-400",
    image: WellnessImg,
    items: [
      "Eco-friendly yoga mats & cushions",
      "Recovery tools for posture & mobility",
      "Home wellness accessories",
      "Expert-recommended mindfulness gear"
    ],
    philosophy: "Wellness isn’t an event. It’s a daily habit."
  },
  {
    id: "care",
    title: "Daily Conscious Care",
    subtitle: "Toxin-Free Personal Care",
    icon: Droplets,
    color: "text-cyan-300",
    image: Daily_Conscious_CareImg,
    items: [
      "Ayurvedic face wash & cleansers",
      "Herbal soaps & body care",
      "Chemical-free, toxin-safe formulations",
      "Reduced hormonal & chemical load"
    ],
    philosophy: "What you apply on your skin matters as much as what you eat."
  },
  {
    id: "spirit",
    title: "Spiritual & Silent Healing",
    subtitle: "Mental & Emotional Detox",
    icon: Bell,
    color: "text-purple-400",
    image: SpiritualImg,
    items: [
      "Natural agarbatti & dhoop",
      "Aromatherapy & meditative aids",
      "Sound healing & energy tools",
      "Products supporting emotional detox"
    ],
    philosophy: "Healing is not only physical — mental and spiritual balance directly impact biological age."
  }
];

// --- ANIMATION COMPONENT ---
const FadeIn = ({ children, delay = 0, className }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function AyurGenXStorePage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [showAssessment, setShowAssessment] = useState(false);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-300 selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
      <SEO 
        title="AyurGenX Store - Integrated Ayurvedic Products"
        description="Shop clinically validated Ayurvedic supplements, smart health monitoring devices, wellness essentials, and toxin-free personal care products. Stay healthy from your home."
        keywords="Ayurvedic soap, Ayurvedic product, Ayurvedic medicine, Ayurvedic supplements, smart health monitoring, wellness essentials, toxin-free personal care"
      />
      {/* ================= 1. HERO SECTION ================= */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <img 
            src={backgroundImg} 
            alt="AyurGenX Store Background" 
            className="w-full h-full object-cover brightness-105 contrast-105 saturate-110"
            // @ts-ignore - React 18 supports this but types might not be updated or it prefers lowercase for custom DOM attributes in some versions
            fetchpriority="high"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/35 via-[#020617]/50 to-[#020617]/70 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,6,23,0)_0%,rgba(2,6,23,0.45)_60%,rgba(2,6,23,1)_100%)] opacity-35 z-10" />
        </motion.div>

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] z-10 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0F172A]/80 border border-emerald-500/20 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-100/90">AyurGenX Store</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1] tracking-tight">
              Integrated <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-amber-200">
                Products.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 border-t border-white/5 pt-8">
              Curated through <span className="text-white font-medium">Ayurvedic wisdom</span>, clinical science, and AI-backed personalization. <br className="hidden md:block" />
              Secured with <span className="text-amber-400 font-medium">blockchain-grade trust</span>.
            </p>

            <button
              aria-label="Take 2-minute health checkup"
              onClick={() => setShowAssessment(true)}
              className="group relative px-10 py-5 bg-white text-[#020617] font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-slate-200 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Health Assessment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
              </span>
            </button>
          </FadeIn>
        </div>
      </section>

      {/* ================= 2. ZIG-ZAG PRODUCT SECTIONS ================= */}
      <section className="py-20 bg-[#020617] relative">
        <div className="max-w-7xl mx-auto px-6">
          
          {categories.map((cat, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-32 lg:mb-48 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* IMAGE SIDE */}
              <FadeIn className="w-full lg:w-1/2 relative group">
                {/* Decorative Frame */}
                <div className={`absolute inset-0 border-2 ${idx % 2 === 0 ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'} border-white/5 rounded-[2rem] z-0 transition-transform group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                
                {/* Image Container */}
                <div className="relative z-10 rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-10`}></div>
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                    loading="lazy"
                  />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute bottom-8 left-8 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl">
                    <cat.icon size={32} className={cat.color} />
                  </div>
                </div>
              </FadeIn>

              {/* TEXT SIDE */}
              <FadeIn delay={0.2} className="w-full lg:w-1/2">
                <div className={`flex items-center gap-3 mb-6 ${cat.color}`}>
                  <span className="h-px w-8 bg-current"></span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">{cat.subtitle}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
                  {cat.title}
                </h2>

                {/* The "Philosophy" Quote */}
                <div className="p-6 border-l-2 border-white/10 bg-white/[0.02] mb-10 rounded-r-xl">
                  <p className="text-lg text-slate-300 font-light italic leading-relaxed">
                    "{cat.philosophy}"
                  </p>
                </div>

                <ul className="space-y-5 mb-10">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 group/item">
                      <div className={`mt-1 p-1 rounded-full bg-white/5 border border-white/10 group-hover/item:${cat.color.replace('text', 'border')} transition-colors`}>
                        <CheckCircle2 size={14} className="text-slate-400 group-hover/item:text-white transition-colors" />
                      </div>
                      <span className="text-slate-400 group-hover/item:text-slate-200 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="px-8 py-4 border border-white/20 rounded-full text-white font-bold hover:bg-white hover:text-[#020617] transition-all flex items-center gap-2">
                  Explore {cat.title.split(' ')[0]} <ArrowRight size={18} />
                </button>
              </FadeIn>

            </div>
          ))}

        </div>
      </section>

      {/* ================= 3. THE BRAIN (AI LOGIC) ================= */}
      <section className="py-32 px-6 bg-[#0B1121] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-emerald-400 mb-4">
              <Brain size={24} />
              <span className="font-bold uppercase tracking-widest text-xs">The Intelligence Layer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">How Store Personalization Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Activity, step: "01", title: "Assessment", desc: "Deep lifestyle & health evaluation." },
              { icon: Search, step: "02", title: "Review", desc: "AI + Ayurvedic clinical logic check." },
              { icon: Sparkles, step: "03", title: "Recommendation", desc: "Precise, curated product list." },
              { icon: RefreshCw, step: "04", title: "Optimization", desc: "Adapts as your body evolves." },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} className="relative group h-full">
                <div className="bg-[#020617] border border-white/10 p-8 rounded-3xl relative z-10 hover:border-emerald-500/40 transition-colors h-full flex flex-col">
                  <div className="text-6xl font-bold text-white/5 absolute top-4 right-6 font-serif">{item.step}</div>
                  <item.icon className="text-emerald-500 mb-6" size={32} />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
                {/* Connector Line (Desktop) */}
                {idx !== 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/10 z-0"></div>
                )}
              </FadeIn>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-400 italic">"Your store experience adapts with your metabolic and emotional state."</p>
          </div>
        </div>
      </section>

      {/* ================= 4. TRUST (BLOCKCHAIN) ================= */}
      <section className="py-24 px-6 bg-[#020617]">
        <div className="max-w-5xl mx-auto">
          <FadeIn className="bg-gradient-to-br from-[#0F172A] to-[#020617] border border-white/10 rounded-[3rem] p-10 md:p-16 relative overflow-hidden">
            {/* Abstract Tech Background */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)",
                backgroundSize: "24px 24px"
              }}
            ></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Lock size={12} /> Blockchain Grade Security
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                  Trust, Transparency & <br/> Data Sovereignty.
                </h2>
                <ul className="space-y-4">
                  {[
                    "Your health data stays yours",
                    "Tamper-proof medical records",
                    "No data selling, no shortcuts",
                    "Full sourcing transparency"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <ShieldCheck size={18} className="text-emerald-500" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#020617]/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm flex flex-col items-center text-center">
                <Database size={48} className="text-amber-500 mb-6" />
                <h4 className="text-white font-bold mb-2">Immutable Ledger</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every recommendation and health record is secured on a private blockchain ledger, ensuring history cannot be altered or accessed without your key.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ================= 5. FOOTER (FINAL LINE) ================= */}
      <section className="bg-[#020617] py-32 px-6 text-center relative border-t border-white/5">
         <div className="max-w-4xl mx-auto relative z-10">
           
           <div className="flex justify-center mb-8">
             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
           </div>

           <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
             AyurGenX is not a <br/> <span className="text-slate-600">product store.</span>
           </h2>
           
           <p className="text-xl text-slate-400 mb-12 leading-relaxed font-light max-w-2xl mx-auto">
             It’s a preventive health platform designed to extend your healthspan.
           </p>

           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <button className="px-12 py-5 bg-white text-[#020617] font-bold tracking-wide transition-all rounded-full hover:bg-slate-200 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
               Start Reverse Aging
             </button>
           </div>
         </div>
      </section>

      {/* ================= HEALTH CHECKUP POPUP ================= */}
      <HealthReportPopup
        isOpen={showAssessment}
        onClose={() => setShowAssessment(false)}
      />

    </div>
  );
}
