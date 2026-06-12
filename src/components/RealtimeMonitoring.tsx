import { Activity, Zap, Moon, TrendingUp, Wifi } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

const metrics = [
  {
    icon: Activity,
    title: 'Heart Rate Variability (HRV)',
    description: '#1 indicator of stress, recovery, and Agni (metabolic fire)',
    value: '42 ms',
    status: 'Optimal Recovery',
    color: 'from-rose-500 to-red-600',
    trend: 'up',
  },
  {
    icon: Moon,
    title: 'Sleep Quality Analysis',
    description: 'Deep sleep, REM, and recovery phases tracked in real-time',
    value: '7h 32m',
    status: 'Excellent Sleep Cycle',
    color: 'from-indigo-500 to-blue-600',
    trend: 'up',
  },
  {
    icon: Zap,
    title: 'Energy Expenditure',
    description: 'Active calories, metabolic rate, and activity patterns',
    value: '542 cal',
    status: 'Within Target Range',
    color: 'from-yellow-500 to-amber-600',
    trend: 'stable',
  },
  {
    icon: TrendingUp,
    title: 'Autonomous Nervous System',
    description: 'Sympathetic vs Parasympathetic balance for stress detection',
    value: '72:28',
    status: 'Balanced State',
    color: 'from-green-500 to-emerald-600',
    trend: 'stable',
  },
];

export default function RealtimeMonitoring() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-50 via-green-50 to-white overflow-hidden">
      <GradientOrb size="large" color="green" position={{ top: '10%', left: '-8%' }} opacity={0.08} />
      <GradientOrb size="large" color="blue" position={{ bottom: '10%', right: '-10%' }} opacity={0.08} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-200 rounded-full mb-6 shadow-lg animate-pulse">
            <Wifi className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800">24/7 Real-Time Data Fusion</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Body's 24/7 Feedback Loop
            <br />
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Predictive, Not Reactive
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Seamless integration with Oura, Fitbit, Garmin, and all major smartwatches.
              AyurGenX doesn't just count steps—it understands your autonomic nervous system in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 bg-gradient-to-br from-white/80 via-slate-50/80 to-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/50 transition-all duration-500 hover:-translate-y-3 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                    metric.trend === 'up' ? 'bg-green-100' : 'bg-blue-100'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === 'up' ? 'text-green-600' : 'text-blue-600'}`} />
                    <span className={`text-xs font-bold ${metric.trend === 'up' ? 'text-green-700' : 'text-blue-700'}`}>
                      {metric.trend === 'up' ? 'Improving' : 'Stable'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {metric.title}
                </h3>

                <p className="text-gray-600 font-light text-sm mb-6">
                  {metric.description}
                </p>

                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-baseline gap-3 mb-2">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                      {metric.value}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{metric.status}</p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${metric.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>

        <div className={`relative p-12 bg-gradient-to-br from-green-900/5 to-emerald-900/5 rounded-3xl border-2 border-green-200/30 backdrop-blur-sm transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-xl animate-pulse">
              <Wifi className="w-8 h-8 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                The "Perfected" 24/7 Feedback Loop
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
              This is where AyurGenX becomes truly adaptive. Unlike generic fitness apps that react to your data,
              AyurGenX is <span className="font-bold">predictive</span>. When our AI sees you slept only 4 hours,
                it doesn't wait for you to feel tired—it proactively adapts your meal plan before you wake up.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your body's autonomous nervous system, stress levels, and metabolic efficiency are continuously
                analyzed. The result: a daily wellness routine that evolves with you, not against you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
