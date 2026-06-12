import { Camera, Play, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

export default function InteractiveDiagnosticScanner() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanResults, setScanResults] = useState<null | {
    ama: number;
    stress: number;
    agni: number;
    hydration: number;
  }>(null);

  const startScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setScanResults(null);

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          setScanResults({
            ama: Math.random() * 40 + 20,
            stress: Math.random() * 35 + 15,
            agni: Math.random() * 40 + 60,
            hydration: Math.random() * 30 + 70,
          });
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);
  };

  const resetScan = () => {
    setIsScanning(false);
    setScanProgress(0);
    setScanResults(null);
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-clinical-white via-light-gray to-clinical-white overflow-hidden">
      <GradientOrb size="large" color="green" position={{ top: '-5%', left: '-8%' }} opacity={0.1} />
      <GradientOrb size="large" color="blue" position={{ bottom: '5%', right: '-10%' }} opacity={0.1} />

      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-4">
            Try Your Health Scan
          </h2>
          <p className="text-xl text-brand-gray font-light">
            Experience how AyurGenX's AI analyzes your health in just 60 seconds
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-blue-900/10 to-cyan-900/10 border-2 border-blue-200/30 backdrop-blur-xl">
              <div className="aspect-video relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900">
                <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(59,_130,_246,_0.3),_transparent_70%)]"></div>

                {!isScanning && !scanResults && (
                  <div className="relative z-10 text-center">
                    <Camera className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-white font-semibold mb-6">Position your face clearly</p>
                    <button
                      onClick={startScan}
                      className="group relative px-8 py-4 bg-vitality-teal text-white rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      <Play className="w-5 h-5" />
                      Start Scan
                    </button>
                  </div>
                )}

                {isScanning && (
                  <div className="relative z-10 text-center">
                    <div className="mb-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-bio-tech-blue border-t-vitality-teal animate-spin"></div>
                      <p className="text-white font-semibold text-lg">Analyzing your health...</p>
                      <p className="text-blue-300 text-sm mt-2">{Math.min(scanProgress, 99).toFixed(0)}%</p>
                    </div>

                    <div className="space-y-3 text-left max-w-sm mx-auto text-blue-100 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span>Analyzing tongue coating...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <span>Scanning face and eyes...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                        <span>Detecting pulse patterns...</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.9s' }}></div>
                        <span>Calculating Agni level...</span>
                      </div>
                    </div>
                  </div>
                )}

                {scanResults && (
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mb-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-xl">
                          <span className="text-white text-2xl font-bold">✓</span>
                        </div>
                        <p className="text-white font-bold text-xl">Scan Complete!</p>
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                        <p className="text-blue-300 text-sm font-semibold mb-4">Your Health Metrics</p>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm">Ama Level</span>
                            <span className="font-bold">{scanResults.ama.toFixed(0)}%</span>
                          </div>
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm">Stress Index</span>
                            <span className="font-bold">{scanResults.stress.toFixed(0)}%</span>
                          </div>
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm">Agni (Metabolic Fire)</span>
                            <span className="font-bold">{scanResults.agni.toFixed(0)}%</span>
                          </div>
                          <div className="flex justify-between items-center text-white">
                            <span className="text-sm">Hydration Level</span>
                            <span className="font-bold">{scanResults.hydration.toFixed(0)}%</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={resetScan}
                        className="mt-6 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Try Again
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-3xl font-bold text-brand-gray mb-6">
              What Happens During Your Scan
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gray mb-2">Tongue Analysis</h4>
                  <p className="text-brand-gray font-light">
                    AI detects coating color, texture, and composition to assess toxin levels and digestive health.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gray mb-2">Face & Eye Scan</h4>
                  <p className="text-brand-gray font-light">
                    Evaluates skin hydration, elasticity, energy levels, and stress markers visible in your eyes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gray mb-2">Pulse Detection</h4>
                  <p className="text-brand-gray font-light">
                    Uses camera light sensors to capture pulse rate, rhythm, and autonomic nervous system status.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-brand-gray mb-2">Agni Assessment</h4>
                  <p className="text-brand-gray font-light">
                    Predicts your metabolic fire capacity and digestive efficiency for personalized meal timing.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-clinical-white rounded-2xl border-2 border-vitality-teal/20">
              <p className="text-brand-gray font-semibold mb-2">
                60 Seconds. Comprehensive Health Data.
              </p>
              <p className="text-brand-gray text-sm leading-relaxed">
                What would take a traditional Ayurvedic doctor 30 minutes to diagnose,
                AyurGenX analyzes in one minute. Every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
