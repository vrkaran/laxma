import { Star, TrendingUp, Heart, Moon, Sparkles, Scale } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import GradientOrb from './GradientOrb';

const stories = [
  {
    icon: TrendingUp,
    metric: 'Energy',
    improvement: '↑ 85%',
    testimonial: 'I wake up refreshed and energized every day now',
    name: 'Priya S.',
    color: 'from-orange-500 to-amber-600',
  },
  {
    icon: Heart,
    metric: 'Digestion',
    improvement: 'Improved',
    testimonial: 'No more bloating or discomfort after meals',
    name: 'Rahul M.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Scale,
    metric: 'Weight',
    improvement: 'Balanced',
    testimonial: 'Lost 12kg naturally without crash diets',
    name: 'Anjali K.',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Moon,
    metric: 'Sleep',
    improvement: 'Fixed',
    testimonial: 'Falling asleep in 10 minutes, sleeping 7+ hours',
    name: 'Vikram P.',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Sparkles,
    metric: 'Skin/Hair',
    improvement: 'Improved',
    testimonial: 'My skin glows and hair fall reduced by 70%',
    name: 'Meera R.',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: TrendingUp,
    metric: 'Overall',
    improvement: 'Transformed',
    testimonial: 'Sugar levels normalized, BP stable for 6 months',
    name: 'Suresh D.',
    color: 'from-teal-500 to-cyan-600',
  },
];

export default function TransformationsV2() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <GradientOrb size="large" color="green" position={{ top: '-8%', right: '-10%' }} opacity={0.1} />
      <GradientOrb size="medium" color="rose" position={{ bottom: '5%', left: '-5%' }} opacity={0.1} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-full mb-6 shadow-lg animate-pulse">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-800 font-bold">4.9/5 from 10,000+ Happy Users</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Results. Real People. <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Real Change.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-500">{story.metric}</div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                        {story.improvement}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic font-light">"{story.testimonial}"</p>
                  </div>

                  <div className="text-sm font-semibold text-gray-600 pt-4 border-t border-gray-200">
                    — {story.name}
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${story.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
