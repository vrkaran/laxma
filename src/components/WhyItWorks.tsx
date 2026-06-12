import { X, Check } from 'lucide-react';

const comparisons = [
  {
    wrong: 'Diets are temporary',
  right: 'AyurGenX builds lifelong healthy habits',
  },
  {
    wrong: "Generic plans don't fit everyone",
  right: 'AyurGenX is personalized to your body',
  },
  {
    wrong: 'Supplements treat symptoms',
  right: 'AyurGenX fixes root causes',
  },
  {
    wrong: "Gym alone can't solve health",
  right: 'AyurGenX covers food + sleep + habits + stress',
  },
];

export default function WhyItWorks() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Other Methods Fail —<br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        But AyurGenX Works
            </span>
          </h2>
        </div>

        <div className="space-y-6">
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-red-50 rounded-2xl border-2 border-red-100 flex items-center gap-4 group hover:border-red-200 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-700 font-medium">{comparison.wrong}</p>
              </div>

              <div className="p-6 bg-green-50 rounded-2xl border-2 border-green-200 flex items-center gap-4 group hover:border-green-300 hover:shadow-lg transition-all">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-900 font-bold">{comparison.right}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
