import { Heart } from 'lucide-react';

export default function HBXMinimalSolution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Minimal Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-4 shadow-lg">
          <Heart className="w-6 h-6 text-white" />
        </div>

        {/* Single, Combined Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Relax. Your Personalized AyurGenX Solution is Here.
        </h2>

        {/* Single, Concise Solution Paragraph */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          AyurGenX replaces multiple health experts (doctor, dietitian, trainer) with one AI-powered coach. 
          Get personalized routines based on ancient Ayurveda and real-time data, all for less than the cost of a single offline doctor visit.
        </p>
        
        {/* Call to Action/Key Benefit */}
        <p className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          AyurGenX keeps you healthy effortlessly — every single day.
        </p>

      </div>
    </section>
  );
}
