import { Sparkles } from 'lucide-react';
import pcosPcodImage from '../image/health/PCOSPCOD.webp';
import chronicImage from '../image/health/chronic-disease.webp';
import constipationImage from '../image/health/constipation.webp';
import gasImage from '../image/health/gas.webp';
import heartburnImage from '../image/health/heartburn.webp';
import fatImage from '../image/health/weight-balance.webp';
import skinImage from '../image/health/skin.webp';

const categories = [
  {
    title: 'PCOS/PCOD',
    image: pcosPcodImage,
    description: 'Hormone-balancing support and clean nutrition guidance',
    color: 'from-emerald-500 to-green-600',
  },
  {
    title: 'Chronic Disease',
    image: chronicImage,
    description: 'Long-term care protocols and lifestyle coaching',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'Constipation',
    image: constipationImage,
    description: 'Fiber-rich plans and gut motility support',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'Gas',
    image: gasImage,
    description: 'Bloating relief and digestion-friendly meal planning',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'Heartburn',
    image: heartburnImage,
    description: 'Acid control and soothing dietary protocols',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Fat',
    image: fatImage,
    description: 'Metabolic support and weight balance routines',
    color: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Skin',
    image: skinImage,
    description: 'Detox, hydration, and nutrient-focused plans',
    color: 'from-lime-500 to-green-600',
  },
];

const wellnessProducts = [
  {
    name: 'Digestive Soothe',
    image: heartburnImage,
    blurb: 'Soothing botanicals to calm acidity and support comfort.',
  },
  {
    name: 'Gut Cleanse',
    image: constipationImage,
    blurb: 'Gentle herbs supporting motility, detox, and microbiome balance.',
  },
  {
    name: 'Skin & Glow',
    image: skinImage,
    blurb: 'Nutrients and antioxidants to promote clear, healthy skin.',
  },
  {
    name: 'Weight Balance',
    image: fatImage,
    blurb: 'Metabolic support to aid natural weight management and energy.',
  },
];

export default function HBXStore() {
  return (
    <section id="store" className="py-24 bg-gradient-to-b from-clinical-white to-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
            AyurGenX Store —<br />
            <span className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
              Act on Guidance
            </span>
          </h2>
          <p className="text-xl text-brand-gray mb-2">
            Everything Your Body Needs, in One Place
          </p>
          <p className="text-lg text-brand-gray">
            Clean, natural, health-focused products curated for your goals.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-brand-gray mt-14 mb-6 text-center">Wellness Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {wellnessProducts.map((p, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-clinical-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-vitality-teal to-bio-tech-blue shadow">{p.name}</div>
                <p className="mt-3 text-brand-gray text-sm">{p.blurb}</p>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-vitality-teal to-bio-tech-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-clinical-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-40 w-full overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${category.color} shadow`}>{category.title}</div>
                <p className="mt-3 text-brand-gray text-sm">{category.description}</p>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-vitality-teal text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <Sparkles className="w-5 h-5" />
            <span>Purchase via AyurGenX App</span>
          </div>
        </div>
      </div>
    </section>
  );
}
