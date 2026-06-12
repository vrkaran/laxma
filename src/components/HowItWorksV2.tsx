import { Smartphone, Brain, Calendar, Package } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

const steps = [
  {
    number: '01',
    icon: Smartphone,
    title: 'AyurGenX Learns About Your Body',
    description: 'You take a short 2-min assessment + connect wearables for real health data.',
    color: 'from-vitality-teal to-bio-tech-blue',
  },
  {
    number: '02',
    icon: Brain,
    title: 'AI + Ayurveda Health Analysis',
    description: 'AyurGenX identifies your body type, imbalances & root causes.',
    color: 'from-healing-leaf to-healing-leaf',
  },
  {
    number: '03',
    icon: Calendar,
    title: 'Daily Personalized Guidance',
    description: 'You receive daily routine: what to eat, what to avoid, what workout suits your body, lifestyle & sleep tips.',
    color: 'from-ayur-gold to-pulse-coral',
  },
  {
    number: '04',
    icon: Package,
    title: 'Everything You Need in One Ecosystem',
    description: 'You can instantly act on guidance through AyurGenX-recommended food, natural wellness products & habit programs.',
    color: 'from-vitality-teal to-bio-tech-blue',
  },
];

export default function HowItWorksV2() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-slate-50 via-green-50 to-white overflow-hidden">
      <GradientOrb size="large" color="blue" position={{ top: '5%', left: '-8%' }} opacity={0.1} />
      <GradientOrb size="medium" color="amber" position={{ bottom: '15%', right: '-5%' }} opacity={0.1} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-4">
            How AyurGenX Works for Your Health
          </h2>
          <p className="text-xl text-brand-gray font-light">
            A seamless journey from assessment to transformation
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEvenIndex = index % 2 === 0;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : isEvenIndex
                    ? 'opacity-0 -translate-x-10'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={isEvenIndex ? '' : 'lg:order-2'}>
                  <div className="flex gap-6">
                    <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl group hover:scale-110 hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>

                    <div className="flex-1">
                      <div className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2`}>
                        STEP {step.number}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:flex items-center justify-center ${isEvenIndex ? '' : 'lg:order-1'}`}>
                  <div className="relative w-64 h-64">
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${step.color} opacity-20 blur-2xl`}></div>
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl">
                      <Icon className={`w-32 h-32 text-transparent bg-gradient-to-br ${step.color} bg-clip-text`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
