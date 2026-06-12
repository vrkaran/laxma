import { Brain, Database, Zap, GitBranch } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

const stages = [
  {
    number: '01',
    title: 'SENSE',
    description: 'Computer Vision + Wearable Data Fusion',
    details: 'CV Scan + Real-time metrics create your complete digital phenotype',
    color: 'from-blue-500 to-cyan-600',
    icon: Database,
  },
  {
    number: '02',
    title: 'ANALYZE',
    description: 'AI + Ayurvedic Knowledge Base Synthesis',
    details: 'Identifies your body type, imbalances, and root causes (not symptoms)',
    color: 'from-green-500 to-emerald-600',
    icon: Brain,
  },
  {
    number: '03',
    title: 'SYNTHESIZE',
    description: 'Generate Personalized Health Blueprint',
    details: 'Doctor-approved, organ-healing meal plans adapted daily',
    color: 'from-amber-500 to-orange-600',
    icon: Zap,
  },
  {
    number: '04',
    title: 'ADAPT',
    description: 'Real-Time Plan Adjustment Loop',
    details: 'Your routine evolves every day based on new data and changes',
    color: 'from-rose-500 to-pink-600',
    icon: GitBranch,
  },
];

export default function HybridIntelligenceEngine() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="hybrid-intelligence" className="relative py-32 bg-gradient-to-b from-white via-blue-50 to-slate-50 overflow-hidden scroll-mt-24">
      <GradientOrb size="large" color="blue" position={{ top: '5%', right: '-8%' }} opacity={0.1} />
      <GradientOrb size="large" color="amber" position={{ bottom: '10%', left: '-10%' }} opacity={0.1} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 rounded-full mb-6 shadow-lg">
            <Brain className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-800">Hybrid Intelligence Engine</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How AyurGenX's AI "Brain" Works
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              The "Perfected" Data Synthesis
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Four stages of intelligence: Sense → Analyze → Synthesize → Adapt.
            This is the "perfected" R&D that solves the "blind, non-scalable" market failure.
          </p>
        </div>

        <div className="relative mb-20">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex flex-col h-full">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-6 shadow-2xl mx-auto group hover:scale-110 hover:rotate-12 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <div className="text-center mb-4">
                      <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${stage.color} bg-clip-text text-transparent font-bold text-lg mb-2`}>
                        Stage {stage.number}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {stage.title}
                      </h3>
                    </div>

                    <div className="flex-1 p-6 bg-gradient-to-br from-white/70 to-slate-50/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        {stage.description}
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {stage.details}
                      </p>

                      <div className={`mt-4 pt-4 border-t border-gray-200 text-xs font-bold bg-gradient-to-r ${stage.color} bg-clip-text text-transparent`}>
                        → Next Stage
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              The "Perfected" Output:
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Your Digital Health Twin
              </span>
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Complete Digital Phenotype</h4>
                  <p className="text-gray-600 font-light">Your unique health profile combining Ayurvedic doshas, current imbalances, and real-time biometrics.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Personalized Meal Plans</h4>
                  <p className="text-gray-600 font-light">Doctor-approved, organ-healing routines that adapt daily based on your latest scan and wearable data.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Predictive Adjustments</h4>
                  <p className="text-gray-600 font-light">AI anticipates your needs. Stressed last night? Your plan changes before you wake up.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-96 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-100 via-blue-50 to-cyan-100 shadow-2xl"></div>

            <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-white/60 via-slate-50/60 to-white/60 backdrop-blur-xl shadow-inner flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s', top: '60%', left: '60%' }}></div>

                <div className="relative z-10 text-center">
                  <div className="text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      100%
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-3">Personalized</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Every aspect tailored to your unique body constitution and current state
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative p-12 bg-gradient-to-br from-purple-900/5 to-blue-900/5 rounded-3xl border-2 border-purple-200/30 backdrop-blur-sm">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-xl">
              <Brain className="w-8 h-8 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Why This Solves the "Blind, Non-Scalable" Problem
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Traditional health platforms are "blind"—they don't actually know what's happening inside your body.
                AyurGenX gives the AI "eyes" through Computer Vision and real-time monitoring.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The result: an expert-level health coach that's available 24/7, learns from every scan,
                and adapts instantly to your changing needs. This is true health personalization at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
