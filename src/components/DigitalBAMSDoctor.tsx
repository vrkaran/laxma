import { Camera, Eye, Heart, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

const diagnostics = [
  {
    icon: Camera,
    title: 'Tongue Analysis (Jihva Pariksha)',
    description: 'Detects toxins, digestive health, and Ama buildup through Computer Vision',
    metrics: ['Coating Color', 'Toxin Level', 'Digestion Status'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Eye,
    title: 'Face & Eyes Analysis (Akriti Pariksha)',
    description: 'Scans skin health, hydration levels, and overall energy indicators',
    metrics: ['Skin Hydration', 'Energy Level', 'Stress Markers'],
    color: 'from-rose-500 to-pink-600',
  },
  
  {
    icon: Zap,
    title: 'Metabolic Fire Assessment (Agni)',
    description: 'AI predicts digestive capacity and metabolic efficiency in real-time',
    metrics: ['Agni Level', 'Digestion Speed', 'Energy Conversion'],
    color: 'from-yellow-500 to-amber-600',
  },
];

export default function DigitalBAMSDoctor() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-blue-50 to-slate-50 overflow-hidden">
      <GradientOrb size="large" color="blue" position={{ top: '-5%', right: '-8%' }} opacity={0.08} />
      <GradientOrb size="large" color="amber" position={{ bottom: '5%', left: '-10%' }} opacity={0.08} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 rounded-full mb-6 shadow-lg">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Deep-Tech Computer Vision R&D</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Digital BAMS Doctor
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Your 60-Second Daily Clinical Scan
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Non-invasive AI-powered Ayurvedic & Naturopathic diagnostics using Computer Vision.
            What takes a doctor 3 months to diagnose, AyurGenX analyzes every 60 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {diagnostics.map((diagnostic, index) => {
            const Icon = diagnostic.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-4 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${diagnostic.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 shadow-xl`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {diagnostic.title}
                </h3>

                <p className="text-gray-600 font-light mb-6 leading-relaxed">
                  {diagnostic.description}
                </p>

                <div className="space-y-2 pt-6 border-t border-gray-200">
                  {diagnostic.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${diagnostic.color}`}></div>
                      <span className="text-sm text-gray-600 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${diagnostic.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        <div className={`relative p-12 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 rounded-3xl border-2 border-blue-200/30 backdrop-blur-sm transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-xl">
              <Camera className="w-8 h-8 text-white animate-pulse" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The "Perfected" Value
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Every 60 seconds, your daily health selfie provides the same clinical-grade diagnostic data
                that traditional doctors would gather once every three months. This "digital phenotype" becomes the
                foundation for your personalized, adaptive wellness plan—combining ancient Ayurvedic wisdom with real-time AI analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
