import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypewriter } from '../hooks/useTypewriter';
import GradientOrb from './GradientOrb';
import HealthBubbleGame from './HealthBubbleGame';
import HBXHealthReportPopup from './HBXHealthReportPopup';

const problems = [
  'PCOS/PCOD',
  'Chronic Disease',
  'Constipation',
  'Gas',
  'Heartburn',
  'Skin',
  'Fat',
  'Thyroid',
  'diabetes',
  'weight-loss',
  'fatty-liver',
  'women-care',
];

// Local image assets for hero disease bubbles (match available files)
import pcosPcodImg from '../image/health/PCOSPCOD.webp';
import chronicImg from '../image/health/chronic-disease.webp';
import constipationImg from '../image/health/constipation.webp';
import gasImg from '../image/health/gas.webp';
import heartburnImg from '../image/health/heartburn.webp';
import skinImg from '../image/health/skin.webp';
import fatImg from '../image/health/weight-balance.webp';
import ThyroidImg from '../image/health/Thyroid.webp';
import diabetesImg from '../image/health/diabetes.webp';
import fattyLiverImg from '../image/health/fatty-liver.webp';
import weightLossImg from '../image/health/weight-loss.webp';
import womencareImg from '../image/health/women-care.png';

// Structured data: title, image, description (matches requested format)
const problemMedia = [
  { title: 'PCOS/PCOD', image: pcosPcodImg, description: 'Cycle regulation and hormonal balance support' },
  { title: 'Chronic Disease', image: chronicImg, description: 'Long-term care protocols and tracking' },
  { title: 'Constipation', image: constipationImg, description: 'Gut motility and fiber-focused routines' },
  { title: 'Gas', image: gasImg, description: 'Bloating relief and digestion-friendly foods' },
  { title: 'Heartburn', image: heartburnImg, description: 'Acid control and soothing dietary choices' },
  { title: 'Skin', image: skinImg, description: 'Detox, hydration, and nutrient care' },
  { title: 'Fat', image: fatImg, description: 'Metabolic support and balanced portions' },
  { title: 'Thyroid', image: ThyroidImg, description: 'Hormonal balance and metabolism support' },
  { title: 'Diabetes', image: diabetesImg, description: 'Glucose control and metabolic balance' },
  { title: 'Weight Loss', image: weightLossImg, description: 'Sustainable fat loss and energy' },
  { title: 'Fatty Liver', image: fattyLiverImg, description: 'Liver-friendly nutrition and habits' },
  { title: 'Women Care', image: womencareImg, description: 'Holistic protocols for women’s health' },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
const DISPLAY_COUNT = 6;

// Force re-render
export default function HeroSectionV2() {
  const [visibleTags, setVisibleTags] = useState<number[]>([]);
  const [showHealthReport, setShowHealthReport] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const mainTitle = "Are You Struggling With These Health Problems Every Day?";
  const { displayedText: typewriterText } = useTypewriter({
    text: mainTitle,
    speed: 40,
    delay: 300,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prev => (prev + DISPLAY_COUNT) % problems.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setVisibleTags([]);
    const displayIndices = Array.from({ length: DISPLAY_COUNT }, (_, i) => (startIndex + i) % problems.length);
    const timers = displayIndices.map((_, idx) =>
      setTimeout(() => setVisibleTags(prev => [...prev, idx]), 200 + idx * 100)
    );
    return () => timers.forEach(clearTimeout);
  }, [startIndex]);

  useEffect(() => {
    const img = new Image();
    img.src = womencareImg;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-gray pt-20" style={{ fontFamily: "'Space Grotesk', sans-serif"}}>
      <GradientOrb size="large" color="blue" position={{ top: '-10%', right: '-5%' }} />
      <GradientOrb size="large" color="green" position={{ bottom: '-15%', left: '10%' }} />
      <GradientOrb size="medium" color="amber" position={{ top: '40%', left: '-10%' }} />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(67,160,71,0.10),_transparent_50%),radial-gradient(ellipse_at_80%_80%,_rgba(2,119,189,0.10),_transparent_50%)]"></div>

      

      {/* Interactive mini-game bubbles */}
      <HealthBubbleGame />

      <div className="relative z-30 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinical-white border border-light-gray mb-8 animate-fadeIn shadow-lg">
          <Sparkles className="w-4 h-4 text-healing-leaf animate-pulse" />
          <span className="text-sm font-medium bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
            Combining 5000+ Years of Ayurveda with Modern AI
          </span>
        </div>

        <div className="mb-10 min-h-32">
         <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.04em]">
            {typewriterText}
            <span className="animate-pulse text-vitality-teal">|</span>
          </h1>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -12, filter: 'blur(6px)' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="flex flex-wrap justify-center gap-4 mb-12 min-h-[200px] perspective"
          >
            {Array.from({ length: DISPLAY_COUNT }, (_, i) => (startIndex + i) % problems.length).map((globalIndex, localIndex) => (
              <motion.div
                key={globalIndex}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: localIndex * 0.05 }}
              >
                <Link
                  to={`/diseases/${slugify(problemMedia[globalIndex]?.title ?? problems[globalIndex])}`}
                  className={`problem-badge w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg border border-green-100 hover:shadow-2xl hover:scale-110 hover:-translate-y-1 transition-all duration-300 grid place-items-center relative ${
                    visibleTags.includes(localIndex)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${localIndex * 80}ms`,
                    ['--pulseDelay' as any]: `${localIndex * 0.18}s`,
                    ['--glowDelay' as any]: `${localIndex * 0.12}s`,
                    ['--shineDelay' as any]: `${localIndex * 0.22}s`,
                  }}
                  aria-label={problems[globalIndex]}
                  title={problems[globalIndex]}
                >
                  <div className="badge-shine badge-float absolute inset-0 rounded-full overflow-hidden"
                       style={{ ['--floatDelay' as any]: `${localIndex * 0.14}s`, ['--floatDuration' as any]: '6.8s', ['--floatRotate' as any]: '0.12deg' }}>
                    {problemMedia[globalIndex]?.image ? (
                      <img
                        src={problemMedia[globalIndex]?.image}
                        alt={problemMedia[globalIndex]?.title ?? problems[globalIndex]}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        {...(problemMedia[globalIndex]?.title === 'Women Care' ? { fetchpriority: 'high' } : {})}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-blue-100 grid place-items-center">
                        <span className="px-3 text-[11px] font-semibold text-emerald-800">
                          {problemMedia[globalIndex]?.title ?? problems[globalIndex]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="badge-glow absolute inset-0 rounded-full bg-gradient-to-r from-healing-leaf to-bio-tech-blue blur opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="text-xl text-brand-gray mb-10 max-w-2xl mx-auto animate-fadeIn font-light">
            You're not alone. Modern lifestyle is silently damaging our health. AyurGenX brings ancient wisdom together with cutting-edge AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
          <Link
            to="/#how-it-works"
            className="group relative px-8 py-4 bg-pulse-coral text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden"
            aria-label="Start Your Wellness Journey"
          >
            <div className="absolute inset-0 bg-pulse-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center gap-2">
              Start Your Wellness Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <button onClick={() => setShowHealthReport(true)} className="px-8 py-4 bg-clinical-white backdrop-blur-md text-brand-gray rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-light-gray hover:border-vitality-teal hover:bg-light-gray">
            Take 2-Min Health Check
          </button>
        </div>

        {/* Health Report Popup */}
        <HBXHealthReportPopup
          isOpen={showHealthReport}
          onClose={() => setShowHealthReport(false)}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-clinical-white via-clinical-white/50 to-transparent"></div>
    </section>
  );
}
