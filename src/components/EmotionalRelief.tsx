
import { Heart } from 'lucide-react';

export default function EmotionalRelief() {
  return (
    <section className="py-24 bg-clinical-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-vitality-teal mb-6 shadow-lg">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6">Relax. AyurGenX Is Here to Change That.</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-brand-gray leading-relaxed mb-8">
            No more High doctor fees, no confusing diets, no expensive health programs —for less than the cost of one offline doctor visit.
          </p>
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
            AyurGenX keeps you healthy effortlessly — every single day.
          </p>
        </div>
        <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="aspect-video bg-clinical-white flex items-center justify-center border border-light-gray">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white shadow-lg flex items-center justify-center">
                <Heart className="w-10 h-10 text-vitality-teal" />
              </div>
              <p className="text-brand-gray font-medium">Happy professionals enjoying AyurGenX wellness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- WhatIsHBXV2 Component (Section 2) ---
function WhatIsHBXV2() {
  // Using the placeholder hook
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-24 bg-gradient-to-b from-clinical-white via-light-gray to-clinical-white overflow-hidden">
      {/* Using the placeholder component */}
      <GradientOrb size="large" color="blue" position={{ top: '10%', right: '-10%' }} opacity={0.1} />
      <GradientOrb size="medium" color="green" position={{ bottom: '20%', left: '-5%' }} opacity={0.1} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6 leading-tight">
            Your Personal Daily Health Coach —
            <br />
            <span className="bg-gradient-to-r from-vitality-teal via-bio-tech-blue to-vitality-teal bg-clip-text text-transparent">
              Ayurveda Meets AI
            </span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-brand-gray leading-relaxed font-light">
              AyurGenX replaces multiple health experts — doctor, dietitian, trainer, mentor — with one AI-powered coach.
              It guides you with personalized routines based on your unique body data and ancient Ayurvedic principles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 bg-clinical-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-light-gray ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-brand-gray mb-2">
                  {pillar.label}
                </h3>
                <p className="text-brand-gray font-light">
                  {pillar.description}
                </p>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Combined Main Component (The "Direct Solution") ---
export default function HBXSolution() {
  return (
    <>
      <EmotionalRelief />
      <WhatIsHBXV2 />
    </>
  );
}
