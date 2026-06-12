import { motion } from 'framer-motion';
import { useRef } from 'react';
import '../assets/custom-about.css';
import nirmaanImg from '../image/about/nirmaan.webp';
import karanImg from '../image/team/Karan.webp';
import afreenImg from '../image/team/afreen.webp';
import padmajaImg from '../image/team/Padmja.webp';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import asitImg from '../image/team/ASIT KUMAR.webp';
import ankitaImg from '../image/team/ankita.webp';
import sagnikImg from '../image/team/sagnik.webp';
import keerthiImg from '../image/team/keerthi.webp';
import khirodhImg from '../image/team/khirodh.webp';
import venkatImg from '../image/team/venkat.webp';
import RishiImg from '../image/team/Rishi.webp';
import SEO from '../components/SEO';

export default function About() {
  const imageUrl = import.meta.env.VITE_ABOUT_IMAGE_URL || nirmaanImg;
  const founderLinkedin = import.meta.env.VITE_LINKEDIN_FOUNDER || 'https://www.linkedin.com/in/karaniitm/';
  const founderEmail = import.meta.env.VITE_EMAIL_FOUNDER || 'mailto:contact@ayurgenx.com';
  const cofounderLinkedin = import.meta.env.VITE_LINKEDIN_COFOUNDER || 'https://www.linkedin.com/in/afriniitm/';
  const cofounderEmail = import.meta.env.VITE_EMAIL_COFOUNDER || 'mailto:contact@ayurgenx.com';
  const asitLinkedin = 'https://www.linkedin.com/in/asit-kumar-pradhan-00bb45177/';
  const teamRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SEO 
        title="About AyurGenX - AI-Powered Ayurveda Innovation"
        description="Learn about AyurGenX, a deep-tech preventive healthcare startup from IIT Madras integrating Ayurveda, AI, and Naturopathy to reverse lifestyle diseases."
        keywords="About AyurGenX, AI in Ayurveda, IIT Madras startup, preventive healthcare, Ayurvedic doctor, lifestyle disease prevention"
      />
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="about-slide">
        <div className="slide-media">
          <img
            src={imageUrl}
            alt="Sudha & Sankar Innovation Hub, IIT Madras"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/800x600?text=AyurGenX+Innovation+Hub';
            }}
          />
        </div>

        {/* ----- START: UPDATED "OUR STORY" SECTION ----- */}
        <div className="slide-content">
          <h2 className="text-3xl md:text-4xl text-gray-900">About Us &amp; Team</h2>
          <h3 className="text-xl md:text-2xl">Our Story</h3>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
            <p>
              <strong className="text-[#2D8A82]">AyurGenX</strong>™ is a deep-tech preventive healthcare startup built to address India’s rapidly growing lifestyle-disease crisis by integrating Ayurveda, Naturopathy, Artificial Intelligence, and Computer Vision into a single, intelligent health platform.
            </p>
            <p>
              <strong className="text-[#2D8A82]">AyurGenX</strong> is being built inside the <strong className="text-[#2D8A82]">IIT Madras</strong> innovation ecosystem, guided by mentors from <strong className="text-[#2D8A82]">IIT</strong> and <strong className="text-[#2D8A82]">IIM</strong> backgrounds, shaping a disciplined and research-driven approach to healthcare innovation. This foundation ensures that every product, protocol, and platform decision is rooted in engineering rigor, medical validation, and structured execution.
            </p>
            <p>
              Founded with the vision to make preventive healthcare personalized, affordable, and continuous, <strong className="text-[#2D8A82]">AyurGenX</strong> is building India’s first Reverse Aging Intelligence Platform — a unified AI-powered Personal Health Coach that helps individuals understand their internal organ health, detect early disease risks, and take preventive action.
            </p>
          </div>
        </div>
        {/* ----- END: UPDATED "OUR STORY" SECTION ----- */}

      </motion.section>

      {/* The rest of the file (Founders, Team Slider, etc.) remains unchanged */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="py-4"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-6">Founders &amp; Team</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Founder */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-green-200 shadow-sm mb-4"><img src={karanImg} alt="Karan Vishwakarma — Founder & CEO" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
              <div><h4 className="text-lg font-bold text-gray-900">Karan Vishwakarma</h4><p className="text-green-700 font-semibold">Founder &amp; CEO</p><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">AI &amp; Ayurveda Systems Architect. Building a mission-driven platform to reverse India’s lifestyle disease epidemic.</p><div className="mt-4 flex items-center justify-center gap-3"><a href={founderLinkedin} target="_blank" rel="noopener noreferrer" aria-label="Founder LinkedIn" className="w-10 h-10 rounded-full bg-white/60 backdrop-blur border border-slate-200 hover:bg-white text-slate-700 hover:text-green-700 shadow-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"><Linkedin className="w-5 h-5" /></a><a href={founderEmail} aria-label="Founder Email" className="w-10 h-10 rounded-full bg-white/60 backdrop-blur border border-slate-200 hover:bg-white text-slate-700 hover:text-green-700 shadow-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"><Mail className="w-5 h-5" /></a></div></div>
            </motion.div>
            {/* Co-Founder */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 via-green-500 to-teal-500 opacity-30 group-hover:opacity-60 transition-opacity" />
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-emerald-200 shadow-sm mb-4"><img src={afreenImg} alt="Afrin Bano — Co‑Founder" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
              <div><h4 className="text-lg font-bold text-gray-900">Afrin Bano</h4><p className="text-emerald-700 font-semibold">Co‑Founder</p><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">Wellness Operations &amp; User Experience Lead. Focused on empathy, preventive care workflows, and delightful journeys.</p><div className="mt-4 flex items-center justify-center gap-3"><a href={cofounderLinkedin} target="_blank" rel="noopener noreferrer" aria-label="Co‑Founder LinkedIn" className="w-10 h-10 rounded-full bg-white/60 backdrop-blur border border-slate-200 hover:bg-white text-slate-700 hover:text-emerald-700 shadow-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"><Linkedin className="w-5 h-5" /></a><a href={cofounderEmail} aria-label="Co‑Founder Email" className="w-10 h-10 rounded-full bg-white/60 backdrop-blur border border-slate-200 hover:bg-white text-slate-700 hover:text-emerald-700 shadow-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"><Mail className="w-5 h-5" /></a></div></div>
            </motion.div>
            {/* Mentor */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-blue-200 shadow-sm mb-4"><img src={padmajaImg} alt="Dr. Padmaja Mishra — Senior Ayurvedic Physician, Mentor" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" /></div>
              <div><h4 className="text-lg font-bold text-gray-900">Dr. Padmaja Mishra</h4><p className="text-blue-700 font-semibold">Senior Ayurvedic Physician • Mentor</p><p className="text-gray-600 mt-2 text-sm">23+ years of clinical experience guiding our evidence‑backed Ayurveda framework, diagnostics, and wellness protocols.</p></div>
            </motion.div>
            {/* Founding Pillar — Asit Kumar */}
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg border border-slate-100 p-6 flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-teal-200 shadow-sm mb-4 bg-white"><img src={asitImg} alt="Asit Kumar — Mentor" loading="lazy" className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-300" /></div>
              <div><h4 className="text-lg font-bold text-gray-900">Asit Kumar</h4><p className="text-teal-700 font-semibold">Founding Pillar</p><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">Asit Kumar, the backbone of AyurGenX, is the first to believe in our vision and supported us from the very beginning.</p><div className="mt-4 flex items-center justify-center gap-3"><a href={asitLinkedin} target="_blank" rel="noopener noreferrer" aria-label="Asit Kumar LinkedIn" className="w-10 h-10 rounded-full bg-white/60 backdrop-blur border border-slate-200 hover:bg-white text-slate-700 hover:text-teal-700 shadow-sm transition-all duration-300 hover:scale-105 flex items-center justify-center"><Linkedin className="w-5 h-5" /></a></div></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Slider */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="py-4"
      >
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-6">Team</h3>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" ref={teamRef}>
              {/* Dr. Ankita Agarkar */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-amber-200 shadow-sm mb-3 bg-white"><img src={ankitaImg} alt="Dr. Ankita Agarkar" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">Dr. Ankita Agarkar</h4><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">BAMS</span></div><p className="text-gray-600 mt-2 text-sm">Business Developer.</p>
              </div>
              {/* Khirodh */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-emerald-200 shadow-sm mb-3 bg-white"><img src={khirodhImg} alt="Khirodh" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">D khirod kumar</h4><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">Video Editor.</p>
              </div>
              {/* Keerthi Priya */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm mb-3 bg-white"><img src={keerthiImg} alt="Keerthi Priya" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">Keerthi Priya</h4><p className="text-gray-600 mt-2 text-sm">Project Assistant.</p>
              </div>
              {/* Sagnik */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm mb-3 bg-white"><img src={sagnikImg} alt="Sagnik" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">Sagnik Chakrabarty</h4><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">Content Writer.</p>
              </div>
              {/* Venkatesh */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm mb-3 bg-white"><img src={venkatImg} alt="Venkateswarlu Thatha" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">Venkateswarlu thatha</h4><p className="text-gray-600 mt-2 text-sm">UI&UX designer.</p>
              </div>
              {/* Rishi */}
              <div className="snap-center min-w-[260px] bg-white rounded-2xl shadow-md border border-slate-100 p-5 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm mb-3 bg-white"><img src={RishiImg} alt="Rishi" loading="lazy" className="w-full h-full object-cover" /></div>
                <h4 className="text-base font-bold text-gray-900">Rishi</h4><div className="mt-1"><span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">IIT Madras</span></div><p className="text-gray-600 mt-2 text-sm">Business Developer.</p>
              </div>
            </div>
            
            <button
              type="button"
              aria-label="Scroll team left"
              onClick={() => teamRef.current?.scrollBy({ left: -320, behavior: 'smooth' })}
              className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm rounded-full p-2 hidden md:flex"
            ><ChevronLeft className="w-5 h-5" /></button>
            <button
              type="button"
              aria-label="Scroll team right"
              onClick={() => teamRef.current?.scrollBy({ left: 320, behavior: 'smooth' })}
              className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-700 border border-slate-200 shadow-sm rounded-full p-2 hidden md:flex"
            ><ChevronRight className="w-5 h-5" /></button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
