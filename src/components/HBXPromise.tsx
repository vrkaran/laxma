import { Leaf, Droplet, Shield, Heart } from 'lucide-react';

const promises = [
  {
    icon: Leaf,
    title: 'No Palm Oil',
    color: 'from-healing-leaf to-healing-leaf',
  },
  {
    icon: Droplet,
    title: 'No Artificial Colors/Flavors',
    color: 'from-vitality-teal to-bio-tech-blue',
  },
  {
    icon: Shield,
    title: 'No Shortcuts',
    color: 'from-ayur-gold to-pulse-coral',
  },
  {
    icon: Heart,
    title: 'Only Clean, Pure, Honest Health',
    color: 'from-pulse-coral to-pulse-coral',
  },
];

export default function HBXPromise() {
  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">
            The AyurGenX Promise
          </h2>
          <p className="text-2xl font-semibold bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
            Health First. Not Compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {promises.map((promise, index) => {
            const Icon = promise.icon;
            return (
              <div
                key={index}
                className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${promise.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-brand-gray">
                  {promise.title}
                </h3>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto p-10 bg-gradient-to-br from-vitality-teal to-bio-tech-blue rounded-3xl shadow-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            No Junk. No Compromise. Only Results.
          </h3>
          <p className="text-xl opacity-90">
            We're committed to your health transformation with complete transparency and integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
