import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import pcosPcodImg from '../image/health/PCOSPCOD.webp';
import chronicImg from '../image/health/chronic-disease.webp';
import constipationImg from '../image/health/constipation.webp';
import gasImg from '../image/health/gas.webp';
import heartburnImg from '../image/health/heartburn.webp';
import skinImg from '../image/health/skin.webp';
import fatImg from '../image/health/weight-balance.webp';

const conditions: Record<string, { title: string; image?: string; description: string; highlights: string[] }> = {
  'pcos-pcod': {
    title: 'PCOS/PCOD',
    image: pcosPcodImg,
    description: 'Cycle regulation, hormonal balance, and symptom relief through Precision Ayurveda.',
    highlights: ['Cycle tracking', 'Anti-inflammatory foods', 'Stress modulation', 'Sleep optimization']
  },
  'chronic-disease': {
    title: 'Chronic Disease',
    image: chronicImg,
    description: 'Long-term care protocols, monitoring, and lifestyle optimization for chronic conditions.',
    highlights: ['Daily guidance', 'Medication adherence support', 'Biomarker tracking', 'Nutrition planning']
  },
  'constipation': {
    title: 'Constipation',
    image: constipationImg,
    description: 'Gut motility support, hydration guidance, and fiber-focused routines.',
    highlights: ['Meal timing', 'Hydration schedule', 'Fiber planning', 'Gentle botanicals']
  },
  'gas': {
    title: 'Gas',
    image: gasImg,
    description: 'Reduce bloating and improve digestion with tailored meal pairing and routines.',
    highlights: ['Food pairing', 'Microbiome-friendly meals', 'Agni support', 'Breathwork']
  },
  'heartburn': {
    title: 'Heartburn',
    image: heartburnImg,
    description: 'Acid control protocols with soothing dietary choices and lifestyle adjustments.',
    highlights: ['Trigger mapping', 'Soothing botanicals', 'Meal spacing', 'Posture habits']
  },
  'skin': {
    title: 'Skin',
    image: skinImg,
    description: 'Detox, hydration, and nutrient strategies to support clear, healthy skin.',
    highlights: ['Hydration plan', 'Antioxidant foods', 'Detox routines', 'Sleep hygiene']
  },
  'fat': {
    title: 'Weight Balance',
    image: fatImg,
    description: 'Metabolic support for sustainable fat loss and energy optimization.',
    highlights: ['Calorie guidance', 'Protein focus', 'Movement scheduling', 'Habit coaching']
  },
  'diabetes': {
    title: 'Diabetes',
    description: 'Glucose control, nutrition planning, and activity routines for metabolic health.',
    highlights: ['Carb mapping', 'Continuous guidance', 'Biomarker tracking', 'Meal sequencing']
  },
  'weight-loss': {
    title: 'Weight Loss',
    description: 'Personalized fat loss protocols focusing on metabolism, sleep, and movement.',
    highlights: ['Protein prioritization', 'NEAT increase', 'Sleep optimization', 'Adaptive meals']
  },
  'fatty-liver': {
    title: 'Fatty Liver',
    description: 'Liver-friendly nutrition and habits to reduce hepatic fat over time.',
    highlights: ['Sugar reduction', 'Healthy fats', 'Anti-inflammatory meals', 'Alcohol avoidance']
  },
  'women-care': {
    title: 'Women Care',
    description: 'Holistic protocols addressing hormonal balance, cycle health, and energy.',
    highlights: ['Cycle-aware planning', 'Stress modulation', 'Iron-rich foods', 'Recovery routines']
  },
};

export default function ConditionPage() {
  const { slug } = useParams();
  const data = slug ? conditions[slug] : undefined;
  const title = data?.title || 'Condition';
  const image = data?.image;
  const description = data?.description || 'Personalized guidance powered by Ayurveda + AI.';
  const highlights = data?.highlights || [];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <motion.header initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-brand-gray">{title}</h1>
        <p className="mt-3 text-brand-gray">{description}</p>
      </motion.header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="rounded-3xl overflow-hidden border border-light-gray bg-clinical-white shadow-sm">
          {image ? (
            <img src={image} alt={title} className="w-full h-[280px] object-cover" loading="lazy" />
          ) : (
            <div className="w-full h-[280px] bg-gradient-to-br from-light-gray to-clinical-white" />
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="space-y-3">
            {highlights.map((h, i) => (
              <div key={i} className="p-4 rounded-xl border border-light-gray bg-clinical-white text-brand-gray shadow-sm">
                {h}
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Link to="/how-it-works" className="px-5 py-3 rounded-full bg-vitality-teal text-white font-semibold hover:bg-vitality-teal/90 transition-colors">How It Works</Link>
            <Link to="/download" className="px-5 py-3 rounded-full border border-light-gray text-brand-gray font-semibold hover:bg-light-gray transition-colors">Get Started</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

