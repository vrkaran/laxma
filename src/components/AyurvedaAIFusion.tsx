import { useScrollReveal } from '../hooks/useScrollReveal';
import { Sparkles } from 'lucide-react';
import GradientOrb from './GradientOrb';

export default function AyurvedaAIFusion() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="relative py-24 bg-light-gray overflow-hidden">
      <GradientOrb size="large" color="green" position={{ top: '-5%', left: '-10%' }} opacity={0.12} />
      <GradientOrb size="large" color="blue" position={{ bottom: '10%', right: '-8%' }} opacity={0.12} />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-gray mb-6 leading-tight">
              <span className="bg-gradient-to-r from-healing-leaf to-healing-leaf bg-clip-text text-transparent">
                Ancient Wisdom
              </span>
              <br />
              Meets
              <br />
              <span className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
                Modern Science
              </span>
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-healing-leaf flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-gray mb-2">
                    Ayurveda's Holistic Approach
                  </h3>
                  <p className="text-brand-gray font-light leading-relaxed">
                    Balances your Vata, Pitta, and Kapha doshas. Understands your unique body constitution and addresses root causes, not symptoms.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-bio-tech-blue flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-gray mb-2">
                    AI's Precision & Speed
                  </h3>
                  <p className="text-brand-gray font-light leading-relaxed">
                    Processes thousands of health parameters instantly. Adapts your plan daily based on real-time data from wearables and behavior patterns.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-ayur-gold flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-gray mb-2">
                    The Result: Perfect Personalization
                  </h3>
                  <p className="text-brand-gray font-light leading-relaxed">
                    You get timeless wisdom with modern intelligence. A health coach who understands both your body type AND your lifestyle data.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-96 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-healing-leaf/10 via-bio-tech-blue/10 to-vitality-teal/10 shadow-2xl"></div>

            <div className="absolute inset-6 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-white shadow-inner flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full bg-healing-leaf/50 opacity-20 blur-2xl animate-pulse"></div>
                <div className="absolute w-32 h-32 rounded-full bg-bio-tech-blue/50 opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                <div className="relative z-10 text-center">
                  <div className="text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-healing-leaf to-healing-leaf bg-clip-text text-transparent">
                      5000+
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700 mb-8">
                    Years of Wisdom
                  </div>

                  <div className="text-5xl font-bold text-gray-300 mx-4">+</div>

                  <div className="text-6xl font-bold mt-8 mb-4">
                    <span className="bg-gradient-to-r from-vitality-teal to-bio-tech-blue bg-clip-text text-transparent">
                      AI
                    </span>
                  </div>
                  <div className="text-xl font-semibold text-gray-700">
                    Today's Intelligence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
