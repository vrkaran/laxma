import { ArrowRight, RefreshCw } from 'lucide-react';

const loopSteps = [
  'Guidance',
  'Action',
  'Results',
  'Re-Analysis',
  'Better Guidance',
];

export default function ClosedLoop() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Closed-Loop System
          </h2>
          <p className="text-2xl text-gray-600 font-medium">
            Guidance → Action → Results → Re-Analysis → Better Guidance
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {loopSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="group relative">
                  <div className="px-8 py-4 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    {step}
                  </div>
                </div>
                {index < loopSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-blue-600 hidden sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
            <RefreshCw className="w-64 h-64 text-blue-600 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl border-2 border-blue-100">
          <p className="text-xl text-gray-700 leading-relaxed text-center">
          Unlike other apps that only give advice, AyurGenX provides <span className="font-bold text-blue-600">guidance + the right tools to act</span>.
            This loop makes your transformation <span className="font-bold text-blue-600">consistent and permanent</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
