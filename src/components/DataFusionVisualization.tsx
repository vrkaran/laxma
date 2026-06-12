import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

export default function DataFusionVisualization() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-green-50 overflow-hidden">
      <GradientOrb size="large" color="blue" position={{ top: '10%', right: '-8%' }} opacity={0.1} />
      <GradientOrb size="large" color="amber" position={{ bottom: '10%', left: '-10%' }} opacity={0.1} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The Data Fusion Moment
            <br />
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Where AI Becomes Intelligent
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Two independent data streams converge into one complete health picture.
            This is where AyurGenX solves the "blind expert" problem.
          </p>
        </div>

        <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated fusion dots overlay */}
          <div className="pointer-events-none absolute inset-0">
            {/* Left-to-center dots */}
            <span className="fusion-dot left-6 top-1/3 animate-path-a" style={{ animationDelay: '0s' }}></span>
            <span className="fusion-dot left-10 top-1/2 animate-path-a" style={{ animationDelay: '0.4s' }}></span>
            <span className="fusion-dot left-16 top-2/3 animate-path-a" style={{ animationDelay: '0.8s' }}></span>

            {/* Right-to-center dots */}
            <span className="fusion-dot right-6 top-1/3 animate-path-b" style={{ animationDelay: '0.2s' }}></span>
            <span className="fusion-dot right-10 top-1/2 animate-path-b" style={{ animationDelay: '0.6s' }}></span>
            <span className="fusion-dot right-16 top-2/3 animate-path-b" style={{ animationDelay: '1s' }}></span>

            {/* Orbit around center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="fusion-dot fusion-center animate-orbit" style={{ animationDelay: '0.2s' }}></span>
              <span className="fusion-dot fusion-center animate-orbit" style={{ animationDelay: '0.7s', width: '8px', height: '8px' }}></span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl border-2 border-blue-200/50 backdrop-blur-xl hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Stream 1: Computer Vision
                  </h3>
                  <p className="text-gray-600 font-light mb-4">
                    Daily health selfies providing instant clinical-grade diagnostics
                  </p>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Tongue coating analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Face & eye scanning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Pulse detection via light
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Metabolic fire assessment
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm font-bold text-blue-600">Every 60 Seconds</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="hidden md:flex items-center justify-center h-48">
                <div className="relative w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                  <div className="absolute inset-1 rounded-full bg-white"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      ⚡
                    </div>
                    <p className="text-xs font-bold text-gray-600 mt-1">FUSED</p>
                  </div>
                </div>
              </div>

              <div className="md:hidden text-center py-6">
                <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text">
                  ⚡ FUSED ⚡
                </p>
              </div>
            </div>

            <div className="group">
              <div className="relative p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border-2 border-green-200/50 backdrop-blur-xl hover:border-green-300 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl blur-xl"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-6 shadow-xl">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Stream 2: Real-Time Monitoring
                  </h3>
                  <p className="text-gray-600 font-light mb-4">
                    24/7 wearable integration tracking autonomic nervous system
                  </p>

                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      Heart Rate Variability (HRV)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      Sleep quality & cycles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      Activity & energy burn
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
                      Stress & recovery levels
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-4">
                <span className="text-sm font-bold text-green-600">Continuous</span>
              </div>
            </div>
          </div>

          <div className="relative p-12 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 rounded-3xl border-2 border-cyan-200/50 backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text">
                  Digital<br />Phenotype
                </div>
                <p className="text-gray-600 text-sm font-light">Your complete health profile</p>
              </div>

              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="text-5xl mb-2">→</div>
                <p className="text-gray-600 text-sm font-light">Unified Analysis</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  Personalized<br />AI Coach
                </div>
                <p className="text-gray-600 text-sm font-light">Doctor-approved guidance</p>
              </div>
            </div>

        <div className="mt-8 pt-8 border-t border-cyan-200/50">
          <p className="text-center text-gray-700 font-semibold">
            This fusion is what transforms AyurGenX from a "blind app" into a true <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">intelligent health system</span>.
          </p>
        </div>
      </div>
      
      {/* Orbit navigation removed per request */}
    </div>
  </div>
</section>
  );
}
