import { Star, TrendingUp, Heart, Moon, Sparkles, Scale } from 'lucide-react';

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
    color: 'from-indigo-500 to-purple-600',
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
    metric: 'Overall Health',
    improvement: 'Transformed',
    testimonial: 'Sugar levels normalized, BP stable for 6 months',
    name: 'Suresh D.',
    color: 'from-teal-500 to-cyan-600',
  },
];

export default function Transformations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full mb-6">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-800 font-bold">4.9/5 from early users</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transformation & Social Proof
          </h2>
          <p className="text-xl text-gray-600">
            Real Results. Real People. Real Change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500">{story.metric}</div>
                    <div className={`text-xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                      {story.improvement}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{story.testimonial}"</p>
                </div>

                <div className="text-sm font-semibold text-gray-600">
                  — {story.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
