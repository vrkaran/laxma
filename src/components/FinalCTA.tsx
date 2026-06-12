import { Download, Sparkles, Shield, Clock, Award } from 'lucide-react';

const trustBadges = [
  { icon: Shield, text: 'Secure & Private' },
  { icon: Clock, text: '24/7 AI Support' },
  { icon: Award, text: 'Expert-Backed' },
];

export default function FinalCTA() {
  return (
    <section className="py-24 bg-clinical-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden p-12 md:p-16 bg-gradient-to-br from-vitality-teal via-bio-tech-blue to-vitality-teal rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>

          <div className="relative z-10 text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Join 10,000+ Happy Users</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your<br />
              Health Transformation?
            </h2>

            <p className="text-xl md:text-2xl mb-10 opacity-90">
              Your body will thank you — within the first 7 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group px-8 py-4 bg-vitality-teal text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" />
          Subscribe Now
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-vitality-teal transition-all duration-300">
                Take 2-Min Health Check
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {trustBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2 px-4 py-2 bg-ayur-gold/15 backdrop-blur-sm rounded-full">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}
