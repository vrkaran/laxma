import { Moon, UtensilsCrossed, Briefcase, Flame } from 'lucide-react';

const examples = [
  {
    icon: Moon,
    condition: 'If you slept only 2 hours:',
    action: 'AyurGenX changes your next morning from gym workout → to 15-min Yoga (to avoid fat storage)',
    color: 'from-bio-tech-blue to-bio-tech-blue',
  },
  {
    icon: UtensilsCrossed,
    condition: 'If you overate last night:',
    action: "Today's meals are adjusted to support digestion & balance sugar levels.",
    color: 'from-bio-tech-blue to-bio-tech-blue',
  },
  {
    icon: Briefcase,
    condition: 'If your week was stressful:',
    action: 'AyurGenX adds calming habits, sleep routines, and anti-stress foods.',
    color: 'from-bio-tech-blue to-bio-tech-blue',
  },
  {
    icon: Flame,
    condition: 'If you burned fewer calories than usual:',
    action: 'AyurGenX modifies your meal portions & goals.',
    color: 'from-bio-tech-blue to-bio-tech-blue',
  },
];

export default function RealTimeTracking() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
        AyurGenX Updates Your Plan Daily<br />
            <span className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
              Based on Your Life
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${example.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-gray mb-3">
                  {example.condition}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {example.action}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block px-8 py-4 bg-clinical-white rounded-2xl border-2 border-vitality-teal/20">
            <p className="text-lg font-semibold text-brand-gray">
              Your plan evolves <span className="text-vitality-teal">daily, weekly & monthly</span> based on your data —<br />
              just like a real health coach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
