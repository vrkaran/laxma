import { Smartphone, Brain, Calendar, Package } from 'lucide-react';

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

export default function HowItWorks() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-4">
            How AyurGenX Works for Your Health
          </h2>
          <p className="text-xl text-brand-gray">Simple, personalized, and effective</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="flex gap-6">
                  <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="text-sm font-bold text-brand-gray mb-2">STEP {step.number}</div>
                    <h3 className="text-2xl font-bold text-brand-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-brand-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 w-12 h-0.5 bg-gradient-to-r from-bio-tech-blue/40 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
