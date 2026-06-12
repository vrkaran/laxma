import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const problems = [
  'Low Energy & Fatigue',
  'Bloating & Poor Digestion',
  'Stress & Poor Sleep',
  'Hair Fall & Skin Problems',
  'Weight Gain / Weight Loss',
  'Sugar, BP or Thyroid Issues',
  'Eating Unhealthy Due to Busy Life',
];

export default function HeroSection() {
  const [visibleTags, setVisibleTags] = useState<number[]>([]);

  useEffect(() => {
    problems.forEach((_, index) => {
      setTimeout(() => {
        setVisibleTags(prev => [...prev, index]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light-gray">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(148,163,184,0.08),_transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-clinical-white border border-light-gray mb-8 animate-fadeIn">
          <Sparkles className="w-4 h-4 text-bio-tech-blue" />
          <span className="text-sm font-medium text-brand-gray">Your Personal Health Transformation Starts Here</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-brand-gray mb-8 leading-tight animate-slideUp">
          Are You Struggling With These Health Problems Every Day?
        </h1>

        <div className="flex flex-wrap justify-center gap-3 mb-12 min-h-[200px]">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`px-6 py-3 bg-clinical-white rounded-full shadow-lg border border-light-gray text-brand-gray font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                visibleTags.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {problem}
            </div>
          ))}
        </div>

        <p className="text-xl text-brand-gray mb-10 max-w-2xl mx-auto animate-fadeIn">
          You're not alone. Today's lifestyle is silently damaging our health.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn">
          <button className="group px-8 py-4 bg-vitality-teal text-white rounded-full font-semibold text-lg shadow-xl hover:bg-vitality-teal/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Start Your Wellness Journey
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 bg-transparent text-brand-gray rounded-full font-semibold text-lg shadow-none hover:shadow-none hover:scale-105 transition-all duration-300 border-2 border-vitality-teal hover:bg-vitality-teal hover:text-white">
            Take 2-Min Health Check
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-clinical-white to-transparent"></div>
    </section>
  );
}
