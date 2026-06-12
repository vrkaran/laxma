import { Leaf, Brain, GraduationCap } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Ayurveda & Naturopathy Principles',
    description: '5000+ years of ancient wisdom',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Brain,
    title: 'AI & Data Science Algorithms',
    description: 'Cutting-edge machine learning',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: GraduationCap,
    title: 'Medical + Nutrition Expert-Backed',
    description: 'Validated by healthcare professionals',
    color: 'from-orange-500 to-amber-600',
  },
];

export default function ScienceBacked() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Backed by Science &<br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Ancient Wisdom
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Where Ayurveda Meets AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border-2 border-blue-100">
            <p className="text-lg text-gray-700 mb-4">
              <span className="font-bold text-blue-600">Trusted by healthcare professionals</span> and validated by experts
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-white rounded-full shadow">Certified Ayurvedic Doctors</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">Clinical Nutritionists</span>
              <span className="px-4 py-2 bg-white rounded-full shadow">AI Research Scientists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
