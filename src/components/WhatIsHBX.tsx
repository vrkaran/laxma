import { Brain, Leaf, Activity, Sparkles } from 'lucide-react';

const pillars = [
  { icon: Brain, label: 'AI Intelligence', color: 'from-bio-tech-blue to-bio-tech-blue' },
  { icon: Leaf, label: 'Ayurveda Wisdom', color: 'from-healing-leaf to-healing-leaf' },
  { icon: Activity, label: 'Data Tracking', color: 'from-ayur-gold to-pulse-coral' },
  { icon: Sparkles, label: 'Natural Products', color: 'from-vitality-teal to-bio-tech-blue' },
];

export default function WhatIsHBX() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
            Your Personal Daily Health Coach —<br />
            <span className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
              Powered by AI + Ayurveda
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-brand-gray leading-relaxed">
              AyurGenX is a deep-tech preventive health platform that replaces the need for multiple health experts —
              doctor, dietitian, fitness trainer, lifestyle mentor — with one AI-powered Personal Health Coach.
              It guides you daily with personalized food, lifestyle and wellness routines based on your body data.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-gray">
                  {pillar.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
